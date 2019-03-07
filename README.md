### Overview
Node.js and Express.js server used to make a 'FriendFinder; or very simple dating app. 

# FriendFinder:
The site utilizes a survey form that will make comparisons between your answers and those given by other users.  
The app will then display and picture of the user with the closest match overall from the survey answers.  

- - -

### Setup
* Ten (10) survey question were chosen with answers scaled from 1 to 5 based on how much the user agrees or disagrees with
the question.  
Versions utilized:
Node-js v10.15.2  
Node-Express 4.16.4
Heroku/7.22.4 darwin-x64 node-v11.10.1


### Running Locally:
* Make sure you have Node.js and Heroku installed.
* Use git clone https://github.com/doctoron/FriendFinder or clone your own fork
* cd FriendFinder
* npm install
* npm start
* Your app should now be running on localhost:8080.

### Deploying to Heroku
## Be sure to create a .gitignore file in the root folder and add node_modules before continuing.
    * From the bash terminal:
    `$ heroku create (connects your repo with Heroku)`
    * Navigate to www.heroku.com and login with your credentials.
    * Find your Heroku app's name in the dashboard and click on it.
    * Make sure you select the free option, then click the Provision button
        `$ git push heroku master`
        `$ heroku open`
    * If the app doesn't come up, proceed to troubleshooting:
    `https://devcenter.heroku.com/articles/troubleshooting-node-deploys#check-your-buildpack`


### Specifications met
## This app suits the following basic specifications:
    * The `server.js` file requires the express and path npm packages.
    * The file `htmlRoutes.js` includes two routes:
    1. GET Route to `/survey` to display the survey page
    2. A default route `*` that leads to home.html displays the FriendFinder home page.
    3. POST routes `/api/friends handles incoming survey results and contains the survey comparison logic.
    4. Data is saved inside of `/data/friends and a display of JSON contents using API Friends List link on the home page.

## Calculations based on absolute value of the differences
    Use of Math.abs() implemented to achieve compatibility calculations.  This function strips negative assignments 
    needed to make the comparisons possible. 

### Hosting on Heroku
https://tranquil-scrubland-45654.herokuapp.com/
* Useful troubleshooting tools included logging:
- A logging function was created to confirm activity at the express terminal, however $ `heroku logs` provided invaluable information when the app did not initially deploy due to `const PORT = process.env.PORT | 8080; instead of 
const PORT = process.env.PORT || 8080;`

### Create a README.md
This `README.md` was created in compliance with the project spec and deployed to my repository as described. 

## BCS Submission
* The Heroku-deployed and Github links were supplied on the BCS hub.
* A link to the Github Repository was provided here `https://github.com/doctoron/FriendFinder.git`

### Add To Your Portfolio
This project piece was added to https://doctoron.github.io/Bootstrap-Portfolio/ as specified.

- - -