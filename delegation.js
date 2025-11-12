const $form = document.querySelector('form');

$form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Form submitted with data:');
});

const $btn = document.querySelector('button');

$btn.addEventListener('click', (button) => {
    console.log('Button clicked:', button);
    });

