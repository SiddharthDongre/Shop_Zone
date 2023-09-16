import React, { useState, useEffect } from 'react';
import "./Home_3.css";

const Home_3 = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
    roller: document.getElementById("h3-div"),
    next: document.getElementById("h3-next")
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
      <section id='home-3'>
        <h1 className='h3-head'>Mobiles</h1>

        <div id='h3-div'>
          <p id='h3-pre' onClick={() => preFun(data)}>&#8249;</p>

          <div className='h3-div-all h3-div-1'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762474/Shop%20Zone/Home%203/Vivo.jpg" alt="h3-img-1" height="200px" width="200px" />
            <h2>Vivo</h2>
          </div>

          <div className='h3-div-all h3-div-2'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762486/Shop%20Zone/Home%203/Mi.jpg" alt="h3-img-1" height="200px" width="200px" />
            <h2>MI</h2>
          </div>

          <div className='h3-div-all h3-div-3'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762493/Shop%20Zone/Home%203/Samsung.webp" alt="h3-img-1" height="200px" width="200px" />
            <h2>Samsung</h2>
          </div>

          <div className='h3-div-all h3-div-4'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762499/Shop%20Zone/Home%203/Google.jpg" alt="h3-img-1" height="200px" width="200px" />
            <h2>Google</h2>
          </div>

          <div className='h3-div-all h3-div-5'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762505/Shop%20Zone/Home%203/Nokia.jpg" alt="h3-img-1" height="200px" width="200px" />
            <h2>Nokia</h2>
          </div>

          <div className='h3-div-all h3-div-6'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762511/Shop%20Zone/Home%203/Sony.jpg" alt="h3-img-1" height="200px" width="200px" />
            <h2>Sony</h2>
          </div>

          <p id='h3-next' onClick={() => nextFun(data)}>&#8250;</p>
        </div>
      </section>
    </>
  )
}

export default Home_3;
