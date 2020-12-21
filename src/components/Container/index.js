// Import React and the stylesheet
import React, { useState, useEffect } from 'react';
import './style.css';

// Import Components
import Table from '../Table';
import TableHeader from '../TableHeader'
import TableBody from '../TableBody'
import TableRow from '../TableRow'
import FilterRow from '../FilterRow';
import SortBtn from '../SortBtn';
import Searchbar from '../Searchbar';
import Amount from '../Amount';
import API from '../../utils/API';
import useDebounce from '../../utils/Debounce'

function Container() {
    
    const [users, setUsers] = useState([]);
    const [amount, setAmount] = useState(15)
    const [searchedUser, setSearchedUser] = useState('');
    const [buttonText, setButtonText] = useState('Sort by Name');

    //seperate function that loads users from api and saves it to state as an array
    function loadUsers() {
        API.getUsers(amount)
            .then(res => {
                setUsers(res.data.results);
            }).catch(err => console.log(err));
    };
    //holds the custom hook that uses the typed input and set delay amount that filters through current state array
    const debouncedInput = useDebounce(searchedUser, 100);

    //The if conditional only occurs when the there is a debouncedInput, the else conditional still happens, loading the users from the api
    useEffect(() => {
      if (debouncedInput) {
        filterAPI();
      } else {
          loadUsers();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedInput]);

    useEffect(() => {
      loadUsers(amount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount]);

    //filter out object from api array that matches the searchedUser(typed input in search)
    //filter from api so the user doesn't need to backspace all the way (and let state reload with all users) before changing input
    function filterAPI() {
      API.getUsers(amount)
        .then(res => {
          const response = res.data.results;
          // eslint-disable-next-line array-callback-return
          const employee = response.filter(name => {
          const first = name.name.first.toLocaleLowerCase();
          const last = name.name.last.toLocaleLowerCase();
          const lowerCaseSearchedUser = searchedUser.toLocaleLowerCase();
          const full = `${first} ${last}`;
          const fullOriginal = `${name.name.first} ${name.name.last}`
            //'includes' method compares any piece of name to string (from object) so that if user only knows a part of the employee's name the api will still be called
            //compares input to object whether the user types in all lower case or capitalizes the first letter
            if (full.includes(lowerCaseSearchedUser)) {
              return true;
            } else if (fullOriginal.includes(searchedUser)) {
              return true;
              }
            });
            setUsers(employee);
        });
    }
    //grabs value in input and saves it to state
    const handleInputChange = event => {
        const value = event.target.value;
        setSearchedUser(value);
    };

    //grabs value in input and saves it to state
    const handleAmountChange = event => {
      const value = event.target.value;
      setAmount(value);
      setUsers([]);
      // loadUsers(amount);
    };

    //when button is clicked, sort state array alphabetically and text of button changes
    //to unalphabetize state array, click 'reset' and it sets button text back to alphabetize
    const changeButtonText = event => {
      event.preventDefault();

      if (buttonText === 'Sort by Name') {
        setButtonText('Undo');
        const sortUsers = users.sort((a, b) => a.name.last.localeCompare(b.name.last));
        setUsers(sortUsers);
      } else if (buttonText === 'Undo') {
          setButtonText('Sort by Name');
          loadUsers();
        }
    }

    //a function that splits the dob to only get the month day and year and then call it in map
    function renderDob(str) {
        return str.slice(0, 10);
    }
    //returns components
    return (
        <div className='container'>
            
          <FilterRow>
            <Amount
              handleAmountChange={handleAmountChange}
              value={amount}
            />
            <Searchbar
              handleInputChange={handleInputChange}
              value={searchedUser}
            />
            <SortBtn
              changeButtonText={changeButtonText}
              text={buttonText}
            />
            </FilterRow>
            <Table>
                <TableHeader />
                <TableBody>
                    {users.map((user, index) => (
                        <TableRow
                            key={user.name.last + index}
                            picture={user.picture.thumbnail}
                            name={`${user.name.first} ${user.name.last}`}
                            phone={user.phone}
                            email={user.email}
                            dob={renderDob(user.dob.date)}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    );

};

export default Container;