(()=>{"use strict";async function t(t){try{const e=document.getElementById("loading-screen");e.style.display="flex";const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=7172fd1413bb4f5bb65123651231110&q=${t}`,{mode:"cors"});if(!n.ok){const t=await n.json();throw new Error(t.error.message)}return setTimeout((()=>{e.style.display="none"}),500),function(t){const e=document.getElementById("location"),n=document.querySelector("#temp"),o=document.querySelector(".condition"),c=o.querySelector(".text"),r=o.querySelector(".conditionIcon"),i=document.getElementById("date"),a=document.getElementById("feelslike"),u=document.getElementById("humidity"),d=document.getElementById("pressure"),l=document.getElementById("wind"),[m]=t.location.localtime.split(" "),s=new Date(m).toLocaleDateString("en-US",{weekday:"long",day:"numeric",month:"short",year:"numeric"});i.textContent=`${s}`,e.textContent=`${t.location.name}, ${t.location.country}`,n.textContent=`${Math.round(t.current.temp_c)}°C`,c.textContent=`${t.current.condition.text}`,r.setAttribute("src",t.current.condition.icon),a.textContent=`feels like ${t.current.feelslike_c}°C`,u.textContent=t.current.humidity,d.textContent=t.current.pressure_mb,l.textContent=t.current.wind_kph}(await n.json()),0}catch(t){return t}}const e=document.getElementById("form");e.addEventListener("submit",(n=>{n.preventDefault();const o=new FormData(e).get("city");!function(t){localStorage.setItem("city",t)}(o),t(o)})),window.onload=function(){t(localStorage.getItem("city")||"Jakarta")}})();