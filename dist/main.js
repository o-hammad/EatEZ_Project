!function(){"use strict";var e,t;e=class{constructor(e){this.main=e,this.createHeader(),this.createSidebar(e),this.createFooter(),this.main.addEventListener("click",this.handleClick.bind(this))}handleClick(){}createHeader(){const e=document.createElement("header");e.innerHTML="<h1>Header</h1>",document.body.prepend(e)}createFooter(){const e=document.createElement("footer");e.innerHTML="<p>Footer</p>",document.body.appendChild(e)}createSidebar(e){const t=document.createElement("div");t.id="sidebar",e.appendChild(t);const n=document.createElement("p");n.textContent="Paragraph Description",t.appendChild(n);const a=document.createElement("select");a.id="cuisineType";const c=document.createElement("option");c.value="",c.text="Please select a Cuisine",c.disabled=!0,c.selected=!0,a.appendChild(c),["American","Asian","British","Caribbean","Central Europe","Chinese","Eastern Europe","French","Greek","Indian","Italian","Japanese","Korean","Kosher","Mediterranean","Mexican","Middle Eastern","Nordic","South American","South East Asian","World"].forEach((e=>{const t=e.toLowerCase(),n=document.createElement("option");n.value=t,n.text=e,a.appendChild(n)})),t.appendChild(a);const o=document.createElement("select");o.id="calories";const d=document.createElement("option");d.value="",d.text="Please select a Calories Range",d.disabled=!0,d.selected=!0,o.appendChild(d),t.appendChild(o);const i=document.createElement("select");i.id="protein";const l=document.createElement("option");l.value="",l.text="Please select Protein %",l.disabled=!0,l.selected=!0,i.appendChild(l);for(let e=20;e<=100;e+=20){let t=document.createElement("option");t.value=`option${e}`,t.text=`${e} %`,i.appendChild(t)}t.appendChild(i);const r=document.createElement("select");r.id="carbs";const s=document.createElement("option");s.value="",s.text="Please select a Carbs %",s.disabled=!0,s.selected=!0,r.appendChild(s);for(let e=20;e<=100;e+=20){let t=document.createElement("option");t.value=`option${e}`,t.text=`${e} %`,r.appendChild(t)}t.appendChild(r);const p=document.createElement("select");p.id="fat";const u=document.createElement("option");u.value="",u.text="Please select a Fat %",u.disabled=!0,u.selected=!0,p.appendChild(u);for(let e=20;e<=100;e+=20){let t=document.createElement("option");t.value=`option${e}`,t.text=`${e} %`,p.appendChild(t)}t.appendChild(p)}},t=class{constructor(e,t){this.getData(e).then((e=>{console.log(e);const n=e.hits;this.renderData(n,t)})).catch((e=>{console.log("Sorry, there was an error getting your data")}))}async getData(e){let t=`https://api.edamam.com/api/recipes/v2?app_id=25aad07a&app_key=095c96548ed9957ef5de2298cd228fc4&cuisineType=${e}&type=public`;const n=await fetch(t);if(!n.ok)throw new Error("Sorry, there was an error with the network");return await n.json()}renderData(e,t){const n=document.createElement("div");n.id="results",t.appendChild(n),e.forEach((e=>{const t=e.recipe,a=document.createElement("ul"),c=document.createElement("li");c.innerHTML=`Recipe Label: ${t.label}`,a.appendChild(c);const o=document.createElement("img");o.src=`${t.images.SMALL.url}`,a.appendChild(o);const d=document.createElement("li");d.innerHTML=`Calories: ${t.calories}`,a.appendChild(d);const i=document.createElement("li");i.innerHTML="Macro Nutrient Count: ",a.appendChild(i);const l=document.createElement("ul");i.appendChild(l);const r=document.createElement("li"),s=t.totalNutrients.PROCNT.quantity,p=t.totalNutrients.PROCNT.unit;r.innerHTML=`Protein: ${s} ${p}`,l.appendChild(r);const u=document.createElement("li"),m=t.totalNutrients.CHOCDF.quantity,h=t.totalNutrients.CHOCDF.unit;u.innerHTML=`Carbs: ${m} ${h}`,l.appendChild(u);const C=document.createElement("li"),E=t.totalNutrients.FAT.quantity,b=t.totalNutrients.FAT.unit;C.innerHTML=`Fat: ${E} ${b}`,l.appendChild(C),n.appendChild(a)}))}},document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("main");new e(n);const a=document.getElementById("cuisineType");a.addEventListener("change",(function(){const e=a.value;document.getElementById("results")?(document.getElementById("results").remove(),new t(e,n)):new t(e,n)}))}))}();
//# sourceMappingURL=main.js.map