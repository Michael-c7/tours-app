import React, {useState} from 'react';
import listOfTours from './listOfTours';

const Tour = (props) => {
    const {id, img, title, price, description} = props.tour;
    const [myTour, setMyTour] = useState(listOfTours);
  
    const removeItem = (event) => {
      let card = event.target.parentElement.parentElement;
      setMyTour(card.remove());
    }
 
    return (
          <div className="tour--container">
            <div className="tour__card">
              <img className="tour__img" src={img} alt=""/>
              <header className="tour__header">
                <h2 className="tour__title">{title}</h2>
                <h3 className="tour__price">${price}</h3>
              </header>
              <p className="tour__description">{description}
                {/* <button className="btn show-more-btn">show Less</button> */}
              </p>
              <button className="btn not-interested-btn" onClick={removeItem}>Not Interested</button>
            </div>
          </div>
        );
  }

  export default Tour;