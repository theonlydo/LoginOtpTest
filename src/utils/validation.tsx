const validateEmail = text => {
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  const isValidEmail = emailRegex.test(text);

  return isValidEmail;
};

const validatePassword = value => {
  let errors = [];

  const isValidLength = /^.{8,}$/;
  if (!isValidLength.test(value)) {
    errors.push('Password must be at least 8 characters');
  }

  const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(value)) {
    errors.push('Password must have at least one Uppercase Character.');
  }

  const isContainsLowercase = /^(?=.*[a-z]).*$/;
  if (!isContainsLowercase.test(value)) {
    errors.push('Password must have at least one Lowercase Character.');
  }

  const isContainsNumber = /^(?=.*[0-9]).*$/;
  if (!isContainsNumber.test(value)) {
    errors.push('Password must contain at least one number');
  }

  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if (!isContainsSymbol.test(value)) {
    errors.push('Password must contain at least one Special Symbol.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

export {validateEmail, validatePassword};
