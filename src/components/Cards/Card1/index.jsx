import React from 'react'
import '../Card1/Card.sass'
import RoundCard1 from '../../SectionCard/RoundCard/iten1';
export default function Card1(props) {
  return (
    <div className="container-card">  
        <RoundCard1 />
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
    </div>
  );
}
