class RenderPage {
    constructor(ele){
        this.main = ele;
        this.createHeader();
        this.createSidebar(ele);
        this.createFooter();
    };

    createHeader() {
        const header = document.createElement("header");
        const logo = document.createElement("img");
        logo.src = "src/assets/images/EatEZLogo.jpg";
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
        const welcomeMessage = document.createElement("h2");
        welcomeMessage.innerHTML = "Welcome to EatEZ!";
        sidebar.appendChild(welcomeMessage);
        
        const descriptionPara1 = document.createElement("p");
        descriptionPara1.textContent = 
            "Here at EatEZ, we want to take the guess work out of preparing your own, " +
            "healthy meals to satisfy your daily recommended macro-nutrient intake.";
        sidebar.appendChild(descriptionPara1);
        
        descriptionPara1.style.marginBottom = "10px";

        const descriptionPara2 = document.createElement("p");
        descriptionPara2.textContent = 
            "With most of our recipes taking 20 minutes or less to prepare, " +
            "which is faster than the wait time for take out, simply check our app for " +
            "recipe inspiration and grab the items at your local store.";
        sidebar.appendChild(descriptionPara2);

        descriptionPara2.style.marginBottom = "10px";

        const descriptionPara3 = document.createElement("p");
        descriptionPara3.textContent = 
            "To start, please use the below link to find your daily recommended macro-nutrient intake: "
        sidebar.appendChild(descriptionPara3);

        descriptionPara3.style.marginBottom = "5px";

        const macroLink = document.createElement("a");
        macroLink.href = "https://healthyeater.com/flexible-dieting-calculator";
        macroLink.textContent = "Calculate recommended calories and macros here";
        macroLink.target = "_blank";
        sidebar.appendChild(macroLink);

        macroLink.style.marginBottom = "10px";

        const descriptionPara4 = document.createElement("p");
        descriptionPara4.textContent = 
            "Now that you have your total daily recommended calories and macronutrients, use the " +
            "below filters to find a meal for you!";
        sidebar.appendChild(descriptionPara4);

        descriptionPara4.style.marginBottom = "10px";

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

        const buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        form.appendChild(buttonContainer);

        const searchButton = document.createElement("input");
        searchButton.type = "submit";
        searchButton.value = "Search";
        searchButton.style.marginRight = "10px";
        buttonContainer.appendChild(searchButton);

        buttonContainer.style.marginBottom = "10px";

        const linksContainer = document.createElement("div");
        sidebar.appendChild(linksContainer);

        //create a github link
        const gitHubLink = document.createElement("a");
        linksContainer.appendChild(gitHubLink);
        const gitHubIcon = document.createElement("img");
        gitHubIcon.src = "src/assets/images/github-logo.png";
        gitHubLink.appendChild(gitHubIcon);
        gitHubLink.href = "https://github.com/o-hammad/EatEZ_Project.git";
        gitHubLink.target = "_blank";
        gitHubIcon.id = "gitHubIcon";
        
        //linkedin link
        const linkedInLink = document.createElement("a");
        linksContainer.appendChild(linkedInLink);
        const linkedInIcon = document.createElement("img");
        linkedInIcon.src = "src/assets/images/linkedinicon.png";
        linkedInLink.appendChild(linkedInIcon);
        linkedInLink.href = "https://www.linkedin.com/in/omar-hammad-93810413b/";
        linkedInLink.target = "_blank";
        linkedInIcon.id = "linkedInIcon";
    };
};

export default RenderPage;