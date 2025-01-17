import React, { useState } from 'react';
import './FAQ.css'
import { IoAdd ,IoClose} from 'react-icons/io5';
import {BiChevronRight}from 'react-icons/bi'

function FAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    // Toggle the selected question
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  const questions = [
    "What is Netflix?",
    "How much does Netflix cost?",
    "Where can I watch?",
    "How do I cancel?",
    "What can I watch on Netflix?",
    "Is Netflix good for kids?"
  ];

  const answers = [
    `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
    
    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
    `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.`,
    `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. 
    
    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
    `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. 
    
     Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
  ];
  return (
    <div className="frequent-ques">
      <h1>Frequently Asked Questions</h1>
      <div className="six-ques">
        {questions.map((question, index) => (
          <div key={index} className="inner">
            <div className="question" onClick={() => handleQuestionClick(index)}>
              {question}
              {selectedQuestion === index ? <IoClose /> : <IoAdd />}
            </div>
            {/* Display the answer below the clicked question */}
            {selectedQuestion === index && <div className="answer" style={{ whiteSpace: 'pre-line' }}>
    {answers[index]}
  </div>}
          </div>
        ))}
      </div>
      <button className="faq-btn">Finish SignUp <BiChevronRight/></button>
    </div>
  );
}

export default FAQ;
