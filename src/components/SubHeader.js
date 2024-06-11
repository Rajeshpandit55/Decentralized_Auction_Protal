import React from 'react'
import './SubHeader.css';
import { Link } from 'react-router-dom'

function SubHeader() {
  return (
    <nav className='sub-navbar'>
      <ul className='sub-header'>
        <li><img src='#' alt='logo' className='sub-header-content' /></li>
        <select className='dropdown'>
          <option value="option1" className='droupdown-item'>Auction</option>
          {/* <Link to="/AuctionCreater"><option value="option2" className='droupdown-item' >Create Auction</option></Link> */}
          <option value="option3" className='droupdown-item'>Upcoming Auction</option>
          <option value="option4" className='droupdown-item'>Ongoing Auction</option>
          <option value="option5"  className='droupdown-item'>Recently Sold </option>
        </select>
        <li><Link to="/art" className='sub-header-content'>Art</Link></li>
        <li><Link to="/photographt" className='sub-header-content'>Photography</Link></li>
        <li><Link to="/tweet" className='sub-header-content'>Tweet</Link></li>
        <li><Link to="/music" className='sub-header-content'>Music</Link></li>
        <li><Link to="/video" className='sub-header-content'>Image</Link></li>
        <li><Link to="/crypto" className='sub-header-content'>Crypto</Link></li>
        <li><Link to="/Bidder" className='sub-header-content'>Bidder</Link></li>
        <li><Link to="/AuctionCreator" className='sub-header-content'>AuctionCreater</Link></li>
        <input type='search
      ' placeholder='Search item' className='search-bar' />
      </ul>
    </nav>

  )
}

export default SubHeader