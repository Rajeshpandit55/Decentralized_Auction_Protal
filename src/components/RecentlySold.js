import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Card.css';
import card1 from './assests/_15a3b574-81ea-45f5-a733-21e57dccddfd.jpeg';
import card2 from './assests/_1bcb8358-8747-4911-9fda-c7532c93e93c.jpeg';
import card3 from './assests/_8dcaede4-91b4-49e0-ad68-fd4a9b028612.jpeg';
import card4 from './assests/_a7faac3a-418d-4b41-a922-497d95a13cda.jpeg';
import card5 from './assests/_e26a7e2d-5118-47de-8785-b6cacdcb0f74.jpeg';


function RecentlySold() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
   <div className='Upcoming-Auction'><p className='Upcoming-Auction-Title'>Recently Sold</p>
   <div className='UnderLine'></div>
     <div className='main-container' >
      <div className='sub-container'>
      <Slider {...settings}>
        {data.map((d) => (
          <div className='card-container'>
            <div className='image-card-container'>
              <img src={d.img} alt="" className='image-card' />
              <p className='AuctionName'>Aution</p>
            </div>
            <div className='product-details'>
            <p className='product-title'>{d.name}</p>
            <p className='product-desc'>{d.desc}</p>
            <button className='bid'>Bid</button>
            <button className='ProductDetails'>View Details</button>
          </div>
          </div>
        ))}
        </Slider>

    </div>
      
    </div >
   </div>
  )
}
const data = [
  {
    name: 'Sonu Raj',
    img: card1,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    name: 'Sonu Raj',
    img: card2,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    name: 'Sonu Raj',
    img: card3,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    name: 'Sonu Raj',
    img: card4,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    name: 'Sonu Raj',
    img: card5,
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
  },
]

export default RecentlySold

