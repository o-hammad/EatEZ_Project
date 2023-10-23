class RenderPage {
    constructor(ele){
        this.main = ele;
        // this.ele.innerHTML = "<h1>It's ALIVE!!</h1>";
        this.createHeader();
        this.createSidebar(ele);
        this.createFooter();

        this.main.addEventListener('click', this.handleClick.bind(this));
    };

    handleClick() {
        // this.ele.children[0].innerText = 'Ouch!';
    }

    createHeader() {
        const header = document.createElement("header");
        const logo = document.createElement("img");
        logo.src = "src/styles/EatEZLogo.jpg";
        header.appendChild(logo);
        document.body.prepend(header);
    }

    createFooter() {
        const footer = document.createElement("footer");
        footer.innerHTML = "<p>2023 All Rights Reserved</p>";
        document.body.appendChild(footer);
    }

    createSidebar(ele) {
        //creation of sidebar container
        const sidebar = document.createElement("div");
        sidebar.id = "sidebar";
        ele.appendChild(sidebar);

        //creation of paragraph description in sidebar
        const description = document.createElement("p");
        description.textContent = "Paragraph Description";
        sidebar.appendChild(description);
        
        description.style.marginBottom = "10px";
        
        //creation of a form to contain the filters
        const form = document.createElement("form");
        form.id = "filterForm"
        sidebar.appendChild(form);

        //cuisine drop down in side nav
        const cuisine = document.createElement("select");
        cuisine.id = "cuisineTypeSelector";
        
        //creating the default cuising button
        const pleaseSelectCuisine = document.createElement("option");
        pleaseSelectCuisine.value = "";
        pleaseSelectCuisine.text = "Please select a Cuisine";
        pleaseSelectCuisine.disabled = true;
        pleaseSelectCuisine.selected = true;
        cuisine.appendChild(pleaseSelectCuisine);

        //adding the cuisines to the dropdown
        let cuisines = ['American', 'Asian', 'British', 'Caribbean', 'Central Europe',
            'Chinese', 'Eastern Europe', 'French', 'Greek', 'Indian', 'Italian', 'Japanese',
            'Korean', 'Kosher', 'Mediterranean', 'Mexican', 'Middle Eastern', 'Nordic',
            'South American', 'South East Asian', 'World'];
        
        cuisines.forEach(typeOfCuisine => {
            const lowerCaseCuisine = typeOfCuisine.toLowerCase();
            const option = document.createElement("option");
            option.value = lowerCaseCuisine;
            option.text = typeOfCuisine;
            cuisine.appendChild(option);
        })

        form.appendChild(cuisine);
        cuisine.style.marginBottom = "10px";

        //creation of calories selector
        const calories = document.createElement("select");
        calories.id = "caloriesSelector";

        //creating the default calorie selector
        const pleaseSelectCalories = document.createElement("option");
        pleaseSelectCalories.value = "";
        pleaseSelectCalories.text = "Please Select Max Calories Required";
        pleaseSelectCalories.disabled = true;
        pleaseSelectCalories.selected = true;
        calories.appendChild(pleaseSelectCalories);
        
        //calories range
        for(let i = 500; i <= 3000; i += 500) {
            let option = document.createElement("option");
            option.value = `${i}`;
            option.text = `${i} calories or less`;
            calories.appendChild(option);
        }
        
        form.appendChild(calories);
        calories.style.marginBottom = "10px";

        //creation of total daily protein requirement
        const protein = document.createElement("select");
        protein.id = "proteinSelector";

        const pleaseSelectProtein = document.createElement("option");
        pleaseSelectProtein.value = "";
        pleaseSelectProtein.text = "Please Select Minimum Protein in Grams";
        pleaseSelectProtein.disabled = true;
        pleaseSelectProtein.selected = true;
        protein.appendChild(pleaseSelectProtein);

        for (let i = 5; i <= 105; i += 10) {
            let option = document.createElement("option");
            option.value = `${i}`;
            option.text = `${i} grams or more`;
            protein.appendChild(option);
        };

        form.appendChild(protein);
        protein.style.marginBottom = "10px";

        //creation of total daily carb requirement
        const carbs = document.createElement("select");
        carbs.id = "carbsSelector";

        const pleaseSelectCarbs = document.createElement("option");
        pleaseSelectCarbs.value = "";
        pleaseSelectCarbs.text = "Please Select Minimum Carbs in Grams";
        pleaseSelectCarbs.disabled = true;
        pleaseSelectCarbs.selected = true;
        carbs.appendChild(pleaseSelectCarbs);

        for (let i = 5; i <= 105; i += 10) {
            let option = document.createElement("option");
            option.value = `${i}`;
            option.text = `${i} grams or more`;
            carbs.appendChild(option);
        };

        form.appendChild(carbs);

        carbs.style.marginBottom = "10px";

        //creation of total daily fat requirement
        const fat = document.createElement("select");
        fat.id = "fatSelector";

        const pleaseSelectFat = document.createElement("option");
        pleaseSelectFat.value = "";
        pleaseSelectFat.text = "Please Select Minimum Fat in Grams";
        pleaseSelectFat.disabled = true;
        pleaseSelectFat.selected = true;
        fat.appendChild(pleaseSelectFat);

        for (let i = 5; i <= 105; i += 10) {
            let option = document.createElement("option");
            option.value = `${i}`;
            option.text = `${i} grams or more`;
            fat.appendChild(option);
        };

        form.appendChild(fat);
        fat.style.marginBottom = "10px";

        const searchButton = document.createElement("input");
        searchButton.type = "submit";
        searchButton.value = "Search";
        form.appendChild(searchButton);
    };
};

export default RenderPage;