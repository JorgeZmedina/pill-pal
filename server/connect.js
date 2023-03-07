const express = require('express');
const app = express();
const drugLabel = require('../openfda/app');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../')));
app.use(express.static(path.join(__dirname, '../index')));

app.get('/', (req, res) => {
  const html = `

  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="style.css" rel="stylesheet" type="text/css" />
      <title>PillPal</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
      <script src="https://kit.fontawesome.com/92d5a3852c.js" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"></script>
      <style>
      @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    font-family: 'Raleway', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

/* this works DC */
h1 {
    font-size: 46px;
    line-height: 54px;
    color: #088178;
}

h4 {
    font-size: 20px;
    color: #088178;
}

/* still good DC */
p {
    font-size: 16px;
    color: #465b52;
    margin: 15px 0 20px 0;
}




body {
    width: 100%;
}
/* this is important DC */
#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 80px;
    background: rgb(144, 215, 255);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
}
/* i added this DC */
#header img {
    max-width: 100px;
    max-height: 100px;
}

#navbar {
    display: flex;
    align-items: center;
    justify-content: center;
}

#navbar li {
    list-style: none;
    padding: 0 20px;
    position: relative;
}

#navbar li a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    transition: 0.3s ease;
}

#navbar li a:hover,
#navbar li a.active {
    color: #088178;
}
/* this was making that underline show up. */
/* #navbar li a.active::after,
#navbar li a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;
} */

#navbar li a i {
    font-weight: 500;
    font-size: 20px;
}

#hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 80px;
    background: linear-gradient(rgba(0, 0, 0, 0.169), rgba(0, 0, 0, 0.226)), url('img/pillpal.jpg') no-repeat center / cover;
    /* background-image: url("img/pillpal.jpg"); */
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: top 25% right 0;
    background-color: rgba(0,0,0,0.5);
    
}

#hero h4 {
    padding-bottom: 15px;
}

#hero h1 {
    color: #088178;
}



/* 
/* About Page

#page-header.about-header {
    background-image: url("img/about/banner.png");
}

#about-head {
    display: flex;
    align-items: center;
}

#about-head img {
    width: 50%;
    height: auto;
}

#about-head div {
    padding-left: 40px;
}

#about-app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
}

#about-app .video {
    width: 70%;
    height: 100%;
    margin-top: 30px;
}

#about-app .video video {
    width: 100%;
    height: 100%;
    border-radius: 20px;
} */

@media (max-width:799px) {
    .section-p1 {
        padding: 40px;
    }

    #navbar {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        position: fixed;
        top: 0px;
        right: -300px;
        width: 300px;
        height: 100vh;
        background: #E3E6F3;
        box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
        transition: 0.3s;
        padding: 80px 0 0 10px;
    }

    #navbar li {
        margin-bottom: 25px;
    }

    #navbar.active {
        right: 0;
    }

    #mobile {
        display: flex;
    }

    #mobile i {
        color: #1a1a1a;
        font-size: 24px;
        padding-left: 20px;
    }

    #bar {
        display: initial;
    }

    #close {
        display: initial;
        font-size: 24px;
        position: absolute;
        top: 30px;
        left: 30px;
        color: #222;
    }

    #lg-bag,
    #lg-search {
        display: none;
    }

    #hero {
        padding: 0 80px;
        height: 70vh;
        background-position: top 30% right 30%;
    }

    #feature {
        justify-content: center;
    }

    #feature .fe-box {
        margin: 15px;
    }

    #product1 .pro-container {
        justify-content: center;
    }

    #product1 .pro {
        margin: 15px;
    }

    #banner {
        height: 20vh;
    }

    #sm-banner .banner-box {
        min-width: 100%;
        height: 30vh;
        padding: 30px;
    }

    #banner3 {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 40px;
    }

    #banner3 .banner-box {
        width: 28%;
    }
/* 
    /* Contact Page 
    #form-details {
        padding: 40px;
    }

    #form-details form {
        width: 50%;
    } */
}

@media (max-width:477px) {
    .section-p1 {
        padding: 20px;
    }

    h1 {
        font-size: 38px;
    }

    h2 {
        font-size: 32px;
    }

    #header {
        padding: 10px 30px;
    }

    #hero {
        padding: 0 20px;
        height: 70vh;
        background-position: 55%;
    }
}
    /* Contact Page */
    /* #contact-details .details {
        width: 100%;
        padding-bottom: 30px;
    }

    #contact-details .map {
        width: 100%;
    }

    #contact-details {
        flex-wrap: wrap;
    }

    #form-details {
        margin: 10px;
        padding: 30px 10px;
        flex-wrap: wrap;
    }

    #form-details form {
        width: 100%;
        padding-bottom: 30px;
    }
} */
/* HERO TEXT DC */
.herotext {
    position: static;
    width: 50%;
}
.searchsection {
    padding-top: 50px;
    padding-bottom: 300px;
}
/* footer starts here DC */

.footer {
    background: rgb(144, 215, 255);
    padding: 50px 0;
}

.footer p {
    color: azure;
}

.footer .item-social>a {
    font-size: 24px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #ccc;
    margin-left: 10px;
    margin-top: 22px;
    color: inherit;
    opacity: 0.75;
}

.footer .copyright {
    margin-top: 14px;
    margin-bottom: 0;
    font-size: 13px;
    opacity: 0.6;
    color: white;
}

.footer .item-social {
    text-align: center;
}

.footer .item-social>a:hover {
    opacity: 0.25;
}

.footer .item-social a {
    color: white;
}

.footer .mailinglist {
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-bottom: 20px;
}
#Email {
    padding-right: 20px;
}
.submit {
    margin-top: 10px;
    background-color:rgb(225, 202, 150);
}

/* footer ends here  */

      </style>
  
  
  </head>
  
  <body>
  
      <section id="header">
          <a href="#"><img src="img/pillpalbig.png" class="logo" alt=""></a>
  
          <div>
              <ul id="navbar">
                  <li><a class="active" href="index.html">Home</a></li>
                  <li><a href="ggg.html">Contact</a></li>
              </ul>
          </div>
      </section>
  
      <section id="hero">
          <h1>Pillpal</h1>
          <h4>Your pocket-sized pharmacy assistant</h4>
          <p class="herotext">Pillpal is a user-friendly website that provides easy access to publicly available FDA data
              on prescription drugs. With Pillpal, users can quickly look up information on medications, including
              dosages, side effects, and warnings. The app is designed to help users stay informed and make more informed
              decisions about their health</p>
          <h4>Powered by OpenFDA</h4>
      </section>
  
  <section class="searchsection">
      <form action="/search" method="POST">
          <h1>Medication Checker</h1>
          <input type="text" name="drug" placeholder="Enter a drug name">
          <button class="searchbutton" type="submit">Search</button>
          <p>${html}</p>
      </form>
  </section>
      <footer class="footer">
          <p>DISCLAIMER: Pillpal provides publicly available FDA data on drugs for informational purposes only. The
              information contained in this app is not intended to replace professional medical advice, diagnosis, or
              treatment. Users should not use Pillpal as a substitute for seeking medical advice from a qualified
              healthcare provider. Always consult with a healthcare provider before taking any medication or making
              any changes to your current treatment plan.
  
              The information provided in this app is based on publicly available data and is not intended to be a
              substitute for professional medical advice, diagnosis, or treatment. Pillpal does not endorse any
              specific medication, product, or treatment and is not responsible for any actions taken by users based
              on the information provided in the app.</p>
          <div class="item-social">
            <a href="https://www.facebook.com"><i class="icon ion-social-facebook" aria-label="facebook link"></i></a>
            <a href="https://www.twitter.com"><i class="icon ion-social-twitter" aria-label="twitter link"></i></a>
            <a href="https://www.snapchat.com"><i class="icon ion-social-snapchat" aria-label="snapchat link"></i></a>
            <a href="https://www.instagram.com"><i class="icon ion-social-instagram" aria-label="instagram link"></i></a>
          <p class="copyright">Company Name © 2023</p>
      </div>
        </footer>
     
  
  
      <script src="script.js"></script>
  
  </body>
  
  </html>

  `;

  res.send(html);
});

app.post('/search', (req, res) => {
  const drug = req.body.drug;
  drugLabel(drug, (error, result) => {
    if (error) {
      res.send({ error });
    } else {
      const html = `
          <p>Here are the active ingredients: ${result.activeIngredient}</p>
          <p>Here are the inactive ingredients: ${result.inactiveIngredient}</p>
          <p>Purpose of the drug: ${result.purpose}</p>
          <p>WARNINGS: ${result.warnings}</p>
          <p>Dosage Information: ${result.dosage}</p>
      `;

      res.send(`
      <html lang="en">
  
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link href="style.css" rel="stylesheet" type="text/css" />
          <title>PillPal</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
          <script src="https://kit.fontawesome.com/92d5a3852c.js" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.7/handlebars.min.js"></script>
          <style>
          @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
    
    * {
        font-family: 'Raleway', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        scroll-behavior: smooth;
    }
    
    /* this works DC */
    h1 {
        font-size: 46px;
        line-height: 54px;
        color: #088178;
    }
    
    h4 {
        font-size: 20px;
        color: #088178;
    }
    
    /* still good DC */
    p {
        font-size: 16px;
        color: #465b52;
        margin: 15px 0 20px 0;
    }
    
    
    
    
    body {
        width: 100%;
    }
    /* this is important DC */
    #header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 80px;
        background: rgb(144, 215, 255);
        position: sticky;
        top: 0;
        left: 0;
        z-index: 999;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    }
    /* i added this DC */
    #header img {
        max-width: 100px;
        max-height: 100px;
    }
    
    #navbar {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    #navbar li {
        list-style: none;
        padding: 0 20px;
        position: relative;
    }
    
    #navbar li a {
        text-decoration: none;
        font-size: 16px;
        font-weight: 600;
        color: #1a1a1a;
        transition: 0.3s ease;
    }
    
    #navbar li a:hover,
    #navbar li a.active {
        color: #088178;
    }
    /* this was making that underline show up. */
    /* #navbar li a.active::after,
    #navbar li a:hover::after {
        content: "";
        width: 30%;
        height: 2px;
        background: #088178;
        position: absolute;
        bottom: -4px;
        left: 20px;
    } */
    
    #navbar li a i {
        font-weight: 500;
        font-size: 20px;
    }
    
    #hero {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 0 80px;
        background: linear-gradient(rgba(0, 0, 0, 0.169), rgba(0, 0, 0, 0.226)), url('img/pillpal.jpg') no-repeat center / cover;
        /* background-image: url("img/pillpal.jpg"); */
        width: 100%;
        height: 90vh;
        background-size: cover;
        background-position: top 25% right 0;
        background-color: rgba(0,0,0,0.5);
        
    }
    
    #hero h4 {
        padding-bottom: 15px;
    }
    
    #hero h1 {
        color: #088178;
    }
    
    @media (max-width:799px) {
        .section-p1 {
            padding: 40px;
        }
    
        #navbar {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            position: fixed;
            top: 0px;
            right: -300px;
            width: 300px;
            height: 100vh;
            background: #E3E6F3;
            box-shadow: 0 40px 60px rgba(0, 0, 0, 0.1);
            transition: 0.3s;
            padding: 80px 0 0 10px;
        }
    
        #navbar li {
            margin-bottom: 25px;
        }
    
        #navbar.active {
            right: 0;
        }
    
        #mobile {
            display: flex;
        }
    
        #mobile i {
            color: #1a1a1a;
            font-size: 24px;
            padding-left: 20px;
        }
    
        #bar {
            display: initial;
        }
    
        #close {
            display: initial;
            font-size: 24px;
            position: absolute;
            top: 30px;
            left: 30px;
            color: #222;
        }
    
        #lg-bag,
        #lg-search {
            display: none;
        }
    
        #hero {
            padding: 0 80px;
            height: 70vh;
            background-position: top 30% right 30%;
        }
    
        #feature {
            justify-content: center;
        }
    
        #feature .fe-box {
            margin: 15px;
        }
    
        #product1 .pro-container {
            justify-content: center;
        }
    
        #product1 .pro {
            margin: 15px;
        }
    
        #banner {
            height: 20vh;
        }
    
        #sm-banner .banner-box {
            min-width: 100%;
            height: 30vh;
            padding: 30px;
        }
    
        #banner3 {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 0 40px;
        }
    
        #banner3 .banner-box {
            width: 28%;
        }
    /* 
        /* Contact Page 
        #form-details {
            padding: 40px;
        }
    
        #form-details form {
            width: 50%;
        } */
    }
    
    @media (max-width:477px) {
        .section-p1 {
            padding: 20px;
        }
    
        h1 {
            font-size: 38px;
        }
    
        h2 {
            font-size: 32px;
        }
    
        #header {
            padding: 10px 30px;
        }
    
        #hero {
            padding: 0 20px;
            height: 70vh;
            background-position: 55%;
        }
    }
        /* Contact Page */
        /* #contact-details .details {
            width: 100%;
            padding-bottom: 30px;
        }
    
        #contact-details .map {
            width: 100%;
        }
    
        #contact-details {
            flex-wrap: wrap;
        }
    
        #form-details {
            margin: 10px;
            padding: 30px 10px;
            flex-wrap: wrap;
        }
    
        #form-details form {
            width: 100%;
            padding-bottom: 30px;
        }
    } */
    /* HERO TEXT DC */
    .herotext {
        position: static;
        width: 50%;
    }
    .searchsection {
        padding-top: 50px;
        padding-bottom: 300px;
    }
    /* footer starts here DC */
    
    .footer {
        background: rgb(144, 215, 255);
        padding: 50px 0;
    }
    
    .footer p {
        color: azure;
    }
    
    .footer .item-social>a {
        font-size: 24px;
        width: 40px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        border: 1px solid #ccc;
        margin-left: 10px;
        margin-top: 22px;
        color: inherit;
        opacity: 0.75;
    }
    
    .footer .copyright {
        margin-top: 14px;
        margin-bottom: 0;
        font-size: 13px;
        opacity: 0.6;
        color: white;
    }
    
    .footer .item-social {
        text-align: center;
    }
    
    .footer .item-social>a:hover {
        opacity: 0.25;
    }
    
    .footer .item-social a {
        color: white;
    }
    
    .footer .mailinglist {
        color: white;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding-bottom: 20px;
    }
    #Email {
        padding-right: 20px;
    }
    .submit {
        margin-top: 10px;
        background-color:rgb(225, 202, 150);
    }
    
    /* footer ends here  */
    
          </style>
      
      
      </head>
      
      <body>
      
          <section id="header">
              <a href="#"><img src="img/pillpalbig.png" class="logo" alt=""></a>
      
              <div>
                  <ul id="navbar">
                      <li><a class="active" href="index.html">Home</a></li>
                      <li><a href="ggg.html">Contact</a></li>
                  </ul>
              </div>
          </section>
      
          <section id="hero">
              <h1>Pillpal</h1>
              <h4>Your pocket-sized pharmacy assistant</h4>
              <p class="herotext">Pillpal is a user-friendly website that provides easy access to publicly available FDA data
                  on prescription drugs. With Pillpal, users can quickly look up information on medications, including
                  dosages, side effects, and warnings. The app is designed to help users stay informed and make more informed
                  decisions about their health</p>
              <h4>Powered by OpenFDA</h4>
          </section>
      
      <section class="searchsection">
          <form action="/search" method="POST">
              <h1>Medication Checker</h1>
              <input type="text" name="drug" placeholder="Enter a drug name">
              <button class="searchbutton" type="submit">Search</button>
              <p>${html}</p>
          </form>
      </section>
          <footer class="footer">
              <p>DISCLAIMER: Pillpal provides publicly available FDA data on drugs for informational purposes only. The
                  information contained in this app is not intended to replace professional medical advice, diagnosis, or
                  treatment. Users should not use Pillpal as a substitute for seeking medical advice from a qualified
                  healthcare provider. Always consult with a healthcare provider before taking any medication or making
                  any changes to your current treatment plan.
      
                  The information provided in this app is based on publicly available data and is not intended to be a
                  substitute for professional medical advice, diagnosis, or treatment. Pillpal does not endorse any
                  specific medication, product, or treatment and is not responsible for any actions taken by users based
                  on the information provided in the app.</p>
              <div class="item-social">
                <a href="https://www.facebook.com"><i class="icon ion-social-facebook" aria-label="facebook link"></i></a>
                <a href="https://www.twitter.com"><i class="icon ion-social-twitter" aria-label="twitter link"></i></a>
                <a href="https://www.snapchat.com"><i class="icon ion-social-snapchat" aria-label="snapchat link"></i></a>
                <a href="https://www.instagram.com"><i class="icon ion-social-instagram" aria-label="instagram link"></i></a>
              <p class="copyright">Company Name © 2023</p>
          </div>
            </footer>
         
      
      
          <script src="script.js"></script>
      
      </body>
      
      </html>
      `);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});






