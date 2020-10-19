![Crate](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/hero-with-link.png)

# Crate 👕👖📦
#### Get monthly subscription of trendy clothes and accessories.
- **API** built with Node, GraphQL, Express, Sequelize (PostgreSQL) and JWT Auth
- **WebApp** built with React and Redux along with Server Side Rendering (SSR) / SEO friendly

This project serves as our first group project of Mod 4 at Turing School of Software & Design. It involved exploring an [existing brownfield codebase](https://github.com/atulmy/crate), adding test coverage, and extending the existing functionality. Project instructions and expectations can be found [here](https://mod4.turing.io/projects/crate/crate.html).

Our group was assigned the [Style Survey track](https://mod4.turing.io/projects/crate/crate_project_tracks.html). This involved adding a feature for users to indicate style preferences via a survey when they subscribe to a crate for the first time.

### _screenshots of feature implementation to be added here_

## Style survey

![Image](![Desktop Layout](https://frontend.turing.io/projects/module-1/assets/ideabox-group/desktop.jpg))

## Contributors
**Front-end Team:**
* Taryn Martin: [GitHub](https://github.com/tarynmartin) | [LinkedIn](https://www.linkedin.com/in/tarynmartin919/)
* Horacio Borrego: [GitHub](https://github.com/H-Bo214) | [LinkedIn](https://www.linkedin.com/in/horacio-borrego-4a52851b0/)
 
**Back-end Team:**
* Ruthie Rabinovitch: [GitHub](https://github.com/rrabinovitch) | [LinkedIn](https://www.linkedin.com/in/ruthie-r/)
* Nick Edwin: [GitHub](https://github.com/NickEdwin) | [LinkedIn](https://www.linkedin.com/in/nicholas-edwin/)
* Ash Abbasi: [GitHub](https://github.com/Ashkanthegreat) | [LinkedIn](https://www.linkedin.com/in/ashkan-abbasi-b571a985/)

## Analyzing an existing codebase & learning new technologies
In addition to being the first time our group worked as a full-stack team, this project served as our frontend team's first time using Redux, axios, express, and GraphQL, and our backend team's first time using JavaScript, Node.js, express, Sequelize, and GraphQL. Creating the tools below aided our team in familiarizing ourselves with a legacy codebase that used all these unfamiliar technologies. Additionally, after each of us completed the local setup process, we wrote our reflections in comments [here](https://github.com/rrabinovitch/Crate/issues/3).

### ERD
<img src="https://user-images.githubusercontent.com/62635544/95711898-f131ed80-0c20-11eb-8cbc-1e93e3c138a3.png" alt="ERD" width="500"/>

### Data flow
<img src="https://user-images.githubusercontent.com/18726699/95688974-1bf15700-0bcb-11eb-87f3-8b47fe7678bd.png" alt="data flow" width="500"/>

### User flow
<img src="https://user-images.githubusercontent.com/18726699/95688980-1eec4780-0bcb-11eb-8193-e660e096d9a9.png" alt="user flow" width="500"/>

### Wireframe for style survey feature
<img src="https://user-images.githubusercontent.com/18726699/95689004-3f1c0680-0bcb-11eb-948c-00f04f6bac9c.png" alt="wireframe" width="500"/>

## Features
- Modular and easily scalable code structure
- Emphasis on developer experience
- UI components in separate folder which can be swapped for your favorite UI framework easily
- Responsive UI for React Native to support Mobile and Tablet
- GraphQL schema with associations
- Database migration and data seeding
- User authentication using JSON Web Tokens with GraphQL API
- File upload feature with GraphQL
- React storybook demonstrating UI components for web
- Server side rendering
- Multi-package setup and dev scripts for an automated dev experiance

## Screenshots and GIFs
Click on image to view fullscreen and zoom

### Desktop
![IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/desktop-all-with-link.png)

![Crate Desktop](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/desktop-all-with-link.png)

## Core Structure
    code
      ├── package.json
      │
      ├── api (api.example.com)
      │   ├── public
      │   ├── src
      │   │   ├── config
      │   │   ├── migrations
      │   │   ├── modules
      │   │   ├── seeders
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── mobile (Android, iOS) - not used for this project
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   ├── storybook
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md


## Setup and Running
- Prerequisites
  - Node
  - Postgres
- Clone repo: `git clone git@github.com:rrabinovitch/Crate.git crate`
- Switch to `code` directory: `cd code`
- Configurations
  - Modify `/api/src/config/database.json` for database credentials
      - type `psql` in terminal to access the postgres CLI
      - check available postgres users by running `\du` in the postgres CLI
      - choose one of the names ("postgres" should be fine) to put as your username in the `database.json` file
  - Create database locally
      - while still in the postgres CLI, run `CREATE DATABASE crate;`
- Setup
  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages `cd web` and `npm install`
- Development
  - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8000/
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/
- Production
  - Run API `cd api` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
  - Run Webapp `cd web` and `npm run start:prod`, creates an optimized build in `build` directory and runs the server
- Tests
  - back-end testing
      - `cd code/api`
      - `npm test`
  - front-end testing
      - _to be filled in_

## Multi-package automation
- Optional multi-package automation for faster setup and easier dev environment initiation.
- No need to cd to sub-folders unless working with mobile or running a production build.
- Once Node, MySQL, repo clone and configuration are setup correctly
    - Switch to `code` directory `cd code`
    - Setup
        - Setup API, Webapp and Mobile with a single command `npm run setup`
    - Development
        - Run API and Webapp `npm start`, browse GraphiQL at http://localhost:8000/ and Webapp at http://localhost:8000/
        - Run API alone `npm start:api`, browse GraphiQL at http://localhost:8000/
        - Run Webapp alone `npm start:web`, browse webapp at http://localhost:3000/

## Legacy Code Author
- Atul Yadav - [GitHub](https://github.com/atulmy) · [Twitter](https://twitter.com/atulmy)

## License
Copyright (c) 2018 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)
