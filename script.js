document.querySelectorAll('.membership-toggle').forEach((btn) => {
       //button click
    btn.addEventListener('click', () => {
    const target = document.querySelector(btn.dataset.bsTarget);
    //state detection
    const isOpen = target.classList.contains('show');
    btn.setAttribute('aria-expanded', (!isOpen).toString());
  });
});

const menuToggleBtn = document.getElementById('menuToggleBtn');
const quickMenu = document.getElementById('quickMenu');

if (menuToggleBtn && quickMenu) {
  menuToggleBtn.addEventListener('click', () => {
    quickMenu.classList.toggle('d-none');
    const expanded = !quickMenu.classList.contains('d-none');
    menuToggleBtn.setAttribute('aria-expanded', expanded.toString());
  });
}

    //validation
const sendSupportBtn = document.getElementById('sendSupportBtn');
const supportEmail = document.getElementById('supportEmail');
const supportMessage = document.getElementById('supportMessage');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const formSuccess = document.getElementById('formSuccess');

if (sendSupportBtn && supportEmail && supportMessage) {
  sendSupportBtn.addEventListener('click', () => {
    const emailValue = supportEmail.value.trim();
    const messageValue = supportMessage.value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    const messageOk = messageValue.length >= 10;

    emailError.classList.toggle('d-none', emailOk);
    messageError.classList.toggle('d-none', messageOk);
    formSuccess.classList.toggle('d-none', !(emailOk && messageOk));

    if (emailOk && messageOk) {
      supportEmail.value = '';
      supportMessage.value = '';
    }
  });
}
