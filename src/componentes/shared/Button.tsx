import styled from 'styled-components';


const Button = styled.button`
    border: none;
    color: white;
    padding: 8pt 30pt;
    cursor: pointer;
    border-radius: 3px;
    background-color: #0056b3; 
    transition: transform 0.3s ease-in-out;
    &:hover {
        background-color: lightgrey;
        color:black;
    }
    &:active {
        transform: scale(0.90);
    }
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};
`;

export default Button;