# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Main Page](Rating Component.png)

![Thank You Page](Rating Component (1).png)

### Links

- Repo URL: [https://github.com/linpaws1364/Rating-Component](https://github.com/linpaws1364/Rating-Component/settings/pages)
- Live Site URL: [https://linpaws1364.github.io/Rating-Component/](https://linpaws1364.github.io/Rating-Component/)

## My process

### Built with

- HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla Js

### What I learned

Through this project I learn't and understood many basic concepts of HTML, CSS and Js. 

I learnt how to use an onclick event inside an HTML tag, before this I always used to implement onclick events through event listeners only

```html
<div class="ratings">
        <div onclick="selected(this)" class="circles number">1</div>
        <div onclick="selected(this)" class="circles number">2</div>
        <div onclick="selected(this)" class="circles number">3</div>
        <div onclick="selected(this)" class="circles number">4</div>
        <div onclick="selected(this)" class="circles number">5</div>
</div>
```

I learn't about hsl color naming convention, before this I always used rgb naming and hex codes for colors.

```css
background-color: hsl(25, 97%, 53%);
```

I learn't about the logic of passing innerhtml value from one component to other in Js.

```js
rates.forEach((rate)=>{
    rate.addEventListener('click',()=>{
        let vote=rate.innerHTML;
        rater.innerHTML=vote;
        rater.style.backgroundColor='hsl(213, 22%, 24%)';
    })
})
```

### Continued development

I am constantly trying to improve programming skills and understanding the relation between the components and programming logic.

### Useful resources

- [Google](https://www.google.com) - This resource helped me find hints through articles and videos whenever I am stuck on any part
- [W3schools](https://www.w3schools.com/) - This resource helped me to understand and explore different ways to use a tag or an attribute which inturn helped me to tweak changes with the understanding from the examples
- [MDN Docs](https://developer.mozilla.org/en-US/) - This resource helped me to understand and explore different ways to use a tag or an attribute which inturn helped me to tweak changes with the understanding from the examples

## Author

- GitHub - [Swapnil Roy](https://github.com/linpaws1364)
- Frontend Mentor - [Swapnil Roy](https://www.frontendmentor.io/profile/linpaws1364)
- LinkedIn - [Swapnil Roy](https://www.linkedin.com/in/swapnil-roy-6b54761b3/)


