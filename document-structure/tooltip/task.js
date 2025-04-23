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
  
      // Remove
      document.querySelectorAll('.tooltip').forEach(t => t.remove());
  
      // Make New
      const tooltipElement = document.createElement('div');
      tooltipElement.className = 'tooltip';
      tooltipElement.textContent = title;
  
      // Addition to dom
      document.body.appendChild(tooltipElement);
  
      // Position
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
        default:
          left = rect.left + (rect.width - tooltipRect.width) / 2;
          top = rect.bottom + 5;
      }
  
      tooltipElement.style.left = `${left + window.scrollX}px`;
      tooltipElement.style.top = `${top + window.scrollY}px`;
  
      
      setTimeout(() => tooltipElement.classList.add('active'), 0);
    }
  

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.has-tooltip')) {
        document.querySelectorAll('.tooltip').forEach(t => t.remove());
      }
    });
  });