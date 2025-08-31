export const getPasswordValidation = (password: string) => {
  return {
    isLengthValid: password.length >= 8,
    hasLowerCase: /[a-z]/.test(password),
    hasUpperCase: /[A-Z]/.test(password),
    hasNumber: /\d/.test(password),
  };
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const formatPhoneNumber = (text: string): string => {
  const cleaned = text.replace(/\D/g, '').slice(0, 10);
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (!match) return text;

  const [, area, middle, last] = match;
  if (last) return `(${area}) ${middle} - ${last}`;
  if (middle) return `(${area}) ${middle}`;
  if (area) return `(${area}`;
  return cleaned;
};

export const formatDateInput = (text: string): string => {
  const cleaned = text.replace(/\D/g, '').slice(0, 8);
  const parts = cleaned.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
  if (!parts) return text;

  const [, mm, dd, yyyy] = parts;
  if (yyyy) return `${mm}/${dd}/${yyyy}`;
  if (dd) return `${mm}/${dd}`;
  if (mm) return `${mm}`;
  return cleaned;
};

export const formatToISO = (input: string): string | undefined => {
  if (!input) return undefined;
  const date = new Date(input);
  return isNaN(date.getTime()) ? undefined : date.toISOString();
};

export const generateYears = (start: number, end: number): string[] => {
  const years = [];
  for (let i = start; i >= end; i--) {
    years.push(i.toString());
  }
  return years;
};
