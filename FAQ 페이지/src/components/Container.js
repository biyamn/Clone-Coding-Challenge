import Contents from "./Contents";
import './Container.css';

const Container = (props) => {

  return (
    <div className={props.className}>
      <div className='leftOfBoxInContainer'>
        왼쪽 이미지 - 큰 컴퓨터와 사람
      </div>
      <Contents className='rightOfBoxInContainer'/>
    </div>
  )
}

export default Container;