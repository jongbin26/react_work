import styled from 'styled-components';

const buttonColor = {
  green:
    'background-color: #7BAB6E; color: #ffffff; border: 1px solid #7BAB6E;',
  clickedGreen:
    'background-color: #F3F3F3; color: #A0A0A0; border: 1px solid #F3F3F3;',
  white:
    'background-color: #ffffff; color: #7BAB6E; border: 1px solid #7BAB6E;',
  clickedWhite:
    'background-color: #ffffff; color: #BDD5B7; border: 1px solid #BDD5B7;',
};

const BasicButton = styled.button`
  display: flex;
  padding: 20px 16px;
  width: 15%;
  height: 3%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.64px;
  ${(props) => {
    if (props.color === 'green') {
      return props.disabled ? buttonColor.clickedGreen : buttonColor.green;
    }
    if (props.color === 'white') {
      return props.disabled ? buttonColor.clickedWhite : buttonColor.white;
    }
  }}
`;

const Button = (props) => {
  return (
    <div>
      <BasicButton
        disabled={props.disabled}
        onClick={props.onClick}
        color={props.color}
      >
        {props.children}
      </BasicButton>
    </div>
  );
};

export default Button;
