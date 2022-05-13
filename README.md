# CRUD MTG Decklist

### About this repository

-> This is a simple CRUD developed so you can manage your Magic: The Gathering decks. In this API you can create, update and delete your decks; you may also create, update and delete the cards from those decks.

-> Above you'll find instructions on how to use this API locally. You have the option to use only the API (back-end), or use it together with a previous developed React app (front-end).

### Notices

-> Please note that this API is still under construction, so the code may have some apparently useless lines or methods. 

-> I do have the API running on cloud (Heroku), but not public announced. There are 2 reasons for that, it is still missing a login/authentication funcionality; and this is a small project, so my personal database may not handle well a lot of people using it. But if you want to see it working, contact me asking for the cloud hosted links.

-> The note above is the main reason why this document teaches how to use the API locally. As soon as the login/authentication is up, I'll update it giving the direct link to the hosted API to be used.

-> Any doubts, recomendatios, pull requests, or whatever(?), fell free to contact me. :)

## Using the API

  The API use the following paths.

  (Note that baseURL may be any database(as I'm not giving the hosted link yet), if running local it'd be something like http://localhost:3001)

  To reach Decks information:
  
  baseURL/deck <= Gets every deck

  baseURL/deck/:id <= Gets an specific deck

  To reach Cards information:

  baseURL/cartas <= Gets every card

  baseURL/cartas/:id <= Gets an specific card

## Using Locally

### API
  
  In case you already have a front-end, or want to develop your own, you can use the API alone. To do that just follow these fell steps:

  1. Clone the folder "api" to your computer;
  2. Use npm init (or your favorite package manager, in here I'll use npm as example) in your terminal;
  3. Use npm install in your terminal;
  4. In this API I'm using my own Postgres database, so you have to change to yours (you can use any database you want), so:
    4.1. Go to src/models.js;
    4.2. In the new Sequelize line (line 4), change the process.env.POSTGRES_LINK to the link to your database.
  5. Run the api using npm run dev (It will be using port 3001).

  And that's it, you are ready to go. 

  Obs.:
  There is a method GET, POST, PUT and DELETE for every class on the API. BUt if you want, you may check the API methods and elements on models.js and in the paste routes.

### API + Front (with React)

  I've already developed a simple front-end with React.js. If you want, fell free to use it to test the API.
  Just follow the steps:

  1 1. Clone both folders to your computer;
  2. Use npm init (or your favorite package manager, in here I'll use npm as example) in both folders;
  3. Use npm install in both folders;
  4. In this API I'm using my own Postgres database, so you have to change to yours (you can use any database you want), so:
    4.1. Go to api/src/models.js;
    4.2. In the new Sequelize line (line 4), change the process.env.POSTGRES_LINK to the link to your database.
  5. Run the api using npm run dev (It will be using port 3001).
  6. Run the React app by usin npm start.

  And that's it, you are ready to go. 

## TODO

  There are still some functionalities under development:

  1. Login and authentication system on the API. (Although some methods are ready in the API by now)
  2. Develop more front-end pages to sign-up and login.