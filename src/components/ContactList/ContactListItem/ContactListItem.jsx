// import { Text, SpanText } from '../ContactList.styled';
// import PropTypes from 'prop-types';
import { Tabledata, DeleteButton } from '../ContactList.styled';

export function ContactListItem({ name, phone, onClick }) {
  return (
    <>
      <tbody>
        <tr>
          <Tabledata>{name}</Tabledata>
          <Tabledata>{phone}</Tabledata>
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
