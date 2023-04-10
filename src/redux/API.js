import axios from 'axios';

const url = 'https://64305b28c26d69edc890573d.mockapi.io/contacts';

export const fetchContacts = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    alert(error.message);
  }
};

export const addContact = async newContact => {
  try {
    const { data } = await axios.post(url, newContact);
    return data;
  } catch (error) {
    alert(error.message);
  }
};

export const deleteContact = async contactId => {
  try {
    const { data } = await axios.delete(`${url}/${contactId}`);
    return data;
  } catch (error) {
    alert(error.message);
  }
};
