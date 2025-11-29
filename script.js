const foodData = {
  "apple": {
    "nutrients": {
      "calories": 52,
      "protein": 0.3,
      "carbs": 14,
      "fat": 0.2,
      "fiber": 2.4
    },
    "advantages": "Rich in fiber and vitamin C.",
    "disadvantages": "May upset stomach if overeaten.",
    "quantity": "1 medium/day",
    "bestTime": "Any"
  },
  "banana": {
    "nutrients": {
      "calories": 89,
      "protein": 1.1,
      "carbs": 23,
      "fat": 0.3,
      "fiber": 2.6
    },
    "advantages": "High potassium, quick energy.",
    "disadvantages": "High sugar for diabetics.",
    "quantity": "1-2/day",
    "bestTime": "Morning or pre-workout"
  },
  "pizza": {
    "nutrients": {
      "calories": 266,
      "protein": 11,
      "carbs": 33,
      "fat": 10,
      "fiber": 2
    },
    "advantages": "Energy & protein.",
    "disadvantages": "High saturated fat & sodium.",
    "quantity": "1-2 slices occasionally",
    "bestTime": "Occasional meal"
  },
  "burger": {
    "nutrients": {
      "calories": 295,
      "protein": 17,
      "carbs": 28,
      "fat": 12,
      "fiber": 1.5
    },
    "advantages": "Protein source.",
    "disadvantages": "High fat & sodium.",
    "quantity": "Once a week",
    "bestTime": "Occasional"
  },
  "chicken": {
    "nutrients": {
      "calories": 239,
      "protein": 27,
      "carbs": 0,
      "fat": 14,
      "fiber": 0
    },
    "advantages": "Lean protein when grilled.",
    "disadvantages": "Fried versions high fat.",
    "quantity": "100-150 g",
    "bestTime": "Lunch/Dinner"
  },
  "rice": {
    "nutrients": {
      "calories": 130,
      "protein": 2.7,
      "carbs": 28,
      "fat": 0.3,
      "fiber": 0.4
    },
    "advantages": "Staple energy source.",
    "disadvantages": "White rice high glycemic.",
    "quantity": "1 cup cooked",
    "bestTime": "Lunch/Dinner"
  }
};


let hjModel = null;
let mobileNet = null;
let webcamStream = null;
let videoEl = null;
let captureCanvas = null;
let captureCtx = null;
let predictInterval = null;

// Emoji set to use (mixed healthy/junk)
const EMOJIS = ["🍎","🍔","🥗","🍟","🍕","🥪","🍌","🍉","🍩","🍪","🥤","🍰","🍛","🍜","🍚","🍗","🍖","🧁","🍦","🍓","🍊","🍍","🍇","🥞","🧇","🥨","🌮","🌯","🥪","🍝"];

function setStatus(s){ document.getElementById('status').innerText = s; }

// Create animated floating emojis across the background
function createFloatingEmojis(count = 60){
  const layer = document.getElementById('emoji-layer');
  if(!layer) return;
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
  for(let i=0;i<count;i++){
    const span = document.createElement('span');
    span.className = 'floating-emoji';
    const emoji = EMOJIS[Math.floor(Math.random()*EMOJIS.length)];
    span.textContent = emoji;
    // random size 36-120
    const size = Math.floor(36 + Math.random()*84);
    span.style.fontSize = size + 'px';
    // random position
    const left = Math.random() * vw;
    const top = Math.random() * vh;
    span.style.left = left + 'px';
    span.style.top = top + 'px';
    // random animation duration and movement amplitude
    const duration = (8 + Math.random()*18).toFixed(2) + 's';
    const delay = (Math.random()*-10).toFixed(2) + 's';
    span.style.animation = `floatAnim ${duration} linear ${delay} infinite`;
    // random opacity variation slightly
    span.style.opacity = (0.06 + Math.random()*0.16).toString();
    layer.appendChild(span);
  }
  // define keyframes dynamically to add slight horizontal drift as well
  const style = document.createElement('style');
  style.textContent = `@keyframes floatAnim { 
    0% { transform: translateY(0px) rotate(0deg); } 
    25% { transform: translateY(-18px) rotate(6deg) translateX(-6px); } 
    50% { transform: translateY(-40px) rotate(12deg); } 
    75% { transform: translateY(-18px) rotate(6deg) translateX(6px); } 
    100% { transform: translateY(0px) rotate(0deg); } 
  }`;
  document.head.appendChild(style);
}

// load TM model
async function loadHJModel(url){
  if(!url) throw new Error('Model URL empty');
  if(!url.endsWith('/')) url = url + '/';
  setStatus('Loading Teachable Machine model...');
  const modelURL = url + 'model.json';
  const metadataURL = url + 'metadata.json';
  hjModel = await tmImage.load(modelURL, metadataURL);
  setStatus('Teachable Machine (H/J) model loaded.');
  return hjModel;
}

document.getElementById('loadBtn').addEventListener('click', async ()=>{
  const url = document.getElementById('hjModelUrl').value.trim();
  try{
    if(!url){ alert('Please paste your Teachable Machine model folder URL.'); return; }
    await loadHJModel(url);
    // load ml5 MobileNet
    setStatus('Loading MobileNet (ml5) for food-name detection...');
    mobileNet = await ml5.imageClassifier('MobileNet');
    setStatus('MobileNet ready. Click Start Webcam.');
    document.getElementById('startBtn').disabled = false;
  } catch(err){
    console.error(err);
    alert('Error loading model: ' + err.message);
    setStatus('Model load failed.');
  }
});

// start webcam
document.getElementById('startBtn').addEventListener('click', async ()=>{
  if(videoEl) return;
  videoEl = document.getElementById('webcam');
  captureCanvas = document.getElementById('captureCanvas');
  captureCtx = captureCanvas.getContext('2d');
  try{
    webcamStream = await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}, audio:false});
    videoEl.srcObject = webcamStream;
    await videoEl.play();
    setStatus('Webcam started.');
    document.getElementById('stopBtn').disabled = false;
    document.getElementById('startBtn').disabled = true;
    document.getElementById('snapshotBtn').disabled = false;
    document.getElementById('resultsPanel').style.display = 'block';
    // load ml5 MobileNet if not already loaded
    if(!mobileNet){ mobileNet = await ml5.imageClassifier('MobileNet', videoEl); }
    // begin loop
    predictInterval = setInterval(predictFrame, 800);
  } catch(err){
    alert('Could not start webcam: ' + err.message);
    setStatus('Webcam error.');
  }
});

// snapshot
document.getElementById('snapshotBtn').addEventListener('click', async ()=>{
  await predictFrame();
});

// stop
document.getElementById('stopBtn').addEventListener('click', ()=>{
  if(webcamStream){
    webcamStream.getTracks().forEach(t=>t.stop());
    webcamStream = null;
  }
  if(predictInterval) clearInterval(predictInterval);
  document.getElementById('startBtn').disabled = false;
  document.getElementById('stopBtn').disabled = true;
  setStatus('Webcam stopped.');
});

async function predictFrame(){
  if(!videoEl) return;
  // draw the video frame to canvas
  captureCanvas.width = videoEl.videoWidth || 480;
  captureCanvas.height = videoEl.videoHeight || 360;
  captureCtx.drawImage(videoEl, 0, 0, captureCanvas.width, captureCanvas.height);

  // 1) get food name via MobileNet (ml5)
  let foodLabel = 'Unknown';
  let foodConf = 0;
  try{
    const results = await mobileNet.classify(captureCanvas);
    if(results && results.length){
      foodLabel = results[0].label;
      foodConf = results[0].confidence;
    }
  } catch(e){
    console.warn('MobileNet classify error', e);
  }

  // canonicalize food label
  const canonical = findCanonicalFood(foodLabel);
  document.getElementById('foodName').innerText = canonical.displayName;
  document.getElementById('foodConfidence').innerText = (foodConf*100).toFixed(1) + '%';

  // 2) get H/J from Teachable Machine model
  if(hjModel){
    try{
      const preds = await hjModel.predict(captureCanvas);
      if(preds && preds.length){
        const top = preds.reduce((a,b)=> a.probability > b.probability ? a : b);
        const label = top.className;
        const conf = (top.probability*100).toFixed(1) + '%';
        const hjBadge = document.getElementById('hjBadge');
        hjBadge.innerText = `${label} (${conf})`;
        if(label.toLowerCase().includes('healthy')) hjBadge.className = 'badge green';
        else if(label.toLowerCase().includes('junk')||label.toLowerCase().includes('unhealthy')) hjBadge.className = 'badge red';
        else hjBadge.className = 'badge';
      }
    } catch(e){
      console.warn('HJ model predict failed', e);
    }
  } else {
    attemptRuleBasedHJ(canonical.key);
  }

  // 3) show nutrition/advice
  if(canonical.key && foodData[canonical.key]){
    const e = foodData[canonical.key];
    document.getElementById('nutri').innerHTML = `
      Calories: ${e.nutrients.calories} kcal<br/>
      Protein: ${e.nutrients.protein} g<br/>
      Carbs: ${e.nutrients.carbs} g<br/>
      Fat: ${e.nutrients.fat} g<br/>
      Fiber: ${e.nutrients.fiber ?? '-'} g
    `;
    document.getElementById('adv').innerText = e.advantages;
    document.getElementById('disadv').innerText = e.disadvantages;
    document.getElementById('qty').innerText = e.quantity;
    document.getElementById('bestTime').innerText = e.bestTime;
  } else {
    document.getElementById('nutri').innerText = 'No nutrition data found for this food. Add it to foodData in the code.';
    document.getElementById('adv').innerText = '-';
    document.getElementById('disadv').innerText = '-';
    document.getElementById('qty').innerText = '-';
    document.getElementById('bestTime').innerText = '-';
  }
}

function attemptRuleBasedHJ(foodKey){
  const hjBadge = document.getElementById('hjBadge');
  if(foodKey && foodData[foodKey]){
    const e = foodData[foodKey];
    const junk = (e.nutrients.calories && e.nutrients.calories > 250) || (e.nutrients.fat && e.nutrients.fat > 12);
    hjBadge.innerText = junk ? "Junk (rule)" : "Healthy (rule)";
    hjBadge.className = junk ? 'badge red' : 'badge green';
  } else {
    hjBadge.innerText = "—";
    hjBadge.className = 'badge';
  }
}

// try to canonicalize MobileNet label to a key in foodData
function findCanonicalFood(label){
  if(!label) return {key:null, displayName:'Unknown'};
  const lower = label.toLowerCase();
  if(foodData[lower]) return {key:lower, displayName:capitalize(lower)};
  // split tokens and match
  const tokens = lower.replace(/,/g,' ').split(/\\s+/);
  for(const t of tokens){
    const singular = t.replace(/s$/,'');
    if(foodData[t]) return {key:t, displayName:capitalize(t)};
    if(foodData[singular]) return {key:singular, displayName:capitalize(singular)};
  }
  // synonyms
  const synonyms = {'hot dog':'hotdog','hot-dog':'hotdog','french fries':'fries','french-fries':'fries','fried rice':'rice','veg biryani':'biryani'};
  for(const s in synonyms){
    if(lower.includes(s)){
      const key = synonyms[s];
      if(foodData[key]) return {key:key, displayName:capitalize(key)};
    }
  }
  // substring match
  for(const key in foodData){
    if(lower.includes(key)) return {key:key, displayName:capitalize(key)};
  }
  // fallback
  return {key:null, displayName:label};
}

function capitalize(s){ if(!s) return s; return s[0].toUpperCase() + s.slice(1); }

// initialize on page load
window.addEventListener('load', ()=>{
  createFloatingEmojis(60);
});
