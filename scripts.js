
////////////VERO SOUL TEXT OVERLAY
// JavaScript to make the text overlay fade in on page load
window.addEventListener('load', function() {
  const textOverlay = document.querySelector('.text-overlay');
  
  // Trigger the fade-in effect by setting opacity to 1
  setTimeout(function() {
    textOverlay.style.opacity = 0.5; // This will trigger the CSS transition
  }, 900); // Delay to ensure CSS transition starts after the page load
});

////////////END VERO SOUL TEXT OVERLAY


/////////////////////////////EVENTS CAROUSEL
let currentIndex = 0;
const slides = document.querySelectorAll('.events-carousel-slide');
const totalSlides = slides.length;

const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function showSlide(index) {
  if (index >= totalSlides) {
      currentIndex = 0;
  } else if (index < 0) {
      currentIndex = totalSlides - 1;
  } else {
      currentIndex = index;
  }
  document.querySelector('.events-carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

// Initial setup
showSlide(currentIndex);
/////////////////////////////////END EVENT CAROUSEL

////////////RELOAD WEB PAGE WHEN CLICKING VERO SOUL
document.addEventListener("DOMContentLoaded", function() {
// Get the "Vero Soul" link element
const veroSoulLink = document.getElementById("reload");

// Add click event listener to the "Vero Soul" link
veroSoulLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent any default action (if it's a link)

    // Reload the page
    location.reload(); // This reloads the page
});
});
///////////////END RELOAD WEB PAGE

////////////////////LOAD EVENTS PAGE
// Select the events link and the events carousel container
const eventsLink = document.getElementById('eventsLink');
const eventsCarouselContainer = document.querySelector('.events-carousel-container');

// Add an event listener to the "Events" link
eventsLink.addEventListener('click', function (event) {
 event.preventDefault();  // Prevent default link behavior (no page reload)

 // Toggle the 'show' class for the events carousel container
 if (eventsCarouselContainer.classList.contains('show')) {
   // Hide the events carousel container
   eventsCarouselContainer.classList.remove('show');
  
   // Wait for the animation to finish before setting display to none
   setTimeout(function() {
     eventsCarouselContainer.style.display = 'none';
   }, 500);  // Matches the transition duration (0.5s)
 } else {
   // Show the events carousel container
   eventsCarouselContainer.style.display = 'flex';
   //hide other containers
   container.classList.remove('show');
   musicContainer.classList.remove('show');
   contactContainer.classList.remove('show');
      //time out for smooth transition
   setTimeout(function() {
   container.style.display = 'none';
   musicContainer.style.display = 'none';
   contactContainer.style.display = 'none';
 }, 1000);
   // Add the 'show' class to trigger the fade-in and slide-in transition
   setTimeout(function() {
     eventsCarouselContainer.classList.add('show');
   }, 10);  // Small delay to ensure the display is set before transition
 }
});
////////////////////END LOAD EVENTS PAGE

////////////////////////////LOAD WHO WE ARE LINK
const whoWeAreLink = document.getElementById('whoWeAreLink');
const container = document.querySelector('.container');

// Add an event listener to the "Events" link
whoWeAreLink.addEventListener('click', function (event) {
event.preventDefault();  // Prevent default link behavior (no page reload)

// Toggle the 'show' class for the events carousel container
if (container.classList.contains('show')) {
  // Hide the events carousel container
  container.classList.remove('show');
  
  // Wait for the animation to finish before setting display to none
  setTimeout(function() {
    container.style.display = 'none';
  }, 500);  // Matches the transition duration (0.5s)
} else {
  // Show the events carousel container
  container.style.display = 'flex';
  //hide other containers
  eventsCarouselContainer.classList.remove('show');
  musicContainer.classList.remove('show');
  contactContainer.classList.remove('show');
     //time out for smooth transition
  setTimeout(function() {
  eventsCarouselContainer.style.display = 'none';
  musicContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  },1000);
  // Add the 'show' class to trigger the fade-in and slide-in transition
  setTimeout(function() {
    container.classList.add('show');
  }, 10);  // Small delay to ensure the display is set before transition
}
});
/////////////////////////////// END LOAD WHO WE ARE 

////////////////////////////LOAD MUSIC PAGE
const musicLink = document.getElementById('musicLink');
const musicContainer = document.querySelector('.musicContainer');

// Add an event listener to the "Events" link
musicLink.addEventListener('click', function (event) {
event.preventDefault();  // Prevent default link behavior (no page reload)

// Toggle the 'show' class for the events carousel container
if (musicContainer.classList.contains('show')) {
  // Hide the events carousel container
  musicContainer.classList.remove('show');
  
  // Wait for the animation to finish before setting display to none
  setTimeout(function() {
    musicContainer.style.display = 'none';
  }, 500);  // Matches the transition duration (0.5s)
} else {
  // Show the events carousel container
  musicContainer.style.display = 'flex';
  //hide other containers
  container.classList.remove('show');
  eventsCarouselContainer.classList.remove('show');
  contactContainer.classList.remove('show');
  //time out for smooth transition
  setTimeout(function() {
  container.style.display = 'none';
  eventsCarouselContainer.style.display = 'none';
  contactContainer.style.display = 'none';
  },1000);
  // Add the 'show' class to trigger the fade-in and slide-in transition
  setTimeout(function() {
    musicContainer.classList.add('show');
  }, 10);  // Small delay to ensure the display is set before transition
}
});
/////////////////////////////// END LOAD MUSIC PAGE

//////////////////////SHOW THE CONTACTS PAGE
// Select the Contact link and the contact container
const contactLink = document.getElementById('contactLink');  // Assuming the Contact link has the ID "contactLink"
const contactContainer = document.querySelector('.contactContainer');  // The contactContainer div

// Add an event listener to the "Contact" link
contactLink.addEventListener('click', function (event) {
 event.preventDefault();  // Prevent default link behavior (no page reload)

 // Toggle the 'show' class for the contact container
 if (contactContainer.classList.contains('show')) {
   // Hide the contact container
   contactContainer.classList.remove('show');
   
   // Set display to none after the transition ends (0.5s)
   setTimeout(function() {
     contactContainer.style.display = 'none';
   }, 500);
 } else {
   // Show the contact container
   contactContainer.style.display = 'flex';

   //hide other containers
   container.classList.remove('show');
   musicContainer.classList.remove('show');
   eventsCarouselContainer.classList.remove('show');
   //time out for smooth transition
   setTimeout(function() {
   container.style.display = 'none';
   musicContainer.style.display = 'none';
   eventsCarouselContainer.style.display = 'none';
   },1000);
   // Add the 'show' class to trigger the fade-in and slide-in transition
   setTimeout(function() {
     contactContainer.classList.add('show');
   }, 10);  // Small delay to ensure display is set before transition
 }
});
/////////////END SHOW CONTACTS

////////////////FLIP-CONTAINER TAP ON MOBILE
document.querySelectorAll('.flip-container').forEach(container => {
  container.addEventListener('click', () => {
    const card = container.querySelector('.flip-card');
    // Toggle the 'flipped' class on click/tap
    card.classList.toggle('flipped');
  });
});
//////////////// END FLIP-CONTAINER TAP ON MOBILE
