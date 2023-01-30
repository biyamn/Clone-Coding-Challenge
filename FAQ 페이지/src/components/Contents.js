import Content from "./Content";

const Contents = (props) => {

  const questionAndAnswer = [
    {
      id: 1,
      question: 'How many team members can I invite?',
      answer: 'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
    },
    {
      id: 2,
      question: 'What is the maximum file upload size?',
      answer: 'No more than 2GB. All files in your account must fit your allotted storage space.',
    },
    {
      id: 3,
      question: 'How do I reset my password?',
      answer: 'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
    },
    {
      id: 4,
      question: 'Can I cancel my subscription?',
      answer: 'Yes! Send us a message and we’ll process your request no questions asked.',
    },
    {
      id: 5,
      question: 'Do you provide additional support?',
      answer: 'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
    },
  ]

  return (
    <div className={props.className}>
      <div>
        <h2>FAQ</h2>
      </div>
      <div>
        <Content question={questionAndAnswer[0].question} answer={questionAndAnswer[0].answer} />
        <Content question={questionAndAnswer[1].question} answer={questionAndAnswer[1].answer} />
        <Content question={questionAndAnswer[2].question} answer={questionAndAnswer[2].answer} />
        <Content question={questionAndAnswer[3].question} answer={questionAndAnswer[3].answer} />
        <Content question={questionAndAnswer[4].question} answer={questionAndAnswer[4].answer} />
      </div>
  </div>
  )
}

export default Contents;