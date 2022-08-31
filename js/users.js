var form = document.getElementById('form')

form.addEventListener('submit',function(e){

    /*Auto Submission of form disabled*/
    e.preventDefault()

    var first_name = document.getElementById('fist_name').value
    var last_name = document.getElementById('last_name').value
    var email = document.getElementById('email').value
    var username = document.getElementById('username').value
    var password = document.getElementById('password').value
    var roleid = document.getElementById('roleid').value

    fetch("https://four-season.herokuapp.com/api/auth/register",{
      method: 'POST',
      body:JSON.stringify({
        first_name:first_name,
        last_name:last_name,
        email:email,
        username:username,
        password:password,
        roleid:roleid
      }),
      headers:{
        "Content-Type":"application/json; charset=UTF-8",
        "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkI…4NDB9.P3d7iGoPh60OmS17qgCGKHuNcktruvGpm-QA2FHpZJ4"
      }
    })
    .then((response)=> response.json())
    .then((data)=>{
      console.log('Sucess:',data);
    })
    .catch((error)=>{
      console.error('Error:',error)
    })

})






  