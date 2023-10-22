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

        console.log(`${selectedCuisine.value}`);
        console.log(`${selectedCalories.value}`);
        console.log(`${selectedProtein.value}`);
        console.log(`${selectedCarbs.value}`);
        console.log(`${selectedFat.value}`);
    });


    // const cuisineSelector = document.getElementById("cuisineTypeSelector");

    // cuisineSelector.addEventListener("change", function () {
    //     let selectedCuisine = cuisineSelector.value;

    //     if (!document.getElementById("results")) {
    //         new RenderResult(selectedCuisine, main);
    //     } else {
    //         const currResults = document.getElementById("results");
    //         currResults.remove();
    //         new RenderResult(selectedCuisine, main);
    //     };       
    // });
});
