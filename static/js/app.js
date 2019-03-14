// Get references to the tbody element, input field and button
var $tbody = document.querySelector("#tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#statename");
var $cityInput = document.querySelector("#cityname");
var $countryInput = document.querySelector("#countryname");
var $shapeInput = document.querySelector("#shapename");
var $filterBtn = document.querySelector("#filter-btn");



//OLD
//$filterBtn.addEventListener("click", filterFunction);
//
//function filterFunction() {
//
//    var filterDate = $dateInput.value;
//    console.log($dateInput.value);
//    if (filterDate != "")
//    {
//
//        filterData = filterData.filter(entry => entry.datetime === filterDate);
//        
//        console.log(filterData);
//    };   
//}
//END OF OLD

// Initially set filterData equal to dataSet
var filterData = dataSet;

// Define the table body
var tbody = d3.select("tbody");


//ALTERNATIVE STRATEGY
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
//  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(filterData);

  filterData = dataSet.filter(entry => entry.datetime === inputValue);

  console.log(filterData);
  renderTable();
});
//    ENDING

//Create loop through all data to show everything
function renderTable(){
    filterData.forEach(function(ufoSightings) {
        console.log(ufoSightings);
        var row = tbody.append("tr");
        Object.entries(ufoSightings).forEach(function([key,value]) {
            console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}




// Run renderTable function so that the table initially shows up
renderTable();












//function searchFunction() {
//  // Format the user's search by removing leading and trailing whitespace, lowercase the string
//  var filterDate = $dateInput.value;
//  var filterState = $stateInput.value.trim().toLowerCase();
//  var filterCity = $cityInput.value.trim().toLowerCase();
//  var filterCountry = $countryInput.value.trim().toLowerCase();
//  var filterShape = $shapeInput.value.trim().toLowerCase();
//    
//      if (filterDate != "")
//  {
//    filterData = data.filter(function(address) 
//    {
//      var addressDate = address.datetime; 
//    
//    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
//    return addressDate === filterDate;
//    });
//  }
//  else {filterData};
//  
//
//  if(filterState != "")
//  {
//    filterData = filterData.filter(function(address)
//    {
//      var addressState = address.state;
//      return addressState === filterState;
//    });
//  }
//  else{filterData};
//
//  if(filterCity != "")
//  {
//    filterData = filterData.filter(function(address)
//    {
//      var addressCity = address.city;
//      return addressCity === filterCity;
//    });
//  }
//
//  else{filterData};
//
//  if(filterCountry != "")
//  {
//    filterData = filterData.filter(function(address)
//    {
//      var addressCountry = address.country;
//      return addressCountry === filterCountry;
//    });
//  }
//  else{filterData};
//
//  if(filterShape != "")
//  {
//    filterData = filterData.filter(function(address)
//    {
//      var addressShape = address.shape;
//      return addressShape === filterShape;
//    });
//  }
//  else{filterData};
//};


//

//
//$(document).ready(function() {
//  $('#table').DataTable();
//});

// Select the submit button
//var submit = d3.select("#submit");
//submit.on("click", function(ufoSightingsFiltered) {
//    var inputElement = d3.select("#datetime");
//    var inputValue = inputElement.property("value");
//    console.log(inputValue);
//    console.log(data);
//    var filteredData = data.filter(function(dataValues) dataValues.datetime === inputValue);
//    console.log(filteredData);
//    
//    filteredData.forEach(function(ufoSightingsFiltered) {
//        console.log(ufoSightingsFiltered);
//        var row = tbody.append("tr");
//        Object.entries(ufoSightingsFiltered).forEach(function([key,value]) {
//            console.log(key,value);
//            var cell = tbody.append("td");
//            cell.text(value);
//    });
//});
//    
//    
//});