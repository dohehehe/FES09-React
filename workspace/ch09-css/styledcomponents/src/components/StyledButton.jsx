import styled from 'styled-components';
import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.string.isRequired,
}
Submit.propTypes = {
  children: PropTypes.string.isRequired,
}



const ButtonStyle = styled.button`
  background-color: ${props=> props.backgroundColor || '#4CAF50'}; /* Green background */
  border: none; /* Remove borders */
  color:  ${props=> props.color || 'white'}; /* White text */
  padding: 6px 18px; /* Padding */
  text-align: center; /* Center text */
  text-decoration: none; /* Remove underline */
  display: inline-block; /* Display as inline-block */
  font-size:${props => props.size || '16px'}; /* Font size */
  margin: 4px 2px; /* Margin */
  cursor: pointer; /* Cursor pointer */
  border-radius: 6px; /* Border radius */

`;

const ButtonStyleBlue = styled(ButtonStyle)`
  background-color: blue;
`



function Button ({children, ...rest }){
  return <ButtonStyle type="button" {...rest}>{children}</ButtonStyle>
}

function Submit({children, ...rest}){
  return <ButtonStyle type="submit" {...rest}>{children}</ButtonStyle>
}

export {Button, Submit};