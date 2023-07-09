// RecipesPage.js

import React from 'react';
import { categories, tags } from '../data';

const RecipeList = () => {
  return (
    <div>
      <h1>Recipes</h1>
      
      <div>
        <h2>Categories</h2>
        <ul>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2>Tags</h2>
        <ul>
          {tags.map(tag => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </ul>
      </div>

      {/* Render recipe list and other components */}
    </div>
  );
};

export default RecipeList;

