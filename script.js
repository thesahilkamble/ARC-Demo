// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Dynamic loading of rescue work photos
const rescueWorkSection = document.getElementById('rescue-work').querySelector('.gallery');
const rescuePhotos = [
    'rescue1.jpg',
    'rescue2.jpg',
    'rescue3.jpg',
    'rescue4.jpg'
];

rescuePhotos.forEach(photo => {
    let img = document.createElement('img');
    img.src = photo;
    img.alt = `Rescue Work ${photo}`;
    rescueWorkSection.appendChild(img);
});

// Example: Dynamic loading of animals available for adoption
const adoptionSection = document.getElementById('adoption').querySelector('.gallery');
const adoptionPhotos = [
    'animal1.jpg',
    'animal2.jpg',
    'animal3.jpg',
    'animal4.jpg'
];

adoptionPhotos.forEach(photo => {
    let img = document.createElement('img');
    img.src = photo;
    img.alt = `Animal ${photo}`;
    adoptionSection.appendChild(img);
});

// Example: Dynamic loading of ongoing project photos
const projectsSection = document.querySelector('.ongoing-projects');
const projectPhotos = [
    'project1.jpg',
    'project2.jpg'
];

projectPhotos.forEach(photo => {
    let img = document.createElement('img');
    img.src = photo;
    img.alt = `Project ${photo}`;
    projectsSection.appendChild(img);
});