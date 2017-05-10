This is a repo for when you need to get a react/redux app to consume and interact with a pre-existing api (documentation for api here: http://reduxblog.herokuapp.com/).

Instructions:

Clone or download app.  run 'npm i' in the directory that contains package.json file, then run 'npm start'.  Now you have a front-end that can get/post/delete an api.


tl;dr
In the past, when I was helping someone get started with a react/redux project, I would use a flat json file to represent the data.  Well, a flat json file does not give one a "sense" of going across the wire with creds to retrieve data and then coming back to the client.  So I decided to use a real api, granted it's a simple api, to give developers a sense (sounds like a freaking Jedi) of latency.
