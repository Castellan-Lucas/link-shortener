import React from 'react'
import '../Card1/Card.sass'
import RoundCard3 from '../../SectionCard/RoundCard/iten3';
export default function Card3(props) {
  return (
    <div className="container-card">
      <RoundCard3/>
      <h1>{props.h1}</h1>
      <p>
       {props.p}
      </p>
    </div>
  );
}
