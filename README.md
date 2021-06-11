# Intelligent Remote Academia-IRA

The purpose of our project is to build a generalized solution for educational institutions that effectively manage manual tasks in any educational institution. This project will adopt a smart learning environment including awareness about student’s daily and academic activities which will help their parents to learn more about their child’s academic status so that parents will be updated without visiting the institutions. The system will provide intelligent analysis as well as predictions to students and administrations of an institution to improve their performance and productivity.


## Built With

 - **Dependency Managers:**
	 - [npm](https://www.npmjs.com/) - Front-end and mobile apps
	 - [NuGet](https://www.nuget.org/) - Back-end .Net Core app
 - **Front-end:**
	 - [React JS](https://reactjs.org/) - Library used for building user interfaces
	 - [Material-UI](https://material-ui.com/) - UI framework for React Applications
	 - [MobX](https://mobx.js.org/README.html) - Library used for client side state management
 - **Back-end:**
	 - [.NET Core](https://dotnet.microsoft.com/download) - Framework used for building API's
	 - [Entity Framework Core](https://docs.microsoft.com/en-us/ef/core/) - ORM used with back-end API
	 - [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) - Database used
 - **Mobile App:**
	 - [React Native](https://reactnative.dev/) - Framework used for mobile app development
	 - [Expo](https://expo.io/) - Platform for developing React Native apps

## Getting Started
These instructions will give you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
You need the following tools to be install before getting started:

 - Node JS - [download here](https://nodejs.org/en/download/)
 - .NET Core - [download here](https://dotnet.microsoft.com/download/dotnet/3.1)
 - SQL Server - [download here](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)

You would also need to have a browser (e.g. [Chrome](https://www.google.com/intl/en_pk/chrome/)) and a text editor (e.g. [VS Code](https://code.visualstudio.com/download)).
### Setup on local machine
These steps will help you clone the repository on your local machine.
 1.  Clone the repository
```
$ git clone https://github.com/AIMRL/SMS_2020.git
```
 2. Open `cmd` for any other teminal you like and open the repository on your local machine.
```
$ cd SMS_2020
```
 

### Running the Project
These steps will help you run the project on your local machine.
#### Front-end
Open `cmd` or any terminal you like from the project directory and enter the following commands:

 1. Move into the front-end project:
```
$ cd intelligent_remote_academia-frontend
```
 
 2. Install the project dependencies. This will take a while and will be required for the first time only.
```
$ npm install
```
 3. Start the react project:
```
$ npm start
```

#### Back-end API
Open `cmd` or any terminal you like from the project directory and enter the following commands:

 1. Move into backend project:
```
$ cd IRAAPI/IRAAPI
```
 2. Start the .NET Web API:
```
$ dotnet watch run
```

## Configuration Files
### Front-end configuration

 1. API URL can be changed in `intelligent_remote_academia-frontend/src/services/httpService` by changing the value of variable `apiUrl`.
 2. Every module has its own routing file. You can change the routes in the following files:
```
1. intelligent_remote_academia-frontend/src/components/routing/AdminRouting.jsx
2. intelligent_remote_academia-frontend/src/components/routing/ParentRouting.jsx
3. intelligent_remote_academia-frontend/src/components/routing/TeacherRouting.jsx
```
 3. You can change sidebar links in the following file: 
```
intelligent_remote_academia-frontend/src/components/constants/sidebarConsts.js
```

### Back-end configuration

 1. You can add your connection string in the following file:
```
IRAAPI/IRAAPI/appsettings.json

// Connection String format:
"Default" : "<enter your connection string here>";
```

## Authors
List of contributors who participated in this project:

 - **Arslan Yousaf** - *Worked on developing backend api, database design and api integrations*
 - **Zainab** - *Worked on developing backend api, database design and realtime web functionality*
 - **Daniyal Ahmed** - *Worked on testing backend api's and frontend*
 - **Sohaib Salman** - *Worked on developing frontend, backend, mobile app and api integrations*
 - **Tehreem Akhter** - *Worked on developing frontend, api integrations and realtime web functionality*
