document.querySelector('.teemanappi').addEventListener('click', e =>{
  e.preventDefault();
  const teema = document.querySelector('input[name="theme"]:checked').value;
  if(teema == 'tumma'){
    document.body.style.background = 'grey';
    document.body.style.color = 'white';
  }
  else{
    document.body.style.background = 'white';
    document.body.style.color = 'black';
  }

})

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}