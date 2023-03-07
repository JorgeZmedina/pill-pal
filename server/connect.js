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
    <html>
    <head>
      <title>Pill Pal</title>
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

h1 {
    font-size: 50px;
    line-height: 64px;
    color: #222;
}

h2 {
    font-size: 46px;
    line-height: 54px;
    color: #088178;
}

h4 {
    font-size: 20px;
    color: #088178;
}

h6 {
    font-weight: 700;
    font-size: 12px;
}

p {
    font-size: 16px;
    color: #465b52;
    margin: 15px 0 20px 0;
}

button.normal {
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
}

button.white {
    background: transparent;
    padding: 11px 18px;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    transition: 0.2 ease;
}

.section-p1 {
    padding: 40px 80px;
}

.section-m1 {
    margin: 40px 0;
}

body {
    width: 100%;
}

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

#navbar li a.active::after,
#navbar li a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;
}

#navbar li a i {
    font-weight: 500;
    font-size: 20px;
}

#mobile {
    display: none;
    align-items: center;
}

#close {
    display: none;
}

#hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 80px;
    background-image: url("img/pillpal.jpg");
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: top 25% right 0;
}

#hero h4 {
    padding-bottom: 15px;
}

#hero h1 {
    color: #088178;
}

#hero button {
    background-image: url("img/button.png");
    background-color: transparent;
    color: #088178;
    border: 0;
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
}

      </style>
    </head>
    
    <body>

    <section id="header">
        <a href="#"><img src="img/logo.png" class="logo" alt=""></a>

        <div>
            <ul id="navbar">
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li id="lg-bag"><a href="cart.html"><i class="far fa-shopping-bag"></i></a></li>
                <a href="#" id="close"><i class="far fa-times"></i></a>
            </ul>
        </div>
        <div id="mobile">
            <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
            <i id="bar" class="fas fa-outdent"></i>
        </div>
    </section>

    <section id="hero">
        <h1>Pillpal</h1>
        <h4>Your pocket-sized pharmacy assistant</h4>
        <p>Pillpal is a user-friendly mobile app that provides easy access to publicly available FDA data on prescription drugs. With Pillpal, users can quickly look up information on medications, including dosages, side effects, and warnings. The app is designed to help users stay informed and make more informed decisions about their health</p>
        <button>Explore</button>
    </section>

        
    <form action="/search" method="POST">
            <h1>Medication Checker</h1>
            <input type="text" name="drug" placeholder="Enter a drug name">
            <button type="submit">Search</button>
            <p>${html}</p>

    </form>

    <div class="container">
    <h1>Pill Pal</h1>
    <form id="search-form" action="/search" method="post">
      <input type="text" name="drug" placeholder="Enter medication name...">
      <button type="submit">Search</button>
    </form>
    <div id="result"></div>
  </div>
  <script src="/script.js"></script>
</body>
</html>




    

    <footer class="section-p1">
        <div class="col">
            <img class="logo" src="img/logo.png" alt="">
            <p>DISCLAIMER: Pillpal provides publicly available FDA data on drugs for informational purposes only. The information contained in this app is not intended to replace professional medical advice, diagnosis, or treatment. Users should not use Pillpal as a substitute for seeking medical advice from a qualified healthcare provider. Always consult with a healthcare provider before taking any medication or making any changes to your current treatment plan.

                The information provided in this app is based on publicly available data and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Pillpal does not endorse any specific medication, product, or treatment and is not responsible for any actions taken by users based on the information provided in the app.</p>
  
        </div>
    </footer>


      
</body>

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
        <html>
        <head>
          <title>Search Result</title>
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

h1 {
    font-size: 50px;
    line-height: 64px;
    color: #222;
}

h2 {
    font-size: 46px;
    line-height: 54px;
    color: #088178;
}

h4 {
    font-size: 20px;
    color: #088178;
}

h6 {
    font-weight: 700;
    font-size: 12px;
}

p {
    font-size: 16px;
    color: #465b52;
    margin: 15px 0 20px 0;
}

button.normal {
    font-size: 14px;
    font-weight: 600;
    padding: 15px 30px;
    color: #000;
    background-color: #fff;
    border-radius: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    transition: 0.2s;
}

button.white {
    background: transparent;
    padding: 11px 18px;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    outline: none;
    border: 1px solid #fff;
    cursor: pointer;
    transition: 0.2 ease;
}

.section-p1 {
    padding: 40px 80px;
}

.section-m1 {
    margin: 40px 0;
}

body {
    width: 100%;
}

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

#navbar li a.active::after,
#navbar li a:hover::after {
    content: "";
    width: 30%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 20px;
}

#navbar li a i {
    font-weight: 500;
    font-size: 20px;
}

#mobile {
    display: none;
    align-items: center;
}

#close {
    display: none;
}

#hero {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0 80px;
    background-image: url("img/pillpal.jpg");
    width: 100%;
    height: 90vh;
    background-size: cover;
    background-position: top 25% right 0;
}

#hero h4 {
    padding-bottom: 15px;
}

#hero h1 {
    color: #088178;
}

#hero button {
    background-image: url("img/button.png");
    background-color: transparent;
    color: #088178;
    border: 0;
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;
}

          </style>
        </head>
        <body>

        <section id="header">
            <a href="#"><img src="img/logo.png" class="logo" alt=""></a>
    
            <div>
                <ul id="navbar">
                    <li><a class="active" href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li id="lg-bag"><a href="cart.html"><i class="far fa-shopping-bag"></i></a></li>
                    <a href="#" id="close"><i class="far fa-times"></i></a>
                </ul>
            </div>
            <div id="mobile">
                <a href="cart.html"><i class="far fa-shopping-bag"></i></a>
                <i id="bar" class="fas fa-outdent"></i>
            </div>
        </section>
    
        <section id="hero">
            <h1>Pillpal</h1>
            <h4>Your pocket-sized pharmacy assistant</h4>
            <p>Pillpal is a user-friendly mobile app that provides easy access to publicly available FDA data on prescription drugs. With Pillpal, users can quickly look up information on medications, including dosages, side effects, and warnings. The app is designed to help users stay informed and make more informed decisions about their health</p>
            <button>Explore</button>
        </section>
    
            
        <form action="/search" method="POST">
                <h1>Medication Checker</h1>
                <input type="text" name="drug" placeholder="Enter a drug name">
                <button type="submit">Search</button>
                <p>${html}</p>
    
        </form>

    </body>
    </html>
    
    
    
    
        
    
        <footer class="section-p1">
            <div class="col">
                <img class="logo" src="img/logo.png" alt="">
                <p>DISCLAIMER: Pillpal provides publicly available FDA data on drugs for informational purposes only. The information contained in this app is not intended to replace professional medical advice, diagnosis, or treatment. Users should not use Pillpal as a substitute for seeking medical advice from a qualified healthcare provider. Always consult with a healthcare provider before taking any medication or making any changes to your current treatment plan.
    
                    The information provided in this app is based on publicly available data and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Pillpal does not endorse any specific medication, product, or treatment and is not responsible for any actions taken by users based on the information provided in the app.</p>
      
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