
const fruits = ["mango","apple","banana","orange","grapes","papaya","pineapple"];
const vegetables = ["tomato","potato","onion","spinach","carrot","cabbage"];
const indianHome = ["chapati","roti","dosa","idli","rice","sambar","rasam","upma","poha","khichdi","curd rice"];

const foodData = {
  mango: { calories:60, protein:0.8, carbs:15, fat:0.4, fiber:1.6, sugar:14 },
  chapati: { calories:120, protein:3, carbs:18, fat:2, fiber:3, sugar:1 },
  samosa: { calories:260, protein:5, carbs:32, fat:12, fiber:4, sugar:3 }
};

function analyzeFood(){
  const name = document.getElementById("foodInput").value.toLowerCase().trim();
  if(!foodData[name]){
    alert("Food not found in database");
    return;
  }

  let category = "Moderate";
  if(fruits.includes(name) || vegetables.includes(name) || indianHome.includes(name)){
    category = "Healthy";
  } else {
    if(foodData[name].fat > 10 || foodData[name].sugar > 10) category = "Junk";
  }

  document.getElementById("result").innerHTML = `
    <h3>${name.toUpperCase()} — <span class="badge ${category.toLowerCase()}">${category}</span></h3>
    <p>Calories: ${foodData[name].calories} kcal</p>
    <p>Protein: ${foodData[name].protein} g</p>
    <p>Carbs: ${foodData[name].carbs} g</p>
    <p>Fat: ${foodData[name].fat} g</p>
    <p>Fiber: ${foodData[name].fiber} g</p>
    <p>Sugar: ${foodData[name].sugar} g</p>
    <h4>Advantages</h4>
    <ul><li>Provides energy</li><li>Supplies nutrients</li></ul>
    <h4>Disadvantages</h4>
    <ul><li>Overconsumption may cause issues</li></ul>
  `;
}
