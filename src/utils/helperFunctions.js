export const imageUrlFormatter = (url) => {
  return `${url?.split("._")[0]}.jpg`;
};

export const checkSpecialChar = (e) => {
  if (!/[^a-zA-Z\d\s]/.test(e.key)) {
    e.preventDefault();
  }
};

export const capitaliseFirstChar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
