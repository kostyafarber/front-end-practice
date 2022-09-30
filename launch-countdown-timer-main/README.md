# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](images/countdown-timer.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Was fun to use loops in SCSS and learn some new JavaScript functions.


```css
@for $column from 1 through $grid-columns {
    .rounder-#{$column}-left {
        position: absolute;
        grid-column: $column;
        grid-row: 1 / 1;
        top: 46%;
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        width: 6px;
        height: 10px;
        background-color: rgba(0, 0, 0, 0.5);
    } 
}
```
```js
setInterval(func, delay)
```

### Continued development

Try to incorporate more frameworks in my workflow. Perhaps learn `React` or `Node.js`.

### Useful resources

- [w3-countdown-timer](https://www.w3schools.com/howto/howto_js_countdown.asp) - This helped me with the JavaScript code for the countdown timer.
## Author

- Website - [Kostya Farber](https://www.your-site.com)
- Frontend Mentor - [@kostyafarber](https://www.frontendmentor.io/profile/kostyafarber)
- Twitter - [@FarberKostya](https://www.twitter.com/@FarberKostya)

