---
# BookWorm
###### Do you love reading? BookWorm let's you digitally track your progress from start to finish.
---
## Table of Contents
* [Introduction](#introduction)
* [Features](#features)
* [Technologies](#technologies)
* [Deployment/Setup](#deployment)
* [Authors](#authors)
* [Contributors](#contributors)


## Introduction
The primary goal of [BookWorm](https://github.com/book-worm-2010/book-worm-fe) is to have the user be able track their reading progress with features that let the user add "bookmarks", comments, and ratings of each book during the user's reading journey.

#### Motivation
The motivation behind this project's creation was to build an application to help the users track their reading progress through a digital log, focused on using React/ React Hooks as a framework, writing DRY JavaScript, SASS, and accessing data with RESTful APIs and solidifying good habits in git workflow.

---
## Features
* [Google OAuth Login](#google-oauth-login)
* [Add A Book](#add-a-book)
* [BookWorm Rainbow Progress](#bookworm-rainbow-progress)
* [Book Detailed Page](#book-detailed-page)
* [Finished Book Page](#finished-book-page)
* [Responsiveness](#responsiveness)

#### Google OAuth Login
Upon page load a user is prompted to login using Google sign in.

<p align = "center">
<img src="https://media.giphy.com/media/L6ic2xamDDCuQBbah8/giphy.gif">
</p>

#### Add A Book
Once a user is signed in they can click on the mountain button to add a book. A user is then required to type in a title and author to see the search results.

<p align = "center">
<img src="https://media.giphy.com/media/gGzqOAzNsY91sSfthN/giphy.gif">
</p>

#### BookWorm Rainbow Progress
Once a user has sign in they are able to see a rainbow wave and once a user adds a book, the book and worm will appear. To make the worm move a user can click on the book underneath the rainbow, click on "Add a Bookmark" submit the bookmark form.  When the user goes to the main page, the path for the book will be updated to show the worm move up according to the progress made through the book. 

<p align = "center">
<img src="https://media.giphy.com/media/B5Z0aqRjFGFYBfdrLU/giphy.gif">
</p>

#### Book Detailed Page
When a user clicks on the book underneath the rainbow path it will take us to the Book Details page. On this page a user is able to add a bookmark, and is able to view their past bookmarks. A user is also able to finish a book by clicking on the finish book button, give it a rating and hit submit, which will then take the user to a celebration page.

<p align = "center">
<img src="https://media.giphy.com/media/3Yqf0muInuar45m66D/giphy.gif">
</p>

#### Finished Book Page
From the Home page, a user is able to click on the Finished Books (sandcastle) button and view all of their finished books with their corresponding bookmarks.

<p align = "center">
<img src="https://media.giphy.com/media/voGg7resHgrPRdcd2U/giphy.gif">
<img src="https://media.giphy.com/media/8fPJoHHTYotEthZOp7/giphy.gif">
</p>

#### Responsiveness
This application can also be used on different screen sizes.

<p align = "center">
<img src="https://media.giphy.com/media/kL9nAsL4hcdy2lswGf/giphy.gif">
</p>

---
## Technologies
 - React/React Hooks
 - ES6 JavaScript/JSX
 - Testing with Cypress
 - SCSS 
 - Lighthouse and ARIA Accessibility
 - Using network requests with API endpoints and async JavaScript
 - CI with CircleCI
 - Deploying a site on Heroku
 - Git workflow using GitHub Issues and [Project Kanban Board](https://github.com/orgs/book-worm-2010/projects/1)
 - Whiteboarding and Wireframing on [Miro](https://miro.com/app/board/o9J_lL-OKeM=/)
 - SVGs and other images produced with [Figma](https://www.figma.com/file/7DEdkyuOz7P1MeEDgIqwoi/BookWorm?node-id=115%3A0)
 - Data visualization of reading progress through D3
 - Animations on Login and Celebration with GSAP
 
## Deployment/Setup

### Deployment
Visit the site at [BookWorm](https://book-worm-2.herokuapp.com/)

### Setup
In order to deploy this site locally, a user will have to run a local server.

  1. Clone (or fork and then clone) this repo with  `git@github.com:book-worm-2010/book-worm-fe.git [what you want to name the repo]`
  2. Change into the directory and run `npm install` to install project dependencies.
  3. Run `npm start` to start a local server 
  5. For running cypress testing, run ```npm run cypress``` 
  6. Enter `control + c` in your terminal to stop the server at any time.

### Continuous Improvement/Future Improvements
  * Add Friends List
  * Implement webpush
  * Add Teacher's Login and user story
  * Incentives/Badges
  * Customize Avator

## How to Contribute
If you are interested in contributing please:
- clone down this repo: `git@github.com:book-worm-2010/book-worm-fe.git`
- create a new branch: `git checkout -b your-initials/feature/feature-name`
- contribute as you like
- in the terminal, push the branch upstream
- create a pull request via github
- wait for our reply

## Authors
<table>
  <table>
    <tr>
      <td> Kelly Dinneen <a href="https://github.com/kellydinneen">GH</td>
      <td> Connie Hong<a href="https://github.com/conconartist">GH</td>
      <td> Thao Ma <a href="https://github.com/thaomonster">GH</td>
  </tr>
 <td><img src="https://avatars.githubusercontent.com/u/70412553?v=4" alt="Ms. Giraffe"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/67291333?v=4" alt="Ms. Fox"
 width="150" height="auto" /></td>
 <td><img src="https://avatars.githubusercontent.com/u/67611512?v=4" alt="Ms. Turtle"
 width="150" height="auto" /></td>
</table>

## Contributors

