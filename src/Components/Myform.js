import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
  const [state, handleSubmit] = useForm("mayajelg");
  if (state.succeeded) {
      return <p>Thanks for contacting us!</p>;
  }
  return (
      <form id="emailForm" onSubmit={handleSubmit}>
      <div className="nameAndEmail">
      <label htmlFor="email">
      </label>
      <input 
        id="Name"
        type="Name" 
        name="Name"
        placeholder="Name"
      />
      <label htmlFor="email">
      </label>
      <input 
        id="email"
        type="email" 
        name="email"
        placeholder="Email"
      />
      <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
      />
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="Ask us anything!"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        <h3>Submit</h3>
      </button>
    </form>
  );
}