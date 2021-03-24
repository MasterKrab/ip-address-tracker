"use strict";var mymap,marker,form=document.getElementById("form"),ipElement=document.getElementById("ip-adress"),locationElement=document.getElementById("location"),timezoneElement=document.getElementById("timezone"),providerElement=document.getElementById("provider"),myIcon=L.icon({iconUrl:"./assets/img/icon-location.svg"}),map=document.getElementById("mapid"),apiKey="at_KjEWSMTsnBIo97j1vuNqFMclIcTZC",showMap=function(t,e){map.textContent="",mymap=L.map("mapid",{zoomControl:!1}).setView([t,e],13);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mymap),marker=L.marker([t,e],{icon:myIcon}).addTo(mymap)},getLocationData=function(t){var e="https://geo.ipify.org/api/v1?apiKey=".concat(apiKey,"&ipAddress=").concat(t);fetch(e).then((function(t){return t.json()})).then((function(t){mymap.setView([t.location.lat,t.location.lng],13),marker.remove(),marker=L.marker([t.location.lat,t.location.lng],{icon:myIcon}).addTo(mymap),ipElement.textContent=t.ip,locationElement.textContent="".concat(t.location.city,", ").concat(t.location.region," ").concat(t.location.postalCode),timezoneElement.textContent="UTC -".concat(t.location.timezone),providerElement.textContent=t.isp})).catch(form.ip.setCustomValidity("Invalid IP adress"))},getCurrentLocationData=function(){var t="https://geo.ipify.org/api/v1?apiKey=".concat(apiKey);fetch(t).then((function(t){return t.json()})).then((function(t){showMap(t.location.lat,t.location.lng),ipElement.textContent=t.ip,locationElement.textContent="".concat(t.location.city,", ").concat(t.location.region," ").concat(t.location.postalCode),timezoneElement.textContent="UTC -".concat(t.location.timezone),providerElement.textContent=t.isp}))};form.addEventListener("submit",(function(t){t.preventDefault(),form.ip.validity.valid&&getLocationData(form.ip.value)})),document.addEventListener("DOMContentLoaded",getCurrentLocationData);