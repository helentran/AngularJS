//=============================================================================
//  LEVEL 1
//=============================================================================
Task 1: Controller
  	1. Create a Module named gemStore so we can get started on this marketing journey.
  	2. Attach the gemStore module to our HTML page with a Directive.
  	3. In index.html, create a simple Expression to display a friendly "Hello, Angular!" message.*/

Task 2: Work with Data
  	1. Add a controller named StoreController to our gemStore application.
  	2. Display the name of the product inside the <h3> tag.
  	3. Display the price of the product inside the <em> tag.*/

Task 3: Build in Directly
	1. Use a directive to ensure that we can only see the "Add to Cart" button if the canPurchase property is true.
	2. Our first gem is so popular that we've run out of stock already! Well, Flatlander gems are pretty rare, 
	so it shouldn't be a big surprise. Luckily there is a soldOut property to our gem. When a gem is soldOut, 
	hide the .product element.*/

Task 4: Look, More Gems! 
	1. In the app.js file we changed things up a little with a new gems array. Assign gems to a products property inside StoreController.
	2. You know how to display all the products, don't you? Use the correct directive to display all the products in product row divs.

//=============================================================================
//  LEVEL 2
//=============================================================================

Task 1: Using filters
  	1. In the previous challenge we practiced displaying the prices of gems in our index.html. The first gem, Azurite, 
  now costs $110.50 (due to supply shortages) but our current code doesn't display the price correctly.

  ******************************************************************************
  * NOTE:  {{data | filter: otion }}		
  ******************************************************************************
  # currency					{{product.price | currency}}
  # date: 						{{'32169879841635' | date:'MM/dd/yyyy @ h:mma'}}
  # uppercase and lowercase		{{'helen tran' | uppercase }}
  # limitTo						{{'helen tran is beginer' | limitTo:10 }}
  								<li ng-repeat="product in store.products | limitTo:3">
  #orderBy						<li ng-repeat="product in store.products | orderBy:'-price'">
  *******************************************************************************

Task 2: Displaying the First Image
	1. We've added images to all products as well – like any self respecting store should have. A product has an array of images we can use in our HTML. Let's get the first image to show on the page!

Task 3: Display All Thumbnails
	Our 2-dimensional clients have worked hard to produce multiple images for their gems. Display all the thumbnails inside our gallery without repeating yourself by using an AngularJS directive on the li.thumbnail element.