document.addEventListener('DOMContentLoaded', () => {
  const tooltips = document.querySelectorAll('.has-tooltip');

  tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', showTooltip);
  });

  function showTooltip(event) {
    event.preventDefault();

    const tooltip = this;
    const title = tooltip.getAttribute('title');
    const position = tooltip.getAttribute('data-position') || 'bottom';

    // Remove existing active tooltips
    document.querySelectorAll('.tooltip').forEach(t => {
      t.classList.remove('tooltip_active');
      t.style.left = '';
      t.style.top = '';
    });

    // Find or create tooltip element
    let tooltipElement = document.querySelector('.tooltip');
    if (!tooltipElement) {
      tooltipElement = document.createElement('div');
      tooltipElement.className = 'tooltip';
      document.body.appendChild(tooltipElement);
    }

    // Set content and make active
    tooltipElement.textContent = title;
    tooltipElement.classList.add('tooltip_active');

    // Position the tooltip
    const rect = tooltip.getBoundingClientRect();
    const tooltipRect = tooltipElement.getBoundingClientRect();

    let left, top;

    switch (position) {
      case 'top': 
        left = rect.left + (rect.width - tooltipRect.width) / 2;
        top = rect.top - tooltipRect.height - 5;
        break;
      case 'left': 
        left = rect.left - tooltipRect.width - 5;
        top = rect.top + (rect.height - tooltipRect.height) / 2;
        break;
      case 'right': 
        left = rect.right + 5;
        top = rect.top + (rect.height - tooltipRect.height) / 2;
        break;
      default: // bottom
        left = rect.left + (rect.width - tooltipRect.width) / 2;
        top = rect.bottom + 5;
    }

    tooltipElement.style.left = `${left + window.pageXOffset}px`;
    tooltipElement.style.top = `${top + window.pageYOffset}px`;
  }

  // Close tooltip when clicking outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.has-tooltip')) {
      document.querySelectorAll('.tooltip').forEach(t => {
        t.classList.remove('tooltip_active');
        t.style.left = '';
        t.style.top = '';
      });
    }
  });
});