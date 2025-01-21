import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.details}>
        <div>
          <span className={styles.icon}>
            <FaUser />
          </span>
          <span className={styles.name}>{name}</span>
        </div>
        <div>
          <span className={styles.icon}>
            <FaPhoneAlt />
          </span>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
      <button
        className={styles.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
