import RenderPage from "./scripts/renderpage";
import RenderResult from "./scripts/renderresult";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new RenderPage(main);

    const dropdown = document.getElementById("cuisineType");

    dropdown.addEventListener("change", function () {
        const selectedOption = dropdown.value;

        new RenderResult(selectedOption);
    });
})
