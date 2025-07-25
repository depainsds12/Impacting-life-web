import React from "react";

const cardData = [
  {
    title: 'Free Career Assessment',
    description:
      "This isn't a quiz — it’s a science-backed, 60-question career assessment built by experts to unlock career options tailored to your unique strengths and interests.",
    image: '/img/card1.svg',
  },
  {
    title: 'Affordable Training',
    description:
      'Launch your career with tailored courses from just £19.99 — build skills that make an impact on your future.',
    image: '/img/card2.svg',
  },
  {
    title: 'Certification Booking & Prep',
    description:
      'We handle your exam bookings and fuel your success with practice questions and expert tutor support to help you prepare confidently and succeed.',
    image: '/img/card3.svg',
  },
  {
    title: 'Hybrid Bootcamps',
    description:
      'Join live bootcamps to gain practical, job-ready skills.',
    image: '/img/card4.svg',
  },
];

const HowItWorks = () => {
  return <section className="bg-[#F8F8F8] px-8">
    <div className="section_padding">
      <div className="h1_title">How It Works</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto py-8">
        {cardData.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </div>
  </section>;
};

export default HowItWorks;

const CardComponent = ({ title, description, image }) => {
  return (
    <div
      className={`rounded-2xl p-5 bg-white hover:text-secondary shadow-md border border-transparent transition-all duration-300 flex flex-col gap-4 h-ful hover:border-secondary hover:shadow-green-200 hover:shadow-lg`}
    >
      <img src={image} alt={title} className="rounded-lg w-full h-40 object-cover" />
      <div className="flex flex-col gap-1">
        <div
          className={`text-[24px] font-semibold text-[#1A1A1A]'
            }`}
        >
          {title}
        </div>
        <div className="text-lg">{description}</div>
      </div>
    </div>
  );
};