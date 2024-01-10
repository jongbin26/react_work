import styled from 'styled-components';

const BasicButton = styled.button`
  display: flex;
  width: 382px;
  padding: 20px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 16px;
  font-family: Noto Sans KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.64px;
  ${(props) => props.styled}
`;

const Button = (props) => {
  return (
    <div>
      <BasicButton styled={props.styled} onClick={props.onClick}>
        {props.text}
      </BasicButton>
    </div>
  );
};

export default Button;
