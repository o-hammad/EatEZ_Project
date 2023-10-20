import PieGraph from "./pieGraph";

function renderData(hits, main) {
    const results = document.createElement("div");
    results.id = "results";
    main.appendChild(results);

    hits.forEach(hit => {
        //isolate the recipe for each hit
        const recipe = hit.recipe;
        const item = document.createElement("ul");
        
        //add the label
        const label = document.createElement("li");
        label.innerHTML = `Recipe Label: ${recipe.label}`;
        item.appendChild(label);
        
        //add the calories
        const calories = document.createElement("li");
        calories.innerHTML = `Calories: ${recipe.calories}`;
        item.appendChild(calories);
        
        //add the ingredients li to add ingredients underneath
        const ingredients = document.createElement("li");
        ingredients.innerHTML = 'Ingredients: ';
        item.appendChild(ingredients);
        
        //add the ingredients ul
        const ingredientItems = document.createElement("ul");
        ingredients.appendChild(ingredientItems);
        item.appendChild(ingredients);
        
        //add each ingredient
        recipe.ingredients.forEach(ingredient => {
            const recipeItem = document.createElement("li");
            recipeItem.innerHTML = ingredient.text;
            ingredientItems.appendChild(recipeItem);
            console.log(ingredient);
        });
        results.appendChild(item);
    });
};