import React from "react";

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="city" placeholder="Город" />
    <button>Получить погоду</button>
  </form>
);

export default Form;
