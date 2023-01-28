const Content = (props) => {

  return (
    <div>
      <div>
        <div>
          {props.question} 
        </div>
        <div>
          <button>토글 버튼</button>  
        </div>
      </div>
      <div>
        {props.answer}
      </div>
    </div>
  )
}

export default Content;