import React, { Component } from 'react';
import Form from './Myfrom'

export default function Contact (props) {


  return (
  <section id="contactPage">
     <div className="formDiv">
        <h1> Do you have any questions? Contact us!</h1>
        <Form className="inputFields" />
     </div>
  </section>
  );
}