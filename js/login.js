const form = document.getElementsByClassName("box")

console.log("form", form)

form[0].addEventListener('submit', function(e) {
    console.log("in side form submit")
    e.preventDefault()

    console.log("pppp",e.target[0].value)

    fetch('https://four-season.herokuapp.com/api/auth/login', {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: e.target[0].value,
            password : e.target[1].value}),
        })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
})