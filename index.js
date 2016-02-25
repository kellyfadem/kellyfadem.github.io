//doc ready
$(document).ready(function(){

var search;

///////////////// SEARCH PAGE //////////////////
$(".search_input").submit(function(e){
  e.preventDefault()
  $(".search_results_title").show();
    //on submit of find my products show search_results_title and show api for results
    search = $(".find_my_products").val();
    //get value of user input and run ajax call

      //on success
      $(".search_results_container").show();
      //on success show data in console log and show search_results_title, and add search_results_container for each result

      //on failure
      // $(".no_results_container").show();

/////////////API stuff//////////

  //access key for Factual API
  var factualKey = "lp9wmwbh75ByljZSDXqm0RSoAwL0AWOaGzu1UuWo";

//JSON request - javascript object that you can read and get from other APIs
//jquery method to get json object
$.getJSON(
//request im sending to factual to get json object
"http://api.v3.factual.com/t/products-cpg-nutrition?",
//key field = api key
{ KEY : factualKey,
  filters : JSON.stringify({
    //"factual filter" : "filter option"
              "category" :  "Skin Care",
              //see create a new filter for other options
              "ingredients" : {"$excludes": "fragrance"}
  }),

  q : search,
  offset : 20
},
function(data){
    console.log(data);
    //makes results of data query print to console
    //$.each method goes here
    $.each(data.response.data, function(i, v){
       var productContainer = "<div class='product_info'><img class='product_image'src="+v.image_urls[0]+"><div class='product_details'><h3 class='product_name'>"+v.product_name+"</h3><p><em>Brand</em>"+v.brand+"</p><p><em>Average price</em>"+v.avg_price+"</p><p><em>Category</em>"+v.category+"</p><p><em>Ingredients</em>"+v.ingredients.join(", ")+"<p></div><form class='form add_button'><input class='form add_to_my_products' type='submit' value='Add to My Products'/></form>"
       $(".search_results_container").append(productContainer)


     });

     addButton();
});


});



function addButton(){
  $(".add_button").submit(function(e){
    e.preventDefault();
    console.log(this)
    var siblings = $(this).siblings()

    // siblings[0].src
    // siblings[1]
    // var productObj= { brand: siblings[1].children[1].}
    // localStorage.setItem(siblings[1].children[0].textContent, );
    // console.log();
  });
}

// $(".search_for_products_prompt").show()

$(".add_to_my_products").click(function(e){
 e.preventDefault()
  //on click of add_to_my_products,

//  $(".search_for_products_prompt").hide()
  //add my_products_container to my products page, if first product added, remove search_for_products_prompt
})

//on new search submit, remove all search_results_containers from search page



/////////// MY PRODUCTS PAGE STUFF ///////////



$(".remove_from_my_products").click(function(e) {
  e.preventDefault()
    //on click on remove from my products, remove that my_products_container from my products list
  $(".my_products_container").hide();
  $(".search_for_products_prompt").show();
    ////////////next steps: are you sure you want to remove this item from my products
});


$(".add_a_note_button").click(function(e) {
  e.preventDefault()
    // on click of add_a_note_button, remove add_a_note_button, show .save_note_button
  $(".add_a_note_button").hide();
  $(".my_product_notes").show();
  $(".save_note_button").show();

});



$(".my_product_notes").submit(function(e){
  e.preventDefault()
});


$(".save_note_button").click(function(e) {
  e.preventDefault()
    //on click of save_note_button
  var note = $(".notes_input").val();
  console.log(note);
  $(".var_note_val").append(note);
  $(".display_submitted_notes").show();
    // var_note_val = var note
  $(".my_product_notes").hide();
  $(".save_note_button").hide();
  $(".add_a_note_button").show();
    //hide my_product_notes, hide save_note_button, show add_a_note_button, show display_submitted_notes
  if (note !== null) {
    $(".save_note_button").click(function(e){
        e.preventDefault()
        $(".var_note_val").text("");
        note = $(".notes_input").val();
        console.log(note);
        $(".var_note_val").append(note);
        $(".display_submitted_notes").show();
          // var_note_val = var note
        $(".my_product_notes").hide();
        $(".save_note_button").hide();
        $(".add_a_note_button").show();
    });
  }
});



















  //click event
  // var input = $('input').val();
//getJson method happens here
  //end of the click event






console.log("HELLO");


}); //doc ready close
