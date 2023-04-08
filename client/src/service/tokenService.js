const setJwtToLocalStorage = (JWT) => {
  localStorage.setItem("JWT", JSON.stringify(JWT));
};

const getJwtFromLocalStorage = () => {
  localStorage.getItem("JWT");
};

export default {
  setJwtToLocalStorage,
  getJwtFromLocalStorage,
};
