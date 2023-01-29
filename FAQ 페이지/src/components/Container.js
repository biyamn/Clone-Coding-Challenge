import Contents from "./Contents";

const Container = (props) => {

  return (
    <div className={props.className}>
      <div>
        왼쪽 이미지 - 큰 컴퓨터와 사람
      </div>
      <Contents />
    </div>
  )
}

export default Container;