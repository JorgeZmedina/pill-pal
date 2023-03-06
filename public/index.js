console.log("here", "💩");


// gsap.registerPlugin(ScrollTrigger);
// // REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 80%",
//     end: "bottom 20%",
//     markers: true,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: -100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });



axios.get('http://localhost:3000/drugs')
  .then(response => {
    console.log(response.data);
    // Use the response data here
  })
  .catch(error => {
    console.error(error);
  });

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent the form from submitting normally
    const formData = new FormData(contactForm); // get the form data
    axios.post('http://localhost:3000/messages', formData) // send a POST request with the form data to the backend API endpoint
      .then(response => {
        console.log(response.data);
        alert('Your message has been sent.'); // show an alert to the user to indicate that the message has been sent successfully
        // clear the form
        contactForm.reset();
      })
      .catch(error => {
        console.error(error);
        alert('An error occurred while sending your message.'); // show an alert to the user to indicate that an error occurred
      });
  });
