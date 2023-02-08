import { useState } from 'react';
// import PropTypes from 'prop-types';
import { Form, Label, Input } from './ContactForm.styled';
import { addUser } from 'redux/userNameSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectUsers } from 'redux/usersSelector';
export const ContactForm = () => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectUsers);

  const handleChangeName = e => {
    const { name, value } = e.target;
    if (name === 'userName') {
      setUserName(value);
    } else if (name === 'userNumber') {
      setUserNumber(value);
    }
  };

  const hendleSubmit = e => {
    e.preventDefault();
    const newUser = { id: nanoid(), name: userName, number: userNumber };
    console.log(newUser);

    const existUser = contacts.some(el => el.name === newUser.name);

    if (newUser === null || existUser) {
      alert(`${newUser.name} is already in contacts`);
      return;
    } else {
      dispatch(addUser(newUser));
      setUserName('');
      setUserNumber('');
    }
  };

  return (
    <Form onSubmit={hendleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="userName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeName}
          value={userName}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="userNumber"
          value={userNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeName}
        />
      </Label>
      <button>Add Contact</button>
    </Form>
  );
};

// export class oldContactForm extends Component {
//   static propTypes = {
//     onSubmit: PropTypes.func,
//   };

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChangeName = e => {
//     const { name, value } = e.target;
//     if (value === null) {
//       return;
//     } else {
//       this.setState({ [name]: value });
//     }
//   };

//   hendleSubmit = e => {
//     e.preventDefault();
//     const { addUser } = this.props;
//     addUser({ ...this.state });
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <Form action="" onSubmit={this.hendleSubmit}>
//         <Label htmlFor="">
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleChangeName}
//             value={name}
//           />
//         </Label>
//         <Label htmlFor="">
//           Number
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleChangeName}
//           />
//         </Label>
//         <button>Add Contact</button>
//       </Form>
//     );
//   }
// }
