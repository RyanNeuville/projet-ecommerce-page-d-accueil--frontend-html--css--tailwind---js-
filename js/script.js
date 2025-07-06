function submitForm(e) {
    e.preventDefault();

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalContent = submitBtn.innerHTML;


    submitBtn.innerHTML = '<span class="loading loading-spinner loading-sm"></span> Envoi...';
    submitBtn.disabled = true;


    setTimeout(() => {
        alert('Message envoyé avec succès ! Nous vous répondrons bientôt.');
        e.target.reset();
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
    }, 2000);
}


document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('load', function () {
    setTimeout(setupMap, 500);
});