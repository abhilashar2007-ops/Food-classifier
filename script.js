const foodData = {
  "apple": {
    "nutrients": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4,
      "sugar": 10.4
    },
    "advantages": "Vitamins & fiber; good snack.",
    "disadvantages": "Natural sugar; moderate portions.",
    "quantity": "1 medium",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "banana": {
    "nutrients": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3,
      "fiber": 2.6,
      "sugar": 12.2
    },
    "advantages": "Quick energy; potassium-rich.",
    "disadvantages": "High carbs for some diets.",
    "quantity": "1 medium",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "idli": {
    "nutrients": {
      "calories": 39,
      "protein": 2.4,
      "carbs": 7.9,
      "fat": 0.2,
      "fiber": 0.2,
      "sugar": 0.5
    },
    "advantages": "Fermented, light.",
    "disadvantages": "Low in protein alone; pair with sambar.",
    "quantity": "2-3",
    "bestTime": "Breakfast",
    "category": "Healthy",
    "sugarAlert": false
  },
  "dosa": {
    "nutrients": {
      "calories": 135,
      "protein": 3.5,
      "carbs": 26,
      "fat": 2.5,
      "fiber": 1.2,
      "sugar": 1.2
    },
    "advantages": "Fermented, easily digestible.",
    "disadvantages": "Often served with oily sides.",
    "quantity": "1",
    "bestTime": "Breakfast",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pizza": {
    "nutrients": {
      "calories": 266,
      "protein": 11,
      "carbs": 33,
      "fat": 10,
      "fiber": 2.3,
      "sugar": 4
    },
    "advantages": "Energy-dense meal.",
    "disadvantages": "High salt and fat; eat occasionally.",
    "quantity": "1-2 slices",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "burger": {
    "nutrients": {
      "calories": 295,
      "protein": 17,
      "carbs": 30,
      "fat": 12,
      "fiber": 1.5,
      "sugar": 6
    },
    "advantages": "Protein-rich (with meat).",
    "disadvantages": "High saturated fat and sodium.",
    "quantity": "1",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "fries": {
    "nutrients": {
      "calories": 312,
      "protein": 3.4,
      "carbs": 41,
      "fat": 15,
      "fiber": 3.8,
      "sugar": 0.3
    },
    "advantages": "Quick energy.",
    "disadvantages": "High oil; avoid often.",
    "quantity": "Small serving",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "orange juice": {
    "nutrients": {
      "calories": 45,
      "protein": 0.7,
      "carbs": 10.4,
      "fat": 0.2,
      "fiber": 0.2,
      "sugar": 8.4
    },
    "advantages": "Vitamin C rich; hydrating.",
    "disadvantages": "Lacks fibre; natural sugar present.",
    "quantity": "200 ml",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "mango juice": {
    "nutrients": {
      "calories": 60,
      "protein": 0.5,
      "carbs": 15,
      "fat": 0.2,
      "fiber": 0.5,
      "sugar": 14
    },
    "advantages": "Vitamin A & C rich.",
    "disadvantages": "High sugar; limit portion.",
    "quantity": "200 ml",
    "bestTime": "Afternoon",
    "category": "Junk",
    "sugarAlert": false
  },
  "sugarcane juice": {
    "nutrients": {
      "calories": 86,
      "protein": 0.2,
      "carbs": 20.9,
      "fat": 0.1,
      "fiber": 0.1,
      "sugar": 18
    },
    "advantages": "Hydrating; quick energy.",
    "disadvantages": "Very high sugar; consume rarely.",
    "quantity": "200 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "donut (glazed)": {
    "nutrients": {
      "calories": 452,
      "protein": 4.9,
      "carbs": 51,
      "fat": 25,
      "fiber": 1.2,
      "sugar": 24
    },
    "advantages": "Tasty treat.",
    "disadvantages": "Very high sugar and fat; occasional only.",
    "quantity": "1 small",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "gulab jamun": {
    "nutrients": {
      "calories": 290,
      "protein": 4,
      "carbs": 40,
      "fat": 12,
      "fiber": 0.5,
      "sugar": 30
    },
    "advantages": "Festive dessert.",
    "disadvantages": "High sugar & fat; limit intake.",
    "quantity": "1-2",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "chocolate cake": {
    "nutrients": {
      "calories": 389,
      "protein": 4.5,
      "carbs": 50,
      "fat": 18,
      "fiber": 2.1,
      "sugar": 34
    },
    "advantages": "Pleasure food.",
    "disadvantages": "High sugar and calories.",
    "quantity": "1 slice",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "tea": {
    "nutrients": {
      "calories": 1,
      "protein": 0.1,
      "carbs": 0,
      "fat": 0,
      "fiber": 0,
      "sugar": 0
    },
    "advantages": "Antioxidants (if unsweetened).",
    "disadvantages": "Caffeine sensitivity in some.",
    "quantity": "1 cup",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "coffee": {
    "nutrients": {
      "calories": 2,
      "protein": 0.1,
      "carbs": 0,
      "fat": 0,
      "fiber": 0,
      "sugar": 0
    },
    "advantages": "Alertness (black).",
    "disadvantages": "Caffeine effects, avoid late.",
    "quantity": "1 cup",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  }
};


// Fuzzy search (Levenshtein) and wiring
function levenshtein(a,b){
  if(!a) return b?b.length:0; if(!b) return a.length;
  a=a.toLowerCase(); b=b.toLowerCase();
  const al=a.length, bl=b.length;
  const dp = Array(al+1).fill().map(()=>Array(bl+1).fill(0));
  for(let i=0;i<=al;i++) dp[i][0]=i;
  for(let j=0;j<=bl;j++) dp[0][j]=j;
  for(let i=1;i<=al;i++){
    for(let j=1;j<=bl;j++){
      const cost = a[i-1]===b[j-1]?0:1;
      dp[i][j]=Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+cost);
    }
  }
  return dp[al][bl];
}
function fuzzyFind(q){
  if(!window.foodData) return null;
  q = q.trim().toLowerCase();
  if(!q) return null;
  if(window.foodData[q]) return q;
  for(const k of Object.keys(window.foodData)){
    if(k === q) return k;
    if(k.includes(q) || q.includes(k)) return k;
  }
  let best=null, bestScore=1e9;
  for(const k of Object.keys(window.foodData)){
    const d = levenshtein(k, q);
    if(d < bestScore){ bestScore = d; best = k; }
  }
  if(best && bestScore <= Math.max(1, Math.floor(best.length*0.30))) return best;
  return null;
}
window.findMatch = function(q){ return fuzzyFind(q); };
window.lookupFoodByName = function(q){
  try{
    const key = window.findMatch(q.toLowerCase());
    console.log("lookupFoodByName: query=", q, " -> key=", key);
    if(key && typeof window.showFoodData === 'function'){
      window.showFoodData(key);
      return key;
    } else {
      alert("Not found: " + q + (key?(" (closest: "+key+")"):""));
      return null;
    }
  }catch(err){
    console.error("lookupFoodByName error:", err);
    alert("Lookup failed (see console).");
    return null;
  }
};

// Teachable Machine + MobileNet + Webcam handling
let hjModel=null,mobileNet=null,webcamStream=null,videoEl=null,captureCanvas=null,captureCtx=null,predictInterval=null;
function setProgress(el,pct){el.style.width=Math.max(0,Math.min(100,pct))+'%';}

document.getElementById('loadBtn').addEventListener('click',async()=>{
  const url=document.getElementById('hjModelUrl').value.trim();
  if(!url){ alert('Enter model URL'); return; }
  try{
    const finalUrl = url.endsWith('/')?url:url+'/';
    hjModel = await tmImage.load(finalUrl + "model.json", finalUrl + "metadata.json");
    mobileNet = await ml5.imageClassifier('MobileNet');
    document.getElementById('startBtn').disabled = false;
    alert('Models loaded');
  }catch(e){
    alert('Model load failed: '+e.message);
  }
});

document.getElementById('startBtn').addEventListener('click', async ()=>{
  videoEl = document.getElementById('webcam');
  captureCanvas = document.getElementById('captureCanvas');
  captureCtx = captureCanvas.getContext('2d');
  try{
    webcamStream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});
    videoEl.srcObject = webcamStream;
    await videoEl.play();
    document.getElementById('webcam-container').classList.add('has-stream');
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('snapshotBtn').disabled = false;
    document.getElementById('resultsPanel').style.display = 'block';
    if(!mobileNet) mobileNet = await ml5.imageClassifier('MobileNet', videoEl);
    predictInterval = setInterval(predictFrame, 900);
  }catch(e){
    alert('Webcam error: '+e.message);
  }
});

document.getElementById('stopBtn').addEventListener('click', ()=>{
  if(webcamStream){ webcamStream.getTracks().forEach(t=>t.stop()); }
  if(predictInterval) clearInterval(predictInterval);
  document.getElementById('webcam-container').classList.remove('has-stream');
  document.getElementById('startBtn').disabled = false;
});

document.getElementById('snapshotBtn').addEventListener('click', predictFrame);
document.getElementById('searchBtn').addEventListener('click', ()=>{ const q=document.getElementById('manualFood').value.trim(); if(q) lookupFoodByName(q); });
document.getElementById('manualFood').addEventListener('keydown', e=>{ if(e.key==='Enter') document.getElementById('searchBtn').click(); });

function populateSuggestions(){
  const dl = document.getElementById('food-suggestions');
  Object.keys(foodData).sort().forEach(k=>{ const opt = document.createElement('option'); opt.value = k; dl.appendChild(opt); });
}
populateSuggestions();

async function predictFrame(){
  if(!videoEl) return;
  captureCanvas.width = videoEl.videoWidth || 640;
  captureCanvas.height = videoEl.videoHeight || 480;
  captureCtx.drawImage(videoEl, 0, 0, captureCanvas.width, captureCanvas.height);
  try{ const dataUrl = captureCanvas.toDataURL('image/jpeg',0.7); document.getElementById('thumbPreview').innerHTML = '<img src="'+dataUrl+'" style="height:88px;border-radius:8px;object-fit:cover">'; }catch(e){}
  let foodLabel='Unknown', foodConf=0;
  try{ const res = await mobileNet.classify(captureCanvas); if(res && res.length){ foodLabel = res[0].label; foodConf = res[0].confidence; } }catch(e){}
  const canonical = findCanonicalFood(foodLabel);
  document.getElementById('foodName').innerText = canonical.displayName;
  document.getElementById('foodSub').innerText = canonical.key ? 'Matched from database' : 'Detected by MobileNet';
  document.getElementById('foodConfidence').innerText = (foodConf*100).toFixed(1)+'%';
  setProgress(document.getElementById('foodBar'), (foodConf*100));
  if(hjModel){
    try{
      const preds = await hjModel.predict(captureCanvas);
      if(preds && preds.length){
        const best = preds.reduce((a,b)=> a.probability>b.probability?a:b);
        document.getElementById('categoryBadge').innerText = best.className;
      }
    }catch(e){ console.warn(e); }
  }
  if(canonical.key) showFoodData(canonical.key);
}

function findMatch(q){ return fuzzyFind(q); }

function showFoodData(key){
  const e = foodData[key];
  document.getElementById('resultsPanel').style.display = 'block';
  document.getElementById('foodName').innerText = key.charAt(0).toUpperCase()+key.slice(1);
  document.getElementById('nutri').innerHTML = `Calories: ${e.nutrients.calories} kcal<br/>Protein: ${e.nutrients.protein} g<br/>Carbs: ${e.nutrients.carbs} g<br/>Fat: ${e.nutrients.fat} g<br/>Fiber: ${e.nutrients.fiber} g`;
  document.getElementById('adv').innerText = e.advantages;
  document.getElementById('disadv').innerText = e.disadvantages;
  document.getElementById('qty').innerText = e.quantity;
  document.getElementById('bestTime').innerText = e.bestTime;
  document.getElementById('categoryBadge').innerText = e.category;
  const pill = document.getElementById('categoryBadge');
  if(e.category === 'Healthy') pill.style.background = 'linear-gradient(90deg,#0ce9a8,#2bd18a)'; else pill.style.background = 'linear-gradient(90deg,#ff7b7b,#ffbaba)';
  document.getElementById('sugarVal').innerText = (e.nutrients.sugar !== undefined ? e.nutrients.sugar + ' g per 100g' : '—');
  const sugarAlertEl = document.getElementById('sugarAlert');
  if(e.sugarAlert){ sugarAlertEl.innerHTML = '<div class="sugar-high">⚠ SUGAR ALERT — High sugar content. Limit intake.</div>'; } else { sugarAlertEl.innerHTML = '<div class="sugar-ok">✓ Sugar within moderate range.</div>'; }
  setProgress(document.getElementById('foodBar'), Math.min(95, e.nutrients.calories/4));
}

function findCanonicalFood(label){
  if(!label) return {key:null, displayName:label||'Unknown'};
  const simple = label.toLowerCase().split(',')[0].split(' or ')[0].split(' with ')[0].trim();
  if(foodData[simple]) return {key:simple, displayName:simple.charAt(0).toUpperCase()+simple.slice(1)};
  for(const k of Object.keys(foodData)){
    if(simple.includes(k) || k.includes(simple)) return {key:k, displayName:k.charAt(0).toUpperCase()+k.slice(1)};
  }
  return {key:null, displayName:label};
}
