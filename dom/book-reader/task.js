document.addEventListener('DOMContentLoaded', function() {
    const book = document.getElementById('book');
    const fontSizeControls = document.querySelectorAll('.font-size');
    
    // Font size
    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Removal of active class from all font size controls
            fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));
            
            // Addition of active class to clicked control
            this.classList.add('font-size_active');
            
            // Removal of existing font size classes from book
            book.classList.remove('book_fs-big', 'book_fs-small');
            
            // Addition of appropriate font size class to book
            if (this.dataset.size === 'big') {
                book.classList.add('book_fs-big');
            } else if (this.dataset.size === 'small') {
                book.classList.add('book_fs-small');
            }
        });
    });
    
    // Advanced ++
    const textColorControls = document.querySelectorAll('.book__control_color .color');
    const bgColorControls = document.querySelectorAll('.book__control_background .color');
    
    function setColor(controls, prefix) {
        controls.forEach(control => {
            control.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class
                controls.forEach(btn => btn.classList.remove('color_active'));
                
                // Add active class
                this.classList.add('color_active');
                
                // Remove existing color classes from book
                book.classList.remove(`book_${prefix}-black`, `book_${prefix}-gray`, `book_${prefix}-whitesmoke`, `book_${prefix}-white`);
                
                // Add color class to book
                book.classList.add(`book_${prefix}-${this.dataset[`${prefix}Color`]}`);
            });
        });
    }
    
    setColor(textColorControls, 'color');
    setColor(bgColorControls, 'bg');
});
