document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const value = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const links = dropdown.querySelectorAll('.dropdown__link');

        // Toggle list
        value.addEventListener('click', () => {
            list.classList.toggle('dropdown__list_active');
        });

        // Item Selection
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default link behavior
                value.textContent = link.textContent.trim();
                list.classList.remove('dropdown__list_active');
            });
        });

        // Close Dropdown
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                list.classList.remove('dropdown__list_active');
            }
        });
    });
});