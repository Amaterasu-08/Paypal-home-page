import React from 'react'

function FAQItem({ question }) {
    return (
      <li className=" my-6 text-blue-900 font-semibold cursor-pointer">{question}</li>
    );
  }

const Faq = ({sideBarQuestion}) => {

    const CommonQuestions = [
        "How do I open a case with a seller?",
        "I forgot my password. How do I reset it?",
        "Why is my payment on hold or unavailable?",
        "I want my money back. Can I cancel a payment?",
        "Why am I recieving emails from PayPal when I dont't have an account?",
        "How do I report an unauthorised transaction or account activity",
        "Why is the payment I send pending? Can I cancel it?",
        "How do I request a refund?",
        "Why was my payment declined?",
        "How do I change the name of my Paypal account?"
        
      ];
    const otherQuestions = [
      "Add links for the specific sidebar query.",
      "Add links for the specific sidebar query.",
      "Add links for the specific sidebar query.",
      "Add links for the specific sidebar query.",
      "Add links for the specific sidebar query.",
      "Add links for the specific sidebar query.",
      "Add links for the specific sidebar query.",
      "Add links for the specific sidebar query.",



    ]

      if(sideBarQuestion === 'Common Questions'){
        return (
            <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
              <h2 className="text-2xl font-bold mb-4">{sideBarQuestion}</h2>
              <ul>
                {CommonQuestions.map((question, index) => (
                  <FAQItem key={index} question={question} />
                ))}
              </ul>
            </div>
          );
      }
      else{
        return (
            <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
              <h2 className="text-2xl font-bold mb-4">{sideBarQuestion}</h2>
              <ul>
                {otherQuestions.map((question, index) => (
                  <FAQItem key={index} question={question} />
                ))}
              </ul>
            </div>
          );
      }

  //  return (
  //   <div className="p-4 max-w-xl mx-auto bg-white rounded shadow">
  //     <h2 className="text-2xl font-bold mb-4">Common Questions</h2>
  //     <ul>
  //       {questions.map((question, index) => (
  //         <FAQItem key={index} question={question} />
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default Faq
