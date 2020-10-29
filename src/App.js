import React, { useState, useEffect} from 'react';
// css
import './index.css';
// js
import Tours from './Tours';

function App(props) {
  const {id, img, title, price, description} = props.Tours;
  console.log(props)
  return (
    <div className="App">
     <h1 className="page--title">Our Tours</h1>

      <div className="tours--card">
        <img className="tours__img" src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg" alt=""/>
        <header className="tours__header">
          <h2 className="tours__title">Best Of Paris In 7 Days Tour</h2>
          <h3 className="tours__price">$1,995</h3>
        </header>
        <p className="tours__description">
          Paris is synonymous with the finest things
          that culture can offer — in art, fashion,
          food, literature, and ideas. On this tour,
          your Paris-savvy Rick Steves guide will
          immerse you in the very best of the
          City of Light: the masterpiece-packed Louvre
          and Orsay museums, resilient Notre-Dame Cathedral,
          exquisite Sainte-Chapelle, and
          extravagant Palace of Versailles. You'll also
          enjoy guided neighborhood walks through the
          city's historic heart as well as quieter moments
          to slow down and savor the city's intimate cafés,
          colorful markets, and joie de vivre.
          Join us for the Best of Paris in 7 Days!
          <button className="btn show-more-btn">show Less</button></p>
          <button className="btn not-interested-btn">Not Interested</button>
      </div>

      <div className="tours--card">
        <img className="tours__img" src="https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg" alt=""/>
        <header className="tours__header">
          <h2 className="tours__title">Best Of Paris In 7 Days Tour</h2>
          <h3 className="tours__price">$1,995</h3>
        </header>
        <p className="tours__description">
          Paris is synonymous with the finest things
          that culture can offer — in art, fashion,
          food, literature, and ideas. On this tour,
          your Paris-savvy Rick Steves guide will
          immerse you in the very best of the
          City of Light: the masterpiece-packed Louvre
          and Orsay museums, resilient Notre-Dame Cathedral,
          exquisite Sainte-Chapelle, and
          extravagant Palace of Versailles. You'll also
          enjoy guided neighborhood walks through the
          city's historic heart as well as quieter moments
          to slow down and savor the city's intimate cafés,
          colorful markets, and joie de vivre.
          Join us for the Best of Paris in 7 Days!
          <button className="btn show-more-btn">show Less</button></p>
          <button className="btn not-interested-btn">Not Interested</button>
      </div>
    </div>
  );
}

export default App;