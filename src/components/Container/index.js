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

    // Loading users to be rendered
    function loadUsers() {
      API.getUsers(amount)
        .then(res => {
          setUsers(res.data.results);
        }).catch(err => console.log(err));
    };
    // Using debounce to slow down rendering rate when filtering/sorting
    const debouncedInput = useDebounce(searchedUser, 100);

    // If statement in case of a debounced input
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

    // Filter function to search the API for input from the user
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
    
            if (full.includes(lowerCaseSearchedUser)) {
              return true;
            } else if (fullOriginal.includes(searchedUser)) {
              return true;
              }
            });
            setUsers(employee);
        });
    }
    // Setting state from the input
    const handleInputChange = event => {
        const value = event.target.value;
        setSearchedUser(value);
    };

    // Setting state of amount of employees
    const handleAmountChange = event => {
      const value = event.target.value;
      setAmount(value);
      setUsers([]);
    };

    // Sorting button to sort list by last name
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

    // Date of Birth reformatting
    function renderDob(str) {
      return str.slice(0, 10);
    }

    // Returning content and components
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