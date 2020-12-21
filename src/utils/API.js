/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

 
export default {
  getUsers: function(amount) {
    return axios.get(`https://randomuser.me/api/?results=${amount}&nat=us`);
  }
}