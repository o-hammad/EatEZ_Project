import RenderPage from "./scripts/renderPage";
import RenderResult from "./scripts/renderResult";
import RenderRecipe from "./scripts/renderRecipe";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new RenderPage(main);

    const formFilterSubmission = document.getElementById("filterForm");

    formFilterSubmission.addEventListener("submit", function(event) {
        event.preventDefault();

        const selectedCuisine = document.getElementById("cuisineTypeSelector");
        const selectedCalories = document.getElementById("caloriesSelector");
        const selectedProtein = document.getElementById("proteinSelector");
        const selectedCarbs = document.getElementById("carbsSelector");
        const selectedFat = document.getElementById("fatSelector");

        const inputtedFilters = {};

        inputtedFilters["calories"] = selectedCalories.value;
        inputtedFilters["protein"] = selectedProtein.value;
        inputtedFilters["carbs"] = selectedCarbs.value;
        inputtedFilters["fat"] = selectedFat.value;

        if (!document.getElementById("results") && !document.getElementById("recipe")) {
            new RenderResult(selectedCuisine.value, main, inputtedFilters);
        } else {
            if (document.getElementById("results")) {
                const currResults = document.getElementById("results");
                currResults.remove();
            } else {
                const currRecipe = document.getElementById("recipe");
                currRecipe.remove();
            }
            new RenderResult(selectedCuisine.value, main, inputtedFilters);
        };
    });

    document.addEventListener("click", function (event) {
        const target = event.target;
        if (target.closest("#results")) {
            if (target.className === 'resultLabel') {
                // console.log(target.id);
                const currResults = document.getElementById("results");
                currResults.remove();
                new RenderRecipe(target.id);
            }
        };
    });
});
