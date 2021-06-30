// from data.js
var tableData = data;

// Viewing available data from data.js
// console.log(tableData);


// Creating References to tbody, input & button
var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime");
var inputFieldCity = d3.select("#city");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]


// Inputting the data into the HTML
var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufoSightings[column])
        )
    });
}

addData(tableData);


// Create Event Listener for Button
// Setting up Filter Button for Date/City
button.on("click", () => {

    d3.event.preventDefault();
    

    var inputDate = inputFieldDate.property("value").trim();
    // console.log(inputDate)
    // trim inputs 
    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    

    $tbody.html("");

    let response = {
        filterDate
    }


    if(response.filterDate.length !== 0) {
        addData(filterDate);
    }

    // add comment if no
    
        else {
            $tbody.append("tr").append("td").text("No Sightings Here...Move On...");
        }
})
