document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelector('.products');
    const cart = document.querySelector('.cart__products');
    const cartContainer = document.querySelector('.cart');


    function updateCartVisibility() {
        if (cart.children.length > 0) {
            cartContainer.style.display = 'block';
        } else {
            cartContainer.style.display = 'none';
        }
    }


    updateCartVisibility();

    products.addEventListener('click', (event) => {
        const target = event.target;

        // Increase
        if (target.classList.contains('product__quantity-control_inc')) {
            const value = target.parentElement.querySelector('.product__quantity-value');
            value.textContent = parseInt(value.textContent) + 1;
        }

        // Decrease
        if (target.classList.contains('product__quantity-control_dec')) {
            const value = target.parentElement.querySelector('.product__quantity-value');
            const currentValue = parseInt(value.textContent);
            if (currentValue > 1) {
                value.textContent = currentValue - 1;
            }
        }

        // Add to basket
        if (target.classList.contains('product__add')) {
            addToCart(target.closest('.product'));
        }
    });

    // Remove
    cart.addEventListener('click', (event) => {
        if (event.target.classList.contains('cart__product-remove')) {
            event.target.closest('.cart__product').remove();
            updateCartVisibility();
        }
    });

    
    function addToCart(product) {
        const productId = product.dataset.id;
        const productImg = product.querySelector('.product__image').src;
        const productCount = parseInt(product.querySelector('.product__quantity-value').textContent);

    
        let cartProduct = cart.querySelector(`.cart__product[data-id="${productId}"]`);

        if (cartProduct) {
    
            const countElement = cartProduct.querySelector('.cart__product-count');
            countElement.textContent = parseInt(countElement.textContent) + productCount;
        } else {
        
            const cartProductHTML = `
                <div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${productImg}">
                    <div class="cart__product-count">${productCount}</div>
                    <button class="cart__product-remove">Удалить</button>
                </div>
            `;
            cart.insertAdjacentHTML('beforeend', cartProductHTML);
        }
        updateCartVisibility();
    }
});