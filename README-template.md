# REST Countries API with color theme switcher solution

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode 

### Screenshots
- Desktop Images
  - [Home Page (Light Theme)](/design/desktop-home-light.png)
  - [Home Page (Dark Theme)](/design/desktop-home-dark.png)
  - [Detail Page (Light Theme)](/design/desktop-detail-light.png)
  - [Detail Page (Dark Theme)](/design/desktop-detail-dark.png)

- Mobile Images
  - [Home Page (Light Theme)](/design/mobile-home-light.png)
  - [Home Page (Dark Theme)](/design/mobile-home-dark.png)
  - [Detail Page (Light Theme)](/design/mobile-detail-light.png)
  - [Detail Page (Dark Theme)](/design/mobile-detail-dark.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS - preprocessor
- Flexbox
- Media Queries for Responsiveness
- [Font Awesome](https://fontawesome.com/icons/)
- [REST Countries V2 API](https://restcountries.com/#api-endpoints-v2)
- [React](https://reactjs.org/) - JS library
- [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) - Routing

### What I learned

#### Routing

This was my first application of [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) to navigate between pages, some code snippets that i used along the way are posted below.
```js
<BrowserRouter>
  <Header />
  <Routes>
    <Route exact path="/" element={<><Filter /><Main /></>}/>
    <Route exact path="/detail" element={<Detail>} />
  </Routes>
</BrowserRouter>
```
```js
  const navigate = useNavigate();
  const toDetailPage = () => {navigate("/detail", {state:{}})}
```
```js
  const location = useLocation();
  const {} = location.state;
```

### Continued development

I want to continue doing projects that involve working with API's as i enjoy working with them. I also want to work more with [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) and would look to do a project that entails me working with it and a CSS Framework like Bootstrap as I have only done one project with a CSS Framework.
Finally, I also want to post more projects on github as so far i have only posted one project.

### Useful resources

- [Set up Font Awesome for React](https://fontawesome.com/docs/web/use-with/react/) - This helped me learn how to set up [Font Awesome](https://fontawesome.com/icons/) for my React Project.
- [Pedrotech YT Video](https://youtu.be/UjHT_NKR_gU) - This video by Pedrotech on youtube helped give me a kickstart to understanding how [React Router Dom](https://v5.reactrouter.com/web/guides/quick-start) works.

## Author

- Website - []()
- Frontend Mentor - [@clarencejulu](https://www.frontendmentor.io/profile/clarencejulu)
- Github - [My Github](https://github.com/clarencejulu)
- Twitter - []()
- LinkedIn - []()
- Indeed - []()

