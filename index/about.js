
// const axios = require('axios');
// axios.get('http://localhost:3100/drugs')
//   .then(response => {
//     console.log(response.data);
//     // Use the response data here
//     alert('info')
//   })
//   .catch(error => {
//     console.error(error);

// const { application } = require("express");

//   });
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting normally
    console.log('test submit')
    const formData = new FormData(contactForm); // get the form data
    fetch('/drugs',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: 'testname',
        email: 'testemali',
        phone_number: 'test#',
        message: 'testmssg'
    })
        // headers: {
        //   'content-type': 'application.json; charset=UTF-8',
        
    })    .then(response => {
      console.log(response);
      alert('Your message has been sent.'); // show an alert to the user to indicate that the message has been sent successfully
      // clear the form
      contactForm.reset();
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while sending your message.'); // show an alert to the user to indicate that an error occurred
    });
    // send a POST request with the form data to the backend API endpoint
   
  });