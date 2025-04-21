export default function RecipeCard({ recipe }) {
  const { name, ingredients, instructions } = recipe;

  return (
    <article className="recipe-card">
      <h2>{name}</h2>

      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((item, i) => <li key={i}>{item}</li>)}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {instructions.map((step, i) => <li key={i}>{step}</li>)}
      </ol>
    </article>
  );
}
