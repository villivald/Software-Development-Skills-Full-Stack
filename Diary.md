#### Sofware Development Skills

###### Maxim Villivald, 1901968
--- 


### LEARNING DIARY, Full-Stack MODULE

###### *17.11.2021*
Today I finally started this course by checking the general information and exploring the main objectives and the rules of completion. I chose especially the Full Stack module because I already have some experience with frontend development (HTML, CSS, JS, React JS). For the moment, I want to combine my previous knowledge with the new studies related to Node, Mongo, and Express.

I did not have any problems with the setting of an environment. At the moment, I use the VS Code as an editor and GitHub as a platform for my git-repository. I am also familiar with Git as a technology since I recently took a Git Open course from the University of Tampere.


###### *18.11.2021*
I created the git repository [https://github.com/villivald/Software-Development-Skills-Full-Stack](https://github.com/villivald/Software-Development-Skills-Full-Stack) on my GitHub with an initial commit. I decided to use several add-ons for my VS Code setup, e.g., Prettier and ESLint, etc.

After initial settings, I started to watch the first part of the tutorial – NodeJS. I installed Node v16.13.0, actually, I already had a bit older version of Node, so I just updated it to the current version. After that, I tried to use the node in the terminal. It worked fine. I created the app.js file and put in some simple JavaScript code; I was able to successfully run this file from the terminal (node app.js). Then I created a package.json file with “npm init” command. 

 I learned how to work with files via Node using **Fs** System Module. Also, I got familiar with such modules as the **path** (getting filename, directory name, type of extension, etc.), **os** (getting platform, CPU, and memory info), **http** (allows you to create a simple http server), **url** (getting params of the URL address) and **events** (handling events).

Following the instructions, I created a Node web server that contains 3 test pages (including the error page) and CSS styles and deployed it to Heroku. It was quite an interesting exercise. Even though I knew some basics, the backend was always harder to understand for me. Finally, I did my second commit. Looking forward to continuing with the next section.
 
 
 ###### *20.11.2021*
 I have started to watch the second part of the tutorial, which is related to MongoDB. Since I have a Mac, I installed MongoDB via terminal using homebrew. The installation process was very simple. After the installation, I was able to successfully run the mongo shell. Then I have installed the MongoDB Compass as well.

 I have created the test database using Compass and then deleted it via terminal using ```the db.dropDatabase()``` command. Then I created a new database with ```use acme``` command, created a collection with ```db.createCollection(“posts”)```, and finally inserted some information into the database with ```db.posts.insert({…})```. Command ```db.posts.find().pretty()``` was helpful for viewing all the entries of posts collection. As the next step, I used Atlas for creating a cluster. Inside the settings of the cluster, I added a new user and an IP address.

Finally, it is time to make the third commit. Actually, this time there is no code to commit, so I will commit my tutorial notes.


##### *22.11.2021*
Today I started the third part of the course tutorials - Express JS. At first, I learned the basic syntax of Express and typical concepts such as middleware functions. I already had node and npm installed, which are required for Express as well, so, there were not any problems with that. I am also familiar with Postman from my previous university courses.

After the theory I studied, I created a boilerplate Express project where I have implemented some basic things. I installed nodemon and moment libraries, created and used logger middleware. I was able to load JSON data from another file using two API endpoints - ```/api/members``` & ```/api/members/:id```.  

After that I have refactored my current code, API routes were moved to their own folder and an error handling was added to an API. As a next step, I created an API route allowing to create a new member (using uuid library for creating unique ids) and tested it with Postman. Then I also implemented all other CRUD operations like updating and deleting a member

Finally, I have become familiar with the Handlebars templating tool and have used it in combination with a Bootstrap in this project as well.


##### *24.11.2021*
This morning I have started the fourth part of the tutorial - Tour of Heroes app. This part is related to Angular and goes through its fundamentals, cli, components, services, events, HTTP, and routing.

At first, I have created an initial structure of the project with the command ```ng new angular-tour-of-heroes``` and opened it in the browser with the command ```ng serve --open```, it has successfully opened on port 4200. After that, I made some basic changes to ```app.component.ts```, ```.css``` and ```.html``` files. At this point, I committed this code to my repo.

Later I have also completed the Hero Editor part of this tutorial. I have generated a new component with the command ```ng generate component heroes``` and modified it in a way presented in the tutorial. For the moment users can edit the name of a hero. I am looking forward to continue with the next parts tomorrow.


##### *26.11.2021*
I continued an Angular tutorial with the part related to displaying lists. At first I created some mock data. Then I used ```*ngFor``` Angular's repeater directive for looping through the data list. After that I added some styles to ```heroes.component.css```, I have also used ```[class.selected]```syntax for styling ```<li>``` component only when it is selected. I added the click event handling with ```(click)``` and `onSelect()` method. Finally, I implemented conditional rendering of details component using ```*ngIf```. 

Next I generated a new component `hero-detail`which now will be used for displaying the details section on the bottom of the screen. I have also changed the logic of application, so now `HeroDetailComponent` is presenting those details instead of the `HeroesComponent`. At this point I decided to commit my code to git repo.


##### *27.11.2021*
In the fourth part of tutorial I created a service with `ng generate service hero` and used dependency injection system. I have also used ab Observable pattern for asynchronous loading of heroes array via service.

Then I generated a new component for displaying application messages with `ng generate component messages`.  I have injected `MessageService` into the `HeroService` which is injected into the `HeroesComponent`. Now it is time to commit changes and I hope that I will continue tomorrow.


##### *28.11.2021*
At first I generated a new route module with command `ng generate module app-routing --flat --module=app`, where flat puts the file into `src/app` and `--module=app` adds it to the AppModule. I also added a navigation links to the top of main page, it works with `routerLink`.

Later I added a dashboard view by generating a new module with command `ng generate component dashboard`. I added a redirection, so dashboard view will be opened by default on page loading.


##### *29.11.2021*
Today I finished the Tour of Heroes tutorial by getting through the its final part related to the communication with the server. For that purpose I used an Angular built in mechanism `HttpClient` and In-memory Web API (`npm install angular-in-memory-web-api`). During working on this part I added options to add, update and delete heroes. I have also generated search component and implemented a hero searching as well. Finally I commited the latest version of the application to my github repository.


##### *01.12.2021*
Today I started the MEAN stack tutorial during which I will build an authentication application with Mongo, Express, Angular and Node. I created an initial project with `npm init -y`and installed such dependencies, as bcryptjs, body-parser, cors, express, jsonwebtoken, mongoose, nodemon, passport and passport-jwt. After that I set up an Express server and created a bunch of routes such as /register and /authenticate. At this point I commited current version my code to github.


##### *03.12.2021*
I created a UserSchema model for interactions with the database. For now I am using it for user registration process. At this moment I am able to register a user on `localhost:3000/users/register` by sending a json object. Created user is also available in my `meanauth`database as well.

As a next step I added a passport middleware to `app.js` and implemented an authentication of a user, which is now available at `localhost:3000/users/authenticate`. However, at this point I have struggled with a latest version of `passport`, syntax is completely changed, and I was not able to complete an authentication. So, I decided to install an older version of a library `passport@0.4.1`, luckily it helped me to solve this problem, now everything works as it should. I have also implemented a `/profile` endpoint which shows us the authenticated user's data.

I continued with the fifth part of a tutorial, which is going through an Angular frontend. I created an Angular project and generated some components and added a bootstrap theme. Finally I created routes and a navbar, which will be used in the later parts of the project.


##### *04.12.2021*
Today I created a home page view using bootstrap. After that I have implemented the registration form and tested it in the browser. I have also created a validation service with command `ng g service validate`, the main purpose of this service is to check if passed user object is valid. I added FlashMessage Service as well, but it was not an easy process, because this part of a tutorial is a very outdated. Luckily I managed to add flash messages at the end with the help of stackoverflow, nevertheless it took a lot of time.

As a next step I generated an authentication service and implemented the authentication process responding with the flash messages and saving data to db. I have also tested registration form in browser and mongo shell, and now everything works as it should.


##### *05.12.2021*
This time my main task was to implement the login form and to link it to the authentication service. The implementation process was surprisingly simple, and I also did not have any problems with outdated libraries. Now I am able to register a user, to log in with user credentials and to store user data in the local storage. Finally, I have also made a Logout button and implemented the log out functionality.


##### *06.12.2021*
Today I added a profile tab to the application, where user can view own data after logging in. I also changed the logic of showing tabs to the user, for now user can only see profile and dashboard tabs when he is logged in. After that I have also added guards to the profile and dashboard, and now it can not be accessed from the browser's address bar as well. Finally, I built an application with `ng build` and tested it in a browser, now everything workd on port `3000`.

As the last part of this tutorial I created a Heroku account and deployed my application. Now it is available at https://cryptic-brook-27112.herokuapp.com/.


##### *08.12.2021*
Today I started to code my final project of this course. I am planning to make a simple full stack todo application using MEAN stack. 

At first, I have just created a new project with command `ng new Project`. Ater that I built an initial structure of an app, for the moment in the `app` folder I have a `todos` module, where I will store all my `components`, right now there are two components - `header` for displaying an input form and `todos` for displaying todo list.  I have also created a todo interface for defining a type of a single todo item, and a service for implementing the functionality of adding a todo to a list.


##### *11.12.2021*
This time I started with a brief refactoring of main component. I want to show my todos list only when there are some todos available, so I implemented it like this `[ngClass]="{ hidden: noTodoClass$ | async }"`. 

After that I have also added a mark which shows up when all todos are completed. This mark can also be used to manualy check all todos as completed at once.

I created a footer component and now we can also see the amount of incompleted todos in the footer. I have also implemented the functionality for viewing all, active or only completed todos and put it to the footer.


##### *12.12.2021*
Today I finally refactored the todo component, I did add the functionality for marking todo as done and also deleting a single todo. I have also created an option to change todo's text after creating by doubble clicking it. 

