
let model, webcam;
const apiKey="Qah1G2mP7q56LSOfCJBxzvR8WJ9L68pziyLvwGSA";
let debounceTimer;

async function startCamera(){
 const url=document.getElementById("modelURL").value;
 if(!url){alert("Paste model URL");return;}
 model = await tmImage.load(url+"model.json", url+"metadata.json");
 webcam = new tmImage.Webcam(300,300,true);
 await webcam.setup(); await webcam.play();
 document.getElementById("camera").appendChild(webcam.canvas);
 window.requestAnimationFrame(loop);
}

async function loop(){
 webcam.update();
 const prediction = await model.predict(webcam.canvas);
 prediction.sort((a,b)=>b.probability-a.probability);
 document.getElementById("tmResult").innerText =
  prediction[0].className+" ("+(prediction[0].probability*100).toFixed(2)+"%)";
 window.requestAnimationFrame(loop);
}

const input=document.getElementById("foodInput");
const list=document.getElementById("suggestions");

input.addEventListener("input",()=>{
 clearTimeout(debounceTimer);
 debounceTimer=setTimeout(fetchSuggestions,400);
});

async function fetchSuggestions(){
 const q=input.value;
 if(q.length<2){list.innerHTML="";return;}
 const res=await fetch(
  `https://api.nal.usda.gov/fdc/v1/foods/search?query=${q}&pageSize=6&api_key=${apiKey}`
 );
 const data=await res.json();
 list.innerHTML="";
 data.foods.forEach(f=>{
  const li=document.createElement("li");
  li.textContent=f.description;
  li.onclick=()=>{
    input.value=f.description;
    list.innerHTML="";
  };
  list.appendChild(li);
 });
}

input.addEventListener("keypress",e=>{
 if(e.key==="Enter"){list.innerHTML="";searchNutrition();}
});

async function searchNutrition(){
 const food=input.value;
 const resDiv=document.getElementById("nutritionResult");
 if(!food)return;

 const res=await fetch(
  `https://api.nal.usda.gov/fdc/v1/foods/search?query=${food}&api_key=${apiKey}`
 );
 const data=await res.json();
 if(!data.foods||!data.foods.length){
  resDiv.innerHTML="<p>Food not found</p>";return;
 }

 const n=data.foods[0].foodNutrients;
 const get=name=>{
  const x=n.find(i=>i.nutrientName===name);
  return x?x.value:0;
 };

 const sugar=get("Sugars, total");
 let adv=[], dis=[];

 if(get("Protein")>10) adv.push("High protein supports muscle growth.");
 if(get("Fiber, total dietary")>5) adv.push("Improves digestion.");
 if(get("Energy")<100) adv.push("Low calorie, good for weight control.");
 if(sugar>10) dis.push("High sugar, not suitable for diabetics.");
 if(get("Total lipid (fat)")>15) dis.push("High fat, consume in moderation.");
 if(get("Sodium, Na")>300) dis.push("High sodium may affect blood pressure.");

 if(!adv.length) adv.push("Provides essential nutrients when eaten in moderation.");
 if(!dis.length) dis.push("No major health risks when consumed in moderation.");

 resDiv.innerHTML=`
 <div class="grid">
  <div class="box"><b>Calories</b><br>${get("Energy")} kcal</div>
  <div class="box"><b>Protein</b><br>${get("Protein")} g</div>
  <div class="box"><b>Carbs</b><br>${get("Carbohydrate, by difference")} g</div>
  <div class="box"><b>Fat</b><br>${get("Total lipid (fat)")} g</div>
  <div class="box"><b>Fiber</b><br>${get("Fiber, total dietary")} g</div>
  <div class="box"><b>Sugar</b><br>${sugar} g</div>
  <div class="box"><b>Sodium</b><br>${get("Sodium, Na")} mg</div>
  <div class="box"><b>Cholesterol</b><br>${get("Cholesterol")} mg</div>
 </div>

 ${sugar>10 ? "<div class='alert'>⚠ HIGH SUGAR ALERT</div>" : ""}

 <div class="section"><h3>Advantages</h3><ul>${adv.map(a=>`<li>${a}</li>`).join("")}</ul></div>
 <div class="section"><h3>Disadvantages</h3><ul>${dis.map(d=>`<li>${d}</li>`).join("")}</ul></div>
 `;
}
