---
title: "Getting Started with Gatsby.js"
date: "2021-11-08"
coverImage: "/images/postData/getting-started-with-gatsbyjs/gatsby.png"
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
gatsby new gatsby-demo
```

After it finishes, it should output a message like this:
```text
Your net Gatsby site has been successfully bootstrapped. Start developing it by running:

  cd gatsby-demo
  gatsby develop

```

The Gatsby CLI helps you quickly get your website up and running with several official starter templates. The site you've just created uses the [Gatsby default starter](https://github.com/gatsbyjs/gatsby-starter-default), but you can create a site with a different template by using the following pattern: 
```bash
gatsby new [DIRECTORY_NAME] [URL_OF_STARTER_REPO]
```

To view your new site, first move into the `gatsby-demo` directory by running
```bash
cd gatsby-demo
```
and then starting the local server
```bash
gatsby develop
```

In your browser, navigate to [http://localhost:8000](http://localhost:8000), and you should see your site looking something like this:
![Gatsby Default Starter](/images/postData/getting-started-with-gatsbyjs/gatsby-default-starter.png)

# Folder structure
Now that that's done, it's time to take a look at the files inside your project. 
