const home = document.querySelector('.tab1');
const destination = document.querySelector('.tab2');
const crewTab = document.querySelector('.tab3');
const technology = document.querySelector('.tab4')
const main = document.querySelector('#main');
const section = document.querySelector('#section');
const meetYourCrew = document.querySelector('.crew');
const terminology = document.querySelector('.lastSection')


home.addEventListener('click', function() {
    main.style.display = 'flex'
    section.style.display = 'none'
    meetYourCrew.style.display = 'none';
    terminology.style.display = 'none';
})
destination.addEventListener('click', function() {
    section.style.display = 'block'
    main.style.display = 'none'
    meetYourCrew.style.display = 'none';
    terminology.style.display = 'none';
})

crewTab.addEventListener('click', function() {
    meetYourCrew.style.display = 'block';
    main.style.display = 'none';
    section.style.display = 'none'
    terminology.style.display = 'none'
})
technology.addEventListener('click', function() {
    terminology.style.display = 'block';
    meetYourCrew.style.display = 'none'
    main.style.display = 'none';
    section.style.display = 'none'
})


const moon = document.querySelector('.moon-tab')
const mars = document.querySelector('.mars-tab')
const europa = document.querySelector('.europa-tab')
const titan = document.querySelector('.titan-tab')
const moon1 = document.querySelector('#moon')
const mars1 = document.querySelector('#mars')
const europa1 = document.querySelector('#europa')
const titan1 = document.querySelector('#titan')

moon.addEventListener('click', function() {
    moon1.style.display = 'flex'; 
    mars1.style.display = 'none'; 
    europa1.style.display = 'none'; 
    titan1.style.display = 'none'; 
})
mars.addEventListener('click', function() {
    mars1.style.display = 'flex'; 
    moon1.style.display = 'none'; 
    europa1.style.display = 'none'; 
    titan1.style.display = 'none'; 
})
europa.addEventListener('click', function() {
    europa1.style.display = 'flex'; 
    mars1.style.display = 'none'; 
    moon1.style.display = 'none'; 
    titan1.style.display = 'none'; 
})
titan.addEventListener('click', function() {
    titan1.style.display = 'flex'; 
    mars1.style.display = 'none'; 
    europa1.style.display = 'none'; 
    moon1.style.display = 'none'; 
})

const button1 = document.querySelector('.btn1');
const button2 = document.querySelector('.btn2');
const button3 = document.querySelector('.btn3');
const firstContent = document.querySelector('.content');
const secondContent = document.querySelector('.content2');
const thirdContent = document.querySelector('.content3');

button1.addEventListener('click', function() {
    firstContent.style.display = 'flex';
    secondContent.style.display = 'none';
    thirdContent.style.display = 'none';
})
button2.addEventListener('click', function() {
    secondContent.style.display = 'flex';
    firstContent.style.display = 'none';
    thirdContent.style.display = 'none';
})
button3.addEventListener('click', function() {
    thirdContent.style.display = 'flex';
    secondContent.style.display = 'none';
    firstContent.style.display = 'none';
})

$(".crew").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    arrows: true,
    nav: false,
    // navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      
    },
  });
  