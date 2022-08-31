var form = document.getElementById('form')

form.addEventListener('submit',function(e){

    /*Auto Submission of form disabled*/
    e.preventDefault()
    
    var hotelname = document.getElementById('hotelname').value
    var address = document.getElementById('address').value
    var email = document.getElementById('email').value
    var mobile = document.getElementById('mobile').value

    fetch('https://four-season.herokuapp.com/api/hotel/add',{
      method: 'POST',
      headers:{
        "Content-Type":"application/json; charset=UTF-8",
        "authorization":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGFmZklkI…4NDB9.P3d7iGoPh60OmS17qgCGKHuNcktruvGpm-QA2FHpZJ4"
      },
      body:JSON.stringify({
        hotelname: e.target[0].value,
        address : e.target[1].value,
        email : e.target[2].value,
        mobile : e.target[3].value}),
    })
    .then((response)=> response.json())
    .then((data)=>{
      console.log('Sucess:',data);
    })
    .catch(err => console.log(err))

})

   