(()=>{const t=document.getElementById("form");t.addEventListener("submit",(e=>{e.preventDefault(),async function(t){try{const e=document.getElementById("loading-screen");e.style.display="flex";const n=await fetch(`http://api.weatherapi.com/v1/current.json?key=7172fd1413bb4f5bb65123651231110&q=${t}`,{mode:"cors"});if(!n.ok){const t=await n.json();throw new Error(t.error.message)}return setTimeout((()=>{e.style.display="none"}),500),function(t){const e=document.getElementById("location"),n=document.querySelector("#temp"),o=document.querySelector(".condition"),r=o.querySelector(".text"),c=o.querySelector(".conditionIcon"),i=document.getElementById("date"),u=document.getElementById("feelslike"),d=document.getElementById("humidity"),m=document.getElementById("pressure"),l=document.getElementById("wind"),[a]=t.location.localtime.split(" "),s=new Date(a).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"short",year:"numeric"});i.textContent=`${s}`,e.textContent=`${t.location.name}, ${t.location.country}`,n.textContent=`${Math.round(t.current.temp_c)}°C`,r.textContent=`${t.current.condition.text}`,c.setAttribute("src",t.current.condition.icon),u.textContent=`feels like ${t.current.feelslike_c}°C`,d.textContent=t.current.humidity,m.textContent=t.current.pressure_mb,l.textContent=t.current.wind_kph}(await n.json()),0}catch(t){return t}}(new FormData(t).get("city"))}))})();