document.addEventListener('DOMContentLoaded', (event) => {
    const searchInput = document.getElementById('faq-search-input');
    const searchButton = document.getElementById('faq-search-button');
    const categoryButtons = document.querySelectorAll('.category-button');
    const faqItems = document.querySelectorAll('.faq-item');

    // Search functionality
    function searchFAQs() {
        const searchTerm = searchInput.value.toLowerCase();
        faqItems.forEach(item => {
            const question = item.querySelector('h3').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    searchButton.addEventListener('click', searchFAQs);
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchFAQs();
        }
    });

    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Toggle FAQ answers
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('.faq-answer');
        question.addEventListener('click', () => {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            question.classList.toggle('active');
        });
    });
});