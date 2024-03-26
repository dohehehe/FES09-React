import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyle = styled.button`
  background-color: ${ props => props.backgroundColor || '#4CAF50' }; 
  border: none;
  color: ${ props => props.color || 'white' }; 
  padding: 6px 18px; 
  text-align: center; 
  text-decoration: none;
  display: inline-block; 
  font-size: ${ props => props.size || '16px' };
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 6px;
`;

const ButtonStyleBlue = styled(ButtonStyle)`
  background-color: blue;
`;

Button.propTypes = {
  children: PropTypes.string.isRequired,
};
Submit.propTypes = {
  children: PropTypes.string.isRequired,
};

function Button({ children, ...rest }){
  return <ButtonStyle type="button" { ...rest }>{ children }</ButtonStyle>
}

function Submit({ children, ...rest }){
  return <ButtonStyleBlue type="submit" { ...rest }>{ children }</ButtonStyleBlue>
}

export { Button, Submit };