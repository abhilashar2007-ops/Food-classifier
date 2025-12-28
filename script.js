const list=document.getElementById("foodList");
const search=document.getElementById("search");
const result=document.getElementById("result");

foodData.forEach(f=>{
 const o=document.createElement("option");
 o.value=f.name;
 list.appendChild(o);
});

search.addEventListener("keydown",e=>{
 if(e.key==="Enter"){
  const f=foodData.find(x=>x.name.toLowerCase()===search.value.toLowerCase());
  if(f) show(f);
 }
});

function show(f){
 result.classList.remove("hidden");
 result.innerHTML=`<h2>${f.name} <span class="badge ${f.category}">${f.category}</span></h2>
 <div class="grid">
 <div class="card">Calories<br>${f.calories}</div>
 <div class="card">Protein<br>${f.protein} g</div>
 <div class="card">Carbs<br>${f.carbs} g</div>
 <div class="card">Fat<br>${f.fat} g</div>
 <div class="card">Fiber<br>${f.fiber} g</div>
 <div class="card">Sugar<br>${f.sugar} g</div>
 </div>
 <h3>Advantages</h3><ul>${f.advantages.map(a=>"<li>"+a+"</li>").join("")}</ul>
 <h3>Disadvantages</h3><ul>${f.disadvantages.map(d=>"<li>"+d+"</li>").join("")}</ul>
 <p><b>Best time:</b> ${f.bestTime}</p>`;
}

// ---- Teachable Machine ----
let model, webcam;
async function startTM(){
 const url=document.getElementById("tmURL").value.trim();
 model=await tmImage.load(url+"model.json",url+"metadata.json");
 webcam=new tmImage.Webcam(300,300,true);
 await webcam.setup();await webcam.play();
 document.getElementById("cam").appendChild(webcam.canvas);
 loop();
}
async function loop(){
 webcam.update();
 const p=await model.predict(webcam.canvas);
 p.sort((a,b)=>b.probability-a.probability);
 const name=p[0].className;
 document.getElementById("tmResult").innerText=name;
 const match=foodData.find(f=>f.name.toLowerCase()===name.toLowerCase());
 if(match) show(match);
 requestAnimationFrame(loop);
}