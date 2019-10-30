let newBase;
let heavyliftURL;
let baseUrlServices;
let socketBase;

if (window.location.href.includes("my-wheel-of-life.herokuapp.com")) {
  newBase = "https://app-staging-api.herokuapp.com/api/v1/life/";
}

if (window.location.href.includes("localhost")) {
  newBase = "http://localhost:5000/api/v1/life/";
}

if (window.location.href.includes("my-wheel-of-life.com")) {
  newBase = "https://app-staging-api.herokuapp.com/api/v1/life/";
}

export { newBase, heavyliftURL, baseUrlServices, socketBase };