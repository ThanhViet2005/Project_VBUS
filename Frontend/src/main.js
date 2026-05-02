import './ngoaithanh.css'

console.log('VBUS ngoại thành UI');

// Auth button handler
const authBtn = document.getElementById('authBtn');
if (authBtn) {
  authBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // simple placeholder - replace with modal or routing later
    alert('Đăng ký / Đăng nhập');
  });
}

// optional: basic accessibility focus for search inputs
const firstInput = document.querySelector('.search-input input');
if (firstInput) firstInput.setAttribute('aria-label', 'Điểm đi');

// Schedule filter handling
const filterButtons = document.querySelectorAll('[data-filter]');
const scheduleItems = document.querySelectorAll('.schedule-item');
function setActiveFilter(filter) {
  filterButtons.forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.classList.remove('text-gray-600');
      btn.classList.add('bg-primary','text-white');
    } else {
      btn.classList.remove('bg-primary','text-white');
      btn.classList.add('text-gray-600');
    }
  });
  scheduleItems.forEach(item => {
    if (filter === 'all' || item.dataset.period === filter) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const f = btn.dataset.filter;
    setActiveFilter(f);
  });
});

// Initialize default filter (show morning)
setActiveFilter('morning');

// Book button handlers
document.addEventListener('click', (e) => {
  const b = e.target.closest('.book-btn');
  if (!b) return;
  const item = b.closest('.schedule-item');
  const time = item ? item.querySelector('.text-2xl')?.textContent.trim() : '';
  const from = item ? item.querySelector('.text-sm.text-gray-400')?.textContent.trim() : '';
  alert(`Đặt vé cho chuyến ${time} - ${from}`);
});
