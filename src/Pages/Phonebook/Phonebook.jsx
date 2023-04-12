import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';

export const Phonebook = () => {
  return (
    <div>
      <h1 className="bg-light text-center mb-0 pt-5">Phone Book</h1>
      <ContactForm />
      <h2 className="bg-light text-center mb-0 pt-5">Contacts:</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
