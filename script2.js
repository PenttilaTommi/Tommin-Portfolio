const nimiSisalto = document.querySelector('#nimi');
const osoiteSisalto = document.querySelector('#sahkoposti');
const asiaSisalto = document.querySelector('#viesti');
const virhe = document.querySelector('.virheilmoitus');
const viesti = document.querySelector('#tiedot');
const lahetanappi = document.querySelector('.lahetanappi');

lahetanappi.addEventListener('click', e =>{
  e.preventDefault();
 
  if(nimiSisalto.value === '' || asiaSisalto.value === '' || osoiteSisalto.value === ''){
    virhe.classList.add('virhe');  
    virhe.innerHTML='Täytä kaikki kentät'; 
    lahetanappi.style.backround = 'red';
    lahetanappi.value= 'virhe! En lisännyt tietoa.';
    setTimeout(() => virhe.classList.remove('virhe'), 3000);
    setTimeout(() => virhe.innerHTML='', 3000);
    setTimeout(() => lahetanappi.style.backround ='rgb(51, 44, 44)', 3000);
    setTimeout(() => lahetanappi.value = 'Lähetä', 3000);
  }else{
    //const li = document.createElement('li');
    //li.appendChild(document.createTextNode(`${nimiSisalto.value}: ${asiaSisalto.value}: ${osoiteSisalto.value}`));
    //viesti.appendChild(li);
    //console.log("Löytyykö nimi? " + nimiSisalto.value);
    virhe.innerHTML='Kiitos viestistä: ' + nimiSisalto.value;
    sendJSON();
    nimiSisalto.value = '';
    osoiteSisalto.value='';
    asiaSisalto.value='';
    
  }
});
function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp2?code=PnWhScmEcspN8Fy7eYKnIZA37AFgUZ0fMQ1OpXOJ6dtBPBGNXAMIqQ==";

      xhr.open("POST", url, true);

      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
          console.log("valmis, yhteys toimii");
        }
      };
      const nimi = document.querySelector('#nimi').value;
      console.log("nimikentän sisältö: " + nimi);
      const viestiSisalto = document.querySelector('#Viesti').value;
      const viestinLahettaja = document.querySelector('#sahkoposti').value;
      console.log("viestikentän sisältö: " + viestiSisalto);
      var data = JSON.stringify({
        "EmailMsg": "Viestin lähettäjän sähköposti: " + viestinLahettaja + ". Viestin sisältö: " + viestiSisalto,  //Kirjoittaa sisällön 
        "EmailTo": "tommi.penttila", //oma sähköpostisi!!!!
        "EmailName": nimi //Nimi-kentän sisältö
  });
  xhr.send(data);
}
/*
function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

      xhr.open("POST", url, true);

      xhr.setRequestHeader("Content-type", "application/json");

      xhr.onreadystatechange = function(){
        if(xhr.readyState ===4 && xhr.status === 200){
          console.log("valmis, yhteys toimii");
        }
      };
      const nimi = document.querySelector('#nimi').value;
      console.log("nimikentän sisältö: " + nimi);
      const sahkoposti = document.querySelector('#sahkoposti').value;
      console.log("löytyykö sahkoposti?" + osoiteSisalto.value);
      const viesti = document.querySelector('#viesti').value;
      console.log("löytyykö viesti?" + asiaSisalto.value);
      var data = JSON.stringify({
        "EmailMsg": "Tähän tulee postin sisälto", 
        "EmailAdress": "tommi.penttila@edu.salpaus.fi" , 
        "EmailTo": "mira@miravorne.fi",
        "EmailName": "nimi" 
         
      });
    xhr.send(data);
    }
  */