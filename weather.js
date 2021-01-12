//'https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&Deviceid=250034001447393035313136&amount=10'

var getJSON = function(url, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  
  xhr.onload = function() {
  
      var status = xhr.status;
      
      if (status == 200) {
          callback(null, xhr.response);
      } else {
          callback(status);
      }
  };
  
  xhr.send();
};

getJSON('https://func-weather.azurewebsites.net/api/HttpTriggerCSharp2?code=03Hf14xSawGyeGtfxZTCLJ5mGLx0GGusap2f3zssPqg6n3KriqizHg==&deviceId=250034001447393035313136&amount=10', function(err, data){
  let taulukko =  `Tommin sääasema<TABLE BORDER=16 summary="Kaksitoista riviä ja viisi saraketta"> <TR colspan="30"><TH> Ilmankosteus % </TH><TH> Valoisuus LUX  </TH><TH>Kastepiste °C</TH><TH>Tuntuu kuin °C</TH><TH> LÄmpötila °C </TH></TR>`;
  const historia = data.map(function(mittaus){
   
      taulukko = taulukko + `<tr><td>${mittaus.Hum}</td><td>${mittaus.Light}</td><td>${mittaus.DP}</td><td>${mittaus.HI}</td><td>${mittaus.Temp}</td></tr>`; 
  
  });
  taulukko = taulukko + `</table>`;
  document.querySelector('.dataTaulukkona').innerHTML = taulukko;
});