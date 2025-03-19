export const validateRequired = (value) => {
  if (!value.trim()) {
    return "Это поле обязательно";
  }
  return "";
};

export const validateFIO = (value) => {
  const regex = /^[а-яА-ЯёЁ\s]+$/;
  return regex.test(value) ? "" : "Введите корректное ФИО";
};

export const validateBirthDate = (value) => {
  const regex = /^\d{2}\.\d{2}\.\d{4}$/;
  return regex.test(value) ? "" : "Введите корректную дату рождения";
};

export const validatePhone = (value) => {
  const regex = /^(\+7|8)\d{10}$/;
  return regex.test(value) ? "" : "Введите корректный номер телефона";
};

export const validateEmail = (value) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(value) ? "" : "Введите корректный email";
};
