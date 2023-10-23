import PieGraph from "./pieGraph";

class RenderRecipe {
    constructor(recipeLabel) {
        this.getData(recipeLabel)
            .then(data => {
                console.log(data)
                const hits = data.hits;
                this.renderData(hits, main, recipeLabel);
            })
            .catch(error => {
                console.log("Sorry, there was an error getting your data");
            })
    };

    async getData(recipeLabel) {
        let appId = "25aad07a";
        let appKey = "095c96548ed9957ef5de2298cd228fc4";
        let url = `https://api.edamam.com/search?q=${recipeLabel}&app_id=${appId}&app_key=${appKey}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Sorry, there was an error with the network");
        }

        const data = await response.json();

        return data;
    };
    
    renderData(hits, main, recipeLabel) {
        const results = document.createElement("div");
        results.id = "recipe";
        main.appendChild(results);

        hits.forEach(hit => {
            //isolate the recipe for each hit
            const recipe = hit.recipe;
            const proteinQty = Math.floor(recipe.totalNutrients.PROCNT.quantity);
            const proteinUnit = recipe.totalNutrients.PROCNT.unit;
            const carbsQty = Math.floor(recipe.totalNutrients.CHOCDF.quantity);
            const carbsUnit = recipe.totalNutrients.CHOCDF.unit;
            const fatQty = Math.floor(recipe.totalNutrients.FAT.quantity);
            const fatUnit = recipe.totalNutrients.FAT.unit;

            if (recipe.label === recipeLabel) {
                //add the label
                const label = document.createElement("li");
                label.innerHTML = `${recipe.label}`;
                results.appendChild(label);

                // //render small image
                // const image = document.createElement("img");
                // image.src = `${recipe.image}`;
                // item.appendChild(image);

                //add the calories
                const calories = document.createElement("li");
                calories.innerHTML = `Calories: ${recipe.calories}`;
                results.appendChild(calories);

                //add the ingredients li to add ingredients underneath
                const ingredients = document.createElement("li");
                ingredients.innerHTML = 'Ingredients: ';
                results.appendChild(ingredients);

                //add the ingredients ul
                const ingredientItems = document.createElement("ul");
                ingredients.appendChild(ingredientItems);
                results.appendChild(ingredients);

                //add each ingredient
                recipe.ingredients.forEach(ingredient => {
                    const recipeItem = document.createElement("li");
                    recipeItem.innerHTML = ingredient.text;
                    ingredientItems.appendChild(recipeItem);
                });

                //creating a ul pie chart container
                const pieChartContainerId = `pie-chart-container`;
                const pieChartContainer = document.createElement("div");
                pieChartContainer.id = pieChartContainerId;
                results.appendChild(pieChartContainer);

                var data = [
                    { nutrient: 'Protein', value: proteinQty },
                    { nutrient: 'Fat', value: fatQty },
                    { nutrient: 'Carbs', value: carbsQty },
                ];

                var width = 100;
                var height = 100;
                var radius = Math.min(width, height) / 2;
                var innerRadius = 10; // Adjust this to control the size of the hole.

                var svg = d3.select(`#${pieChartContainerId}`)
                    .append('svg')
                    .attr('width', width)
                    .attr('height', height)
                    .append('g')
                    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

                var pie = d3.pie()
                    .value(function (d) {
                        return d.value;
                    });

                var arc = d3.arc()
                    .innerRadius(innerRadius) // Inner radius to create the hole
                    .outerRadius(radius);

                var arcs = svg.selectAll('arc')
                    .data(pie(data))
                    .enter()
                    .append('g');

                arcs.append('path')
                    .attr('d', arc)
                    .attr('fill', function (d) {
                        if (d.data.nutrient === 'Protein') {
                            return 'blue';
                        } else if (d.data.nutrient === 'Fat') {
                            return 'green';
                        } else {
                            return 'red';
                        }
                    });

                arcs.append('text')
                    .attr('transform', function (d) {
                        return 'translate(' + arc.centroid(d) + ')';
                    })
                    .attr('text-anchor', 'middle')
                    .text(function (d) {
                        return d.data.nutrient;
                    });
            };
        });
    };
};

export default RenderRecipe