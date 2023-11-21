import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Мой код для обработки отправки данных может быть здесь

    // Выведем данные в режиме реального времени в консоль
    console.log('Имя:', formData.name);
    console.log('Email:', formData.email);
    console.log('Номер телефона:', formData.phone);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ФИО:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Адрес электронной почты:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Номер телефона:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default RegistrationForm;