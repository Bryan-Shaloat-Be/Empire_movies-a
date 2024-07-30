
# Empire Movies 

Project created for viewing live movies with functions such as: Login, movie search and filters, detailed information about movies, space for favorites and more!
## Authors

- [Bryan Shaloat Be Barragan Pulido](https://github.com/Bryan-Shaloat-Be)


## How did I do the project?


The project was created following an angular course. I called the project Empire Movies to give it a theme. The entire design was centered around that theme. Logo, font and colors referring to the theme were placed.

We thought about the super basic requirements of an entertainment hub to give the best experience to the user.


## Technical requirements

The project was built with Angular, typescript, HTML5, CSS3 and nodejs

- [Angular -- version: 18.0.6](https://angular.dev/)
- [Nodejs -- version: 20.14.6](https://nodejs.org/en)
- [Typescript -- version: 5.4.5](https://www.typescriptlang.org/)
- [Rxjs -- version: 7.8.1](https://rxjs.dev/)

External libraries

- [Tailwind css -- version: 3.4.4](https://tailwindcss.com/)

Backend requirements and dependencies

- [Express -- version: 4.19.2](https://expressjs.com/en/starter/installing.html)

- [bcrypt -- version: 5.1.1](https://www.npmjs.com/package/bcrypt)

- [cors -- version: 2.8.5](https://www.npmjs.com/package/cors)

- [dotenv -- version: 16.4.5](https://www.npmjs.com/package/dotenv)

- [jsonwebtoken -- version: 9.0.2](https://www.npmjs.com/package/jsonwebtoken)

- [mssql -- version: 11.0.1](https://www.npmjs.com/package/mssql)

- [sequelize -- version: 6.37.3](https://sequelize.org/)

- [tedious -- version: 18.3.0](https://www.npmjs.com/package/tedious)



## Installation the project

 
1. You need to clone the proyect (repository)

2. Navigate on you terminal to the folder proyect
```bash
cd empire-movies-a
```
3. Install all you need 

```bash
npm install
```
4. Run de proyect
```bash
ng serve
```


## Proyect images

Descktop
![Home image](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Inicio-Empire-movies.PNG)

- [Category section ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Categorias_peliculas_Empire-movies.PNG)

- [Card movie Descktop ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Tarjeta-Pelicula-Empire-Movies.PNG)

- [Login Descktop ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Login-Empire-Movies.PNG) <--- NEW

- [Register Descktop ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Register-Empire_movies.PNG) <--- NEW

- [Menu-category Descktop ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Categorias-menu-Empire-movies.PNG)

Movil-Resposive

- [Home Movil-Resposive ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Inicio-Resposivo-Empire-Movies.PNG)

- [Menu Movil-Resposive ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Menu-Responsivo-Empire-Movies.PNG) < -- NEW

- [Login Movil-Resposive ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Login-resposivo-Empire-movies.PNG) < -- NEW

- [Register Movil-Resposive](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Register-Responsivo-Empire_movies.PNG) <-- NEW

- [Card movie Movile-Resposive ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/tarjeta-resposivo-pelicula.PNG)


## Test images

- [Test](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/Test/New%20test-Results-Sprint-4.jpeg)

- [Code Coverage](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/Test/New%20test-Code-Coverage-Sprint-4.jpeg)

## Database Diagram

- [Entity relationship Model](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/Entity%20relationship%20diagram/Modelo_Entidad_Relacion.PNG)

- [Entity relationship Diagram](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/Entity%20relationship%20diagram/Diagrama_Entidad_Relacion.PNG)
## Data Base

A database created with SQL Management Studio and SQL Server was used.

- SQL Server -- version: 16.0.1000.6
- SQL Management Studio 20

Tables

- Users
- Rol
- Movies
- Series
- Seasson
- Chapers
- History
- Favorites
## Backend 


A backend was created with APIs that are consumed by the client (angular) of the project.  It contains among them the entire login system, favorites, view Movies and series and filters of categories. [YOU NEED TO USE DATABASE TO STAR THE PROYECT. THE PROYECT HAVE GUARDS TO PROTECT CLIENT ROUTES]

Users

The entire authentication and registration and login system is implemented, including session times, verification token and guards to protect client routes.
```bash
POST/ register/register
```
```bash
POST/ register/sesion  <--- login
```

Favorites

The entire system to add, delete and show each user's favorites
```bash
GET/ favorites/favorites
```
```bash
POST/ favorites/Addfavorites
```
```bash
POST/ favorites/deletefavorites
```

Media

The entire system to show all movies and series
```bash
GET/ movies/movies
```
```bash
GET/ movies/series
```

Category

The entire system to show all movies and series with filters of categories

```bash
GET/ category/MoviesC
```
```bash
GET/ category/SeriesC
```
## Process Sprint 4

Data Base

- Creating the database was not much of a problem (simple) but when using it I made some small changes to the restrictions for the favorite operations. 

- There are other tables in the database such as: Seasons, Chapters, Role and History that are not used at the moment since they are designed for the future of the project.

Backend

- Creating the backend was a challenge but as I created the routes and controllers it became easier. The entire user registration and login system was implemented with reactive forms, route protection, authentication tokens and more. 
A small system was created to add favorites, delete and view. 
The basic consumption to show all movies and series, as well as a category filter.  Everything is already connected and working together with the project. 
Client --- Server -- Database
## Sprint Review 2 and 3

| What did I do right? | what I didn't do well| What can i do differently? 
|----|-------------------|------|
| Implementation with Angular came out correctly| Problems whit design and css |Improve ui/ux. improve responsive

## Sprint Review 4

| What did I do right? | what I didn't do well| What can i do differently? 
|----|-------------------|------|
|The complete implementation of express with the database as well as the consumption of the database in the angular project (client)|Problems with specs or tests and middleware|Be careful with tests and improve alerts and messages to rectify that an action such as registrations or logins was carried out|

## Problems 

Have a problem with firsts route you need to enter at http://localhost:4200/auth/login not at http://localhost:4200
## Build

Run to build the project. The build artifacts will be stored in the dist/ directory.
```bash
ng build
```

## Running unit tests

Run to execute the unit tests via Karma.
```bash
ng test
```


## Feedback


Any constructive feedback will be welcomed and appreciated. send it to me at the following email bryanbarraganpulido@gmail.com
