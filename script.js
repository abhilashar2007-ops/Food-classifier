let model,webcam;
async function startCamera(){
const url=modelURL.value;
model=await tmImage.load(url+'model.json',url+'metadata.json');
webcam=new tmImage.Webcam(300,300,true);
await webcam.setup();await webcam.play();
camera.appendChild(webcam.canvas);loop();}
async function loop(){
webcam.update();
const p=await model.predict(webcam.canvas);
const b=p.sort((a,b)=>b.probability-a.probability)[0];
tmResult.innerHTML=b.className;
if(foodData[b.className.toLowerCase()])showFood(foodData[b.className.toLowerCase()]);
requestAnimationFrame(loop);}
function showList(){
list.innerHTML='';
const q=search.value.toLowerCase();
Object.keys(foodData).filter(k=>k.includes(q)).slice(0,20)
.forEach(k=>{const d=document.createElement('div');
d.textContent=foodData[k].name;d.onclick=()=>{search.value=foodData[k].name;list.innerHTML='';};
list.appendChild(d);});}
function searchFood(){const f=foodData[search.value.toLowerCase()];if(f)showFood(f);}
function showFood(f){
result.innerHTML=`<h2>${f.name} — ${f.type}</h2>
<p>Calories ${f.calories} kcal | Protein ${f.protein} g | Carbs ${f.carbs} g</p>
<p>Fat ${f.fat} g | Fiber ${f.fiber} g | Sugar ${f.sugar} g</p>
<p><b>Best time:</b> ${f.bestTime}</p>
<h3>Advantages</h3><ul>${f.advantages.map(a=>`<li>${a}</li>`).join('')}</ul>
<h3>Disadvantages</h3><ul>${f.disadvantages.map(d=>`<li>${d}</li>`).join('')}</ul>`;}