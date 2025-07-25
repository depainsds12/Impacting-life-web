import React, { useState } from "react";
import FilledButton from "../UI/FilledButton";
const faqs = [
    {
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio non laoreet faucibus...',
    },
    {
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio non laoreet faucibus...',
    },
    {
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio non laoreet faucibus...',
    },
    {
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio non laoreet faucibus...',
    },
    {
        question: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor odio non laoreet faucibus...',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return <section className="bg-[#F0F4F8] px-8">
        <div className="section_padding">
            <div className="h1_title">Frequently Asked Questions</div>
            <div className="mt-10">
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => toggle(index)}
                    />
                ))}
            </div>
            <div className="flex justify-center mt-8 mb-6"> <FilledButton onClickFun={() => {}} text={"View More"} /></div>
        </div>
    </section>;
};

export default FAQ;

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border border-[#767676CC] rounded-xl my-4 bg-white">
            <button
                onClick={onClick}
                className="w-full text-left px-4 py-4 flex justify-between items-center"
            >
                <span className="font-semibold text-[24px] text-gray-800">
                    {question}
                </span>
                <span className="text-3xl cursor-pointer">
                    {isOpen ? '−' : '+'}
                </span>
            </button>
            {isOpen && (
                <p className="px-4 pb-4">
                    {answer}
                </p>
            )}
        </div>
    );
};