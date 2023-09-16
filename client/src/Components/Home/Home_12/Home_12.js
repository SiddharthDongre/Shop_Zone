import React, { useState, useEffect } from 'react';
import "./Home_12.css";

const Home_12 = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    setData({
    roller: document.getElementById("home-12"),
    next: document.getElementById("next")
    });
  }, []);

  let preFun = ({ roller, next }) => {
    let a, b;

    a = roller.firstElementChild.nextElementSibling;
    b = roller.removeChild(a);

    roller.insertBefore(b, next);
  };

  let nextFun = ({ roller }) => {
    let a, b;
  
    a = roller.lastElementChild.previousElementSibling;
    b = roller.firstElementChild.nextElementSibling;

    roller.insertBefore(a, b);
  };

  return (
    <>
    <section id='home-12'>
      <button type="button" id='pre' onClick={() => preFun(data)}>&#8249;</button>
      <div className="rollers rollers-1">1</div>
      <div className="rollers rollers-2">2</div>
      <div className="rollers rollers-3">3</div>
      <div className="rollers rollers-4">4</div>
      <div className="rollers rollers-5">5</div>
      <div className="rollers rollers-6">6</div>
      <button type="button" id='next' onClick={() => nextFun(data)}>&#8250;</button>
    </section>
    </>
  );
};

export default Home_12;
