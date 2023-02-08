import styled from 'styled-components';

export const Text = styled.p`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${p => p.theme.colors.accent};
`;

export const SpanText = styled.span`
  /* display: block; */
  color: ${p => p.theme.colors.red};
`;

export const Tabledata = styled.td`
  cursor: pointer;
  padding: ${p => p.theme.space[2]}px;
  outline: ${p => p.theme.borders.normal} ${p => p.theme.colors.text};
  transition: color 250ms linear, background-color 250ms linear,
    transform 250ms linear;
  :hover,
  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.backgroundTableHead};
  }
`;

export const Table = styled.table`
  width: 50%;
  text-align: center;
`;

export const Wraper = styled.div`
  display: flex;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  /* CSS */

  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow: rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px, rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px, rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow: rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px, rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px, rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;
