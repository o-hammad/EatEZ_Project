class RenderRecipe {
    constructor(recipeLabel) {
        let arrayRetrieval = localStorage.getItem('storedResult');
        let hits = JSON.parse(arrayRetrieval);
        this.renderData(hits, recipeLabel);
    }
    
    renderData(hits, recipeLabel) {
        const recipeDisplay = document.createElement("div");
        recipeDisplay.id = "recipe";
        main.appendChild(recipeDisplay);

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
                //create and image container
                const recipeImages = document.createElement("div");
                recipeImages.id = "recipeImages";
                recipeDisplay.appendChild(recipeImages);

                //create a box for the right
                const recipeImagesLeft = document.createElement("div");
                recipeImagesLeft.id = "recipeImagesLeft";
                recipeImages.appendChild(recipeImagesLeft);

                //add the label
                const recipeLabelHeader = document.createElement("h2");
                recipeLabelHeader.innerHTML = `${recipe.label}`;
                recipeImagesLeft.appendChild(recipeLabelHeader);

                //render regular image
                const image = document.createElement("img");
                image.src = `${recipe.images.REGULAR.url}`;
                image.id = "recipeImage";
                recipeImagesLeft.appendChild(image);

                //create a container for the right side of recipe image
                const recipeImagesRight = document.createElement("div");
                recipeImages.appendChild(recipeImagesRight);

                //create a container for the ingredients and the nutrients
                const ingredientNutrients = document.createElement("div");
                ingredientNutrients.id = "recipeNutrientDisplay";
                recipeDisplay.appendChild(ingredientNutrients);

                //create a container for the ingredients
                const recipeIngredients = document.createElement("div");
                recipeIngredients.id = "recipeIngredients";
                recipeImagesRight.appendChild(recipeIngredients);

                //add a header for the ingredients
                const ingredientsLabel = document.createElement("h3");
                ingredientsLabel.textContent = 'Ingredients:';
                recipeIngredients.appendChild(ingredientsLabel);

                //add the ingredients ul
                const ingredientItems = document.createElement("ul");
                recipeIngredients.appendChild(ingredientItems);

                //add each ingredient
                recipe.ingredients.forEach(ingredient => {
                    const recipeItem = document.createElement("li");
                    recipeItem.innerHTML = ingredient.text;
                    ingredientItems.appendChild(recipeItem);
                });

                //create a container for the nutrition facts
                const nutritionFacts = document.createElement("div");
                nutritionFacts.id = "nutritionFacts";
                ingredientNutrients.appendChild(nutritionFacts);

                const nutritionLabel = document.createElement("h3");
                nutritionLabel.textContent = 'Nutrition Facts:';
                nutritionFacts.appendChild(nutritionLabel);

                for (const nutrientKey in recipe.totalNutrients) {
                    const nutrient = recipe.totalNutrients[nutrientKey];
                    const nutrientLine = document.createElement("div");
                    nutrientLine.id = "nutrientLine";
                    nutrientLine.style.display = "flex";
                    nutrientLine.style.justifyContent = "space-between";
                    const nutrientLabel = document.createElement("div");
                    nutrientLabel.textContent = `${nutrient.label}`;
                    nutrientLine.appendChild(nutrientLabel);
                    const nutritionQty = document.createElement("div");
                    nutritionQty.textContent = `${Math.floor(nutrient.quantity)} ${nutrient.unit}`;
                    nutrientLine.appendChild(nutritionQty);
                    nutritionFacts.appendChild(nutrientLine);
                }

                const blankLine = document.createElement("div");
                blankLine.style.height = "40px";
                nutritionFacts.appendChild(blankLine);

                //creating a ul pie chart container
                const pieChartContainerId = `pie-chart-container`;
                const pieChartContainer = document.createElement("div");
                pieChartContainer.id = pieChartContainerId;
                recipeImagesRight.appendChild(pieChartContainer);

                var data = [
                    { nutrient: 'Protein', value: proteinQty },
                    { nutrient: 'Fat', value: fatQty },
                    { nutrient: 'Carbs', value: carbsQty },
                ];

                var width = 300;
                var height = 300;
                var radius = Math.min(width, height) / 2;
                var innerRadius = 75; // Adjust this to control the size of the hole.

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

                const toolTip = document.createElement("div");
                toolTip.style.display = "none";
                toolTip.style.position = "absolute";
                toolTip.id = "toolTip";
                toolTip.style.cursor = "none";
                toolTip.style.userSelect = "none";
                main.appendChild(toolTip);

                var arcs = svg.selectAll('arc')
                    .data(pie(data))
                    .enter()
                    .append('g')
                    .on("mouseover", function (d, i) {
                        d3.select("#toolTip").style("display", "block")
                            .style("left", event.pageX + "px")
                            .style("top", event.pageY + "px")
                            .text(i.value + "g")
                    })
                    .on("mouseout", function (d, i) {
                        d3.select("#toolTip").style("display", "none");
                    });

                arcs.append('path')
                    .attr('d', arc)
                    .attr('fill', function (d) {
                        if (d.data.nutrient === 'Protein') {
                            return '#03fc6b';
                        } else if (d.data.nutrient === 'Fat') {
                            return '#fc3903';
                        } else {
                            return '#034afc';
                        }
                        
                    })  
                    
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