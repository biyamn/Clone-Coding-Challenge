import { useState } from 'react';
import './Content.css';

const Content = (props) => {
  const setToggle = () => {
    setIsOpen(!isOpen);
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='questionAnswerContainer'>
      <div className={isOpen ? 'questionNoLine' : 'questionToggleBtnContainer'}>
        <div>
          {props.question} 
        </div>
        <div>
          <button className='toggleBtn' onClick={setToggle}>
            <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
          </button>  
        </div>
      </div>
      <div className={isOpen ? ' underline' : ''}>
        {isOpen && props.answer}
      </div>
    </div>
  )
}

export default Content;