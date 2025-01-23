import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { selectIsLoading } from '../../redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  if (isLoading) {
    return <p>Loading... Please wait a little</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id || Math.random()}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </ul>
  );
};

export default ContactList;
