// Routes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";  // Update import path
import FVHomePage from "./FVHomePage";  // Update import path
import FeaturedBrandsPage from "./FeaturedBrandsPage";
import CDJHomePage from "./CDJHomePage";
import SCHomePage from "./SCHomePage";  // Update import path
import Details from "./Details";
import { TopCategoriesPage } from "./TopCategoriesPart";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/top-categories" element={<TopCategoriesPage />} />
      <Route path="/fruits-and-vegetables" element={<FVHomePage />} />
      <Route path="/cold-drinks-and-juices" element={<CDJHomePage />} />
      <Route path="/snacks-and-munchies" element={<SCHomePage />}/>
      <Route path="/featured-brands" element={<FeaturedBrandsPage />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
