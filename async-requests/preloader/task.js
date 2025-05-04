document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items');
    const loader = document.getElementById('loader');

    function showLoader() {
        loader.classList.add('loader_active');
    }

    function hideLoader() {
        loader.classList.remove('loader_active');
    }

    function createCurrencyItem(code, value) {
        const item = document.createElement('div');
        item.className = 'item';
        item.innerHTML = `
            <div class="item__code">
                ${code}
            </div>
            <div class="item__value">
                ${value}
            </div>
            <div class="item__currency">
                руб.
            </div>
        `;
        return item;
    }

    function displayRates(rates) {
        itemsContainer.innerHTML = '';
        for (const code in rates) {
            const rate = rates[code];
            const item = createCurrencyItem(code, rate.Value.toFixed(2));
            itemsContainer.appendChild(item);
        }
    }

    function getCachedRates() {
        const cachedData = localStorage.getItem('exchangeRates');
        if (cachedData) {
            return JSON.parse(cachedData);
        }
        return null;
    }

    function cacheRates(rates) {
        localStorage.setItem('exchangeRates', JSON.stringify(rates));
    }

    function loadExchangeRates() {
        const cachedRates = getCachedRates();
        if (cachedRates) {
            displayRates(cachedRates);
        } else {
            showLoader();
        }

        fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
            .then(response => response.json())
            .then(data => {
                const rates = data.response.Valute;
                displayRates(rates);
                cacheRates(rates);
            })
            .catch(error => {
                console.error('Error loading exchange rates: ', error);
                if (!cachedRates) {
                    itemsContainer.innerHTML = '<p>Error loading exchange rates. Please try again later.</p>';
                }
            })
            .finally(() => {
                hideLoader();
            });
    }

    loadExchangeRates();
});