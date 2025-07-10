# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Light Design](/public//assets/design/design-light-desktop.png)

### Links

- Solution URL: [Solution URL](https://github.com/Heph-zibah/browser-extension-manager)
- Live Site URL: [Live site URL](https://browser-extension-frontendmentor.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite) - For styles


### What I learned

I decided to switch things up with Next.js this time around. Everything was going smoothly, until it was time to implement a theme using Tailwind CSS version 4. Now, I’ve always avoided this version because, honestly, it just looks like stress. I mean, how on earth am I supposed to compartmentalize my styles without a tailwind.config file? I’ve always used that file religiously, but now they’re saying it’s optional? Premium tears, please.

Anyway, I’d love to tell you that I eventually got the hang of it. After several hours of struggling (and nearly giving up), I pulled through and made it work.

One thing that made a whole lot of sense this time was breaking my work into components. None of my components even hit 70 lines! That’s a major glow-up for me, knowing how chaotic my code used to be. I even tucked away some logic into its own component. It felt so surreal to be doing things neatly and differently this time around. I just know future me will look back at my old code and laugh (or cringe).

Moving on...

Imagine my shock when I realized that Next.js doesn’t have an index.html file like React. Instead, it uses a layout file, and that’s where all the magic happens. I legit spent a few minutes searching for that good ol’ index.html, and when I finally discovered the layout file, I just sat there, staring. I can’t even explain how I felt. Confused? Betrayed? A little amused? Probably all three.

Now, let’s talk about TypeScript. Whew. My journey has been both rocky and smooth. Honestly, I’ve come to realize that it’s actually kinda sweet. Like, sweeter than honey but more problematic than a stubborn goat. What really helped me appreciate it is the way it yells at you when something’s wrong. It’s both a blessing and a curse, a blessing because you catch your mistakes early, and a curse because now you’re stuck trying to fix all those red squiggles it throws at you!

To wrap it up…

This whole experience has stretched me in the best ways. From facing my fears with Tailwind v4 to embracing the structure of Next.js and surviving (ish) TypeScript, I can honestly say I’m growing. Slowly, yes, but surely. If nothing else, it’s proof that showing up, trying again (and again), and laughing at your own chaos is half the fun of being a developer.

On to the next challenge


### Continued development

You’d think that after all that growth with Tailwind, Next.js, and TypeScript, I’d be on cruise control by now, right? LMAO. Wrong.

The next stop on my journey? API integration.

See, in my mind, it was just: fetch data, display it. Boom. Done. But the moment I tried to actually connect to an API and use it properly with TypeScript, things got... unnecessarily dramatic. Suddenly I was dealing with types that refused to match, errors that felt like riddles, and responses that decided to be undefined for no good reason.

At some point, I legit paused and said out loud: “Why are you like this?” to my screen. And guess what? No answer. Just more red squiggly lines.

But the beauty of all this? I didn’t give up. I googled. I StackOverflow-ed. I asked ChatGPT. And bit by bit, things started to click.

One of my proudest wins recently? Setting up error handling properly. Before, I was the queen of ignoring all those “catch” blocks. Like, if the app breaks, it breaks. Users will be fine. But not anymore. Now I console.log with pride. I write custom error messages like a responsible dev. Growth!



## Author

- Website - [oadaramola]( https://oadaramola.vercel.app/)
- Frontend Mentor - [@Heph-zibah](https://www.frontendmentor.io/profile/Heph-zibah)
- Twitter - [@oadaramola]( https://twitter.com/oadaramola10)
