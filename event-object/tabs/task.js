document.addEventListener('DOMContentLoaded', function() {
    const tabContainers = document.querySelectorAll('.tabs');

    tabContainers.forEach(function(container) {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab__content');

        tabs.forEach(function(tab, index) {
            tab.addEventListener('click', function() {
                // Remove
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active'));

                // Add
                tab.classList.add('tab_active');
                contents[index].classList.add('tab__content_active');
            });
        });
    });
});