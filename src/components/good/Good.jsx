import "./Good.css";
import { useState } from "react";
import goodImgMinus from "../../assets/good-img-minus.png";
import goodImgPlus from "../../assets/good-imgs-plus.png";

const Good = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How long does the coaching process take?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What if I wanted to end my coaching engagement?",
      answer:
        "You can end your coaching engagement anytime by contacting our support team. No long-term contracts or hidden fees.",
    },
    {
      question: "Can I change through coaching?",
      answer:
        "Absolutely! Our coaching process is designed to help you achieve lasting change by developing new habits and mindsets.",
    },
    {
      question: "How often do we meet?",
      answer:
        "We usually meet once a week, but the frequency can be adjusted depending on your goals and schedule.",
    },
  ];

  return (
    <div className="Good">
      <div className="good-inside container">
        <div className="good-top">
          <h2>Good to know.</h2>
          <p>Everything you need to know about the my services.</p>
        </div>

        <div className="good-bottom">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`good-bottom_card ${
                openIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="good-card-bottom_inline-box">
                <h3>{item.question}</h3>
                <div
                  className={`accordion-content ${
                    openIndex === index ? "open" : ""
                  }`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
              <img
                src={openIndex === index ? goodImgMinus : goodImgPlus}
                alt="toggle icon"
              />
            </div>
          ))}
        </div>

        <div className="questions">
          <h3>Still have questions?</h3>
          <p>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button>Get in touch</button>
        </div>
      </div>
    </div>
  );
};

export default Good;
