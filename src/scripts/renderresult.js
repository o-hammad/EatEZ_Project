class RenderResult {
    constructor(selectedOption) {
        this.getData(selectedOption)
            .then(data => {
                // console.log(data);
                const hits = data.hits;
                this.renderData(hits);
            })
            .catch(error => {
                console.log("there was a problem with your fetch");
            })
    }

    async getData(selectedOption) {
        let appId = "25aad07a";
        let appKey = "095c96548ed9957ef5de2298cd228fc4";
        let url = `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&cuisineType=${selectedOption}&type=public`

        const res = await fetch(url);

        if (!res.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await res.json();

        return data;
    }

    renderData(hits) {
        const results = document.createElement("div");
        results.id = "results";
        document.body.appendChild(results);

        hits.forEach(hit => {
            const recipe = hit.recipe;
            const item = document.createElement("ul");
            const label = document.createElement("li");
            label.innerHTML = `Recipe Label: ${recipe.label}`;
            item.appendChild(label);
            const calories = document.createElement("li");
            calories.innerHTML = `Calories: ${recipe.calories}`;
            item.appendChild(calories);
            // console.log('Ingredients: ');
            // recipe.ingredients.forEach(ingredient => {
            //     console.log(ingredient);
            // });
            results.appendChild(item);
        });
    };
};



export default RenderResult;