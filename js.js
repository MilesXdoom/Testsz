const serviceBtns = document.querySelectorAll('.service-btn');
serviceBtns.forEach(btn => {
 btn.addEventListener('click', event => {
 const service = event.target.dataset.service;
 document.querySelectorAll('.service').forEach(el => el.classList.remove('active'));
 document.getElementById(service).classList.add('active');
 });
});
