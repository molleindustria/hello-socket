# Socket.io

Socket.io is a javascript library that runs in both the browser and server to allow realtime communication between the two.  
This allow you to create environments where many people can interact on the same page.

Socket.io does this by having both a client-side and a server-side library which communicate with each other through named events that pass between the two.

## This example

First I created a folder for the project and a public folder.  

I created an index.html in the public folder. Public will also contain all the client-side part of the application.

I installed express:  

`npm install express`  

I installed socket.io:  

`npm install socket.io`  

If you start from scratch the **package.json** or **package-lock.json** file is populated with the packages you just installed.  

Since you are starting from my project you can just do:

`npm install`

To install all the dependencies.

A new folder **node_modules** should have appeared in the project.

Packages like nodemon should be installed globally (`npm install -g nodemon`) if they are meant to be ran from the command line.
Packages that we are going to import using the `require()` command are typically installed locally.

**server.js** is boilerplate (a basic template) for a socket.io server application.  
Always consider that similar operations can be implemented with different patterns.  

**index.html** is a barebone client. Can you figure out how the two interact?  

More info:  
[Intro to Socket.io](https://www.ably.io/concepts/socketio)  
[Socket documentation](https://socket.io/docs/)  
[Socket chat example](https://socket.io/get-started/chat)  
[Step by step tutorial](https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2505653-socket-io-let-s-go-to-real-time)
