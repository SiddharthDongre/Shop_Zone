import React, { useState, useEffect } from 'react';
import "./Home_4.css";

const Home_4 = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
    roller: document.getElementById("h4-div"),
    next: document.getElementById("h4-next")
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
      <section id='home-4'>
        <h1 className='h4-head'>Electronic's</h1>

        <div id='h4-div'>
          <p className='h4-prev' onClick={() => preFun(data)}>&#8249;</p>

          <div className='h4-div-all h4-div-1'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762985/Shop%20Zone/Home%204/Laptop%27s.jpg" alt="h4-img-1" height="200px" width="200px" />
            <h2>Laptop's</h2>
          </div>

          <div className='h4-div-all h4-div-2'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762989/Shop%20Zone/Home%204/Head%20Phone%27s.jpg" alt="h4-img-1" height="200px" width="200px" />
            <h2>Head Phone's</h2>
          </div>

          <div className='h4-div-all h4-div-3'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762995/Shop%20Zone/Home%204/Smart%20Watche%27s.jpg" alt="h4-img-1" height="200px" width="200px" />
            <h2>Smart Watch'es</h2>
          </div>

          <div className='h4-div-all h4-div-4'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694762999/Shop%20Zone/Home%204/Ear%20Phone%27s.jpg" alt="h4-img-1" height="200px" width="200px" />
            <h2>Ear Phone's</h2>
          </div>

          <div className='h4-div-all h4-div-5'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694763005/Shop%20Zone/Home%204/Tablet%27s.jpg" alt="h4-img-1" height="200px" width="200px" />
            <h2>Tablet's</h2>
          </div>

          <div className='h4-div-all h4-div-6'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694763011/Shop%20Zone/Home%204/Sound%27s.jpg" alt="h4-img-1" height="200px" width="200px" />
            <h2>Sound's</h2>
          </div>

          <p id='h4-next' onClick={() => nextFun(data)}>&#8250;</p>
        </div>
      </section>
    </>
  )
}

export default Home_4
