import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="modernai__header section__padding" id="home">
      <div className="modernai__header-content">
        <h1 className="gradient__text">Let’s Build Something amazing with Modern Open AI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <div className="modernai__header-content__input">
          <input type="email" placeholder="Your Email Address"></input>
          <button type="button">Get Started</button>
        </div>

        <div className="modernai__header-content__people">
          <img src={people}/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="modernai__header-image">
          <img src={ai} alt="ai"/>
        </div>
    </div>
  )
}

export default Header