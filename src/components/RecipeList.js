import React from 'react';
import { categories, tags, recipes } from '../data';

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

      <div>
        <h2>All Recipes</h2>
        {recipes.map(recipe => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;

