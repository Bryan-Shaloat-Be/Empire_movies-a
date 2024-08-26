
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

Backend express requirements and dependencies

- [Express -- version: 4.19.2](https://expressjs.com/en/starter/installing.html)

- [bcrypt -- version: 5.1.1](https://www.npmjs.com/package/bcrypt)

- [cors -- version: 2.8.5](https://www.npmjs.com/package/cors)

- [dotenv -- version: 16.4.5](https://www.npmjs.com/package/dotenv)

- [jsonwebtoken -- version: 9.0.2](https://www.npmjs.com/package/jsonwebtoken)

- [mssql -- version: 11.0.1](https://www.npmjs.com/package/mssql)

- [sequelize -- version: 6.37.3](https://sequelize.org/)

- [tedious -- version: 18.3.0](https://www.npmjs.com/package/tedious)

Backend ASP.Net core requirements and dependencies

- [Mcr.microsoft.com dotnet sdk:8.0](https://dotnet.microsoft.com/es-es/download/dotnet/8.0)

- [cors -- version: 2.8.5](https://www.npmjs.com/package/cors)

- [Microsoft.AspNetCore.Authentication.JwtBearer -- version: 8.0.7](https://learn.microsoft.com/es-es/dotnet/api/microsoft.aspnetcore.authentication.jwtbearer?view=aspnetcore-8.0)

- [Microsoft.Data.SqlClient -- version: 5.2.1](https://www.nuget.org/packages/Microsoft.Data.SqlClient)

- [Microsoft.AspNetCore.OpenApi -- version: 8.0.7](https://www.nuget.org/packages/Microsoft.AspNetCore.OpenApi)

- [Microsoft.EntityFrameworkCore.SqlServer -- version:  8.0.7](https://www.nuget.org/packages/Microsoft.EntityFrameworkCore.SqlServer/)

- [Microsoft.EntityFrameworkCore.Tools -- version:  8.0.7](https://www.nuget.org/packages)

- [Swashbuckle.AspNetCore" -- version:  6.4.0](https://www.nuget.org/packages/Swashbuckle.AspNetCore)



## Installation the project

 Angular.
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
ASP.Net core
1. You need to clone the proyect (repository)

2. Navigate on you terminal to the folder proyect
```bash
cd Server_ASP.net/ServerAsp
```
3. Install all you need
```bash
install all dependencies with dotnet
```
4. Run the proyect in other terminal 
```bash
dotnet run 
```


## Proyect images

Descktop
![Home image](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Inicio-Empire-movies.PNG)

- [Category section ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Categorias_peliculas_Empire-movies.PNG)

- [Card movie Descktop ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Tarjeta-Pelicula-Empire-Movies.PNG)

- [Login Descktop ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Login-Empire-Movies.PNG) 

- [Register Descktop ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Register-Empire_movies.PNG) 

- [Menu-category Descktop ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Categorias-menu-Empire-movies.PNG)

Movil-Resposive

- [Home Movil-Resposive ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Inicio-Resposivo-Empire-Movies.PNG)

- [Menu Movil-Resposive ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Menu-Responsivo-Empire-Movies.PNG) 

- [Login Movil-Resposive ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Login-resposivo-Empire-movies.PNG) 

- [Register Movil-Resposive](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/Register-Responsivo-Empire_movies.PNG) 

- [Card movie Movile-Resposive ](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/proyect%20img/tarjeta-resposivo-pelicula.PNG)


## Test images

- [Test](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/Test/Testing.PNG)

- [Code Coverage](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/Test/Code-Coverage-Testing.PNG)

## Database Diagram

- [Entity relationship Model](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/Entity%20relationship%20diagram/Modelo_Entidad_Relacion.PNG)

- [Entity relationship Diagram](https://github.com/Bryan-Shaloat-Be/Empire_movies-a/blob/development/public/Proyect%20img/Entity%20relationship%20diagram/Diagrama_Entidad_Relacion.PNG)
## Database

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
- Categories
## Backend 

A backend was created with APIs that are consumed by the client (angular) of the project.  It contains among them the entire login system, favorites, view Movies and series and filters of categories. [YOU NEED TO USE DATABASE TO STAR THE PROYECT. THE PROYECT HAVE GUARDS TO PROTECT CLIENT ROUTES]

Users

The entire authentication and registration and login system is implemented, including session times, verification token and guards to protect client routes (this is for ASP.net core backend)
```bash
POST/ api/RegisterUser <--- register
```
```bash
GET/ api/RegisterUser  <--- login
```

Favorites

The entire system to add, delete and show each user's favorites
```bash
GET/ api/Favorites
```
```bash
POST/ api/Favorites/add
```
```bash
POST/ api/Favorites/delete
```

Media

The entire system to show all movies and series
```bash
GET/ api/Media/Movies
```
```bash
GET/ api/Media/Series
```

Category

The entire system to show all movies and series with filters of categories

```bash
GET/ api/Category/Movies
```
```bash
GET/ api/Category/Series
```
## Kubernetes and docker

Docker images

- FrontendImage -- Angular and npm
- BackendImage  -- ASP.NET CORE

Kubernetes Files/Cofiguration/Yaml

You can use a minikube to test the project. Requirements you must have to test with minikube

```bash
minikube 
```
```bash
minikube addons enable ingress
```
```bash
minikube addons enable metrics-server
```
Kubernetes yaml list.

- NameSpaceEmpire 
- DeployFront
- DeployBack
- Ingress
- Services
- LimitRange
- Horizontal Autoscaler

## Process Sprint 4

Data Base

- Creating the database was not much of a problem (simple) but when using it I made some small changes to the restrictions for the favorite operations. 

- There are other tables in the database such as: Seasons, Chapters, Role and History that are not used at the moment since they are designed for the future of the project.

Backend

- Creating the backend was a challenge but as I created the routes and controllers it became easier. The entire user registration and login system was implemented with reactive forms, route protection, authentication tokens and more. 
A small system was created to add favorites, delete and view. 
The basic consumption to show all movies and series, as well as a category filter.  Everything is already connected and working together with the project. 
Client --- Server -- Database

## Process Sprint 6


Database

The normalize to database was easy because the structure of my database is small and did not contain many columns that would allow it to be broken down into more tables except for the category table, which was the change I made for normalization. 
The normalization of the database seems fantastic to me. I think it helps a lot with the management of the tables and the records themselves to avoid overwrites and more, so it is something that I will be using from here to the future :)

Backend ASP.net

The process to migrate or create a new backend with C# ASP.NET CORE was simple since all the configuration was ready on the front end to consume APIs. These APIs were easy to implement even with slight improvements in them and a better structure than in Express. The complicated thing at the beginning was understanding the entire ASP.net mvc structure since it was different from Express and even from PHP with Laravel, which is something I usually use for web creation. In the end I liked the structure more than express and I think I would be using it to create APIs in future projects.

Kubernetes and Docker

The use of these technologies was something new for me and challenging. The use of Docker was essential to understand Kubernetes, so it took me time to learn Docker and everything about containers and images. I managed to create the images of my project (Backend and Frontend) and run them effectively in the containers.

I started with Kubernetes, the configuration was not complicated to create, the tools it provides are fantastic, the management seemed very good to me from what I understand the use of this technology for horizontal scaling in the future. I had some complications with the port issue but thanks to my firewall that did not allow me to access certain ports or minikube IP. In the same way, the configuration for the operation and management of the application with kubernetes was achieved.


## Sprint Review 2 and 3

| What did I do right? | what I didn't do well| What can i do differently? 
|----|-------------------|------|
| Implementation with Angular came out correctly| Problems whit design and css |Improve ui/ux. improve responsive

## Sprint Review 4

| What did I do right? | what I didn't do well| What can i do differently? 
|----|-------------------|------|
|The complete implementation of express with the database as well as the consumption of the database in the angular project (client)|Problems with specs or tests and middleware|Be careful with tests and improve alerts and messages to rectify that an action such as registrations or logins was carried out|

## Sprint Review 6

| What did I do right? | what I didn't do well| What can i do differently? 
|----|-------------------|------|
| Implent all api with ASP.NET CORE was succesfully and dont have problems to scale or Implent more apis and functions. Docker configurations image was succesfully. Kubernetes configurations was succesfully| I had problems with minikube and the use of its IP and ports to observe the application so I took some alternatives to make sure it worked which is why for it to run at least on my PC it is necessary to use minikube tunnels and some others details| I think that at the beginning of creating a complete backend, the normalization of the database should be taken into consideration so as not to work twice.Continue learning Kubernetes and Docker to achieve the most optimal configurations

## Future improvements

The proyect have some sections to future implementations to improve the proyect.

- History Section
- Roles on users in the application
- Season and chapers section
- Section to play and wach the movies and series
- Improve UI/UX to give better user expirence
- Improve section of recomendations

## Problems and Warnings

Warnings

- Better middleware needs to be implemented for greater security.
- Carefull with minikube configuration to use kubernetes.
- Carefull with http request in angular

problems

- Have a problem with firsts route you need to enter at http://localhost:4200/auth/login not at http://localhost:4200
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


Any constructive feedback will be welcomed and appreciated. send it to me at the following email brayanbarraganpulido@gmail.com .
