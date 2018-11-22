document.addEventListener("DOMContentLoaded",function(){

/*function init() {
const wedding ('firstname', 'secondname', 'surname', 'date' , 'location');
wedding.forEach ('wedding') => document.getElementById('wedding') .addEventListener => event.target.value
}*/


  document.getElementById("firstname")
  .addEventListener("input", function(event){
    document.getElementById("name1")
           .innerHTML = event.target.value;
    console.log(event, event.target, event.target.value)
       
  })
})

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("secondname")
  .addEventListener("input", function(event){
    document.getElementById("name2")
           .innerHTML = event.target.value;
    console.log(event, event.target, event.target.value)
       
  })
})

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("surname")
  .addEventListener("input", function(event){
    document.getElementById("lastName")
           .innerHTML = event.target.value;
    console.log(event, event.target, event.target.value)
       
  })
})

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("date")
  .addEventListener("input", function(event){
    document.getElementById("when")
           .innerHTML = event.target.value;
    console.log(event, event.target, event.target.value)
       
  })
})

document.addEventListener("DOMContentLoaded",function(){
  document.getElementById("location")
  .addEventListener("input", function(event){
    document.getElementById("where")
           .innerHTML = event.target.value;
    console.log(event, event.target, event.target.value)
       
  })
})


function titleFunction1() {
  document.getElementById("invite").className = "sunset1";
}

function titleFunction2() {
  document.getElementById("invite").className = "floral1";
}

function titleFunction3() {
  document.getElementById("invite").className = "ocean1";
}
  