!function(){const e=(t=".airlines__slider",Array.isArray(t)?document.querySelectorAll(t):document.querySelector(t));var t;!function(){const t=e.querySelectorAll(".airlines__slider-content"),o=e.querySelector(".airlines__slider-content"),n=window.getComputedStyle(o).animationDuration,r=1e3*parseInt(n);setInterval((()=>{t[0].remove(),e.appendChild(o)}),r)}();const o=document.querySelectorAll(".stats__item-ratio"),n=document.querySelector(".stats"),r=n.offsetTop-n.clientHeight;document.addEventListener("scroll",(function e(){window.scrollY>=r&&o.forEach((t=>{let o=+t.innerHTML,n=5;!function e(r=0){t.innerHTML=r,++r>.5*o&&r<.75*o?n=20:r>=.75*o&&r<.85*o?n=40:r>=.85*o&&r<.95*o?n=60:r>=.95*o&&(n=100),r<=o&&setTimeout((()=>e(r)),n)}(),document.removeEventListener("scroll",e)}))}));const l=document.querySelector(".scrollTop");l.addEventListener("click",(()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})),document.addEventListener("scroll",(e=>{window.scrollY>1e3?l.classList.add("show"):l.classList.remove("show")}))}();
//# sourceMappingURL=main.js.map
