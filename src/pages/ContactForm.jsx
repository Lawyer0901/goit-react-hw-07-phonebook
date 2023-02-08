import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Container } from 'components/Container/Container';
import { Filter } from 'components/Filter/Filter';

export const Form = () => {
  return (
    <>
      <Container>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    </>
  );
};
