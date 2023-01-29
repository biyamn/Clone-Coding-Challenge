import { useState } from 'react';

const Content = (props) => {
  const setToggle = () => {
    setIsOpen(!isOpen);
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div>
        <div>
          {props.question} 
        </div>
        <div>
          <button onClick={setToggle}>
            토글 버튼
          </button>  
        </div>
      </div>
      <div>
        {isOpen && props.answer}
      </div>
    </div>
  )
}

export default Content;