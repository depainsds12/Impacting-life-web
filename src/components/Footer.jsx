const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white px-6 pt-10 pb-5 md:px-12">
            <div className="max-w-(--layout-width) mx-auto space-y-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Business & Creative Skills</h3>
                        <ul className="space-y-2">
                            <li>Project Management</li>
                            <li>Digital Marketing</li>
                            <li>Social Media Marketing</li>
                            <li>E-commerce</li>
                            <li>Graphic Design</li>
                            <li>Google Tools</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Technical Skills</h3>
                        <ul className="space-y-2">
                            <li>ChatGPT & Generative AI</li>
                            <li>Cybersecurity & Ethical Hacking</li>
                            <li>DevOps</li>
                            <li>Java Programming</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Analytical & Data Skills</h3>
                        <ul className="space-y-2">
                            <li>Data Analytics</li>
                            <li>Data Science</li>
                            <li>Microsoft Power BI</li>
                            <li>Microsoft Excel</li>
                            <li>Artificial Intelligence</li>
                            <li>Big Data</li>
                            <li>Machine Learning</li>
                            <li>Business Analysis</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-3">Career Resources</h3>
                        <ul className="space-y-2">
                            <li>Free Career Assessment</li>
                            <li>High-Income Skills to Learn</li>
                            <li>Essential IT Certifications</li>
                            <li>How to Get a PMP Certification</li>
                            <li>What Does a Data Analyst Do?</li>
                            <li>Popular Cybersecurity Certifications</li>
                            <li>Career Development Resources</li>
                            <li>Share Your Impacting Life Story</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                    <div>
                        <h3 className="font-semibold text-xl mb-3">About Impacting Life</h3>
                        <ul className="space-y-2">
                            <li>What We Offer</li>
                            <li>Leadership Team</li>
                            <li>Our Story & Mission</li>
                            <li>For Individuals</li>
                            <li>For Business</li>
                            <li>For Government</li>
                            <li>Our Course Catalog</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-xl mb-3">Community & Support</h3>
                        <ul className="space-y-2">
                            <li>Blog & Articles</li>
                            <li>The Impacting Life Podcast</li>
                            <li>Events & Webinars</li>
                            <li>Testimonials & Success Stories</li>
                            <li>Help & FAQs</li>
                            <li>Accessibility Statement</li>
                            <li>Contact Us</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Preferences</li>
                        </ul>
                    </div>

                    <div className="col-span-2 flex flex-col md:col-span-2 sm:grid sm:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-xl mb-3">Contact Us</h3>
                            <ul className="space-y-2">
                                <li>info@impactinglife.co.uk</li>
                                <li>71 -75 Shelton Street, Covent Garden, London</li>
                                <li>02045091160 / 01908320338</li>
                            </ul>
                            <h3 className="font-semibold text-xl mt-4 mb-3">Follow Us</h3>
                            <ul className="flex gap-3 flex-wrap">
                                {["facebook", "linkedin", "instagram", "x", "google"].map((icon) => (
                                    <div key={icon} className="h-[48px] w-[48px] rounded-full flex items-center justify-center bg-white">
                                        <img src={`/icons/${icon}.svg`} alt={icon} />
                                    </div>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-xl mb-3">Stay Connected</h3>
                            <p>Subscribe for Career Resources & Exclusive Offers</p>

                            <div className="bg-white w-full flex justify-between items-center rounded-lg p-1 my-4 gap-2">
                                <div className="flex items-center flex-grow">
                                    <img src="/icons/email.svg" alt="email" className="mr-2 ml-1 w-5 h-5" />
                                    <input
                                        type="text"
                                        placeholder="Your Email"
                                        className="text-gray-600 outline-none border-none placeholder-gray-500 text-base w-full"
                                    />
                                </div>

                                <div className="bg-accent text-black px-1 py-1 rounded-md text-sm font-semibold whitespace-nowrap">
                                    Subscribe
                                </div>
                            </div>

                            <p>
                                Be the first to know about free workshops, seminars, coaching sessions, new courses and valuable career resources.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-lg mt-6 text-center">
                    Copyright © 2025 Impacting Life. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
