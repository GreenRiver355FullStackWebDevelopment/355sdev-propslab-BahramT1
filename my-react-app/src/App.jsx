import { recipes } from "./data/data.js";      // <-- path fixed
import RecipeContainer from "./components/RecipesContainer.jsx";
import "./index.css";

export default function App() {
  return (
    <>
      <h1>Family Quick‑Bread Recipes</h1>
      <RecipeContainer recipes={recipes} />
    </>
  );
}
