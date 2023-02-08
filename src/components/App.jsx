// import React, { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
// import { Container } from './Container/Container';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'pages/Layout';
import { Form } from 'pages/ContactForm';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Form />} />
      </Route>
    </Routes>
  );
};

// const useLocalStorage = (key, defaultVelue) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultVelue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };

// export function App() {
//   const [contacts, setContacts] = useLocalStorage('contacts', []);
//   const [filter, setFilter] = useState('');

//   const addContact = obj => {
//     const newUser = {
//       id: nanoid(),
//       ...obj,
//     };
//     const existUser = contacts.some(el => el.name === newUser.name);
//     if (existUser) {
//       alert(`${newUser.name} is already in contacts`);
//       return null;
//     } else {
//       setContacts(prevState => {
//         return [...prevState, newUser];
//       });
//     }
//   };

//   const handleDeleteContact = id => {
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };

//   const handleInputValue = e => {
//     const { value } = e.target;
//     setFilter(value);
//   };

//   // Функция поиска контакта

//   const handleFindeContact = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   return (
//     <Container>
//       <h1>Phonebook</h1>
//       <ContactForm onSubmit={addContact} />
//       <Filter handleInputValue={handleInputValue} filterValue={filter} />
//       <h2>Contacts</h2>
//       <ContactList
//         contacts={handleFindeContact()}
//         deleteContact={handleDeleteContact}
//       />
//     </Container>
//   );
// }

// export class oldApp extends Component {
//   state = {
//     contacts: [
//       // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log(this.state.contacts);
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   // Добавляем новый контакт в список контактов
//   addContact = obj => {
//     const newUser = {
//       id: nanoid(),
//       ...obj,
//     };
//     const existUser = this.state.contacts.some(el => el.name === newUser.name);
//     if (existUser) {
//       alert(`${newUser.name} is already in contacts`);
//       return null;
//     } else {
//       this.setState(prevSate => ({
//         contacts: [...prevSate.contacts, newUser],
//       }));
//     }
//   };

//   // Удаляет контакт из списка
//   handleDeleteContact = id => {
//     this.setState(prevState => {
//       return {
//         contacts: prevState.contacts.filter(contact => contact.id !== id),
//       };
//     });
//   };
//   // Controlled Input Filter
//   handleInputValue = e => {
//     const { value } = e.target;
//     this.setState({ filter: value });
//   };

//   // Функция поиска контакта

//   handleFindeContact = () => {
//     const { filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   // Рендер всех элементов

//   render() {
//     const visibleContacts = this.handleFindeContact();
//     const { filter } = this.state;
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm addUser={this.addContact} />
//         <Filter handleInputValue={this.handleInputValue} filterValue={filter} />
//         <h2>Contacts</h2>
//         <ContactList
//           contacts={visibleContacts}
//           deleteContact={this.handleDeleteContact}
//         />
//       </Container>
//     );
//   }
// }
