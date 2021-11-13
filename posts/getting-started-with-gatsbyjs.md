---
title: "Getting Started with Gatsby.js"
date: "2021-11-08"
coverImage: "/images/postData/gatsby.png"
---

# What is Gatsby?
Gatsby.js is one of the most popular tools for building websites and apps today. It is a [React](https://reactjs.org/)-based, [GraphQL](https://graphql.org/) powered static site generator that enables you to build interactive components right into your static website. 

# Getting Started
Let's get started! To start, you'll need the following tools:
- [Node.js](https://nodejs.dev/)
- [Git](https://www.atlassian.com/git/tutorials/install-git)
- [Visual Studio Code](https://code.visualstudio.com/) (or any other IDE)

First, you'll need to have the Gatsby CLI installed, which will take care of setting up your project for you. 
```bash
npm install -g gatsby-cli
```
To check that the CLI is working, you can run:
```bash
gatsby --version
```
Make sure that you are on v3 or newer. 

## Create a new site
Now, its time to initialize a new Gastby site. To do this, navigate to the folder where you want to create your site, and run:
```text
gatsby new
```
You will be asked a series of questions. 
1. When the prompt asks **"What would you like to call your site?"**, enter a name, such as "Gatsby Demo". 
    ```text
    What would you like to call your site?
    ✔ · Gatsby Demo
    ```
2. Next, when the prompt asks **"What would you like to name the folder where your site will be created?"**, use the default folder name.
    ```text
    What would you like to name the folder where your site will be created?
    ✔ Desktop/ gatsby-demo
    ```
3. Choose "No (or I'll add it later)" for the next two prompts asking **"Will you be using a CMS"** and **"Would you like to install a styling system?"**.
    ```text
    ✔ Will you be using a CMS?
    · No (or I'll add it later)
    ```
    ```text
    ✔ Would you like to install a styling system?
    · No (or I'll add it later)
    ```
4. When the prompt asks **"Would you like to install aditional features with other plugins?"**, use the arrow keys to move to the bottom and press Enter to select "Done".
    ```text
    ✔ Would you like to install additional features with other plugins?
    · Done
    ```
5. Finally, the prompt should show you something similar to this:
    ```text
    Thanks! Here's what we'll now do:
        🛠  Create a new Gatsby site in the folder gastby-demo

    ? Shall we do this? (Y/n) › Yes
    ```
    Enter **"Y"**, and the site will begin to build.