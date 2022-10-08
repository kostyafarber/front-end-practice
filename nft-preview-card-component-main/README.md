# Frontend Mentor - NFT preview card component solution

This is a solution to the [NFT preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/nft-preview-card-component-SbdUL_w0U). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - NFT preview card component solution](#frontend-mentor---nft-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
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

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![nft-screenshot]

### Links

- Solution URL: [https://github.com/kostyafarber/front-end-practice/tree/main/nft-preview-card-component-main](https://github.com/kostyafarber/front-end-practice/tree/main/nft-preview-card-component-main)
- Live Site URL: [https://rococo-hamster-1bb83d.netlify.app/](https://rococo-hamster-1bb83d.netlify.app/)

## My process
This one took quite a while. I was getting more comfortable with flex boxes, and certain padding techniques. 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

I learnt about overlays using positioning and the `:hover` pseudo class.

```scss
.overlay:hover {
    opacity: 0.5;
    transition: 0.3s;
}
```

I also learnt how to write more efficient code and use root variables.

```scss
:root {
    --main-bg: hsl(217, 54%, 11%);
    --card-bg: hsl(216, 50%, 16%);
    --line: hsl(215, 32%, 27%);
    --white: hsl(0, 0%, 100%);
    --font: "Outfit", sans-serif;

    --soft-blue: hsl(215, 51%, 70%);
    --cyan: hsl(178, 100%, 50%);
}
```


### Continued development
I want to continue mastering vanilla HTML/CSS and getting comfortable with organising my code and resources more efficiently in my SCSS.

## Author

- Website - [https://kostyafarber.github.io/](https://kostyafarber.github.io/)
- Frontend Mentor - [@kostyafarber](https://www.frontendmentor.io/profile/kostyafarber)

[nft-screenshot]: images/nft-screenshot-lg.png
