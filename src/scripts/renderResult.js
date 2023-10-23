import PieGraph from "./pieGraph";

class RenderResult {
    constructor(selectedOption, main, inputtedFilters) {
        let currentData;
        
        this.getData(selectedOption)
            .then(data => {
                console.log(data);
                currentData = data;
                const hits = data.hits;
                this.renderData(hits, main, inputtedFilters);
            })
            .catch(error => {
                console.log("Sorry, there was an error getting your data");
            })
        
        this.cuisineSelectedData = currentData;
    };

    async getData(selectedOption) {
        let appId = "25aad07a";
        let appKey = "095c96548ed9957ef5de2298cd228fc4";
        let url = `https://api.edamam.com/api/recipes/v2?app_id=${appId}&app_key=${appKey}&cuisineType=${selectedOption}&type=public`

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Sorry, there was an error with the network");
        }

        const data = await response.json();

        return data;
    }

    renderData(hits, main, inputtedFilters) {
        const results = document.createElement("div");
        results.id = "results";
        main.appendChild(results);

        if (inputtedFilters["calories"] === '') {
            inputtedFilters["calories"] = 500;
        };

        if (inputtedFilters["protein"] === '') {
            inputtedFilters["protein"] = 5;
        };

        if (inputtedFilters["carbs"] === '') {
            inputtedFilters["carbs"] = 5;
        };

        if (inputtedFilters["fat"] === '') {
            inputtedFilters["fat"] = 5;
        };

        hits.forEach((hit) => {
            //isolate item
            const recipe = hit.recipe;
            const item = document.createElement("ul");
            const proteinQty = recipe.totalNutrients.PROCNT.quantity;
            const proteinUnit = recipe.totalNutrients.PROCNT.unit;
            const carbsQty = recipe.totalNutrients.CHOCDF.quantity;
            const carbsUnit = recipe.totalNutrients.CHOCDF.unit;
            const fatQty = recipe.totalNutrients.FAT.quantity;
            const fatUnit = recipe.totalNutrients.FAT.unit;


            if (recipe.calories <= inputtedFilters["calories"] && proteinQty >= inputtedFilters["protein"] && 
                carbsQty >= inputtedFilters["carbs"] && fatQty >= inputtedFilters["fat"]) {
                
                //render recipe label
                const label = document.createElement("li");
                label.innerHTML = `Recipe Label: ${recipe.label}`;
                item.appendChild(label);

                //render small image
                const image = document.createElement("img");
                image.src = `${recipe.images.SMALL.url}`;
                item.appendChild(image);

                //render calories for recipe
                const calories = document.createElement("li");
                calories.innerHTML = `Calories: ${recipe.calories}`;
                item.appendChild(calories);

                //creating an li for Nutrition Facts
                const nutrition = document.createElement("li");
                nutrition.innerHTML = 'Macro Nutrient Count: ';
                item.appendChild(nutrition);

                //creating a ul for macro nutrients
                const macroUl = document.createElement("ul");
                nutrition.appendChild(macroUl);

                //creating an li for protein
                const protein = document.createElement("li");
                protein.innerHTML = `Protein: ${proteinQty} ${proteinUnit}`;
                macroUl.appendChild(protein);

                //creating an li for carbs
                const carbs = document.createElement("li");
                carbs.innerHTML = `Carbs: ${carbsQty} ${carbsUnit}`;
                macroUl.appendChild(carbs);

                //creating an li for fat
                const fat = document.createElement("li");
                fat.innerHTML = `Fat: ${fatQty} ${fatUnit}`;
                macroUl.appendChild(fat);

                //creating an li to append the pie chart
                const pieChartUl = document.createElement("li");
                pieChartUl.innerHTML = "Pie Chart:";
                macroUl.appendChild(pieChartUl);

                //creating a ul pie chart container
                const pieChartId = `pie-chart-container`;
                const pieChartContainer = document.createElement("div");
                pieChartContainer.id = pieChartId;
                pieChartUl.appendChild(pieChartContainer);

                var data = [
                    { nutrient: 'Protein', value: proteinQty },
                    { nutrient: 'Fat', value: fatQty },
                    { nutrient: 'Carbs', value: carbsQty },
                ];

                var width = 100;
                var height = 100;
                var radius = Math.min(width, height) / 2;
                var innerRadius = 10; // Adjust this to control the size of the hole.

                var svg = d3.select(`#${pieChartId}`)
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
                        // Assign colors based on the nutrient, as in the previous example.
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

                results.appendChild(item);
            };
        });
    };
};

export default RenderResult;