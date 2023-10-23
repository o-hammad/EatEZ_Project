import RenderPage from "./scripts/renderPage";
import RenderResult from "./scripts/renderResult";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new RenderPage(main);

    const formFilterSubmission = document.getElementById("filterForm")

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

        if (!document.getElementById("results")) {
            new RenderResult(selectedCuisine.value, main, inputtedFilters);
        } else {
            const currResults = document.getElementById("results");
            currResults.remove();
            new RenderResult(selectedCuisine.value, main, inputtedFilters);
        };
    });
});
