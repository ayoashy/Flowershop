import React, { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

type FAQ = {
  question: string;
  answer: string;
};

type FAQS = FAQ & {
  id: number;
};

const faqs: FAQS[] = [
  {
    question: 'How do I place an order?',
    answer:
      "To place an order, simply browse our menu and add items to your cart. When you're ready to check out, click the shopping cart icon in the top right corner of the screen and follow the prompts to enter your contact and payment information. Once your order is submitted, we'll send you a confirmation email with the details of your order.",
    id: 1,
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit and debit cards, as well as PayPal and Apple Pay. All payments are processed securely through our website, so you can shop with confidence knowing your information is safe.',
    id: 2,
  },
  {
    question: "Can I modify my order after it's been placed?",
    answer:
      'Unfortunately, we cannot make changes to an order once it has been submitted. However, if you realize you made a mistake or need to cancel your order, please contact us as soon as possible and we will do our best to assist you. Please note that we may not be able to cancel or modify orders that have already been prepared or are en route for delivery.',
    id: 3,
  },
];

const FAQs = () => {
  const QuestionAnswer = ({ question, answer, id }: FAQS) => {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    return (
      <div
        className={` border-t-2 border-b-2 border-black
        

        ${id === 3 ? 'mb-4' : ''}
        `}
        style={{
          borderTop: `${id > 1 && '0'}`,
        }}
      >
        <div className='flex justify-between items-center py-4'>
          <h3>{question}</h3>
          <div
            onClick={() => setShowAnswer(!showAnswer)}
            className='cursor-pointer'
          >
            {!showAnswer ? (
              <AiOutlinePlus size={20} />
            ) : (
              <AiOutlineMinus size={20} />
            )}
          </div>
        </div>
        <p className={`${!showAnswer && 'hidden'} mb-4`}>{answer}</p>
      </div>
    );
  };

  return (
    <div className='relative bg-gree-400 mt-[-15rem] w-full h-[300px]'>
      <article
        className='border-2 border-solid border-black w-[85%] mx-auto px-10 py-5 bg-tertiary absolute left-1/2 transform -translate-x-1/2 max-h-[300px] overflow-x-scroll   bottom-[-8rem]
        
      
 

      '
      >
        <h1 className='text-center mb-4'>Frequently Asked Questions (FAQs)</h1>
        {/*  */}
        <div>
          {faqs.map((f) => (
            <QuestionAnswer
              key={f.id}
              question={f.question}
              answer={f.answer}
              id={f.id}
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default FAQs;
