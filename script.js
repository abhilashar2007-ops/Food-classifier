
const search=document.getElementById("search");
const suggestions=document.getElementById("suggestions");
const result=document.getElementById("result");
const aiResult=document.getElementById("aiResult");
const names=Object.keys(foodData);

let modelPromise = mobilenet.load();

async function analyzeImage(){
 const file=document.getElementById("imageUpload").files[0];
 if(!file){alert("Upload an image");return;}
 const img=document.createElement("img");
 img.src=URL.createObjectURL(file);
 await img.decode();
 const model=await modelPromise;
 const preds=await model.classify(img);
 const label=preds[0].className.toLowerCase();

 // map common labels to food names
 let mapped=null;
 if(label.includes("apple")) mapped="Apple";
 else if(label.includes("banana")) mapped="Banana";
 else if(label.includes("orange")) mapped="Orange";
 else if(label.includes("pizza")) mapped="Pizza";
 else if(label.includes("burger")) mapped="Burger";
 else if(label.includes("bread")) mapped="Bread";
 else if(label.includes("cake")) mapped="Cake";
 else if(label.includes("sandwich")) mapped="Sandwich";
 else if(label.includes("noodle")) mapped="Noodles";
 else if(label.includes("ice cream")) mapped="Ice Cream";

 if(mapped){
   aiResult.innerHTML="<b>Detected:</b> "+mapped;
   show(mapped);
 } else {
   aiResult.innerHTML="Food not recognized confidently.";
 }
}

search.addEventListener("input",()=>{
 suggestions.innerHTML="";
 const v=search.value.toLowerCase();
 if(!v) return;
 names.filter(n=>n.toLowerCase().includes(v)).forEach(n=>{
  const d=document.createElement("div");
  d.textContent=n;
  d.onclick=()=>{search.value=n;show(n);suggestions.innerHTML="";};
  suggestions.appendChild(d);
 });
});

search.addEventListener("keydown",e=>{
 if(e.key==="Enter"){show(search.value);suggestions.innerHTML="";}
});

function show(name){
 const f=foodData[name];
 if(!f){alert("Food not found in database");return;}
 result.classList.remove("hidden");
 result.innerHTML=`
 <h2>${name} <span class="${f.type}">${f.type}</span></h2>
 <p>Calories: ${f.calories}</p>
 <p>Protein: ${f.protein} g</p>
 <p>Carbs: ${f.carbs} g</p>
 <p>Fat: ${f.fat} g</p>
 <p>Fiber: ${f.fiber} g</p>
 <p>Sugar: ${f.sugar} g</p>
 <p><b>Best time:</b> ${f.bestTime}</p>`;
}
