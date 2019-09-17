let newBase;
let heavyliftURL;
let baseUrlServices;
let socketBase;

if (window.location.href.includes("npa-admin.herokuapp.com")) {
  newBase = "https://api.ncreative.staging.bluegreensoft.com/v1/ncreative/";
  heavyliftURL = "https://api.ncreative.staging.bluegreensoft.com/v1/ncreative/exports";
  baseUrlServices = "https://nsio-services.herokuapp.com/v1/";
  socketBase = "https://nsio-services.herokuapp.com";
}

if (window.location.href.includes("localhost")) {
  newBase = "https://api.ncreative.staging.bluegreensoft.com/v1/ncreative/";
  heavyliftURL = "https://api.ncreative.staging.bluegreensoft.com/v1/ncreative/exports";
  baseUrlServices = "https://nsio-services.herokuapp.com/v1/";
  socketBase = "https://nsio-services.herokuapp.com";
}

if (window.location.href.includes("npa.ng")) {
  newBase = "https://api.ncreative.npvn.ng/v1/ncreative/";
  heavyliftURL = "https://api.ncreative.npvn.ng/v1/ncreative/exports";
  baseUrlServices = "https://nsio-services.herokuapp.com/v1/";
  socketBase = "https://nsio-services.herokuapp.com";
}

export { newBase, heavyliftURL, baseUrlServices, socketBase };