import PieGraph from "./pieGraph";

class RenderResult {
    constructor(selectedOption, main, inputtedFilters) {        
        this.getData(selectedOption)
            .then(data => {
                const hits = data.hits;
                this.renderData(hits, main, inputtedFilters);
            })
            .catch(error => {
                console.log("Sorry, there was an error getting your data");
            })
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
    };

    renderData(hits, main, inputtedFilters) {
        const results = document.createElement("div");
        results.id = "results";
        main.appendChild(results);
        let pieChartCounter = 1;

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

        hits.forEach(hit => {
            //isolate item
            const recipe = hit.recipe;
            const item = document.createElement("ul");
            item.id = "item";
            const proteinQty = Math.floor(recipe.totalNutrients.PROCNT.quantity);
            const proteinUnit = recipe.totalNutrients.PROCNT.unit;
            const carbsQty = Math.floor(recipe.totalNutrients.CHOCDF.quantity);
            const carbsUnit = recipe.totalNutrients.CHOCDF.unit;
            const fatQty = Math.floor(recipe.totalNutrients.FAT.quantity);
            const fatUnit = recipe.totalNutrients.FAT.unit;


            if (recipe.calories <= inputtedFilters["calories"] && proteinQty >= inputtedFilters["protein"] && 
                carbsQty >= inputtedFilters["carbs"] && fatQty >= inputtedFilters["fat"]) {
                
                //render recipe label
                const label = document.createElement("li");
                label.innerHTML = `${recipe.label}`;
                label.className = 'resultLabel';
                label.id = `${recipe.label}`;
                item.appendChild(label);

                //render small image
                const image = document.createElement("img");
                image.src = `${recipe.images.SMALL.url}`;
                item.appendChild(image);

                //render calories for recipe
                const calories = document.createElement("li");
                calories.innerHTML = `Calories: ${Math.floor(recipe.calories)}`;
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
                
                results.appendChild(item);
            };
        });
    };
};

export default RenderResult;