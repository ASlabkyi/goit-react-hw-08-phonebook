import axios from 'axios';

// const axiosUrl = axios.create({
//   baseURL: 'https://connections-api.herokuapp.com',
// });

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    alert(error.message);
  }
};

export const addContact = async newContact => {
  try {
    const { data } = await axios.post('/contacts', newContact);
    return data;
  } catch (error) {
    alert(error.message);
  }
};

export const deleteContact = async contactId => {
  try {
    const { data } = await axios.delete(`/contacts/${contactId}`);
    return data;
  } catch (error) {
    alert(error.message);
  }
};

export const initNewuser = async user => {
  try {
  } catch (error) {
    alert(error.message);
  }
};
