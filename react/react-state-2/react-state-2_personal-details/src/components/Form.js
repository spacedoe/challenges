import { useState } from "react";

export default function Form({onCreateUser}) {

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target
    const name = form.elements.name.value
    const email = form.elements.email.value
    onCreateUser(name, email)

    form.reset()
    form.elements.name.focus()
  }

  return (
    <form
      className="form"
      aria-labelledby="user-details"
      onSubmit={handleSubmit}
    >
      <h2 id="user-details">Please enter your details here!</h2>
      <label htmlFor="name">Name: </label>
      <input id="name" name="name" type="text" placeholder="John Doe" />
      <label htmlFor="email">Email: </label>
      <input id="email" name="email" type="email" placeholder="john@doe.com" />
      <button className="form__submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}
