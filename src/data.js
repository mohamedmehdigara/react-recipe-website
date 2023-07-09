// data.js

// data.js

export const categories = [
    { id: 1, name: 'Appetizers' },
    { id: 2, name: 'Main Dishes' },
    { id: 3, name: 'Desserts' },
  ];
  
  export const tags = [
    { id: 1, name: 'Vegetarian' },
    { id: 2, name: 'Gluten-free' },
    { id: 3, name: 'Vegan' },
  ];
  
  export const recipes = [
    {
      id: 1,
      title: 'Caprese Salad',
      category: 1, // Category ID: 1 (Appetizers)
      tags: [1, 2], // Tag IDs: 1 (Vegetarian), 2 (Gluten-free)
      // Other recipe properties...
    },
    {
      id: 2,
      title: 'Spaghetti Bolognese',
      category: 2, // Category ID: 2 (Main Dishes)
      tags: [2], // Tag ID: 2 (Gluten-free)
      // Other recipe properties...
    },
    // More recipe objects...
  ];
  