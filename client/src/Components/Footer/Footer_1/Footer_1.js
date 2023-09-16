import React from 'react';
import "./Footer_1.css";
import { Link } from 'react-router-dom';

const Footer_1 = () => {
  return (
    <>
      <section id="back-to-top">
        <h1 className='btt-head'><Link to="/#">Back to Top</Link></h1>
      </section>
    </>
  );
};

export default Footer_1;

