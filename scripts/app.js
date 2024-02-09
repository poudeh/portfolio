const navToggleIcon = document.querySelector('.nav__toggle-icon')
const menu = document.querySelector('.menu')
const cover = document.querySelector('.cover')
const resumeListItems = document.querySelectorAll('.resume-list__item')
const portfolioItems = document.querySelectorAll('.portfolio-list__item')
const homeContent = document.querySelector('.home__content')
const homePhoto = document.querySelector('.home__photo')
const menuLinks = document.querySelectorAll('.menu__link')
const sections = document.querySelectorAll('main > section')
const pricingPlans = document.querySelectorAll('.pricing-plan')
const changeThemeBtn = document.querySelector('.change-theme')
let moonIcon = document.querySelector('#moon')
let sunIcon = document.querySelector('#sun')

//* For Header section
navToggleIcon.addEventListener('click', () => {
  navToggleIcon.classList.toggle('nav__toggle-icon--open')
  menu.classList.toggle('menu--open')
  cover.classList.toggle('cover--show')
})


//* Tabs chager.

function tabsSelection(listItems, listItemActive, contentActive) {
  listItems.forEach(listItem => {
    listItem.addEventListener('click', (event) => {
      const activeItem = document.querySelector(`.${listItemActive}`)
      activeItem.classList.remove(listItemActive)
      event.currentTarget.classList.add(listItemActive)

      let contentID = listItem.getAttribute('data-id')
      document.querySelector(`.${contentActive}`).classList.remove(contentActive)
      document.getElementById(contentID).classList.add(contentActive)



    })
  })
}

tabsSelection(resumeListItems, 'resume-list__item--active', 'resume-content--active')
tabsSelection(portfolioItems, 'portfolio-list__item--active', 'portfolio-content--show')



//* When click on the section go to the specific section.
menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', (event) => {
    event.preventDefault()
    document.querySelector('.menu__link--active').classList.remove('menu__link--active')
    event.currentTarget.classList.add('menu__link--active')

    let dataID = event.currentTarget.getAttribute('data-id')
    let sectionOffSetTop = document.querySelector(`#${dataID}`).offsetTop
    window.scrollTo({
      top: sectionOffSetTop - 140,
      behavior: 'smooth'
    })




  })
})

//* IntersectionObserver for site's animations and heighlight the current section

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


const showObserver = new IntersectionObserver((plans) => {
  plans.forEach(plan => {
    plan.target.classList.toggle('show', plan.isIntersecting)

  })

},{
  threshold:0
})

sections.forEach(section => {
  observer.observe(section)
})

showObserver.observe(homeContent)
showObserver.observe(homePhoto)

pricingPlans.forEach(plan => {
  showObserver.observe(plan)

})


//* Light mode and dark mode


changeThemeBtn.addEventListener('click', () => {

  document.documentElement.classList.toggle('dark-theme')
  if (document.documentElement.classList.contains('dark-theme')) {
    moonIcon.classList.remove('show')
    sunIcon.classList.add('show')
    localStorage.setItem('theme' , 'dark-theme')
  } else {
    sunIcon.classList.remove('show')
    moonIcon.classList.add('show')
    localStorage.setItem('theme' , 'light-theme')
  }

})

window.addEventListener('load' , ()=> {
  let currentTheme = localStorage.getItem('theme')
  if (currentTheme == 'dark-theme') {
    document.documentElement.classList.add('dark-theme')
    moonIcon.classList.remove('show')
    sunIcon.classList.add('show')
    
  }
})


//* Swiper.js library.

const swiperOptions = {
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
};
const swiper1 = new Swiper(".swiper1", swiperOptions);
const swiper2 = new Swiper(".swiper2", swiperOptions);
const swiper3 = new Swiper(".swiper3", swiperOptions);




