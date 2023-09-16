import React, { useState, useEffect } from 'react';
import "./Home_8.css";

const Home_8 = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
    roller: document.getElementById("h8-div"),
    next: document.getElementById("h8-next")
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
      <section id='home-8'>
        <h1 className='h8-head'>TV & Appliance's</h1>

        <div id='h8-div'>
          <p className='h8-prev' onClick={() => preFun(data)}>&#8249;</p>

          <div className='h8-div-all h8-div-1'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694765557/Shop%20Zone/Home%208/TV.gif" alt="h8-img-1" height="200px" width="200px" />
            <h2>TV</h2>
          </div>

          <div className='h8-div-all h8-div-2'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694765419/Shop%20Zone/Home%208/Air%20Conditioner%27s.gif" alt="h8-img-1" height="200px" width="200px" />
            <h2>Air Conditioner's</h2>
          </div>

          <div className='h8-div-all h8-div-3'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694765425/Shop%20Zone/Home%208/Microwave%27s.gif" alt="h8-img-1" height="200px" width="200px" />
            <h2>Microwave's</h2>
          </div>

          <div className='h8-div-all h8-div-4'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694765432/Shop%20Zone/Home%208/Washing%20Machine%27s.gif" alt="h8-img-1" height="200px" width="200px" />
            <h2>Washing Machine's</h2>
          </div>

          <div className='h8-div-all h8-div-5'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694765441/Shop%20Zone/Home%208/Chimney%27s.gif" alt="h8-img-1" height="200px" width="200px" />
            <h2>Chimney's</h2>
          </div>

          <div className='h8-div-all h8-div-6'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694765399/Shop%20Zone/Home%208/Refrigerator%27s.gif" alt="h8-img-1" height="200px" width="200px" />
            <h2>Refrigerator's</h2>
          </div>

          <p id='h8-next' onClick={() => nextFun(data)}>&#8250;</p>
        </div>
      </section>
    </>
  )
}

export default Home_8;
