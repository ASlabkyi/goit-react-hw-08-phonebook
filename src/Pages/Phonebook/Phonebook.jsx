import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Container } from './Phonebook.styled';

export const Phonebook = () => {
  return (
    <Container>
      <h1>Phone Book</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
