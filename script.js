// Interactive Scenario
function checkAnswer(choice) {
    const feedback = document.getElementById('scenario-feedback');
    
    switch(choice) {
        case 'a':
            feedback.textContent = "Not quite. Encouraging someone to send intimate photos can lead to serious consequences. It's important to respect boundaries and privacy.";
            feedback.style.color = "red";
            break;
        case 'b':
            feedback.textContent = "Great advice! Talking to a trusted adult can provide valuable guidance and support in this situation.";
            feedback.style.color = "green";
            break;
        case 'c':
            feedback.textContent = "While it's good to prioritize safety, immediately breaking up might not be the best first step. Encouraging open communication and seeking advice is often more helpful.";
            feedback.style.color = "orange";
            break;
    }
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const navMenu = document.querySelector('nav ul');

mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// Random fact generator
const facts = [
    "Communication is key in all relationships.",
    "Consent must be freely given, reversible, informed, enthusiastic, and specific.",
    "It's okay to say no to anything that makes you uncomfortable.",
    "Healthy relationships are built on mutual respect and trust.",
    "Your body, your rules - you have the right to set your own boundaries."
];

function displayRandomFact() {
    const factContainer = document.getElementById('random-fact');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factContainer.textContent = facts[randomIndex];
}

// Call this function when the page loads
window.onload = displayRandomFact;

// Tooltip for help button
const helpButton = document.querySelector('.help-button');
const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
tooltip.textContent = "Click for immediate support";

helpButton.appendChild(tooltip);

helpButton.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
});

helpButton.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
});