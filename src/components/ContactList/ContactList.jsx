import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { ContactItem } from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';
import { fetchContacts } from './../../redux/contacts/operations';

export function ContactList() {
  const dispatch = useDispatch();
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contactList?.filter(contact =>
    contact.name.toLowerCase().includes(filter?.toLowerCase())
  );

  return (
    <List>
      {filteredContacts?.map(({ name, number, id }) => (
        <ContactItem key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
}
