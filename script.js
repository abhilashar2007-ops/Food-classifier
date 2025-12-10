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
    "advantages": "Rich in vitamins, minerals and fiber; supports immunity and digestion.",
    "disadvantages": "Contains natural sugars; portion control advised for diabetics.",
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
    "advantages": "Rich in vitamins, minerals and fiber; supports immunity and digestion.",
    "disadvantages": "Contains natural sugars; portion control advised for diabetics.",
    "quantity": "1 medium",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "mango": {
    "nutrients": {
      "calories": 60,
      "protein": 0.8,
      "carbs": 15,
      "fat": 0.4,
      "fiber": 1.6,
      "sugar": 14
    },
    "advantages": "Rich in vitamins, minerals and fiber; supports immunity and digestion.",
    "disadvantages": "Contains natural sugars; portion control advised for diabetics.",
    "quantity": "1 medium",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "orange": {
    "nutrients": {
      "calories": 47,
      "protein": 0.9,
      "carbs": 12,
      "fat": 0.1,
      "fiber": 2.4,
      "sugar": 9
    },
    "advantages": "Rich in vitamins, minerals and fiber; supports immunity and digestion.",
    "disadvantages": "Contains natural sugars; portion control advised for diabetics.",
    "quantity": "1 medium",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "grapes": {
    "nutrients": {
      "calories": 69,
      "protein": 0.7,
      "carbs": 18,
      "fat": 0.2,
      "fiber": 0.9,
      "sugar": 16
    },
    "advantages": "Rich in vitamins, minerals and fiber; supports immunity and digestion.",
    "disadvantages": "Contains natural sugars; portion control advised for diabetics.",
    "quantity": "1 medium",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": true
  },
  "spinach": {
    "nutrients": {
      "calories": 23,
      "protein": 2.9,
      "carbs": 3.6,
      "fat": 0.4,
      "fiber": 2.2,
      "sugar": 0.4
    },
    "advantages": "Provides fiber and micronutrients.",
    "disadvantages": "Some preparations add oil/salt increasing calories.",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "potato": {
    "nutrients": {
      "calories": 77,
      "protein": 2,
      "carbs": 17,
      "fat": 0.1,
      "fiber": 2.2,
      "sugar": 0.8
    },
    "advantages": "Provides fiber and micronutrients.",
    "disadvantages": "Some preparations add oil/salt increasing calories.",
    "quantity": "100 g",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "tomato": {
    "nutrients": {
      "calories": 18,
      "protein": 0.9,
      "carbs": 3.9,
      "fat": 0.2,
      "fiber": 1.2,
      "sugar": 2.6
    },
    "advantages": "Provides fiber and micronutrients.",
    "disadvantages": "Some preparations add oil/salt increasing calories.",
    "quantity": "100 g",
    "bestTime": "Any",
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
    "advantages": "Traditional; nutrient profile depends on recipe.",
    "disadvantages": "Can be oily or sugar-dense depending on preparation.",
    "quantity": "1 serving",
    "bestTime": "Lunch/Dinner",
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
    "advantages": "Traditional; nutrient profile depends on recipe.",
    "disadvantages": "Can be oily or sugar-dense depending on preparation.",
    "quantity": "1 serving",
    "bestTime": "Lunch/Dinner",
    "category": "Healthy",
    "sugarAlert": false
  },
  "aloo paratha": {
    "nutrients": {
      "calories": 300,
      "protein": 6,
      "carbs": 45,
      "fat": 10,
      "fiber": 3,
      "sugar": 2
    },
    "advantages": "Traditional; nutrient profile depends on recipe.",
    "disadvantages": "Can be oily or sugar-dense depending on preparation.",
    "quantity": "1 serving",
    "bestTime": "Lunch/Dinner",
    "category": "Junk",
    "sugarAlert": false
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
    "advantages": "Traditional; nutrient profile depends on recipe.",
    "disadvantages": "Can be oily or sugar-dense depending on preparation.",
    "quantity": "1 serving",
    "bestTime": "Lunch/Dinner",
    "category": "Junk",
    "sugarAlert": true
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
    "advantages": "Filling and tasty; convenient.",
    "disadvantages": "Often high in fat, salt and calories; eat occasionally.",
    "quantity": "1 serving",
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
    "advantages": "Filling and tasty; convenient.",
    "disadvantages": "Often high in fat, salt and calories; eat occasionally.",
    "quantity": "1 serving",
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
    "advantages": "Filling and tasty; convenient.",
    "disadvantages": "Often high in fat, salt and calories; eat occasionally.",
    "quantity": "1 serving",
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
    "advantages": "Provides quick energy and hydration.",
    "disadvantages": "High in sugars; lacks fibre compared to whole fruit.",
    "quantity": "100 ml",
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
    "advantages": "Provides quick energy and hydration.",
    "disadvantages": "High in sugars; lacks fibre compared to whole fruit.",
    "quantity": "100 ml",
    "bestTime": "Morning",
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
    "advantages": "Provides quick energy and hydration.",
    "disadvantages": "High in sugars; lacks fibre compared to whole fruit.",
    "quantity": "100 ml",
    "bestTime": "Morning",
    "category": "Junk",
    "sugarAlert": true
  },
  "cola": {
    "nutrients": {
      "calories": 42,
      "protein": 0,
      "carbs": 10.6,
      "fat": 0,
      "fiber": 0,
      "sugar": 10.6
    },
    "advantages": "Provides quick energy and hydration.",
    "disadvantages": "High in sugars; lacks fibre compared to whole fruit.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "milkshake (chocolate)": {
    "nutrients": {
      "calories": 210,
      "protein": 7,
      "carbs": 30,
      "fat": 8,
      "fiber": 0.5,
      "sugar": 25
    },
    "advantages": "Provides quick energy and hydration.",
    "disadvantages": "High in sugars; lacks fibre compared to whole fruit.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "cheese burst pizza": {
    "nutrients": {
      "calories": 320,
      "protein": 12,
      "carbs": 33,
      "fat": 14,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "double cheeseburger": {
    "nutrients": {
      "calories": 450,
      "protein": 25,
      "carbs": 30,
      "fat": 28,
      "fiber": 2,
      "sugar": 7
    },
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "fried chicken (drumstick)": {
    "nutrients": {
      "calories": 240,
      "protein": 16,
      "carbs": 8,
      "fat": 16,
      "fiber": 0.5,
      "sugar": 0.5
    },
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
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
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
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
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "chocolate bar": {
    "nutrients": {
      "calories": 546,
      "protein": 7,
      "carbs": 61,
      "fat": 30,
      "fiber": 3.5,
      "sugar": 48
    },
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "jalebi": {
    "nutrients": {
      "calories": 400,
      "protein": 4,
      "carbs": 70,
      "fat": 10,
      "fiber": 0.5,
      "sugar": 50
    },
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "pakora": {
    "nutrients": {
      "calories": 300,
      "protein": 6,
      "carbs": 30,
      "fat": 18,
      "fiber": 3,
      "sugar": 2
    },
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "idly": {
    "nutrients": {
      "calories": 39,
      "protein": 2.4,
      "carbs": 7.9,
      "fat": 0.2,
      "fiber": 0.2,
      "sugar": 0.5
    },
    "advantages": "Traditional; nutrient profile depends on recipe.",
    "disadvantages": "Can be oily or sugar-dense depending on preparation.",
    "quantity": "1 serving",
    "bestTime": "Lunch/Dinner",
    "category": "Healthy",
    "sugarAlert": false
  },
  "samosa": {
    "nutrients": {
      "calories": 300,
      "protein": 6,
      "carbs": 30,
      "fat": 18,
      "fiber": 3,
      "sugar": 2
    },
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "choc bar": {
    "nutrients": {
      "calories": 546,
      "protein": 7,
      "carbs": 61,
      "fat": 30,
      "fiber": 3.5,
      "sugar": 48
    },
    "advantages": "Tasty treat; provides quick energy.",
    "disadvantages": "High sugar/fat; increases risk of obesity, CVD if consumed often.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "coke": {
    "nutrients": {
      "calories": 42,
      "protein": 0,
      "carbs": 10.6,
      "fat": 0,
      "fiber": 0,
      "sugar": 10.6
    },
    "advantages": "Provides quick energy and hydration.",
    "disadvantages": "High in sugars; lacks fibre compared to whole fruit.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  }
};


// ---- Image map and fuzzy search ----
const imageMap = {
  "apple": "fruit.svg",
  "banana": "fruit.svg",
  "mango": "mango.svg",
  "orange": "fruit.svg",
  "grapes": "fruit.svg",
  "spinach": "veg.svg",
  "potato": "veg.svg",
  "tomato": "veg.svg",
  "idli": "idli.svg",
  "dosa": "idli.svg",
  "aloo paratha": "indian.svg",
  "gulab jamun": "indian.svg",
  "pizza": "pizza.svg",
  "burger": "burger.svg",
  "fries": "junk.svg",
  "cheese burst pizza": "pizza.svg",
  "double cheeseburger": "burger.svg",
  "donut (glazed)": "junk.svg",
  "chocolate cake": "junk.svg",
  "jalebi": "indian.svg",
  "orange juice": "juice.svg",
  "mango juice": "juice.svg",
  "sugarcane juice": "juice.svg",
  "cola": "juice.svg",
  "cheese fries": "junk.svg"
};

function getImageForFood(key, category) {
  if(imageMap[key]) return 'images/' + imageMap[key];
  // fallback by category
  if(category === 'Healthy') return 'images/fruit.svg';
  if(category === 'Junk') return 'images/junk.svg';
  if(category === 'Indian') return 'images/indian.svg';
  if(category === 'Vegetable') return 'images/veg.svg';
  return 'images/fruit.svg';
}

// Levenshtein distance for fuzzy matching
function levenshtein(a,b){
  if(!a) return b.length; if(!b) return a.length;
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

// Fuzzy find: returns best key or null
function fuzzyFind(q) {
  q = q.trim().toLowerCase();
  if(!q) return null;
  let best=null; let bestScore=1e9;
  for(const key of Object.keys(foodData)){
    if(key===q) return key;
    if(key.includes(q) || q.includes(key)) return key;
    const dist = levenshtein(key,q);
    if(dist < bestScore){ bestScore = dist; best = key; }
  }
  // Accept if distance small relative to length
  if(best && bestScore <= Math.max(1, Math.floor(best.length*0.25))) return best;
  return null;
}



// Main script: load TM model, start webcam and show info
let hjModel=null,mobileNet=null,webcamStream=null,videoEl=null,captureCanvas=null,captureCtx=null,predictInterval=null;
function setProgress(el,pct){el.style.width=Math.max(0,Math.min(100,pct))+'%';}
document.getElementById('loadBtn').addEventListener('click',async()=>{const url=document.getElementById('hjModelUrl').value.trim();try{if(!url)throw new Error('Model URL empty');const finalUrl=url.endsWith('/')?url:url+'/';hjModel=await tmImage.load(finalUrl+'model.json',finalUrl+'metadata.json');mobileNet=await ml5.imageClassifier('MobileNet');document.getElementById('startBtn').disabled=false;alert('Models loaded');}catch(e){alert('Load failed:'+e.message);}});
document.getElementById('startBtn').addEventListener('click',async()=>{videoEl=document.getElementById('webcam');captureCanvas=document.getElementById('captureCanvas');captureCtx=captureCanvas.getContext('2d');try{webcamStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});videoEl.srcObject=webcamStream;await videoEl.play();document.getElementById('webcam-container').classList.add('has-stream');document.getElementById('stopBtn').disabled=false;document.getElementById('snapshotBtn').disabled=false;document.getElementById('resultsPanel').style.display='block';if(!mobileNet)mobileNet=await ml5.imageClassifier('MobileNet',videoEl);predictInterval=setInterval(predictFrame,900);}catch(e){alert('Webcam error:'+e.message);}});
document.getElementById('stopBtn').addEventListener('click',()=>{if(webcamStream)webcamStream.getTracks().forEach(t=>t.stop());if(predictInterval)clearInterval(predictInterval);document.getElementById('webcam-container').classList.remove('has-stream');document.getElementById('startBtn').disabled=false;});
document.getElementById('snapshotBtn').addEventListener('click',predictFrame);
document.getElementById('searchBtn').addEventListener('click',()=>{const q=document.getElementById('manualFood').value.trim();if(q)lookupFoodByName(q);});
document.getElementById('manualFood').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('searchBtn').click();});
function populateSuggestions(){const dl=document.getElementById('food-suggestions');Object.keys(foodData).sort().forEach(k=>{const opt=document.createElement('option');opt.value=k;dl.appendChild(opt);});}populateSuggestions();
async function predictFrame(){if(!videoEl)return;captureCanvas.width=videoEl.videoWidth||640;captureCanvas.height=videoEl.videoHeight||480;captureCtx.drawImage(videoEl,0,0,captureCanvas.width,captureCanvas.height);try{const dataUrl=captureCanvas.toDataURL('image/jpeg',0.7);document.getElementById('thumbPreview').innerHTML='<img src="'+dataUrl+'" style=\"height:88px;border-radius:8px;object-fit:cover\">';}catch(e){}let foodLabel='Unknown',foodConf=0;try{const res=await mobileNet.classify(captureCanvas);if(res&&res.length){foodLabel=res[0].label;foodConf=res[0].confidence;}}catch(e){}const canonical=findCanonicalFood(foodLabel);document.getElementById('foodName').innerText=canonical.displayName;document.getElementById('foodSub').innerText=canonical.key?'Matched from database':'Detected by MobileNet';document.getElementById('foodConfidence').innerText=(foodConf*100).toFixed(1)+'%';setProgress(document.getElementById('foodBar'),(foodConf*100));if(hjModel){try{const preds=await hjModel.predict(captureCanvas);if(preds&&preds.length){const best=preds.reduce((a,b)=>a.probability>b.probability?a:b);document.getElementById('categoryBadge').innerText=best.className;}}catch(e){console.warn(e);}}if(canonical.key)showFoodData(canonical.key);}function lookupFoodByName(q){const key=findMatch(q.toLowerCase());if(key)showFoodData(key);else alert('Not found: '+q);}function findMatch(q){ return fuzzyFind(q); }return null;}function showFoodData(key){const e=foodData[key];document.getElementById('resultsPanel').style.display='block';document.getElementById('foodName').innerText=key.charAt(0).toUpperCase()+key.slice(1);
  const img = getImageForFood(key, e.category); document.getElementById('thumbPreview').innerHTML = '<img src="'+img+'" style="height:88px;border-radius:8px;object-fit:cover">';document.getElementById('nutri').innerHTML=`Calories: ${e.nutrients.calories} kcal<br/>Protein: ${e.nutrients.protein} g<br/>Carbs: ${e.nutrients.carbs} g<br/>Fat: ${e.nutrients.fat} g<br/>Fiber: ${e.nutrients.fiber} g`;document.getElementById('adv').innerText=e.advantages;document.getElementById('disadv').innerText=e.disadvantages;document.getElementById('qty').innerText=e.quantity;document.getElementById('bestTime').innerText=e.bestTime;document.getElementById('categoryBadge').innerText=e.category;const pill=document.getElementById('categoryBadge');if(e.category==='Healthy')pill.style.background='linear-gradient(90deg,#0ce9a8,#2bd18a)';else pill.style.background='linear-gradient(90deg,#ff7b7b,#ffbaba)';document.getElementById('sugarVal').innerText = (e.nutrients.sugar !== undefined ? e.nutrients.sugar + ' g per 100g' : '—');const sugarAlertEl = document.getElementById('sugarAlert');if(e.sugarAlert){sugarAlertEl.innerHTML = '<div class=\"sugar-high\">⚠ SUGAR ALERT — High sugar content. Limit intake.</div>';}else{sugarAlertEl.innerHTML = '<div class=\"sugar-ok\">✓ Sugar within moderate range.</div>';}setProgress(document.getElementById('foodBar'),Math.min(95,e.nutrients.calories/4));}function findCanonicalFood(label){ if(!label) return {key:null, displayName:label||'Unknown'}; const simple = label.toLowerCase().split(',')[0].split(' or ')[0].split(' with ')[0].trim(); if(foodData[simple]) return {key:simple, displayName:simple.charAt(0).toUpperCase()+simple.slice(1)}; for(const k of Object.keys(foodData)){ if(simple.includes(k) || k.includes(simple)) return {key:k, displayName:k.charAt(0).toUpperCase()+k.slice(1)}; } return {key:null, displayName:label}; }
