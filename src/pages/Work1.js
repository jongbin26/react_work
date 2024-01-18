import Button from '../components/Button';
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

  return (
    <div>
      <Button
        onClick={handleFirstButtonClick}
        disabled={firstButtonClicked}
        color={'green'}
      >
        활성화버튼
      </Button>
      <Button
        onClick={handleSecondButtonClick}
        disabled={secondButtonClicked}
        color={'white'}
      >
        활성화버튼
      </Button>
    </div>
  );
};
export default Work1;
