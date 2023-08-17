import React from 'react'
import '../Card1/Card.sass'
import RoundCard2 from '../../SectionCard/RoundCard/iten2';
export default function Card2(props) {
  return (
    <div className="container-card">
      <RoundCard2/>
      <h1>{props.h1}</h1>
      <p>
        {props.p}
      </p>
    </div>
  );
}
