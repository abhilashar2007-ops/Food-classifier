const foodData = {
  "Apple": {
    "type": "Healthy",
    "calories": 150,
    "protein": 17.4,
    "carbs": 24.4,
    "fat": 20.6,
    "fiber": 4.9,
    "sugar": 17.8,
    "bestTime": "Morning / Afternoon",
    "advantages": [
      "Apple provides nutrients.",
      "Apple supports energy."
    ],
    "disadvantages": [
      "Excess Apple may be unhealthy."
    ]
  },
  "Banana": {
    "type": "Healthy",
    "calories": 161,
    "protein": 10.5,
    "carbs": 21.8,
    "fat": 5.1,
    "fiber": 11.6,
    "sugar": 6.2,
    "bestTime": "Morning / Afternoon",
    "advantages": [
      "Banana provides nutrients.",
      "Banana supports energy."
    ],
    "disadvantages": [
      "Excess Banana may be unhealthy."
    ]
  },
  "Orange": {
    "type": "Healthy",
    "calories": 149,
    "protein": 11.5,
    "carbs": 49.5,
    "fat": 7.8,
    "fiber": 1.6,
    "sugar": 3.3,
    "bestTime": "Morning / Afternoon",
    "advantages": [
      "Orange provides nutrients.",
      "Orange supports energy."
    ],
    "disadvantages": [
      "Excess Orange may be unhealthy."
    ]
  },
  "Pizza": {
    "type": "Junk",
    "calories": 564,
    "protein": 9.3,
    "carbs": 8.4,
    "fat": 4.4,
    "fiber": 2.7,
    "sugar": 8.6,
    "bestTime": "Occasional",
    "advantages": [
      "Pizza provides nutrients.",
      "Pizza supports energy."
    ],
    "disadvantages": [
      "Excess Pizza may be unhealthy."
    ]
  },
  "Burger": {
    "type": "Junk",
    "calories": 375,
    "protein": 10.4,
    "carbs": 77.4,
    "fat": 9.3,
    "fiber": 2.9,
    "sugar": 1.8,
    "bestTime": "Occasional",
    "advantages": [
      "Burger provides nutrients.",
      "Burger supports energy."
    ],
    "disadvantages": [
      "Excess Burger may be unhealthy."
    ]
  },
  "Bread": {
    "type": "Junk",
    "calories": 279,
    "protein": 11.2,
    "carbs": 11.6,
    "fat": 20.7,
    "fiber": 4.4,
    "sugar": 7.6,
    "bestTime": "Occasional",
    "advantages": [
      "Bread provides nutrients.",
      "Bread supports energy."
    ],
    "disadvantages": [
      "Excess Bread may be unhealthy."
    ]
  },
  "Cake": {
    "type": "Junk",
    "calories": 520,
    "protein": 3.0,
    "carbs": 27.5,
    "fat": 26.7,
    "fiber": 3.1,
    "sugar": 27.1,
    "bestTime": "Occasional",
    "advantages": [
      "Cake provides nutrients.",
      "Cake supports energy."
    ],
    "disadvantages": [
      "Excess Cake may be unhealthy."
    ]
  },
  "Rice": {
    "type": "Healthy",
    "calories": 228,
    "protein": 6.7,
    "carbs": 7.5,
    "fat": 27.8,
    "fiber": 8.0,
    "sugar": 16.7,
    "bestTime": "Morning / Afternoon",
    "advantages": [
      "Rice provides nutrients.",
      "Rice supports energy."
    ],
    "disadvantages": [
      "Excess Rice may be unhealthy."
    ]
  },
  "Dosa": {
    "type": "Healthy",
    "calories": 211,
    "protein": 18.7,
    "carbs": 46.5,
    "fat": 1.1,
    "fiber": 9.5,
    "sugar": 12.1,
    "bestTime": "Morning / Afternoon",
    "advantages": [
      "Dosa provides nutrients.",
      "Dosa supports energy."
    ],
    "disadvantages": [
      "Excess Dosa may be unhealthy."
    ]
  },
  "Idli": {
    "type": "Healthy",
    "calories": 87,
    "protein": 15.1,
    "carbs": 66.0,
    "fat": 4.2,
    "fiber": 8.9,
    "sugar": 11.8,
    "bestTime": "Morning / Afternoon",
    "advantages": [
      "Idli provides nutrients.",
      "Idli supports energy."
    ],
    "disadvantages": [
      "Excess Idli may be unhealthy."
    ]
  },
  "Chapati": {
    "type": "Healthy",
    "calories": 78,
    "protein": 11.0,
    "carbs": 31.9,
    "fat": 27.5,
    "fiber": 5.3,
    "sugar": 22.0,
    "bestTime": "Morning / Afternoon",
    "advantages": [
      "Chapati provides nutrients.",
      "Chapati supports energy."
    ],
    "disadvantages": [
      "Excess Chapati may be unhealthy."
    ]
  },
  "French Fries": {
    "type": "Junk",
    "calories": 362,
    "protein": 5.2,
    "carbs": 16.7,
    "fat": 28.0,
    "fiber": 2.4,
    "sugar": 8.4,
    "bestTime": "Occasional",
    "advantages": [
      "French Fries provides nutrients.",
      "French Fries supports energy."
    ],
    "disadvantages": [
      "Excess French Fries may be unhealthy."
    ]
  },
  "Ice Cream": {
    "type": "Junk",
    "calories": 367,
    "protein": 1.2,
    "carbs": 46.8,
    "fat": 16.1,
    "fiber": 6.5,
    "sugar": 24.1,
    "bestTime": "Occasional",
    "advantages": [
      "Ice Cream provides nutrients.",
      "Ice Cream supports energy."
    ],
    "disadvantages": [
      "Excess Ice Cream may be unhealthy."
    ]
  },
  "Sandwich": {
    "type": "Junk",
    "calories": 354,
    "protein": 6.5,
    "carbs": 68.7,
    "fat": 1.4,
    "fiber": 5.8,
    "sugar": 23.5,
    "bestTime": "Occasional",
    "advantages": [
      "Sandwich provides nutrients.",
      "Sandwich supports energy."
    ],
    "disadvantages": [
      "Excess Sandwich may be unhealthy."
    ]
  },
  "Noodles": {
    "type": "Junk",
    "calories": 473,
    "protein": 11.5,
    "carbs": 10.8,
    "fat": 5.6,
    "fiber": 9.3,
    "sugar": 24.4,
    "bestTime": "Occasional",
    "advantages": [
      "Noodles provides nutrients.",
      "Noodles supports energy."
    ],
    "disadvantages": [
      "Excess Noodles may be unhealthy."
    ]
  }
}