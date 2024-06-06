import './App.css';
import React from 'react';
import Card from './components/card/Card';
import stays from "./data/stays.json";
import './components/card/Carousel.css';

function App() {
  const [locationValue, setLocationValue] = React.useState('');
  const [adultCount, setAdultCount] = React.useState(0);
  const [childrenCount, setChildrenCount] = React.useState(0);
  const [cards, setCards] = React.useState(stays);

  const filteredCards = stays.filter((stay) => {
    const arr = locationValue.split(',');
    if (arr[0] === stay.city && (adultCount + childrenCount) <= stay.maxGuests) {
      return stay;
    }
    return false;
  });

  function formSubmitHandler(event) {
    event.preventDefault();
    console.log(locationValue, adultCount + childrenCount);
    console.log(filteredCards);
    setCards(() => filteredCards);
    setLocationValue('');
    setAdultCount(0);
    setChildrenCount(0);
  }

  const stayCards = cards.map((stay) => (
    <Card
      key={stay.title}
      photo={stay.photo}
      superHost={stay.superHost}
      type={stay.type}
      beds={stay.beds}
      rating={stay.rating}
      title={stay.title}
    />
  ));

  return (
    <React.Fragment>
      <header className='header'>
        <div className='header__logo'>
          <a href="/" className='header__home-link'>
            Home
          </a>
        </div>
      </header>

      <main className='max-w-7xl mx-auto w-11/12 font-montserrat'>
        <div className='max-w-7xl md:mt-16 w-full mx-auto'>
          <div className='flex justify-between mb-6'>
            <h2 className='text-lg leading-6 font-bold'>Stays in Finland</h2>
            <span className='text-sm leading-4 font-medium text-gray-600'>12+ stays</span>
          </div>

          <div className="carousel">
            <div className="carousel__inner">
              {stayCards}
            </div>
          </div>
        </div>
      </main>

      <footer className='max-w-7xl flex justify-center gap-x-2 py-6 mt-20 mx-auto'>
        <span className='text-[#828282]'>Created by</span>
        <a className='text-[#828282] font-bold' href="https://github.com/mahimadevi">@Mahima</a>
      </footer>
    </React.Fragment>
  );
}

export default App;
