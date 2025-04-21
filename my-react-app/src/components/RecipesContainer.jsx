import RecipeCard from "./RecipeCard.jsx";

export default function RecipeContainer({ recipes }) {
  return (
    <div className="recipes-container">
      {recipes.map((r, i) => (
        <RecipeCard key={i} recipe={r} />
      ))}
    </div>
  );
}
