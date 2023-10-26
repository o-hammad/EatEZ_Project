<h1>EatEZ Production README</h1>

[Live Site](https://o-hammad.github.io/EatEZ_Project/)

<h2>Instructions:</h2>

<p>Here at EatEZ, we want to take the guess work out of preparing your own, healthy meals to satisfy your daily recommended macro-nutrient intake.
</p>

<p>With most of our recipes taking 20 minutes or less to prepare, which is faster than the wait time for take out, simply check our app for recipe inspiration and grab the items at your local store.
</p>

<p>To start, please use the below link to find your daily recommended macro-nutrient intake:
</p>
    
[Calorie Calculator](https://healthyeater.com/flexible-dieting-calculator)

<p>Now that you have your total daily recommended calories and macronutrients, use the filters to find a meal tailored to your required macro-nutrient and caloric intake!
</p>

<h2>List of technologies / libraries / APIs used:</h2>
<p>1. D3.js
</p>

<p>2. Edamam API
</p>

<h2>Technical Implementation Details</h2>

<p>For the structuring of this site, I emmulated React by creating classes such that each class would render the various components of the page.  For example, when the DOM Content is loaded, the RenderPage class is initated.  In the constructor, I further broke down the landing page into smaller componenets like the header, footer and sidebar.  Below is a snippet of the constructor which creates those elements:
</p>

![Alt text](src/assets/images/render_page_constructor.png)

<p>With regards to the API queries, I utilized an async function in my RenderResults which is initialized utilizing an event listener for submission of the search filters.  Here is a snippet of that function which is called in the RenderResult constructor:
</p>

![Alt text](src/assets/images/async_api_query.png)

<p>To minimize the number of queries, make my code, and improve performance and efficiency, I stringified the query as a JSON and later retrieved it and parsed it to find the individual results when rendering the recipe as seen in the below code snippets: 
</p>

![Alt text](src/assets/images/render_result_saving_data_to_local.png)
![Alt text](src/assets/images/render_recipe_using_local_storage.png)

<p>The final code snippet below illustrates the initalizing of a pie chart that uses a tool tip which when hovering over the respective "slices" of the pie chart shows the grams of the macro-nutrient available in the recipe:
</p>

![Alt text](src/assets/images/render_recipe_creating_pie_chart.png)

<h2>To-dos / future features</h2>

<p>Future Features
</p>
        
<p>1. Clear button for search results
</p>
<p>2. Internal calorie and macro-nutrient estimator
</p>
<p>3. Input for daily recommended calories to appear in the nav bar
</p>