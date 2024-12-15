// File: script.js

// Simple navigation bar color change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#ff725e';
        header.style.transition = 'background-color 0.5s';
    } else {
        header.style.backgroundColor = '#fff';
    }
});

// Interactive hover effect for team members
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach((member) => {
    member.addEventListener('mouseenter', () => {
        member.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
    });
    member.addEventListener('mouseleave', () => {
        member.style.boxShadow = 'none';
    });
});
