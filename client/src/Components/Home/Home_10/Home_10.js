import React, { useEffect, useState } from 'react';
import "./Home_10.css";

const Home_10 = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
    roller: document.getElementById("h10-div"),
    next: document.getElementById("h10-next")
    });
  }, []);

  function preFun({ roller, next }) {
    let a, b;

    a = roller.firstElementChild.nextElementSibling;
    b = roller.removeChild(a);

    roller.insertBefore(b, next);
  };

  function nextFun({ roller }) {
    let a, b;
  
    a = roller.lastElementChild.previousElementSibling;
    b = roller.firstElementChild.nextElementSibling;

    roller.insertBefore(a, b);
  };

  return (
    <>
      <section id='home-10'>
        <h1 className='h10-head'>Daliy Essential's</h1>

        <div id='h10-div'>
          <p className='h10-prev' onClick={() => preFun(data)}>&#8249;</p>

          <div className='h10-div-all h10-div-1'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850233/Shop%20Zone/Home%2010/Shaving%20And%20Beard%20Care.jpg" alt="h10-img-1" height="220px" width="220px" />
            <h2>Up to 40% off</h2>
          </div>

          <div className='h10-div-all h10-div-2'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850237/Shop%20Zone/Home%2010/Diper%27s%20And%20Wipe%27s.jpg" alt="h10-img-2" height="220px" width="220px" />
            <h2>Up to 60% off</h2>
          </div>

          <div className='h10-div-all h10-div-3'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850242/Shop%20Zone/Home%2010/Family%20Nutrition.jpg" alt="h10-img-3" height="220px" width="220px" />
            <h2>Up to 30% off</h2>
          </div>

          <div className='h10-div-all h10-div-4'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850247/Shop%20Zone/Home%2010/Washing%20Powder.jpg" alt="h10-img-4" height="220px" width="220px" />
            <h2>Up to 80% off</h2>
          </div>

          <div className='h10-div-all h10-div-5'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850253/Shop%20Zone/Home%2010/Immunity%20And%20Vitamin%27s.jpg" alt="h10-img-5" height="220px" width="220px" />
            <h2>Up to 70% off</h2>
          </div>

          <div className='h10-div-all h10-div-6'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850259/Shop%20Zone/Home%2010/Food%27s%20And%20Beverage%27s.jpg" alt="h10-img-6" height="220px" width="220px" />
            <h2>Up to 50% off</h2>
          </div>

          <p id='h10-next'  onClick={() => nextFun(data)}>&#8250;</p>
        </div>
      </section>
    </>
  )
}

export default Home_10
