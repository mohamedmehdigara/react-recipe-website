import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import NotFound from './components/NotFound';
import CategoryList from './components/CategoryList';
import RecipeFilters from './components/RecipeFilters';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<RecipeList/>} />
        <Route path="/recipes/:id" element={<RecipeDetails/>} />
        <Route element={<NotFound/>} />
        <Route element={<CategoryList/>} />

        <Route element={<RecipeFilters/>} />

      </Routes>
    </Router>
  );
};

export default App;
