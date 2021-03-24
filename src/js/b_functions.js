const showMap = (lat, lng) =>{
   map.textContent = "";

   mymap = L.map('mapid', { zoomControl: false }).setView([lat, lng], 13);

   const titleUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
   const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
   const tiles = L.tileLayer(titleUrl, {attribution});
   
   tiles.addTo(mymap);
   marker = L.marker([lat, lng], {icon: myIcon}).addTo(mymap);
}

const getLocationData = async (search, type="ipAddress") =>{
   const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&${type}=${search}`;
   console.log(url);

   const request = await fetch(url);
   const data = await request.json();

   mymap.setView([data.location.lat, data.location.lng], 13);
   marker.remove();
   marker = L.marker([data.location.lat, data.location.lng], {icon: myIcon}).addTo(mymap);

   ipElement.textContent = data.ip;
   locationElement.textContent = `${data.location.city}, ${data.location.region} ${data.locatiopostalCode}`;
   timezoneElement.textContent = `UTC ${data.location.timezone}`;
   providerElement.textContent = data.isp;
}

const getCurrentLocationData = async () =>{
   const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}`;
   const request = await fetch(url);
   const data = await request.json();

   showMap(data.location.lat, data.location.lng);
   ipElement.textContent = data.ip;
   locationElement.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
   timezoneElement.textContent = `UTC ${data.location.timezone}`;
   providerElement.textContent = data.isp;     
}

const validateUrl = (url) => {
   const urlRegex = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/g
   return urlRegex.test(url) ? true : false;
}

const validateIP = (ip) => {
   const ipRegex = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/g;
   return ipRegex.test(ip) ? true : false
}