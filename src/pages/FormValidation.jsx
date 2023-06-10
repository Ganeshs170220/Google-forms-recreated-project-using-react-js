export const validateLoginForm = (email, password) => {
    const errors = [];
  
    if (email.trim() === '') {
      errors.push('Email is required');
    }
  
    if (password.trim() === '') {
      errors.push('Password is required');
    }
  
    return errors;
  };
  