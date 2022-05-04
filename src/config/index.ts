/* eslint-disable import/no-anonymous-default-export */
const URL_BACKEND = window.location.hostname.includes("localhost")
  ? "http://localhost:3333"
  : "https://my-be-the-hero-project.herokuapp.com/";
export default {
  URL_BACKEND,
};
