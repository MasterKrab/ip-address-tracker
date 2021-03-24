form.addEventListener("submit", e => {
   e.preventDefault();
   form.ip.validity.valid && getLocationData(form.ip.value);
});

document.addEventListener("DOMContentLoaded", getCurrentLocationData);