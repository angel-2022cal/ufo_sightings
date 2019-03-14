
// Initially set filterData equal to dataSet
var filterData = dataSet;

// Define the table body
var tbody = d3.select("tbody");


//Code for what happens when filter button is clicked
var submit = d3.select("#filter-btn");
submit.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var datetimeElement = d3.select("#datetime");
  // Get the value property of the input element
  var datetimeValue = datetimeElement.property("value");
  filterData = dataSet.filter(entry => entry.datetime === datetimeValue);
  console.log(filterData);
//  $("#tbodyid").empty();
  renderTable();
});


// Run renderTable function so that the table initially shows up
renderTable();


//Create loop through all data to show everything
function renderTable(){
    $("#tbodyid").empty();
    console.log(filterData);
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