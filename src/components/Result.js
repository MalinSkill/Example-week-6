import React from 'react'

export const Result = ({ name, food, drink }) => {
  return (
    <>
      <p>Your name is {name}</p>
      <p>Your favourite food is {food}</p>
      <p>Your favourite drink is {drink}</p>
      Thank you for taking this survey, Please submit if you are happy with your answers:
      <button type="button" onClick={() => window.location.reload(false)}>Submit</button>
    </>
  );
}