form.addEventListener("submit", e => {
   e.preventDefault();

   if(validateIP(form.search.value)){
      getLocationData(form.search.value);
      return;
   }
   
   if(validateUrl(form.search.value)){
      const url = form.search.value.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im);
      getLocationData(url[1], "domain");
      return;
   };
});

document.addEventListener("DOMContentLoaded", getCurrentLocationData);