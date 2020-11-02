import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
// js
import Tour from './Tour';
// css
import './index.css';
import listOfTours from './listOfTours';

const TourList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = "https://api.github.com/users/QuincyLarson";

  /* Getting json data so this program
  will have some reason to load,
  In order to demonstrate
  the conditional rendering*/
  useEffect(() => {
    setIsLoading(true)
    fetch(url)
    .then((resp) => { 
      if(resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText)
      }
    })
    .then(() => {
      setIsLoading(false)
    })
  .catch(error => console.log(error));
  }, []);

  if(isLoading) {
    return (
      <div className="loading--container">
        <h2 className="loading__header">Loading</h2>
      </div>
    )
  }

  /*The page when its loaded */
  return(
    <div className="container">
      <h1 className="page--title">Our Tour</h1>
      {listOfTours.map((tour) => {
        const {id, img, title, price, description} = tour;
        return (<Tour key={id} tour={tour}/>)
      })}
    </div>
  )
}



// const Tour = (props) => {
//   const {id, img, title, price, description} = props.tour;
//   const [myTour, setMyTour] = useState(listOfTours);

//   const removeItem = (event) => {
//     let card = event.target.parentElement;
//     console.log()
//     setMyTour(card.remove())
//   }
//   return (
//         <div className="tour--container">
//           <div className="tour__card">
//             <img className="tour__img" src={img} alt=""/>
//             <header className="tour__header">
//               <h2 className="tour__title">{title}</h2>
//               <h3 className="tour__price">${price}</h3>
//             </header>
//             <p className="tour__description">{description}
//               {/* <button className="btn show-more-btn">show Less</button> */}
//             </p>
//             <button className="btn not-interested-btn" onClick={removeItem}>Not Interested</button>
//           </div>
//         </div>
//       );
// }


ReactDOM.render(
  <>
    <TourList/>
  </>,
  document.getElementById('root')
);
