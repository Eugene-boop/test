let form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  const body = {};
  formData.forEach((val, key) => {
    if (!key.startsWith('mask')) {
      body[key] = val;
    }
  });  

  postData(formData)
    .then(response => {
      if (response.status !== 200)  throw new Error(response.statusText);
      console.log('Ура');
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
    .finally( () => {

    });

});

const postData = data => fetch('./mail.php', {
  method: 'POST',
  body: data, 
  mode:"cors"
});
