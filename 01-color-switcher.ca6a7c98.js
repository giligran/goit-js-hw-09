const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),a=document.querySelector("button[data-stop]"),d={intervalId:null,getRandomHexColor:()=>`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,start(){e.disabled=!0,a.disabled=!1,this.intervalId=setInterval((()=>{t.style.backgroundColor=this.getRandomHexColor()}),1e3)},stop(){clearInterval(this.intervalId),e.disabled=!1,a.disabled=!0}};e.addEventListener("click",(()=>{d.start()})),a.addEventListener("click",(()=>{d.stop()}));
//# sourceMappingURL=01-color-switcher.ca6a7c98.js.map