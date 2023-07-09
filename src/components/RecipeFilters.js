// RecipeFilters.js

import React from 'react';
import { categories, tags } from '../data';

const RecipeFilters = () => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>

      <h2>Tags</h2>
      <ul>
        {tags.map(tag => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeFilters;
