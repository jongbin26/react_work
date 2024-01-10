import styled from 'styled-components';
import Button from './Button';
import { useState } from 'react';

const Work1 = () => {
  const [firstButtonClicked, setFirstButtonClicked] = useState(false);
  const [secondButtonClicked, setSecondButtonClicked] = useState(false);

  function handleFirstButtonClick(e) {
    console.log('버튼이 클릭되었습니다.');
    if (!firstButtonClicked) {
      setFirstButtonClicked(true);
      e.currentTarget.disabled = true;
    }
  }
  function handleSecondButtonClick(e) {
    console.log('버튼이 클릭되었습니다.');
    if (!secondButtonClicked) {
      setSecondButtonClicked(true);
      e.currentTarget.disabled = true;
    }
  }

  const firstButtonStyle =
    'background-color: #7BAB6E; color: #ffffff; border:none;';
  const firstButtonClickedStyle =
    'background-color: #BDD5B7; color: #ffffff; border:none;';
  const secondButtonStyle =
    'background-color: #ffffff; color: #7BAB6E; border: 1px solid #7BAB6E;';
  const secondButtonClickedStyle =
    'background-color: #ffffff; color: #BDD5B7; border: 1px solid #BDD5B7;';

  return (
    <div>
      <Button
        text="활성화버튼"
        styled={firstButtonClicked ? firstButtonClickedStyle : firstButtonStyle}
        onClick={handleFirstButtonClick}
      />
      <Button
        text="활성화버튼"
        styled={
          secondButtonClicked ? secondButtonClickedStyle : secondButtonStyle
        }
        onClick={handleSecondButtonClick}
      />
    </div>
  );
};
export default Work1;
