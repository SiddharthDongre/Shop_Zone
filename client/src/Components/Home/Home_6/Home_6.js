import React, { useState, useEffect } from 'react';
import "./Home_6.css";

const Home_6 = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
    roller: document.getElementById("h6-div"),
    next: document.getElementById("h6-next")
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
      <section id='home-6'>
        <h1 className='h6-head'>Home & Kitchen</h1>

        <div id='h6-div'>
          <p className='h6-prev' onClick={() => preFun(data)}>&#8249;</p>

          <div className='h6-div-all h6-div-1'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694763553/Shop%20Zone/Home%206/Sofa%27s%20And%20Recliner%27s.jpg" alt="h6-img-1" height="200px" width="200px" />
            <h2>Sofa & Recliner's</h2>
          </div>

          <div className='h6-div-all h6-div-2'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694763556/Shop%20Zone/Home%206/Curtain%27s.jpg" alt="h6-img-1" height="200px" width="200px" />
            <h2>Curtain's</h2>
          </div>

          <div className='h6-div-all h6-div-3'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694763562/Shop%20Zone/Home%206/Dinner%20Set%27s%20And%20Bowl%27s.gif" alt="h6-img-1" height="200px" width="200px" />
            <h2>Dinner Set's</h2>
          </div>

          <div className='h6-div-all h6-div-4'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694763567/Shop%20Zone/Home%206/Pressure%20Cooker%27s.gif" alt="h6-img-1" height="200px" width="200px" />
            <h2>Pressure Cooker</h2>
          </div>

          <div className='h6-div-all h6-div-5'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694763573/Shop%20Zone/Home%206/Bedsheet%27s.gif" alt="h6-img-1" height="200px" width="200px" />
            <h2>Bed Sheet's</h2>
          </div>

          <div className='h6-div-all h6-div-6'>
            <img src="https://res.cloudinary.com/dnrxxmzfi/image/upload/v1694763581/Shop%20Zone/Home%206/Chair%27s%20And%20Desk%27s.gif" alt="h6-img-1" height="200px" width="200px" />
            <h2>Chair's & Desk's</h2>
          </div>

          <p id='h6-next' onClick={() => nextFun(data)}>&#8250;</p>
        </div>
      </section>
    </>
  )
}

export default Home_6
