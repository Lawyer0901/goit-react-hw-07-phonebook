// import { Text, SpanText } from '../ContactList.styled';
// import PropTypes from 'prop-types';
import { Tabledata, DeleteButton } from '../ContactList.styled';

export function ContactListItem({ name, number, onClick }) {
  return (
    <>
      <thead>
        <tr>
          <Tabledata>Contact Name</Tabledata>
          <Tabledata>Contact number</Tabledata>
          <Tabledata>Delete Contact</Tabledata>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Tabledata>{name}</Tabledata>
          <Tabledata>{number}</Tabledata>
          <Tabledata>
            <DeleteButton onClick={onClick}>Delete contact</DeleteButton>
          </Tabledata>
        </tr>
      </tbody>
    </>

    // <li>
    //   <Text>
    //     Contact Name:<SpanText>{name}</SpanText>
    //     <span>
    //       Contact number: <SpanText>{number}</SpanText>
    //     </span>
    //     <button onClick={onClick}>Delete contact</button>
    //   </Text>
    // </li>
  );
}

// ContactListItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   deleteContact: PropTypes.func,
// };
