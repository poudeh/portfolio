
# Project Title:
### To see my site =>  <a href="https://poudeh.github.io/portfolio/">Link</a>

A brief description of what this  **project!**

I only used `html` `css` `vanilla js`  and `swiper.js` library for this project.

</br>

<a>![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
</a>

___

## My website features:
- **Fully responsive**
-  **Clean Code**
- **Have lightMode and darkMode that is saved in localStorage.**
- **Scroll animations which is implemented by javascript**(`intersection-observer`)

```javascript
const observer = new IntersectionObserver((sections) => {
  sections.map(section => {
    let sectionClass = section.target.id;
    let sectionMenuItem = document.querySelector(`.menu__link[data-id=${sectionClass}]`)
    if (section.isIntersecting) {
      sectionMenuItem.classList.add('menu__link--active')

    } else {
      sectionMenuItem.classList.remove('menu__link--active')
    }

  })

}, {
  threshold: 0.5

})

```
- **when you click on the section it goes to that specific secrtion using `javascript`.**



