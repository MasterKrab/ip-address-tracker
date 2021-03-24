const form = document.getElementById("form");
const ipElement = document.getElementById("ip-adress");
const locationElement = document.getElementById("location");
const timezoneElement = document.getElementById("timezone");
const providerElement = document.getElementById("provider");

let mymap;
let marker;
const myIcon = L.icon({iconUrl: "./assets/img/icon-location.svg"});
const map = document.getElementById("mapid");
const apiKey = "at_KjEWSMTsnBIo97j1vuNqFMclIcTZC";