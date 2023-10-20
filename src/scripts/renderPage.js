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
        header.innerHTML = "<h1>Header</h1>";
        document.body.prepend(header);
    }

    createFooter() {
        const footer = document.createElement("footer");
        footer.innerHTML = "<p>Footer</p>";
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
        
        //cuisine drop down in side nav
        const cuisine = document.createElement("select");
        cuisine.id = "cuisineType";
        
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

        sidebar.appendChild(cuisine);

        //creation of calories selector
        const calories = document.createElement("select");
        calories.id = "calories";

        //creating the default calorie selector
        const pleaseSelectCalories = document.createElement("option");
        pleaseSelectCalories.value = "";
        pleaseSelectCalories.text = "Please select a Calories Range";
        pleaseSelectCalories.disabled = true;
        pleaseSelectCalories.selected = true;
        calories.appendChild(pleaseSelectCalories);
        sidebar.appendChild(calories);

        //creation of total daily protein requirement
        const protein = document.createElement("select");
        protein.id = "protein";

        const pleaseSelectProtein = document.createElement("option");
        pleaseSelectProtein.value = "";
        pleaseSelectProtein.text = "Please select Protein %";
        pleaseSelectProtein.disabled = true;
        pleaseSelectProtein.selected = true;
        protein.appendChild(pleaseSelectProtein);

        for (let i = 20; i <= 100; i += 20) {
            let option = document.createElement("option");
            option.value = `option${i}`;
            option.text = `${i} %`;
            protein.appendChild(option);
        };

        sidebar.appendChild(protein);

        //creation of total daily carb requirement
        const carbs = document.createElement("select");
        carbs.id = "carbs";

        const pleaseSelectCarbs = document.createElement("option");
        pleaseSelectCarbs.value = "";
        pleaseSelectCarbs.text = "Please select a Carbs %";
        pleaseSelectCarbs.disabled = true;
        pleaseSelectCarbs.selected = true;
        carbs.appendChild(pleaseSelectCarbs);

        for (let i = 20; i <= 100; i += 20) {
            let option = document.createElement("option");
            option.value = `option${i}`;
            option.text = `${i} %`;
            carbs.appendChild(option);
        };

        sidebar.appendChild(carbs);

        //creation of total daily fat requirement
        const fat = document.createElement("select");
        fat.id = "fat";

        const pleaseSelectFat = document.createElement("option");
        pleaseSelectFat.value = "";
        pleaseSelectFat.text = "Please select a Fat %";
        pleaseSelectFat.disabled = true;
        pleaseSelectFat.selected = true;
        fat.appendChild(pleaseSelectFat);

        for(let i = 20; i <= 100; i += 20) {
            let option = document.createElement("option");
            option.value = `option${i}`;
            option.text = `${i} %`;
            fat.appendChild(option);
        };

        sidebar.appendChild(fat);
    };
};

export default RenderPage;