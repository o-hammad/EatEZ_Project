import RenderPage from "./scripts/renderPage";
import RenderResult from "./scripts/renderResult";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new RenderPage(main);

    const dropdown = document.getElementById("cuisineType");

    dropdown.addEventListener("change", function () {
        const selectedOption = dropdown.value;

        if (!document.getElementById("results")) {
            new RenderResult(selectedOption, main);
        } else {
            const currResults = document.getElementById("results");
            currResults.remove();
            new RenderResult(selectedOption, main);
        };
    });
})
