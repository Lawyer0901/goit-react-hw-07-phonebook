// import PropTypes from 'prop-types';
// import { Text } from './ContactList.styled';
import { ContactListItem } from './ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
// import { selectFilter, selectUsers } from 'redux/usersSelector';
import { useDispatch } from 'react-redux';
// import { deleteUser } from 'redux/userNameSlice';
// import { useMemo } from 'react';
import { Table, Wraper, Tabledata } from './ContactList.styled';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/contact.thunk';

// import { Container } from 'components/Container/Container';

export function ContactList() {
  // const contacts = useSelector(state => state.contacts.isLoading);
  const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();
  // const filterNormalize = contacts => contacts.toLowerCase();

  // const contactListToDisplay = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(contacts)
  // );

  //
  //
  // const handleDelete = () => dispatch(deleteContact());

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return contacts.length > 0 ? (
    <Wraper>
      <Table>
        <thead>
          <tr>
            <Tabledata>Contact Name</Tabledata>
            <Tabledata>Contact number</Tabledata>
            <Tabledata>Delete Contact</Tabledata>
          </tr>
        </thead>
        {contacts.map(el => {
          return (
            <ContactListItem
              key={el.id}
              name={el.name}
              phone={el.phone}
              onClick={() => dispatch(deleteContact(el.id))}
            />
          );
        })}
      </Table>
    </Wraper>
  ) : (
    <p>There is no contact</p>
  );
}

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   deleteContact: PropTypes.func,
// };
