import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const testimonials = [
    {
        name: "Aisha O",
        title: "Working as a Data Analyst at XYZ",
        rating: 4.3,
        review: "After the free assessment, I finally understood where I fit – and within 3 months, I had a new job and a certification!",
        image: "/img/person1.svg"
    },
    {
        name: "Mark T.",
        title: "Working as a Data Analyst at XYZ",
        rating: 4.6,
        review: "Affordable, relevant, and backed by great support. The live bootcamp gave me the confidence I needed.",
        image: "/img/person2.svg"
    },
    {
        name: "Hanna G.",
        title: "Working as a Data Analyst at XYZ",
        rating: 4.3,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/img/person1.svg"
    },
    {
        name: "Marcus S.",
        title: "Working as a Data Analyst at XYZ",
        rating: 4.3,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/img/person2.svg"
    },
    {
        name: "Marcus S.",
        title: "Working as a Data Analyst at XYZ",
        rating: 4.3,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "/img/person2.svg"
    }
];

const Learner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    return <section className="bg-[#F8F8F8] px-8">
        <div className="section_padding">
            <div className="h1_title mb-10">What Learners Are Saying</div>
            <Slider {...settings}>
                {testimonials.map((t, i) => (
                    <TestimonialCard key={i} {...t} />
                ))}
            </Slider>
        </div>
    </section>;
};

export default Learner;

const TestimonialCard = ({ name, title, rating, review, image }) => (
    <div className="bg-white rounded-[18px] shadow-md mx-2 relative overflow-hidden flex flex-col h-full">
        <img src={image} alt={name} className="mt-[-10px] ml-[-15px] w-[100px] top-[-10px] overflow-hidden left-[-10px] h-[100px] rounded-full object-cover" />
        <div className="p-4">
            <div className="">
                <div className="font-semibold text-2xl">{name}</div>
                <div className="text-lg font-medium text-[#767676] my-1">{title}</div>
            </div>
            <div className="text-yellow-500 text-sm flex items-center">
                <img src="/icons/filledStar.svg" alt="ratings" />
                <img src="/icons/filledStar.svg" alt="ratings" />
                <img src="/icons/filledStar.svg" alt="ratings" />
                <img src="/icons/filledStar.svg" alt="ratings" />
                <img src="/icons/filledStar.svg" alt="ratings" />
                <span className="text-gray-700 text-[22px] font-medium ml-2">{rating}/5</span>
            </div>
            <p className="mt-2">from 200+ learners</p>
            <div className="text-lg mt-2">{review}</div>
        </div>
    </div>
);


const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 right-0 2xl:-right-12 z-10 transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
        >
            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 0.0546875C16.5326 0.0546875 10.8097 2.42421 6.5901 6.64198C2.37053 10.8598 0 16.5803 0 22.5451C0 28.51 2.37053 34.2305 6.5901 38.4483C10.8097 42.666 16.5326 45.0356 22.5 45.0356C25.4547 45.0356 28.3806 44.4538 31.1104 43.3236C33.8402 42.1933 36.3206 40.5367 38.4099 38.4483C40.4992 36.3598 42.1566 33.8805 43.2873 31.1518C44.418 28.4232 45 25.4986 45 22.5451C45 19.5916 44.418 16.6671 43.2873 13.9384C42.1566 11.2097 40.4992 8.73041 38.4099 6.64198C36.3206 4.55355 33.8402 2.89692 31.1104 1.76667C28.3806 0.63642 25.4547 0.0546875 22.5 0.0546875ZM28.9563 24.619L20.0084 33.5631C19.7478 33.8233 19.4384 34.0296 19.098 34.1704C18.7576 34.3111 18.3928 34.3834 18.0244 34.3832C17.656 34.3829 17.2913 34.3102 16.951 34.1691C16.6108 34.028 16.3016 33.8212 16.0413 33.5607C15.781 33.3002 15.5745 32.9909 15.4338 32.6507C15.293 32.3104 15.2207 31.9457 15.2209 31.5775C15.2213 30.8338 15.5173 30.1208 16.0437 29.5953L23.1016 22.5451L16.0437 15.495C15.5173 14.9694 15.2213 14.2564 15.2209 13.5127C15.2204 12.7691 15.5156 12.0557 16.0413 11.5295C16.5671 11.0034 17.2804 10.7075 18.0244 10.7071C18.7684 10.7067 19.482 11.0016 20.0084 11.5272L28.9563 20.4713C29.228 20.7422 29.441 21.0661 29.582 21.4229C29.723 21.7797 29.789 22.1617 29.7758 22.5451V22.6351C29.7763 23.3788 29.4815 24.0923 28.9563 24.619Z" fill="#FF8C00" />
            </svg>
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 left-0 2xl:-left-12 z-10 transform -translate-y-1/2 cursor-pointer"
            onClick={onClick}
        >
            <svg width="45" height="46" viewBox="0 0 45 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 45.0356C28.4674 45.0356 34.1903 42.6661 38.4099 38.4483C42.6295 34.2306 45 28.51 45 22.5452C45 16.5804 42.6295 10.8598 38.4099 6.64207C34.1903 2.4243 28.4674 0.0547738 22.5 0.0547733C19.5453 0.054773 16.6195 0.636506 13.8896 1.76676C11.1598 2.897 8.67942 4.55364 6.5901 6.64207C4.50079 8.7305 2.84344 11.2098 1.71271 13.9385C0.581984 16.6672 2.22532e-06 19.5917 1.96701e-06 22.5452C1.7087e-06 25.4987 0.581983 28.4233 1.71271 31.1519C2.84344 33.8806 4.50078 36.3599 6.5901 38.4483C8.67942 40.5368 11.1598 42.1934 13.8896 43.3237C16.6194 44.4539 19.5453 45.0356 22.5 45.0356ZM16.0437 20.4714L24.9916 11.5273C25.2522 11.267 25.5616 11.0607 25.902 10.92C26.2424 10.7793 26.6072 10.707 26.9756 10.7072C27.344 10.7074 27.7087 10.7801 28.049 10.9213C28.3892 11.0624 28.6984 11.2691 28.9587 11.5296C29.219 11.7902 29.4255 12.0994 29.5662 12.4397C29.707 12.7799 29.7793 13.1446 29.7791 13.5128C29.7787 14.2565 29.4827 14.9695 28.9563 15.495L21.8984 22.5452L28.9563 29.5954C29.4827 30.1209 29.7787 30.8339 29.7791 31.5776C29.7796 32.3212 29.4844 33.0346 28.9587 33.5608C28.4329 34.0869 27.7196 34.3828 26.9756 34.3832C26.2316 34.3837 25.518 34.0887 24.9916 33.5632L16.0437 24.6191C15.772 24.3482 15.559 24.0242 15.418 23.6674C15.277 23.3106 15.211 22.9286 15.2242 22.5452L15.2242 22.4552C15.2237 21.7116 15.5185 20.9981 16.0437 20.4714Z" fill="#FF8C00" />
            </svg>
        </div>
    );
};



