document.querySelector('form').addEventListener('submit', function(data) {
    data.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Please fill in all fields');
    } else {
        alert('Form submitted successfully');
    }
});
