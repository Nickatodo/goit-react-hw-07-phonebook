import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../redux/selectors/ContactSelector';
import { selectFilter } from '../redux/selectors/FilterSelector';
import {
  fetchContacts,
  deleteContact,
} from '../redux/operators/ContactOperators';

export default function ListContac() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  let filtradoForView = [];
  if (contacts != null) {
    filtradoForView = contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  function handleDelete(evt) {
    let id = evt.target.id;
    dispatch(deleteContact(id));
  }

  return (
    <>
      <ul>
        {filtradoForView.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" id={contact.id} onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
