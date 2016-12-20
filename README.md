# react-guitar-tuner

Description
============

This is a simple guitar tuning app that I put together with React. It's a simple but useful app.
I've wanted to build a guitar tuner since I started learning to program, and decided to throw one
together in order to bring myself down to earth and get a better grasp on my React abilities.

Technical
=============
As mentioned above, I built this with simplicity in mind. There are two components to this app,
a stateful GuitarString and a stateless Tuner. The GuitarString component passes a note prop in
the form of a string(The javascript kind) to the GuitarString component, which has two states, playing and not playing.

The GuitarString component makes use of the React-Sound library, and also Mp3s provided by www.electricherald.com.
It uses the string prop from the Tuner component as part of the source url for the mp3. When clicked, the string, which
is actually a button, switches its state from on to off, as per the react-sound library, and plays the corresponding
note.

Development Roadmap
====================
I built this project in the span of about 3 hours, most of the time was spent
trying to figure out how exactly I could play sounds in React.

I would like to add animation to this project, and make it more colorful, but so far I'm happy
with it in terms of utility. When building larger React projects that contain a large amount of components and moving
parts, it's easy to get lost in the details, I feel this project showcases the fundamentals of React, while
also providing something useful.
