# Socket.io

Socket.io is a javascript library that runs in both the browser and server to allow realtime communication between the two.  
This allow you to create environments where many people can interact on the same page.

Socket.io does this by having both a client-side and a server-side library which communicate with each other through events transmitted between the two.

Socket.io uses WebSocket, which is a internet communication protocol like (HTTP or FTP or email) specifically designed for real-time communication. You don't need to know WebSocket in order to use socket.io.


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

Now run:

`nodemon server.js`

in the terminal (or node server.js)

When you point your browser to *localhost:3000* a series of things happen:

* the server points your browser to the "public" folder, where it looks for and finds an index.html
* index.html loads the client side part of socket.io (see the script tag in the head)
* the js script creates an io object which automatically establishes a connection (socket) with the server
* the js script also creates a listener for an event labeled "message"
* meanwhile server.js (which is already running and listening to the port 3000) receives the connection and creates a socket object
* as a result of an incoming connection it emits an event called "connection"
* the client (index.html) receives the event and produces a pop up


More info:  
[Intro to Socket.io](https://www.ably.io/concepts/socketio)  
[Socket documentation](https://socket.io/docs/)  
[Socket chat example](https://socket.io/get-started/chat)  
[Step by step tutorial](https://openclassrooms.com/en/courses/2504541-ultra-fast-applications-using-node-js/2505653-socket-io-let-s-go-to-real-time)
