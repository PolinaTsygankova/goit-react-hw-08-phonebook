import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import { getError, getIsLoading } from 'redux/selectors';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import {
  MainTitle,
  MainDiv,
  ContactTitle,
  Loader,
} from '../../components/App.styled';

export const Contacts = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  return (
    <MainDiv>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </MainDiv>
  );
};
