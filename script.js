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
    "advantages": "Natural source of vitamins and minerals. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "Overconsumption may add excess calories. Usually safe, but portion control matters for caloric intake.",
    "quantity": "1 serving",
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
    "advantages": "Natural source of vitamins and minerals. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "Overconsumption may add excess calories. Usually safe, but portion control matters for caloric intake.",
    "quantity": "1 serving",
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
    "advantages": "Natural source of vitamins and minerals. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "Overconsumption may add excess calories. Usually safe, but portion control matters for caloric intake.",
    "quantity": "1 serving",
    "bestTime": "Any",
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
    "advantages": "Natural source of vitamins and minerals. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "Overconsumption may add excess calories. Usually safe, but portion control matters for caloric intake.",
    "quantity": "1 serving",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
  },
  "roti": {
    "nutrients": {
      "calories": 110,
      "protein": 3,
      "carbs": 18,
      "fat": 2,
      "fiber": 2,
      "sugar": 0.4
    },
    "advantages": "Natural source of vitamins and minerals. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "Overconsumption may add excess calories. Usually safe, but portion control matters for caloric intake.",
    "quantity": "1 serving",
    "bestTime": "Any",
    "category": "Healthy",
    "sugarAlert": false
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
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
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
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
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
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chicken wings (buffalo)": {
    "nutrients": {
      "calories": 290,
      "protein": 20,
      "carbs": 5,
      "fat": 22,
      "fiber": 0.5,
      "sugar": 1
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chicken nuggets": {
    "nutrients": {
      "calories": 296,
      "protein": 15,
      "carbs": 15,
      "fat": 18,
      "fiber": 1.0,
      "sugar": 1.5
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "mozzarella sticks": {
    "nutrients": {
      "calories": 320,
      "protein": 20,
      "carbs": 20,
      "fat": 18,
      "fiber": 1,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "onion rings": {
    "nutrients": {
      "calories": 411,
      "protein": 5,
      "carbs": 45,
      "fat": 23,
      "fiber": 3,
      "sugar": 4
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "nachos and cheese": {
    "nutrients": {
      "calories": 500,
      "protein": 8,
      "carbs": 46,
      "fat": 30,
      "fiber": 4,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "corn dog": {
    "nutrients": {
      "calories": 300,
      "protein": 8,
      "carbs": 30,
      "fat": 15,
      "fiber": 1.5,
      "sugar": 6
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "garlic bread (buttered)": {
    "nutrients": {
      "calories": 350,
      "protein": 8,
      "carbs": 40,
      "fat": 15,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
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
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "ice cream (vanilla)": {
    "nutrients": {
      "calories": 207,
      "protein": 3.5,
      "carbs": 24,
      "fat": 11,
      "fiber": 0.5,
      "sugar": 21
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
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
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "brownie": {
    "nutrients": {
      "calories": 466,
      "protein": 5.3,
      "carbs": 59,
      "fat": 22,
      "fiber": 2.4,
      "sugar": 38
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "milkshake (chocolate)": {
    "nutrients": {
      "calories": 200,
      "protein": 6,
      "carbs": 28,
      "fat": 7,
      "fiber": 0.5,
      "sugar": 28
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "soft drink (cola)": {
    "nutrients": {
      "calories": 42,
      "protein": 0,
      "carbs": 10.6,
      "fat": 0,
      "fiber": 0,
      "sugar": 10.6
    },
    "advantages": "Hydrating and provides quick energy. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Usually safe, but portion control matters for caloric intake.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Healthy",
    "sugarAlert": false
  },
  "energy drink": {
    "nutrients": {
      "calories": 45,
      "protein": 0,
      "carbs": 11,
      "fat": 0,
      "fiber": 0,
      "sugar": 11
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "potato chips (classic)": {
    "nutrients": {
      "calories": 536,
      "protein": 7,
      "carbs": 53,
      "fat": 34,
      "fiber": 4.5,
      "sugar": 0.5
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "cheese fries": {
    "nutrients": {
      "calories": 350,
      "protein": 6,
      "carbs": 40,
      "fat": 18,
      "fiber": 3,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "fried fish (beer-battered)": {
    "nutrients": {
      "calories": 232,
      "protein": 15,
      "carbs": 12,
      "fat": 12,
      "fiber": 0.5,
      "sugar": 0.3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "pizza (extra cheese)": {
    "nutrients": {
      "calories": 300,
      "protein": 12,
      "carbs": 34,
      "fat": 11,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
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
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "candy/gummies": {
    "nutrients": {
      "calories": 350,
      "protein": 5,
      "carbs": 78,
      "fat": 0.5,
      "fiber": 0,
      "sugar": 66
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "waffles (with syrup)": {
    "nutrients": {
      "calories": 291,
      "protein": 6,
      "carbs": 33,
      "fat": 14,
      "fiber": 1.5,
      "sugar": 18
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "popcorn (butter)": {
    "nutrients": {
      "calories": 486,
      "protein": 7.9,
      "carbs": 51,
      "fat": 25,
      "fiber": 7,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "fried noodles (restaurant)": {
    "nutrients": {
      "calories": 220,
      "protein": 6,
      "carbs": 30,
      "fat": 8,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "instant noodles (prepared)": {
    "nutrients": {
      "calories": 436,
      "protein": 10,
      "carbs": 63,
      "fat": 17,
      "fiber": 3.5,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chocolate brownie (with nuts)": {
    "nutrients": {
      "calories": 480,
      "protein": 6,
      "carbs": 54,
      "fat": 26,
      "fiber": 3,
      "sugar": 36
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "brownie with ice cream": {
    "nutrients": {
      "calories": 520,
      "protein": 7,
      "carbs": 60,
      "fat": 30,
      "fiber": 2,
      "sugar": 40
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "cupcake": {
    "nutrients": {
      "calories": 389,
      "protein": 4.5,
      "carbs": 45,
      "fat": 20,
      "fiber": 1.2,
      "sugar": 30
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "nachos (plain salted chips)": {
    "nutrients": {
      "calories": 478,
      "protein": 6,
      "carbs": 52,
      "fat": 28,
      "fiber": 4,
      "sugar": 1
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "fried spring rolls": {
    "nutrients": {
      "calories": 221,
      "protein": 5,
      "carbs": 20,
      "fat": 12,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "jalebi (deep fried syrup dessert)": {
    "nutrients": {
      "calories": 400,
      "protein": 4,
      "carbs": 70,
      "fat": 10,
      "fiber": 0.5,
      "sugar": 50
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "malpua": {
    "nutrients": {
      "calories": 350,
      "protein": 5,
      "carbs": 45,
      "fat": 16,
      "fiber": 1,
      "sugar": 28
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "aloo bonda": {
    "nutrients": {
      "calories": 260,
      "protein": 3.5,
      "carbs": 28,
      "fat": 14,
      "fiber": 2.2,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "bread pakoda": {
    "nutrients": {
      "calories": 300,
      "protein": 6,
      "carbs": 35,
      "fat": 12,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "kachori (fried savory)": {
    "nutrients": {
      "calories": 420,
      "protein": 6,
      "carbs": 48,
      "fat": 22,
      "fiber": 3,
      "sugar": 4
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "pakora (mixed vegetable fritters)": {
    "nutrients": {
      "calories": 300,
      "protein": 6,
      "carbs": 30,
      "fat": 18,
      "fiber": 3,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "mirchi bajji": {
    "nutrients": {
      "calories": 290,
      "protein": 4,
      "carbs": 28,
      "fat": 18,
      "fiber": 2.5,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chicken 65": {
    "nutrients": {
      "calories": 320,
      "protein": 20,
      "carbs": 8,
      "fat": 22,
      "fiber": 0.5,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "paneer 65": {
    "nutrients": {
      "calories": 380,
      "protein": 16,
      "carbs": 10,
      "fat": 28,
      "fiber": 1,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "gobi manchurian (fried)": {
    "nutrients": {
      "calories": 250,
      "protein": 4,
      "carbs": 22,
      "fat": 14,
      "fiber": 3,
      "sugar": 6
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "schezwan fried rice (oily)": {
    "nutrients": {
      "calories": 240,
      "protein": 5,
      "carbs": 32,
      "fat": 9,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "veg manchurian (fried)": {
    "nutrients": {
      "calories": 260,
      "protein": 6,
      "carbs": 24,
      "fat": 14,
      "fiber": 3,
      "sugar": 5
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chinese bhel": {
    "nutrients": {
      "calories": 300,
      "protein": 6,
      "carbs": 36,
      "fat": 12,
      "fiber": 3,
      "sugar": 8
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "kurkure (spicy chips)": {
    "nutrients": {
      "calories": 540,
      "protein": 6,
      "carbs": 50,
      "fat": 34,
      "fiber": 3,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "kulfi (Indian ice cream)": {
    "nutrients": {
      "calories": 200,
      "protein": 4,
      "carbs": 28,
      "fat": 8,
      "fiber": 0.2,
      "sugar": 22
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "falooda": {
    "nutrients": {
      "calories": 220,
      "protein": 5,
      "carbs": 35,
      "fat": 6,
      "fiber": 1,
      "sugar": 28
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "fried samosa (potato)": {
    "nutrients": {
      "calories": 260,
      "protein": 4,
      "carbs": 30,
      "fat": 14,
      "fiber": 3,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "fish fry (Indian style)": {
    "nutrients": {
      "calories": 240,
      "protein": 20,
      "carbs": 5,
      "fat": 14,
      "fiber": 0.5,
      "sugar": 0.3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chicken shawarma (with sauce)": {
    "nutrients": {
      "calories": 260,
      "protein": 15,
      "carbs": 20,
      "fat": 12,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "shawarma wrap (large)": {
    "nutrients": {
      "calories": 450,
      "protein": 25,
      "carbs": 40,
      "fat": 20,
      "fiber": 3,
      "sugar": 5
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "doner kebab": {
    "nutrients": {
      "calories": 250,
      "protein": 14,
      "carbs": 18,
      "fat": 14,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "pancake with syrup": {
    "nutrients": {
      "calories": 227,
      "protein": 6,
      "carbs": 28,
      "fat": 10,
      "fiber": 1.2,
      "sugar": 18
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "crepe with chocolate": {
    "nutrients": {
      "calories": 240,
      "protein": 6,
      "carbs": 34,
      "fat": 9,
      "fiber": 1.5,
      "sugar": 20
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
  },
  "fried mozzarella balls": {
    "nutrients": {
      "calories": 330,
      "protein": 18,
      "carbs": 8,
      "fat": 22,
      "fiber": 0.5,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "mac and cheese": {
    "nutrients": {
      "calories": 300,
      "protein": 12,
      "carbs": 30,
      "fat": 14,
      "fiber": 2,
      "sugar": 3
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "buffalo wings (plate)": {
    "nutrients": {
      "calories": 320,
      "protein": 25,
      "carbs": 8,
      "fat": 20,
      "fiber": 0.5,
      "sugar": 2
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": false
  },
  "chicken kathi roll (street)": {
    "nutrients": {
      "calories": 320,
      "protein": 18,
      "carbs": 28,
      "fat": 14,
      "fiber": 2,
      "sugar": 4
    },
    "advantages": "Tasty, high energy; convenient and palatable. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in calories, saturated fat and/or added sugar; frequent intake linked to obesity, heart disease, and dental caries. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 g",
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
    "advantages": "Hydrating and provides quick energy. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Usually safe, but portion control matters for caloric intake.",
    "quantity": "100 ml",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "apple juice": {
    "nutrients": {
      "calories": 46,
      "protein": 0.1,
      "carbs": 11,
      "fat": 0.1,
      "fiber": 0.1,
      "sugar": 10.5
    },
    "advantages": "Hydrating and provides quick energy. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Usually safe, but portion control matters for caloric intake.",
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
    "advantages": "Hydrating and provides quick energy. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Usually safe, but portion control matters for caloric intake.",
    "quantity": "100 ml",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "grape juice": {
    "nutrients": {
      "calories": 70,
      "protein": 0.4,
      "carbs": 17,
      "fat": 0.2,
      "fiber": 0.1,
      "sugar": 16
    },
    "advantages": "Hydrating and provides quick energy. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Morning",
    "category": "Junk",
    "sugarAlert": true
  },
  "pomegranate juice": {
    "nutrients": {
      "calories": 83,
      "protein": 1.7,
      "carbs": 19,
      "fat": 1.2,
      "fiber": 0.1,
      "sugar": 13
    },
    "advantages": "Hydrating and provides quick energy. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Usually safe, but portion control matters for caloric intake.",
    "quantity": "100 ml",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "lemon juice (diluted)": {
    "nutrients": {
      "calories": 22,
      "protein": 0.4,
      "carbs": 6.9,
      "fat": 0.2,
      "fiber": 0.3,
      "sugar": 2.6
    },
    "advantages": "Hydrating and provides quick energy. Provides essential micronutrients and fibre; supports digestion and satiety.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Usually safe, but portion control matters for caloric intake.",
    "quantity": "100 ml",
    "bestTime": "Morning",
    "category": "Healthy",
    "sugarAlert": false
  },
  "milkshake (vanilla)": {
    "nutrients": {
      "calories": 210,
      "protein": 7,
      "carbs": 30,
      "fat": 8,
      "fiber": 0.5,
      "sugar": 25
    },
    "advantages": "Hydrating and provides quick energy. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Occasional",
    "category": "Junk",
    "sugarAlert": true
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
    "advantages": "Hydrating and provides quick energy. Tasty and satisfying; useful as occasional indulgence or treat.",
    "disadvantages": "High in natural or added sugars; lacks fibre compared to whole fruit. Regular consumption increases risk of weight gain, high cholesterol, and dental issues. High in sodium and/or added sugars in many cases.",
    "quantity": "100 ml",
    "bestTime": "Morning",
    "category": "Junk",
    "sugarAlert": true
  }
};


// Script: display updated nutrition + sugar alert
let hjModel=null,mobileNet=null,webcamStream=null,videoEl=null,captureCanvas=null,captureCtx=null,predictInterval=null;
function setProgress(el,pct){el.style.width=Math.max(0,Math.min(100,pct))+'%';}
document.getElementById('loadBtn').addEventListener('click',async()=>{const url=document.getElementById('hjModelUrl').value.trim();try{if(!url)throw new Error('Model URL empty');const finalUrl=url.endsWith('/')?url:url+'/';hjModel=await tmImage.load(finalUrl+'model.json',finalUrl+'metadata.json');mobileNet=await ml5.imageClassifier('MobileNet');document.getElementById('startBtn').disabled=false;alert('Models loaded');}catch(e){alert('Load failed:'+e.message);}});
document.getElementById('startBtn').addEventListener('click',async()=>{videoEl=document.getElementById('webcam');captureCanvas=document.getElementById('captureCanvas');captureCtx=captureCanvas.getContext('2d');try{webcamStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}});videoEl.srcObject=webcamStream;await videoEl.play();document.getElementById('stopBtn').disabled=false;document.getElementById('snapshotBtn').disabled=false;document.getElementById('resultsPanel').style.display='block';if(!mobileNet)mobileNet=await ml5.imageClassifier('MobileNet',videoEl);predictInterval=setInterval(predictFrame,900);}catch(e){alert('Webcam error:'+e.message);}});
document.getElementById('stopBtn').addEventListener('click',()=>{if(webcamStream)webcamStream.getTracks().forEach(t=>t.stop());if(predictInterval)clearInterval(predictInterval);document.getElementById('startBtn').disabled=false;});
document.getElementById('snapshotBtn').addEventListener('click',predictFrame);
document.getElementById('searchBtn').addEventListener('click',()=>{const q=document.getElementById('manualFood').value.trim();if(q)lookupFoodByName(q);});
document.getElementById('manualFood').addEventListener('keydown',e=>{if(e.key==='Enter')document.getElementById('searchBtn').click();});
function populateSuggestions(){const dl=document.getElementById('food-suggestions');Object.keys(foodData).sort().forEach(k=>{const opt=document.createElement('option');opt.value=k;dl.appendChild(opt);});}populateSuggestions();
async function predictFrame(){if(!videoEl)return;captureCanvas.width=videoEl.videoWidth||640;captureCanvas.height=videoEl.videoHeight||480;captureCtx.drawImage(videoEl,0,0,captureCanvas.width,captureCanvas.height);try{const dataUrl=captureCanvas.toDataURL('image/jpeg',0.7);document.getElementById('thumbPreview').innerHTML='<img src="'+dataUrl+'" style=\"height:88px;border-radius:8px;object-fit:cover\">';}catch(e){}let foodLabel='Unknown',foodConf=0;try{const res=await mobileNet.classify(captureCanvas);if(res&&res.length){foodLabel=res[0].label;foodConf=res[0].confidence;}}catch(e){}const canonical=findCanonicalFood(foodLabel);document.getElementById('foodName').innerText=canonical.displayName;document.getElementById('foodSub').innerText=canonical.key?'Matched from database':'Detected by MobileNet';document.getElementById('foodConfidence').innerText=(foodConf*100).toFixed(1)+'%';setProgress(document.getElementById('foodBar'),(foodConf*100));if(hjModel){try{const preds=await hjModel.predict(captureCanvas);if(preds&&preds.length){const best=preds.reduce((a,b)=>a.probability>b.probability?a:b);document.getElementById('categoryBadge').innerText=best.className;}}catch(e){console.warn(e);}}if(canonical.key)showFoodData(canonical.key);}function lookupFoodByName(q){const key=findMatch(q.toLowerCase());if(key)showFoodData(key);else alert('Not found: '+q);}function findMatch(q){if(foodData[q])return q;for(const key of Object.keys(foodData)){if(key.includes(q)||q.includes(key))return key;}return null;}function showFoodData(key){const e=foodData[key];document.getElementById('resultsPanel').style.display='block';document.getElementById('foodName').innerText=key.charAt(0).toUpperCase()+key.slice(1);document.getElementById('nutri').innerHTML=`Calories: ${e.nutrients.calories} kcal<br/>Protein: ${e.nutrients.protein} g<br/>Carbs: ${e.nutrients.carbs} g<br/>Fat: ${e.nutrients.fat} g<br/>Fiber: ${e.nutrients.fiber} g`;document.getElementById('adv').innerText=e.advantages;document.getElementById('disadv').innerText=e.disadvantages;document.getElementById('qty').innerText=e.quantity;document.getElementById('bestTime').innerText=e.bestTime;document.getElementById('categoryBadge').innerText=e.category;const pill=document.getElementById('categoryBadge');if(e.category==='Healthy')pill.style.background='linear-gradient(90deg,#0ce9a8,#2bd18a)';else pill.style.background='linear-gradient(90deg,#ff7b7b,#ffbaba)';document.getElementById('sugarVal').innerText = (e.nutrients.sugar !== undefined ? e.nutrients.sugar + ' g per 100g' : '—');const sugarAlertEl = document.getElementById('sugarAlert');if(e.sugarAlert){sugarAlertEl.innerHTML = '<div class=\"sugar-high\">⚠ SUGAR ALERT — High sugar content. Limit intake.</div>';}else{sugarAlertEl.innerHTML = '<div class=\"sugar-ok\">✓ Sugar within moderate range.</div>';}setProgress(document.getElementById('foodBar'),Math.min(95,e.nutrients.calories/4));}function findCanonicalFood(label){ // simplify MobileNet label to match keys (take first word and try variants)
  if(!label) return {key:null, displayName:label||'Unknown'};
  const simple = label.toLowerCase().split(',')[0].split(' or ')[0].split(' with ')[0].trim();
  if(foodData[simple]) return {key:simple, displayName:simple.charAt(0).toUpperCase()+simple.slice(1)};
  // try contains matching
  for(const k of Object.keys(foodData)){
    if(simple.includes(k) || k.includes(simple)) return {key:k, displayName:k.charAt(0).toUpperCase()+k.slice(1)};
  }
  return {key:null, displayName:label};
}