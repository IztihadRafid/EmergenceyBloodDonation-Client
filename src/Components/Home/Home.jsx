import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Footer from './Footer';
import AboutUs from './AboutUs';
import donationinfoPic from "../../assets/donationinfoPic.jpg"
import donorBackground from "../../assets/donorbackground.jpg"
import faqPic from "../../assets/FaqPic.jpg"
import { Link, useLoaderData } from 'react-router-dom';
import PhoneDesign from './PhoneDesign';
import HotSummary from './HotSummary';
import DonorCard from '../DonorForm/DonorCard';
import RequestBloodCards from './RequestBloodForm/RequestBloodCards';
import CarouselSlider from './CarouselSlider';


const Home = () => {
  const donors = useLoaderData()

  useEffect(() => {
    const card = document.getElementById('faqCard');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the card is in view, apply opacity transition
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
        } else {
          // When the card leaves the view, reset to hidden (optional)
          entry.target.classList.remove('opacity-100');
          entry.target.classList.add('opacity-0');
        }
      });
    }, {
      threshold: 0.5  // Trigger when 10% of the card is visible
    });

    if (card) {
      observer.observe(card);
    }

    return () => {
      if (card) {
        observer.unobserve(card);
      }
    };
  }, []);



  return (
    <div className='bg-gradient-to-r from-red-400 via-red-100 to-red-400'>
      
      {/* <Navbar></Navbar> */}
      <Banner></Banner>
      {/* Carosel Swiper */}
      <CarouselSlider></CarouselSlider>
      {/* <RequestBloodCards></RequestBloodCards> */}
      <AboutUs></AboutUs>
      
      {/* Three Cards for donation info, FAQ, All DonorsCards */}
      <div className='max-w-5xl md:w-2/3 mx-auto opacity-0 transition-opacity duration-1000 ' id="faqCard">
        <div className='grid lg:grid-cols-2 gap-10 m-10  ' >
          <div className="card bg-base-100 image-full hover:opacity-90 shadow-xl">
            <figure>
              <img
                src={donationinfoPic}
                alt="Donation Info" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl p-3">Donate Information</h2>
              <p className='lg:text-lg'>Before donating blood, ensure you meet the eligibility criteria, such as being in good health, having the required hemoglobin levels, and passing the necessary medical screenings. Always consult with a healthcare professional if unsure. </p>
              <div className="card-actions justify-end">
                <Link to="/donationinfo" className="btn btn-error text-white text-lg">learn more</Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full hover:opacity-90 shadow-xl">
            <figure>
              <img
                src={faqPic}
                alt="Faq" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">FAQ</h2>
              <p className='lg:text-lg'> Have questions about blood donation? Find answers to common concerns, donor eligibility, and the process of donating blood.</p>
              <div className="card-actions justify-end">
                <div className="card-actions justify-end">
                  <Link to="/faq" className="btn btn-error text-white text-lg">learn more</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 image-full hover:opacity-90 shadow-xl">
            <figure>
              <img className='w-full'
                src={donorBackground}
                alt="Donorbackground image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-center items-center text-3xl text-center  p-3">All Donors</h2>
             
              <div className="card-actions justify-end">
                <Link to="/donors" className="btn btn-error text-white text-lg">Donors</Link>
              </div>
            </div>
          </div>
          {/* Blood Requests Cards */}
          <div className="card bg-base-100 image-full hover:opacity-90 shadow-xl">
            <figure>
              <img className='w-full'
                src={donorBackground}
                alt="Donorbackground image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex justify-center items-center text-3xl text-center  p-3">All requests</h2>
             
              <div className="card-actions justify-end">
                <Link to="/requestBlood" className="btn btn-error text-white text-lg">Blood Request</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Advertisement  */}
      {/* <div className='lg:flex justify-center items-center '>
        <div className='mx-auto'>
          <iframe  width="950" height="415" src="https://www.youtube.com/embed/YHxdhI5ZrHc?rel=0&controls=1&modestbranding=1"   title="YouTube video player"  ></iframe>
        </div>
      </div> */}
      
      
      <HotSummary></HotSummary>
      <PhoneDesign></PhoneDesign>
      <Footer></Footer>

    </div>
  );
};

export default Home;