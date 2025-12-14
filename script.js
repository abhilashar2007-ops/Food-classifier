const foodData = {
  "apple": {
    "nutrients": {
      "calories": 380,
      "protein": 11.0,
      "carbs": 35.5,
      "fat": 24.2,
      "fiber": 4.6,
      "sugar": 0.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "apple fried": {
    "nutrients": {
      "calories": 114,
      "protein": 18.2,
      "carbs": 12.4,
      "fat": 15.1,
      "fiber": 8.7,
      "sugar": 4.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "apple roasted": {
    "nutrients": {
      "calories": 102,
      "protein": 16.6,
      "carbs": 5.6,
      "fat": 0.7,
      "fiber": 4.3,
      "sugar": 39.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "apple masala": {
    "nutrients": {
      "calories": 258,
      "protein": 16.6,
      "carbs": 24.7,
      "fat": 7.8,
      "fiber": 5.3,
      "sugar": 23.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "apple special": {
    "nutrients": {
      "calories": 483,
      "protein": 22.1,
      "carbs": 23.2,
      "fat": 23.9,
      "fiber": 8.8,
      "sugar": 20.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "banana": {
    "nutrients": {
      "calories": 264,
      "protein": 9.8,
      "carbs": 54.8,
      "fat": 21.5,
      "fiber": 6.4,
      "sugar": 29.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "banana fried": {
    "nutrients": {
      "calories": 489,
      "protein": 3.2,
      "carbs": 20.5,
      "fat": 12.9,
      "fiber": 0.6,
      "sugar": 19.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "banana roasted": {
    "nutrients": {
      "calories": 242,
      "protein": 21.0,
      "carbs": 54.7,
      "fat": 27.2,
      "fiber": 1.1,
      "sugar": 23.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "banana masala": {
    "nutrients": {
      "calories": 172,
      "protein": 13.7,
      "carbs": 46.2,
      "fat": 3.7,
      "fiber": 3.0,
      "sugar": 24.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "banana special": {
    "nutrients": {
      "calories": 235,
      "protein": 21.6,
      "carbs": 42.7,
      "fat": 0.7,
      "fiber": 9.2,
      "sugar": 17.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "mango": {
    "nutrients": {
      "calories": 148,
      "protein": 10.0,
      "carbs": 51.4,
      "fat": 20.4,
      "fiber": 8.9,
      "sugar": 24.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "mango fried": {
    "nutrients": {
      "calories": 321,
      "protein": 5.6,
      "carbs": 15.4,
      "fat": 6.9,
      "fiber": 6.9,
      "sugar": 3.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "mango roasted": {
    "nutrients": {
      "calories": 151,
      "protein": 13.9,
      "carbs": 12.6,
      "fat": 23.3,
      "fiber": 4.1,
      "sugar": 14.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "mango masala": {
    "nutrients": {
      "calories": 319,
      "protein": 20.9,
      "carbs": 21.6,
      "fat": 2.9,
      "fiber": 7.1,
      "sugar": 22.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "mango special": {
    "nutrients": {
      "calories": 53,
      "protein": 7.4,
      "carbs": 29.8,
      "fat": 27.5,
      "fiber": 3.1,
      "sugar": 35.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "orange": {
    "nutrients": {
      "calories": 218,
      "protein": 19.6,
      "carbs": 51.0,
      "fat": 21.7,
      "fiber": 2.9,
      "sugar": 20.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "orange fried": {
    "nutrients": {
      "calories": 350,
      "protein": 19.2,
      "carbs": 24.0,
      "fat": 5.3,
      "fiber": 7.1,
      "sugar": 7.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "orange roasted": {
    "nutrients": {
      "calories": 98,
      "protein": 10.3,
      "carbs": 56.3,
      "fat": 22.8,
      "fiber": 6.5,
      "sugar": 25.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "orange masala": {
    "nutrients": {
      "calories": 236,
      "protein": 11.5,
      "carbs": 44.5,
      "fat": 3.8,
      "fiber": 4.6,
      "sugar": 15.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "orange special": {
    "nutrients": {
      "calories": 211,
      "protein": 1.2,
      "carbs": 51.0,
      "fat": 20.0,
      "fiber": 10.0,
      "sugar": 31.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "grapes": {
    "nutrients": {
      "calories": 273,
      "protein": 11.9,
      "carbs": 47.2,
      "fat": 26.1,
      "fiber": 5.0,
      "sugar": 7.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "grapes fried": {
    "nutrients": {
      "calories": 266,
      "protein": 22.5,
      "carbs": 11.0,
      "fat": 3.7,
      "fiber": 8.7,
      "sugar": 5.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "grapes roasted": {
    "nutrients": {
      "calories": 151,
      "protein": 8.0,
      "carbs": 38.5,
      "fat": 30.0,
      "fiber": 7.8,
      "sugar": 9.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "grapes masala": {
    "nutrients": {
      "calories": 229,
      "protein": 17.1,
      "carbs": 9.7,
      "fat": 21.6,
      "fiber": 9.1,
      "sugar": 12.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "grapes special": {
    "nutrients": {
      "calories": 457,
      "protein": 14.1,
      "carbs": 6.5,
      "fat": 28.4,
      "fiber": 0.6,
      "sugar": 21.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pineapple": {
    "nutrients": {
      "calories": 65,
      "protein": 21.0,
      "carbs": 13.4,
      "fat": 22.3,
      "fiber": 1.8,
      "sugar": 30.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pineapple fried": {
    "nutrients": {
      "calories": 274,
      "protein": 13.7,
      "carbs": 28.2,
      "fat": 17.7,
      "fiber": 3.8,
      "sugar": 17.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "pineapple roasted": {
    "nutrients": {
      "calories": 385,
      "protein": 4.3,
      "carbs": 52.4,
      "fat": 9.1,
      "fiber": 6.9,
      "sugar": 14.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "pineapple masala": {
    "nutrients": {
      "calories": 468,
      "protein": 2.1,
      "carbs": 35.4,
      "fat": 24.1,
      "fiber": 2.5,
      "sugar": 22.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pineapple special": {
    "nutrients": {
      "calories": 115,
      "protein": 10.3,
      "carbs": 41.8,
      "fat": 21.8,
      "fiber": 1.9,
      "sugar": 36.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "papaya": {
    "nutrients": {
      "calories": 265,
      "protein": 19.0,
      "carbs": 14.2,
      "fat": 13.0,
      "fiber": 5.8,
      "sugar": 26.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "papaya fried": {
    "nutrients": {
      "calories": 160,
      "protein": 17.5,
      "carbs": 44.5,
      "fat": 25.9,
      "fiber": 4.7,
      "sugar": 25.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "papaya roasted": {
    "nutrients": {
      "calories": 157,
      "protein": 16.1,
      "carbs": 25.5,
      "fat": 13.2,
      "fiber": 2.0,
      "sugar": 14.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "papaya masala": {
    "nutrients": {
      "calories": 280,
      "protein": 7.3,
      "carbs": 35.0,
      "fat": 22.7,
      "fiber": 9.8,
      "sugar": 13.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "papaya special": {
    "nutrients": {
      "calories": 299,
      "protein": 4.0,
      "carbs": 21.9,
      "fat": 15.6,
      "fiber": 6.8,
      "sugar": 21.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "watermelon": {
    "nutrients": {
      "calories": 327,
      "protein": 5.5,
      "carbs": 39.9,
      "fat": 27.6,
      "fiber": 7.1,
      "sugar": 32.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "watermelon fried": {
    "nutrients": {
      "calories": 346,
      "protein": 20.4,
      "carbs": 59.6,
      "fat": 28.3,
      "fiber": 4.2,
      "sugar": 4.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "watermelon roasted": {
    "nutrients": {
      "calories": 197,
      "protein": 18.1,
      "carbs": 20.0,
      "fat": 18.2,
      "fiber": 7.0,
      "sugar": 9.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "watermelon masala": {
    "nutrients": {
      "calories": 105,
      "protein": 13.4,
      "carbs": 36.4,
      "fat": 6.9,
      "fiber": 9.6,
      "sugar": 30.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "watermelon special": {
    "nutrients": {
      "calories": 144,
      "protein": 12.4,
      "carbs": 47.9,
      "fat": 18.0,
      "fiber": 1.4,
      "sugar": 11.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "kiwi": {
    "nutrients": {
      "calories": 275,
      "protein": 18.2,
      "carbs": 52.2,
      "fat": 20.0,
      "fiber": 4.3,
      "sugar": 28.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "kiwi fried": {
    "nutrients": {
      "calories": 386,
      "protein": 24.4,
      "carbs": 31.9,
      "fat": 5.9,
      "fiber": 2.9,
      "sugar": 18.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "kiwi roasted": {
    "nutrients": {
      "calories": 323,
      "protein": 10.3,
      "carbs": 24.4,
      "fat": 10.0,
      "fiber": 8.9,
      "sugar": 7.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "kiwi masala": {
    "nutrients": {
      "calories": 488,
      "protein": 2.2,
      "carbs": 7.3,
      "fat": 15.6,
      "fiber": 6.6,
      "sugar": 30.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "kiwi special": {
    "nutrients": {
      "calories": 394,
      "protein": 20.9,
      "carbs": 50.7,
      "fat": 18.6,
      "fiber": 3.3,
      "sugar": 6.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "strawberry": {
    "nutrients": {
      "calories": 358,
      "protein": 3.1,
      "carbs": 47.8,
      "fat": 11.6,
      "fiber": 4.2,
      "sugar": 16.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "strawberry fried": {
    "nutrients": {
      "calories": 113,
      "protein": 18.4,
      "carbs": 27.6,
      "fat": 28.0,
      "fiber": 3.0,
      "sugar": 17.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "strawberry roasted": {
    "nutrients": {
      "calories": 56,
      "protein": 6.1,
      "carbs": 50.4,
      "fat": 12.3,
      "fiber": 7.8,
      "sugar": 2.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "strawberry masala": {
    "nutrients": {
      "calories": 469,
      "protein": 11.6,
      "carbs": 56.7,
      "fat": 2.8,
      "fiber": 7.2,
      "sugar": 16.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "strawberry special": {
    "nutrients": {
      "calories": 460,
      "protein": 7.4,
      "carbs": 16.4,
      "fat": 9.0,
      "fiber": 2.2,
      "sugar": 13.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "potato": {
    "nutrients": {
      "calories": 493,
      "protein": 16.5,
      "carbs": 8.4,
      "fat": 9.6,
      "fiber": 8.7,
      "sugar": 3.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "potato fried": {
    "nutrients": {
      "calories": 74,
      "protein": 24.7,
      "carbs": 29.0,
      "fat": 11.9,
      "fiber": 6.9,
      "sugar": 11.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "potato roasted": {
    "nutrients": {
      "calories": 295,
      "protein": 12.6,
      "carbs": 14.1,
      "fat": 17.6,
      "fiber": 0.5,
      "sugar": 13.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "potato masala": {
    "nutrients": {
      "calories": 367,
      "protein": 20.3,
      "carbs": 22.6,
      "fat": 18.6,
      "fiber": 3.5,
      "sugar": 20.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "potato special": {
    "nutrients": {
      "calories": 356,
      "protein": 22.3,
      "carbs": 29.0,
      "fat": 2.8,
      "fiber": 4.2,
      "sugar": 35.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "tomato": {
    "nutrients": {
      "calories": 235,
      "protein": 15.0,
      "carbs": 14.6,
      "fat": 4.6,
      "fiber": 6.4,
      "sugar": 23.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "tomato fried": {
    "nutrients": {
      "calories": 272,
      "protein": 8.6,
      "carbs": 58.5,
      "fat": 11.8,
      "fiber": 5.7,
      "sugar": 16.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "tomato roasted": {
    "nutrients": {
      "calories": 88,
      "protein": 15.4,
      "carbs": 29.8,
      "fat": 29.4,
      "fiber": 8.3,
      "sugar": 14.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "tomato masala": {
    "nutrients": {
      "calories": 222,
      "protein": 23.6,
      "carbs": 36.7,
      "fat": 6.7,
      "fiber": 1.6,
      "sugar": 6.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "tomato special": {
    "nutrients": {
      "calories": 419,
      "protein": 13.8,
      "carbs": 33.5,
      "fat": 15.9,
      "fiber": 2.7,
      "sugar": 19.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "onion": {
    "nutrients": {
      "calories": 289,
      "protein": 3.2,
      "carbs": 29.5,
      "fat": 1.9,
      "fiber": 0.9,
      "sugar": 38.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "onion fried": {
    "nutrients": {
      "calories": 206,
      "protein": 18.2,
      "carbs": 34.1,
      "fat": 22.5,
      "fiber": 8.6,
      "sugar": 25.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "onion roasted": {
    "nutrients": {
      "calories": 248,
      "protein": 13.6,
      "carbs": 53.7,
      "fat": 11.7,
      "fiber": 7.1,
      "sugar": 21.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "onion masala": {
    "nutrients": {
      "calories": 361,
      "protein": 2.5,
      "carbs": 6.2,
      "fat": 6.6,
      "fiber": 5.6,
      "sugar": 15.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "onion special": {
    "nutrients": {
      "calories": 176,
      "protein": 3.2,
      "carbs": 18.5,
      "fat": 11.7,
      "fiber": 6.0,
      "sugar": 39.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "carrot": {
    "nutrients": {
      "calories": 188,
      "protein": 17.0,
      "carbs": 31.7,
      "fat": 22.8,
      "fiber": 6.0,
      "sugar": 33.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "carrot fried": {
    "nutrients": {
      "calories": 62,
      "protein": 23.1,
      "carbs": 6.7,
      "fat": 9.7,
      "fiber": 3.1,
      "sugar": 28.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "carrot roasted": {
    "nutrients": {
      "calories": 97,
      "protein": 21.0,
      "carbs": 18.3,
      "fat": 28.9,
      "fiber": 9.2,
      "sugar": 29.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "carrot masala": {
    "nutrients": {
      "calories": 176,
      "protein": 2.7,
      "carbs": 13.3,
      "fat": 19.8,
      "fiber": 5.0,
      "sugar": 28.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "carrot special": {
    "nutrients": {
      "calories": 156,
      "protein": 10.2,
      "carbs": 47.5,
      "fat": 29.6,
      "fiber": 3.6,
      "sugar": 19.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "spinach": {
    "nutrients": {
      "calories": 270,
      "protein": 15.3,
      "carbs": 22.0,
      "fat": 28.8,
      "fiber": 2.9,
      "sugar": 3.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "spinach fried": {
    "nutrients": {
      "calories": 135,
      "protein": 3.1,
      "carbs": 8.8,
      "fat": 22.5,
      "fiber": 3.1,
      "sugar": 31.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "spinach roasted": {
    "nutrients": {
      "calories": 344,
      "protein": 9.4,
      "carbs": 29.1,
      "fat": 27.2,
      "fiber": 9.0,
      "sugar": 9.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "spinach masala": {
    "nutrients": {
      "calories": 160,
      "protein": 15.7,
      "carbs": 38.1,
      "fat": 9.8,
      "fiber": 3.2,
      "sugar": 14.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "spinach special": {
    "nutrients": {
      "calories": 444,
      "protein": 20.7,
      "carbs": 50.4,
      "fat": 11.2,
      "fiber": 7.7,
      "sugar": 34.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "beans": {
    "nutrients": {
      "calories": 275,
      "protein": 23.7,
      "carbs": 27.2,
      "fat": 29.6,
      "fiber": 7.8,
      "sugar": 21.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "beans fried": {
    "nutrients": {
      "calories": 248,
      "protein": 9.6,
      "carbs": 16.5,
      "fat": 4.6,
      "fiber": 1.5,
      "sugar": 0.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "beans roasted": {
    "nutrients": {
      "calories": 345,
      "protein": 23.3,
      "carbs": 9.3,
      "fat": 10.0,
      "fiber": 6.3,
      "sugar": 30.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "beans masala": {
    "nutrients": {
      "calories": 333,
      "protein": 13.1,
      "carbs": 37.5,
      "fat": 2.5,
      "fiber": 2.7,
      "sugar": 16.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "beans special": {
    "nutrients": {
      "calories": 297,
      "protein": 15.5,
      "carbs": 11.9,
      "fat": 11.9,
      "fiber": 8.9,
      "sugar": 30.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "broccoli": {
    "nutrients": {
      "calories": 429,
      "protein": 3.7,
      "carbs": 45.8,
      "fat": 15.4,
      "fiber": 8.9,
      "sugar": 13.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "broccoli fried": {
    "nutrients": {
      "calories": 276,
      "protein": 22.9,
      "carbs": 23.6,
      "fat": 1.6,
      "fiber": 1.6,
      "sugar": 3.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "broccoli roasted": {
    "nutrients": {
      "calories": 393,
      "protein": 13.6,
      "carbs": 6.5,
      "fat": 8.4,
      "fiber": 3.8,
      "sugar": 14.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "broccoli masala": {
    "nutrients": {
      "calories": 191,
      "protein": 11.9,
      "carbs": 26.8,
      "fat": 25.6,
      "fiber": 3.7,
      "sugar": 31.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "broccoli special": {
    "nutrients": {
      "calories": 135,
      "protein": 5.1,
      "carbs": 35.5,
      "fat": 28.4,
      "fiber": 7.5,
      "sugar": 35.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "cauliflower": {
    "nutrients": {
      "calories": 295,
      "protein": 15.1,
      "carbs": 39.9,
      "fat": 9.2,
      "fiber": 0.6,
      "sugar": 22.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "cauliflower fried": {
    "nutrients": {
      "calories": 466,
      "protein": 10.4,
      "carbs": 37.1,
      "fat": 16.9,
      "fiber": 5.7,
      "sugar": 19.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "cauliflower roasted": {
    "nutrients": {
      "calories": 78,
      "protein": 1.1,
      "carbs": 27.5,
      "fat": 27.6,
      "fiber": 2.2,
      "sugar": 7.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cauliflower masala": {
    "nutrients": {
      "calories": 126,
      "protein": 22.8,
      "carbs": 54.6,
      "fat": 23.8,
      "fiber": 3.0,
      "sugar": 4.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cauliflower special": {
    "nutrients": {
      "calories": 496,
      "protein": 9.8,
      "carbs": 33.7,
      "fat": 19.9,
      "fiber": 9.1,
      "sugar": 6.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cabbage": {
    "nutrients": {
      "calories": 110,
      "protein": 3.8,
      "carbs": 11.1,
      "fat": 24.7,
      "fiber": 8.9,
      "sugar": 28.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "cabbage fried": {
    "nutrients": {
      "calories": 218,
      "protein": 24.0,
      "carbs": 57.5,
      "fat": 7.4,
      "fiber": 1.8,
      "sugar": 36.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "cabbage roasted": {
    "nutrients": {
      "calories": 458,
      "protein": 2.5,
      "carbs": 47.3,
      "fat": 25.3,
      "fiber": 7.9,
      "sugar": 5.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cabbage masala": {
    "nutrients": {
      "calories": 395,
      "protein": 5.9,
      "carbs": 27.6,
      "fat": 1.7,
      "fiber": 9.7,
      "sugar": 21.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "cabbage special": {
    "nutrients": {
      "calories": 332,
      "protein": 10.1,
      "carbs": 29.2,
      "fat": 28.2,
      "fiber": 1.4,
      "sugar": 38.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "peas": {
    "nutrients": {
      "calories": 125,
      "protein": 20.9,
      "carbs": 55.0,
      "fat": 13.9,
      "fiber": 2.4,
      "sugar": 15.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "peas fried": {
    "nutrients": {
      "calories": 499,
      "protein": 3.8,
      "carbs": 56.7,
      "fat": 12.0,
      "fiber": 9.2,
      "sugar": 0.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "peas roasted": {
    "nutrients": {
      "calories": 51,
      "protein": 9.4,
      "carbs": 42.1,
      "fat": 0.7,
      "fiber": 1.9,
      "sugar": 4.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "peas masala": {
    "nutrients": {
      "calories": 98,
      "protein": 15.5,
      "carbs": 58.0,
      "fat": 18.4,
      "fiber": 9.0,
      "sugar": 35.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "peas special": {
    "nutrients": {
      "calories": 330,
      "protein": 12.1,
      "carbs": 53.0,
      "fat": 7.1,
      "fiber": 1.5,
      "sugar": 32.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "idli": {
    "nutrients": {
      "calories": 228,
      "protein": 3.1,
      "carbs": 36.8,
      "fat": 23.2,
      "fiber": 6.6,
      "sugar": 32.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "idli fried": {
    "nutrients": {
      "calories": 77,
      "protein": 8.8,
      "carbs": 44.8,
      "fat": 14.3,
      "fiber": 2.5,
      "sugar": 8.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "idli roasted": {
    "nutrients": {
      "calories": 492,
      "protein": 3.8,
      "carbs": 15.3,
      "fat": 23.3,
      "fiber": 3.2,
      "sugar": 12.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "idli masala": {
    "nutrients": {
      "calories": 306,
      "protein": 3.8,
      "carbs": 53.0,
      "fat": 16.6,
      "fiber": 2.6,
      "sugar": 19.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "idli special": {
    "nutrients": {
      "calories": 490,
      "protein": 4.3,
      "carbs": 32.8,
      "fat": 24.8,
      "fiber": 9.0,
      "sugar": 21.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "dosa": {
    "nutrients": {
      "calories": 291,
      "protein": 12.1,
      "carbs": 8.7,
      "fat": 3.5,
      "fiber": 9.3,
      "sugar": 34.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "dosa fried": {
    "nutrients": {
      "calories": 204,
      "protein": 20.4,
      "carbs": 9.2,
      "fat": 24.2,
      "fiber": 9.1,
      "sugar": 18.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "dosa roasted": {
    "nutrients": {
      "calories": 155,
      "protein": 8.6,
      "carbs": 34.6,
      "fat": 12.6,
      "fiber": 8.7,
      "sugar": 26.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "dosa masala": {
    "nutrients": {
      "calories": 238,
      "protein": 16.7,
      "carbs": 7.7,
      "fat": 18.2,
      "fiber": 8.7,
      "sugar": 4.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "dosa special": {
    "nutrients": {
      "calories": 347,
      "protein": 22.8,
      "carbs": 58.8,
      "fat": 9.4,
      "fiber": 1.6,
      "sugar": 2.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "vada": {
    "nutrients": {
      "calories": 99,
      "protein": 9.1,
      "carbs": 35.7,
      "fat": 13.0,
      "fiber": 1.7,
      "sugar": 35.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "vada fried": {
    "nutrients": {
      "calories": 172,
      "protein": 3.0,
      "carbs": 31.0,
      "fat": 13.9,
      "fiber": 8.0,
      "sugar": 4.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "vada roasted": {
    "nutrients": {
      "calories": 298,
      "protein": 16.3,
      "carbs": 34.9,
      "fat": 4.6,
      "fiber": 1.8,
      "sugar": 23.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "vada masala": {
    "nutrients": {
      "calories": 118,
      "protein": 19.5,
      "carbs": 14.9,
      "fat": 21.4,
      "fiber": 8.6,
      "sugar": 7.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "vada special": {
    "nutrients": {
      "calories": 135,
      "protein": 22.3,
      "carbs": 59.4,
      "fat": 7.5,
      "fiber": 9.3,
      "sugar": 6.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "upma": {
    "nutrients": {
      "calories": 339,
      "protein": 20.2,
      "carbs": 38.6,
      "fat": 14.0,
      "fiber": 3.9,
      "sugar": 1.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "upma fried": {
    "nutrients": {
      "calories": 434,
      "protein": 3.0,
      "carbs": 50.3,
      "fat": 17.0,
      "fiber": 1.5,
      "sugar": 11.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "upma roasted": {
    "nutrients": {
      "calories": 136,
      "protein": 18.9,
      "carbs": 52.0,
      "fat": 2.0,
      "fiber": 3.1,
      "sugar": 2.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "upma masala": {
    "nutrients": {
      "calories": 358,
      "protein": 20.3,
      "carbs": 28.6,
      "fat": 1.0,
      "fiber": 3.7,
      "sugar": 18.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "upma special": {
    "nutrients": {
      "calories": 344,
      "protein": 7.3,
      "carbs": 53.7,
      "fat": 28.7,
      "fiber": 5.4,
      "sugar": 8.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "poha": {
    "nutrients": {
      "calories": 324,
      "protein": 4.8,
      "carbs": 56.9,
      "fat": 4.5,
      "fiber": 0.8,
      "sugar": 31.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "poha fried": {
    "nutrients": {
      "calories": 277,
      "protein": 4.6,
      "carbs": 59.2,
      "fat": 12.1,
      "fiber": 9.9,
      "sugar": 17.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "poha roasted": {
    "nutrients": {
      "calories": 89,
      "protein": 17.5,
      "carbs": 19.0,
      "fat": 13.5,
      "fiber": 9.6,
      "sugar": 11.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "poha masala": {
    "nutrients": {
      "calories": 384,
      "protein": 6.6,
      "carbs": 36.8,
      "fat": 19.5,
      "fiber": 3.3,
      "sugar": 31.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "poha special": {
    "nutrients": {
      "calories": 470,
      "protein": 24.8,
      "carbs": 33.9,
      "fat": 8.7,
      "fiber": 4.9,
      "sugar": 6.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "chapati": {
    "nutrients": {
      "calories": 324,
      "protein": 4.4,
      "carbs": 18.7,
      "fat": 16.6,
      "fiber": 5.8,
      "sugar": 30.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "chapati fried": {
    "nutrients": {
      "calories": 218,
      "protein": 4.2,
      "carbs": 42.1,
      "fat": 28.0,
      "fiber": 4.7,
      "sugar": 2.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "chapati roasted": {
    "nutrients": {
      "calories": 105,
      "protein": 12.8,
      "carbs": 26.8,
      "fat": 15.3,
      "fiber": 8.8,
      "sugar": 2.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "chapati masala": {
    "nutrients": {
      "calories": 260,
      "protein": 5.4,
      "carbs": 29.5,
      "fat": 4.8,
      "fiber": 5.8,
      "sugar": 22.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "chapati special": {
    "nutrients": {
      "calories": 75,
      "protein": 10.0,
      "carbs": 42.9,
      "fat": 26.3,
      "fiber": 8.7,
      "sugar": 10.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "paratha": {
    "nutrients": {
      "calories": 468,
      "protein": 7.4,
      "carbs": 37.6,
      "fat": 8.1,
      "fiber": 3.1,
      "sugar": 29.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "paratha fried": {
    "nutrients": {
      "calories": 111,
      "protein": 14.3,
      "carbs": 21.3,
      "fat": 17.7,
      "fiber": 6.2,
      "sugar": 2.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "paratha roasted": {
    "nutrients": {
      "calories": 497,
      "protein": 21.9,
      "carbs": 38.2,
      "fat": 13.8,
      "fiber": 7.0,
      "sugar": 30.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "paratha masala": {
    "nutrients": {
      "calories": 415,
      "protein": 15.0,
      "carbs": 56.2,
      "fat": 11.1,
      "fiber": 1.6,
      "sugar": 20.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "paratha special": {
    "nutrients": {
      "calories": 412,
      "protein": 7.5,
      "carbs": 10.4,
      "fat": 3.4,
      "fiber": 9.4,
      "sugar": 27.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "samosa": {
    "nutrients": {
      "calories": 254,
      "protein": 9.0,
      "carbs": 8.2,
      "fat": 18.8,
      "fiber": 1.5,
      "sugar": 1.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "samosa fried": {
    "nutrients": {
      "calories": 353,
      "protein": 13.6,
      "carbs": 15.0,
      "fat": 28.8,
      "fiber": 2.8,
      "sugar": 38.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "samosa roasted": {
    "nutrients": {
      "calories": 343,
      "protein": 10.1,
      "carbs": 5.3,
      "fat": 23.1,
      "fiber": 2.4,
      "sugar": 2.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "samosa masala": {
    "nutrients": {
      "calories": 355,
      "protein": 17.1,
      "carbs": 26.0,
      "fat": 28.3,
      "fiber": 1.9,
      "sugar": 33.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "samosa special": {
    "nutrients": {
      "calories": 228,
      "protein": 5.9,
      "carbs": 45.1,
      "fat": 27.4,
      "fiber": 2.3,
      "sugar": 13.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "biryani": {
    "nutrients": {
      "calories": 485,
      "protein": 22.9,
      "carbs": 8.2,
      "fat": 13.8,
      "fiber": 3.8,
      "sugar": 20.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "biryani fried": {
    "nutrients": {
      "calories": 230,
      "protein": 6.9,
      "carbs": 10.2,
      "fat": 26.2,
      "fiber": 6.9,
      "sugar": 0.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "biryani roasted": {
    "nutrients": {
      "calories": 170,
      "protein": 24.0,
      "carbs": 31.0,
      "fat": 14.5,
      "fiber": 9.3,
      "sugar": 37.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "biryani masala": {
    "nutrients": {
      "calories": 390,
      "protein": 4.0,
      "carbs": 28.8,
      "fat": 29.8,
      "fiber": 2.1,
      "sugar": 14.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "biryani special": {
    "nutrients": {
      "calories": 265,
      "protein": 22.4,
      "carbs": 42.9,
      "fat": 4.2,
      "fiber": 4.7,
      "sugar": 35.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pav bhaji": {
    "nutrients": {
      "calories": 180,
      "protein": 11.0,
      "carbs": 21.9,
      "fat": 9.9,
      "fiber": 5.2,
      "sugar": 21.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pav bhaji fried": {
    "nutrients": {
      "calories": 368,
      "protein": 24.6,
      "carbs": 46.8,
      "fat": 11.2,
      "fiber": 8.2,
      "sugar": 9.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pav bhaji roasted": {
    "nutrients": {
      "calories": 158,
      "protein": 17.3,
      "carbs": 35.2,
      "fat": 6.5,
      "fiber": 1.1,
      "sugar": 5.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pav bhaji masala": {
    "nutrients": {
      "calories": 399,
      "protein": 24.3,
      "carbs": 8.8,
      "fat": 19.8,
      "fiber": 8.3,
      "sugar": 28.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pav bhaji special": {
    "nutrients": {
      "calories": 385,
      "protein": 12.5,
      "carbs": 21.2,
      "fat": 3.0,
      "fiber": 6.6,
      "sugar": 24.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pizza": {
    "nutrients": {
      "calories": 318,
      "protein": 4.0,
      "carbs": 33.1,
      "fat": 2.7,
      "fiber": 8.8,
      "sugar": 0.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pizza fried": {
    "nutrients": {
      "calories": 343,
      "protein": 9.4,
      "carbs": 16.3,
      "fat": 0.6,
      "fiber": 4.5,
      "sugar": 34.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pizza roasted": {
    "nutrients": {
      "calories": 68,
      "protein": 13.2,
      "carbs": 11.6,
      "fat": 0.8,
      "fiber": 5.6,
      "sugar": 6.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pizza masala": {
    "nutrients": {
      "calories": 155,
      "protein": 1.8,
      "carbs": 52.3,
      "fat": 13.8,
      "fiber": 5.7,
      "sugar": 7.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pizza special": {
    "nutrients": {
      "calories": 258,
      "protein": 9.5,
      "carbs": 28.0,
      "fat": 1.1,
      "fiber": 0.5,
      "sugar": 21.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "burger": {
    "nutrients": {
      "calories": 141,
      "protein": 14.8,
      "carbs": 34.0,
      "fat": 2.2,
      "fiber": 4.1,
      "sugar": 38.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "burger fried": {
    "nutrients": {
      "calories": 274,
      "protein": 3.2,
      "carbs": 43.1,
      "fat": 25.2,
      "fiber": 9.5,
      "sugar": 16.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "burger roasted": {
    "nutrients": {
      "calories": 107,
      "protein": 6.8,
      "carbs": 47.2,
      "fat": 2.2,
      "fiber": 9.1,
      "sugar": 3.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "burger masala": {
    "nutrients": {
      "calories": 86,
      "protein": 21.1,
      "carbs": 57.5,
      "fat": 5.8,
      "fiber": 6.0,
      "sugar": 35.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "burger special": {
    "nutrients": {
      "calories": 306,
      "protein": 16.9,
      "carbs": 39.9,
      "fat": 2.1,
      "fiber": 7.9,
      "sugar": 39.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pasta": {
    "nutrients": {
      "calories": 296,
      "protein": 15.6,
      "carbs": 16.7,
      "fat": 9.7,
      "fiber": 6.1,
      "sugar": 6.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pasta fried": {
    "nutrients": {
      "calories": 62,
      "protein": 7.1,
      "carbs": 16.1,
      "fat": 3.4,
      "fiber": 8.6,
      "sugar": 1.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pasta roasted": {
    "nutrients": {
      "calories": 66,
      "protein": 17.0,
      "carbs": 40.8,
      "fat": 6.4,
      "fiber": 10.0,
      "sugar": 12.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "pasta masala": {
    "nutrients": {
      "calories": 107,
      "protein": 16.5,
      "carbs": 33.7,
      "fat": 15.5,
      "fiber": 1.8,
      "sugar": 30.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pasta special": {
    "nutrients": {
      "calories": 499,
      "protein": 5.5,
      "carbs": 45.2,
      "fat": 27.1,
      "fiber": 3.5,
      "sugar": 21.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "noodles": {
    "nutrients": {
      "calories": 59,
      "protein": 12.2,
      "carbs": 37.1,
      "fat": 17.0,
      "fiber": 5.3,
      "sugar": 20.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "noodles fried": {
    "nutrients": {
      "calories": 254,
      "protein": 2.7,
      "carbs": 42.9,
      "fat": 9.9,
      "fiber": 6.6,
      "sugar": 29.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "noodles roasted": {
    "nutrients": {
      "calories": 435,
      "protein": 20.6,
      "carbs": 34.3,
      "fat": 22.0,
      "fiber": 2.7,
      "sugar": 14.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "noodles masala": {
    "nutrients": {
      "calories": 396,
      "protein": 15.2,
      "carbs": 11.1,
      "fat": 6.3,
      "fiber": 0.9,
      "sugar": 29.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "noodles special": {
    "nutrients": {
      "calories": 324,
      "protein": 15.7,
      "carbs": 8.8,
      "fat": 8.0,
      "fiber": 9.0,
      "sugar": 12.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "sandwich": {
    "nutrients": {
      "calories": 354,
      "protein": 4.7,
      "carbs": 31.1,
      "fat": 22.8,
      "fiber": 8.2,
      "sugar": 10.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "sandwich fried": {
    "nutrients": {
      "calories": 150,
      "protein": 21.9,
      "carbs": 12.5,
      "fat": 11.7,
      "fiber": 5.7,
      "sugar": 33.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "sandwich roasted": {
    "nutrients": {
      "calories": 499,
      "protein": 18.9,
      "carbs": 59.1,
      "fat": 2.1,
      "fiber": 1.3,
      "sugar": 30.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "sandwich masala": {
    "nutrients": {
      "calories": 379,
      "protein": 16.2,
      "carbs": 53.5,
      "fat": 25.1,
      "fiber": 5.6,
      "sugar": 20.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "sandwich special": {
    "nutrients": {
      "calories": 87,
      "protein": 17.8,
      "carbs": 22.0,
      "fat": 5.3,
      "fiber": 6.5,
      "sugar": 27.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "hot dog": {
    "nutrients": {
      "calories": 407,
      "protein": 16.9,
      "carbs": 44.6,
      "fat": 8.4,
      "fiber": 8.3,
      "sugar": 16.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "hot dog fried": {
    "nutrients": {
      "calories": 130,
      "protein": 7.6,
      "carbs": 55.2,
      "fat": 28.3,
      "fiber": 8.6,
      "sugar": 17.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "hot dog roasted": {
    "nutrients": {
      "calories": 389,
      "protein": 14.8,
      "carbs": 24.0,
      "fat": 26.4,
      "fiber": 8.9,
      "sugar": 36.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "hot dog masala": {
    "nutrients": {
      "calories": 375,
      "protein": 14.5,
      "carbs": 37.0,
      "fat": 20.3,
      "fiber": 0.8,
      "sugar": 8.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "hot dog special": {
    "nutrients": {
      "calories": 161,
      "protein": 3.9,
      "carbs": 49.6,
      "fat": 26.5,
      "fiber": 1.3,
      "sugar": 21.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "taco": {
    "nutrients": {
      "calories": 94,
      "protein": 6.8,
      "carbs": 36.8,
      "fat": 11.2,
      "fiber": 8.5,
      "sugar": 37.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "taco fried": {
    "nutrients": {
      "calories": 443,
      "protein": 21.4,
      "carbs": 45.2,
      "fat": 4.7,
      "fiber": 0.6,
      "sugar": 15.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "taco roasted": {
    "nutrients": {
      "calories": 124,
      "protein": 22.5,
      "carbs": 56.1,
      "fat": 14.2,
      "fiber": 0.6,
      "sugar": 32.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "taco masala": {
    "nutrients": {
      "calories": 80,
      "protein": 3.2,
      "carbs": 6.1,
      "fat": 5.1,
      "fiber": 0.9,
      "sugar": 2.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "taco special": {
    "nutrients": {
      "calories": 462,
      "protein": 5.6,
      "carbs": 10.4,
      "fat": 17.6,
      "fiber": 7.7,
      "sugar": 37.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "nachos": {
    "nutrients": {
      "calories": 458,
      "protein": 14.0,
      "carbs": 21.0,
      "fat": 25.7,
      "fiber": 7.8,
      "sugar": 39.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "nachos fried": {
    "nutrients": {
      "calories": 117,
      "protein": 1.4,
      "carbs": 51.8,
      "fat": 10.4,
      "fiber": 4.7,
      "sugar": 18.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "nachos roasted": {
    "nutrients": {
      "calories": 402,
      "protein": 18.9,
      "carbs": 24.3,
      "fat": 23.4,
      "fiber": 7.6,
      "sugar": 19.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "nachos masala": {
    "nutrients": {
      "calories": 469,
      "protein": 17.7,
      "carbs": 8.5,
      "fat": 19.3,
      "fiber": 9.5,
      "sugar": 19.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "nachos special": {
    "nutrients": {
      "calories": 386,
      "protein": 5.2,
      "carbs": 45.6,
      "fat": 14.4,
      "fiber": 2.6,
      "sugar": 23.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "sushi": {
    "nutrients": {
      "calories": 233,
      "protein": 13.3,
      "carbs": 20.1,
      "fat": 15.5,
      "fiber": 4.5,
      "sugar": 11.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "sushi fried": {
    "nutrients": {
      "calories": 314,
      "protein": 20.1,
      "carbs": 16.0,
      "fat": 0.8,
      "fiber": 5.0,
      "sugar": 21.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "sushi roasted": {
    "nutrients": {
      "calories": 335,
      "protein": 25.0,
      "carbs": 17.9,
      "fat": 2.0,
      "fiber": 1.7,
      "sugar": 6.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "sushi masala": {
    "nutrients": {
      "calories": 81,
      "protein": 23.5,
      "carbs": 42.3,
      "fat": 12.6,
      "fiber": 1.6,
      "sugar": 13.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "sushi special": {
    "nutrients": {
      "calories": 351,
      "protein": 20.0,
      "carbs": 19.3,
      "fat": 18.3,
      "fiber": 2.7,
      "sugar": 39.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "ramen": {
    "nutrients": {
      "calories": 344,
      "protein": 14.9,
      "carbs": 39.0,
      "fat": 19.1,
      "fiber": 4.0,
      "sugar": 23.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "ramen fried": {
    "nutrients": {
      "calories": 413,
      "protein": 6.1,
      "carbs": 17.9,
      "fat": 5.2,
      "fiber": 7.7,
      "sugar": 14.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "ramen roasted": {
    "nutrients": {
      "calories": 383,
      "protein": 1.7,
      "carbs": 26.7,
      "fat": 14.9,
      "fiber": 8.8,
      "sugar": 10.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "ramen masala": {
    "nutrients": {
      "calories": 199,
      "protein": 17.6,
      "carbs": 59.6,
      "fat": 22.5,
      "fiber": 2.2,
      "sugar": 25.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "ramen special": {
    "nutrients": {
      "calories": 496,
      "protein": 9.9,
      "carbs": 37.9,
      "fat": 11.3,
      "fiber": 4.2,
      "sugar": 21.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "almond": {
    "nutrients": {
      "calories": 497,
      "protein": 20.9,
      "carbs": 33.6,
      "fat": 27.5,
      "fiber": 4.9,
      "sugar": 11.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "almond fried": {
    "nutrients": {
      "calories": 138,
      "protein": 14.7,
      "carbs": 13.4,
      "fat": 10.9,
      "fiber": 5.6,
      "sugar": 5.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "almond roasted": {
    "nutrients": {
      "calories": 451,
      "protein": 19.1,
      "carbs": 20.1,
      "fat": 27.2,
      "fiber": 6.3,
      "sugar": 29.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "almond masala": {
    "nutrients": {
      "calories": 95,
      "protein": 3.0,
      "carbs": 39.4,
      "fat": 22.2,
      "fiber": 4.9,
      "sugar": 4.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "almond special": {
    "nutrients": {
      "calories": 213,
      "protein": 13.6,
      "carbs": 21.2,
      "fat": 4.9,
      "fiber": 5.2,
      "sugar": 9.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cashew": {
    "nutrients": {
      "calories": 229,
      "protein": 4.5,
      "carbs": 9.2,
      "fat": 10.8,
      "fiber": 7.2,
      "sugar": 33.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "cashew fried": {
    "nutrients": {
      "calories": 227,
      "protein": 8.6,
      "carbs": 45.5,
      "fat": 18.6,
      "fiber": 2.2,
      "sugar": 8.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cashew roasted": {
    "nutrients": {
      "calories": 292,
      "protein": 14.5,
      "carbs": 43.9,
      "fat": 10.3,
      "fiber": 7.3,
      "sugar": 2.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cashew masala": {
    "nutrients": {
      "calories": 304,
      "protein": 16.8,
      "carbs": 5.5,
      "fat": 26.2,
      "fiber": 2.7,
      "sugar": 14.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "cashew special": {
    "nutrients": {
      "calories": 170,
      "protein": 4.4,
      "carbs": 52.0,
      "fat": 25.9,
      "fiber": 9.5,
      "sugar": 39.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "walnut": {
    "nutrients": {
      "calories": 106,
      "protein": 15.7,
      "carbs": 31.4,
      "fat": 17.4,
      "fiber": 6.4,
      "sugar": 25.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "walnut fried": {
    "nutrients": {
      "calories": 134,
      "protein": 3.3,
      "carbs": 49.1,
      "fat": 26.2,
      "fiber": 8.9,
      "sugar": 27.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "walnut roasted": {
    "nutrients": {
      "calories": 90,
      "protein": 19.3,
      "carbs": 26.3,
      "fat": 1.5,
      "fiber": 9.2,
      "sugar": 22.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "walnut masala": {
    "nutrients": {
      "calories": 452,
      "protein": 10.4,
      "carbs": 27.5,
      "fat": 23.9,
      "fiber": 0.5,
      "sugar": 2.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "walnut special": {
    "nutrients": {
      "calories": 495,
      "protein": 23.3,
      "carbs": 57.7,
      "fat": 17.1,
      "fiber": 2.8,
      "sugar": 11.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "peanut": {
    "nutrients": {
      "calories": 223,
      "protein": 9.8,
      "carbs": 34.5,
      "fat": 13.2,
      "fiber": 7.9,
      "sugar": 39.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "peanut fried": {
    "nutrients": {
      "calories": 121,
      "protein": 12.5,
      "carbs": 44.8,
      "fat": 25.2,
      "fiber": 7.4,
      "sugar": 4.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "peanut roasted": {
    "nutrients": {
      "calories": 76,
      "protein": 17.7,
      "carbs": 6.8,
      "fat": 28.3,
      "fiber": 8.4,
      "sugar": 16.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "peanut masala": {
    "nutrients": {
      "calories": 87,
      "protein": 8.1,
      "carbs": 19.4,
      "fat": 7.7,
      "fiber": 9.3,
      "sugar": 28.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "peanut special": {
    "nutrients": {
      "calories": 239,
      "protein": 24.0,
      "carbs": 35.1,
      "fat": 11.2,
      "fiber": 4.4,
      "sugar": 5.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pistachio": {
    "nutrients": {
      "calories": 386,
      "protein": 10.2,
      "carbs": 59.2,
      "fat": 0.7,
      "fiber": 8.6,
      "sugar": 35.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pistachio fried": {
    "nutrients": {
      "calories": 127,
      "protein": 15.9,
      "carbs": 19.3,
      "fat": 1.9,
      "fiber": 1.7,
      "sugar": 24.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pistachio roasted": {
    "nutrients": {
      "calories": 134,
      "protein": 9.2,
      "carbs": 33.4,
      "fat": 18.7,
      "fiber": 8.7,
      "sugar": 36.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "pistachio masala": {
    "nutrients": {
      "calories": 108,
      "protein": 23.3,
      "carbs": 40.8,
      "fat": 15.3,
      "fiber": 5.2,
      "sugar": 3.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "pistachio special": {
    "nutrients": {
      "calories": 238,
      "protein": 11.8,
      "carbs": 22.7,
      "fat": 28.9,
      "fiber": 1.0,
      "sugar": 22.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "chia seeds": {
    "nutrients": {
      "calories": 466,
      "protein": 24.3,
      "carbs": 40.3,
      "fat": 26.7,
      "fiber": 8.5,
      "sugar": 20.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "chia seeds fried": {
    "nutrients": {
      "calories": 149,
      "protein": 14.9,
      "carbs": 51.9,
      "fat": 6.2,
      "fiber": 2.0,
      "sugar": 31.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "chia seeds roasted": {
    "nutrients": {
      "calories": 364,
      "protein": 13.0,
      "carbs": 53.7,
      "fat": 27.2,
      "fiber": 3.4,
      "sugar": 32.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "chia seeds masala": {
    "nutrients": {
      "calories": 67,
      "protein": 10.9,
      "carbs": 49.2,
      "fat": 1.9,
      "fiber": 6.9,
      "sugar": 37.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "chia seeds special": {
    "nutrients": {
      "calories": 243,
      "protein": 24.2,
      "carbs": 35.7,
      "fat": 12.1,
      "fiber": 1.6,
      "sugar": 40.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "flax seeds": {
    "nutrients": {
      "calories": 432,
      "protein": 18.5,
      "carbs": 38.8,
      "fat": 14.8,
      "fiber": 9.4,
      "sugar": 12.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "flax seeds fried": {
    "nutrients": {
      "calories": 74,
      "protein": 1.1,
      "carbs": 47.9,
      "fat": 17.6,
      "fiber": 8.3,
      "sugar": 11.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "flax seeds roasted": {
    "nutrients": {
      "calories": 271,
      "protein": 3.6,
      "carbs": 9.7,
      "fat": 21.2,
      "fiber": 8.0,
      "sugar": 29.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "flax seeds masala": {
    "nutrients": {
      "calories": 115,
      "protein": 14.0,
      "carbs": 7.7,
      "fat": 7.4,
      "fiber": 8.0,
      "sugar": 5.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "flax seeds special": {
    "nutrients": {
      "calories": 482,
      "protein": 22.8,
      "carbs": 40.9,
      "fat": 3.5,
      "fiber": 6.2,
      "sugar": 32.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "milk": {
    "nutrients": {
      "calories": 335,
      "protein": 6.0,
      "carbs": 26.1,
      "fat": 22.4,
      "fiber": 7.4,
      "sugar": 19.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "milk fried": {
    "nutrients": {
      "calories": 259,
      "protein": 8.2,
      "carbs": 40.6,
      "fat": 22.5,
      "fiber": 1.6,
      "sugar": 27.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "milk roasted": {
    "nutrients": {
      "calories": 339,
      "protein": 1.8,
      "carbs": 42.8,
      "fat": 4.9,
      "fiber": 4.8,
      "sugar": 34.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "milk masala": {
    "nutrients": {
      "calories": 374,
      "protein": 3.8,
      "carbs": 12.5,
      "fat": 11.6,
      "fiber": 1.3,
      "sugar": 39.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "milk special": {
    "nutrients": {
      "calories": 275,
      "protein": 18.9,
      "carbs": 25.7,
      "fat": 10.6,
      "fiber": 1.1,
      "sugar": 5.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "curd": {
    "nutrients": {
      "calories": 229,
      "protein": 4.8,
      "carbs": 34.0,
      "fat": 27.3,
      "fiber": 8.6,
      "sugar": 10.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "curd fried": {
    "nutrients": {
      "calories": 345,
      "protein": 15.4,
      "carbs": 5.5,
      "fat": 4.0,
      "fiber": 0.5,
      "sugar": 11.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "curd roasted": {
    "nutrients": {
      "calories": 465,
      "protein": 6.3,
      "carbs": 49.3,
      "fat": 9.0,
      "fiber": 3.7,
      "sugar": 31.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "curd masala": {
    "nutrients": {
      "calories": 166,
      "protein": 21.4,
      "carbs": 20.1,
      "fat": 9.5,
      "fiber": 4.6,
      "sugar": 12.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "curd special": {
    "nutrients": {
      "calories": 108,
      "protein": 19.0,
      "carbs": 41.3,
      "fat": 17.7,
      "fiber": 7.7,
      "sugar": 31.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "buttermilk": {
    "nutrients": {
      "calories": 134,
      "protein": 19.0,
      "carbs": 26.7,
      "fat": 18.4,
      "fiber": 7.6,
      "sugar": 39.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "buttermilk fried": {
    "nutrients": {
      "calories": 152,
      "protein": 17.3,
      "carbs": 28.0,
      "fat": 7.1,
      "fiber": 0.6,
      "sugar": 31.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "buttermilk roasted": {
    "nutrients": {
      "calories": 250,
      "protein": 12.0,
      "carbs": 31.9,
      "fat": 25.2,
      "fiber": 7.7,
      "sugar": 20.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "buttermilk masala": {
    "nutrients": {
      "calories": 259,
      "protein": 6.3,
      "carbs": 26.9,
      "fat": 21.6,
      "fiber": 3.3,
      "sugar": 27.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "buttermilk special": {
    "nutrients": {
      "calories": 358,
      "protein": 17.5,
      "carbs": 24.6,
      "fat": 13.1,
      "fiber": 3.2,
      "sugar": 23.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "tea": {
    "nutrients": {
      "calories": 372,
      "protein": 6.0,
      "carbs": 42.0,
      "fat": 4.3,
      "fiber": 3.0,
      "sugar": 31.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "tea fried": {
    "nutrients": {
      "calories": 194,
      "protein": 24.0,
      "carbs": 33.3,
      "fat": 3.9,
      "fiber": 8.2,
      "sugar": 24.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "tea roasted": {
    "nutrients": {
      "calories": 284,
      "protein": 1.8,
      "carbs": 58.7,
      "fat": 1.6,
      "fiber": 1.9,
      "sugar": 19.5
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "tea masala": {
    "nutrients": {
      "calories": 154,
      "protein": 21.5,
      "carbs": 56.4,
      "fat": 26.6,
      "fiber": 0.8,
      "sugar": 30.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "tea special": {
    "nutrients": {
      "calories": 479,
      "protein": 21.4,
      "carbs": 33.0,
      "fat": 29.8,
      "fiber": 4.5,
      "sugar": 27.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "coffee": {
    "nutrients": {
      "calories": 217,
      "protein": 19.1,
      "carbs": 58.3,
      "fat": 22.2,
      "fiber": 7.4,
      "sugar": 10.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "coffee fried": {
    "nutrients": {
      "calories": 340,
      "protein": 10.6,
      "carbs": 50.9,
      "fat": 7.5,
      "fiber": 1.3,
      "sugar": 20.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "coffee roasted": {
    "nutrients": {
      "calories": 231,
      "protein": 19.5,
      "carbs": 42.2,
      "fat": 6.2,
      "fiber": 6.5,
      "sugar": 8.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "coffee masala": {
    "nutrients": {
      "calories": 268,
      "protein": 8.3,
      "carbs": 31.5,
      "fat": 24.1,
      "fiber": 0.8,
      "sugar": 26.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "coffee special": {
    "nutrients": {
      "calories": 64,
      "protein": 5.0,
      "carbs": 26.0,
      "fat": 24.9,
      "fiber": 8.0,
      "sugar": 35.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "orange juice": {
    "nutrients": {
      "calories": 296,
      "protein": 9.4,
      "carbs": 8.7,
      "fat": 7.8,
      "fiber": 8.3,
      "sugar": 28.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "orange juice fried": {
    "nutrients": {
      "calories": 312,
      "protein": 1.9,
      "carbs": 10.5,
      "fat": 2.9,
      "fiber": 0.9,
      "sugar": 11.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "orange juice roasted": {
    "nutrients": {
      "calories": 283,
      "protein": 6.4,
      "carbs": 18.7,
      "fat": 5.1,
      "fiber": 2.9,
      "sugar": 13.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "orange juice masala": {
    "nutrients": {
      "calories": 185,
      "protein": 9.2,
      "carbs": 12.4,
      "fat": 14.8,
      "fiber": 4.8,
      "sugar": 8.6
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "orange juice special": {
    "nutrients": {
      "calories": 312,
      "protein": 5.7,
      "carbs": 31.7,
      "fat": 12.8,
      "fiber": 7.0,
      "sugar": 16.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "mango juice": {
    "nutrients": {
      "calories": 370,
      "protein": 7.5,
      "carbs": 11.9,
      "fat": 14.2,
      "fiber": 8.4,
      "sugar": 16.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "mango juice fried": {
    "nutrients": {
      "calories": 499,
      "protein": 10.0,
      "carbs": 38.3,
      "fat": 2.0,
      "fiber": 4.1,
      "sugar": 35.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "mango juice roasted": {
    "nutrients": {
      "calories": 377,
      "protein": 22.6,
      "carbs": 26.4,
      "fat": 19.7,
      "fiber": 5.9,
      "sugar": 12.1
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "mango juice masala": {
    "nutrients": {
      "calories": 442,
      "protein": 24.7,
      "carbs": 55.4,
      "fat": 13.7,
      "fiber": 1.2,
      "sugar": 24.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "mango juice special": {
    "nutrients": {
      "calories": 466,
      "protein": 20.9,
      "carbs": 49.5,
      "fat": 23.5,
      "fiber": 7.8,
      "sugar": 12.4
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": false
  },
  "cola": {
    "nutrients": {
      "calories": 287,
      "protein": 22.5,
      "carbs": 46.6,
      "fat": 6.5,
      "fiber": 0.7,
      "sugar": 5.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cola fried": {
    "nutrients": {
      "calories": 475,
      "protein": 4.5,
      "carbs": 34.1,
      "fat": 23.2,
      "fiber": 9.7,
      "sugar": 9.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "cola roasted": {
    "nutrients": {
      "calories": 334,
      "protein": 12.2,
      "carbs": 51.8,
      "fat": 3.0,
      "fiber": 2.4,
      "sugar": 29.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "cola masala": {
    "nutrients": {
      "calories": 431,
      "protein": 7.7,
      "carbs": 35.7,
      "fat": 26.9,
      "fiber": 1.5,
      "sugar": 21.3
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "cola special": {
    "nutrients": {
      "calories": 498,
      "protein": 20.0,
      "carbs": 22.1,
      "fat": 25.5,
      "fiber": 3.3,
      "sugar": 18.0
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Moderate",
    "sugarAlert": true
  },
  "milkshake": {
    "nutrients": {
      "calories": 403,
      "protein": 7.1,
      "carbs": 50.7,
      "fat": 27.1,
      "fiber": 1.0,
      "sugar": 8.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  },
  "milkshake fried": {
    "nutrients": {
      "calories": 305,
      "protein": 1.0,
      "carbs": 20.7,
      "fat": 8.5,
      "fiber": 1.9,
      "sugar": 20.9
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "milkshake roasted": {
    "nutrients": {
      "calories": 142,
      "protein": 21.2,
      "carbs": 33.5,
      "fat": 3.1,
      "fiber": 2.7,
      "sugar": 23.2
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "milkshake masala": {
    "nutrients": {
      "calories": 74,
      "protein": 11.8,
      "carbs": 57.0,
      "fat": 27.0,
      "fiber": 5.6,
      "sugar": 31.8
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Junk",
    "sugarAlert": true
  },
  "milkshake special": {
    "nutrients": {
      "calories": 251,
      "protein": 12.0,
      "carbs": 28.1,
      "fat": 12.4,
      "fiber": 7.8,
      "sugar": 6.7
    },
    "advantages": "Provides energy, nutrients and supports body functions",
    "disadvantages": "Overconsumption may lead to health issues",
    "bestTime": "Morning / Afternoon",
    "quantity": "1 serving",
    "category": "Healthy",
    "sugarAlert": false
  }
}
let model;

async function loadModel(){
const url=document.getElementById("modelUrl").value;
if(!url){alert("Paste model URL");return;}
model=await tmImage.load(url+"model.json",url+"metadata.json");
alert("Model Loaded");
}

function searchFood(){
const q=document.getElementById("searchBox").value.toLowerCase();
for(const k in foodData){
 if(k.includes(q)){
  showFood(k);
  return;
 }
}
document.getElementById("result").innerHTML="Food not found";
}

function showFood(key){
const f=foodData[key];
document.getElementById("result").innerHTML=`
<h2>${key}</h2>
<span class="badge ${f.category}">${f.category}</span>
<div class="grid">
<div>
<b>Calories:</b> ${f.nutrients.calories} kcal<br>
<b>Protein:</b> ${f.nutrients.protein} g<br>
<b>Carbs:</b> ${f.nutrients.carbs} g<br>
<b>Fat:</b> ${f.nutrients.fat} g<br>
<b>Fiber:</b> ${f.nutrients.fiber} g<br>
<b>Sugar:</b> ${f.nutrients.sugar} g<br>
${f.sugarAlert ? "<span class='alert'>⚠ High Sugar</span>" : ""}
</div>
<div>
<b>Best Time:</b> ${f.bestTime}<br>
<b>Quantity:</b> ${f.quantity}<br><br>
<b>Advantages:</b><br>${f.advantages}<br><br>
<b>Disadvantages:</b><br>${f.disadvantages}
</div>
</div>
`;
}
