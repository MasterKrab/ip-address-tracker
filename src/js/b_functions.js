const showMap = (lat, lng) =>{
   map.textContent = "";

   mymap = L.map('mapid', { zoomControl: false }).setView([lat, lng], 13);

   const titleUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
   const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
   const tiles = L.tileLayer(titleUrl, {attribution});
   
   tiles.addTo(mymap);
   marker = L.marker([lat, lng], {icon: myIcon}).addTo(mymap);
}

const getLocationData = (ip) =>{
   const url = `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ip}`;

   fetch(url)
      .then(response => response.json())
      .then(data => {
         mymap.setView([data.location.lat, data.location.lng], 13);
         marker.remove();
         marker = L.marker([data.location.lat, data.location.lng], {icon: myIcon}).addTo(mymap);

         ipElement.textContent = data.ip;
         locationElement.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
         timezoneElement.textContent = `UTC ${data.location.timezone}`;
         providerElement.textContent = data.isp;
      })
      .catch(form.ip.setCustomValidity("Invalid IP adress"));
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