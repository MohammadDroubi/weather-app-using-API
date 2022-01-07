let test=document.getElementById("test");
let res=``;
let key=prompt();
let myhhtp=new XMLHttpRequest();
const url=`http://api.weatherapi.com/v1/current.json?key=3a47ce8eeda348f29ea165617220401&q=${key}=&aqi=no`;

myhhtp.onreadystatechange=function()
{
    if(myhhtp.readyState==4&&myhhtp.status==200)
    {
        let data=JSON.parse(myhhtp.responseText);
        data=data.current;
        console.log(data)
          res+=`<h1>${key}</h1><h2>Temp C:${data.temp_c}</h2><h2>Temp F:${data.temp_f}</h2><h2>Cloud:${data.cloud}</h2><h2>last_updated:${data.last_updated}</h2>`; 
        test.innerHTML=res;
    }
    
    last_updated
}

myhhtp.open("GET",url);
myhhtp.send();
