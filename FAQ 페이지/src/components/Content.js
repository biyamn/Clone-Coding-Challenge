import { useState } from 'react';

const Content = (props) => {

  const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => {setToggleValue(!toggleValue)};
    return [toggleValue, toggler]
  };

  const [toggle, setToggle] = useToggle();

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
        {toggle && props.answer}
      </div>
    </div>
  )
}

export default Content;