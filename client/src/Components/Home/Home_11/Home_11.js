import React, { useState, useEffect } from 'react';
import "./Home_11.css";

const Home_11 = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
    roller: document.getElementById("h11-div"),
    next: document.getElementById("h11-next")
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
      <section id='home-11'>
        <h1 className='h11-head'>Book's & Toy's</h1>

        <div id='h11-div'>
          <p className='h11-prev' onClick={() => preFun(data)}>&#8249;</p>

          <div className='h11-div-all h11-div-1'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850657/Shop%20Zone/Home%2011/Book%27s.jpg" alt="h11-img-1" height="220px" width="220px" />
            <h2>Starting From ₹99</h2>
          </div>

          <div className='h11-div-all h11-div-2'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850662/Shop%20Zone/Home%2011/Toy%27s.jpg" alt="h11-img-2" height="220px" width="220px" />
            <h2>Starting From ₹169</h2>
          </div>

          <div className='h11-div-all h11-div-3'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850672/Shop%20Zone/Home%2011/Gaming%20Accessories.jpg" alt="h11-img-3" height="220px" width="220px" />
            <h2>Starting From ₹299</h2>
          </div>

          <div className='h11-div-all h11-div-4'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850668/Shop%20Zone/Home%2011/Massager%20And%20Relaxation%20Device.jpg" alt="h11-img-4" height="220px" width="220px" />
            <h2>Starting From ₹49</h2>
          </div>

          <div className='h11-div-all h11-div-5'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850652/Shop%20Zone/Home%2011/Gaming%20Console.jpg" alt="h11-img-5" height="220px" width="220px" />
            <h2>Starting From ₹999</h2>
          </div>

          <div className='h11-div-all h11-div-6'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694850646/Shop%20Zone/Home%2011/Hair%20Styling.jpg" alt="h11-img-6" height="220px" width="220px" />
            <h2>Starting From ₹149</h2>
          </div>

          <p id='h11-next' onClick={() => nextFun(data)}>&#8250;</p>
        </div>
      </section>
    </>
  )
}

export default Home_11
