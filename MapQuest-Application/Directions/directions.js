// Setup the request URL
// Example of fromDest:  "Clarendon Blvd,Arlington,VA"
// Example of toDest:  "Glebe Rd,Arlington,VA"
const APIKey = "cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48";
var fromDest = "";
var toDest = "";
var URL = "";
var listOfLatAndLong = "";

$(document).ready(function() {
    $("#yourDirections").hide();
    $("#elevationChart").hide();
})


function getDirections() {
    // Update to new URL
    fromDest = $("#startStreet").val() + "," + $("#startCity").val() + "," + $("#startState").val();
    toDest = $("#endStreet").val() + "," + $("#endCity").val() + "," + $("#endState").val();
    URL = "http://www.mapquestapi.com/directions/v2/route?key=" + APIKey + "&from=" + fromDest + "&to=" + toDest;
    
    // Test URLs:
    // URL = "http://www.mapquestapi.com/directions/v2/route?key=cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48&from=Clarendon%20Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA";
    
    // Call the API using AJAX...oooooo fancy :D
    a=$.ajax({
        url: URL,
        method: "GET"
    }).done(function(data) {
        // Clear out old data
        $("#directionsBody").html("");
        console.log("Number of directions: " + Object.keys(data.route.legs[0].maneuvers).length);
        // Loop through the JSON object and add
        // the new data to the table using HTML
        
        // Reset listOfLatLong
        listOfLatAndLong = "";
        for (i = 0; i < Object.keys(data.route.legs[0].maneuvers).length; i++) {
            /*
            EXAMPLE OF A SINGLE ROW
            <tr>
                <th scope="row">1</th>
                <td>0.03 Miles</td>
                <td>Make a left turn onto high street</td>
            </tr>
            */
            let distance = 0.0;
            let narrative = "Make a left turn onto high street";

            $("#directionsBody").append("<tr><th scope='row'>" + i + "</th>" +
                "<td><img src='" + data.route.legs[0].maneuvers[i].iconUrl + "'></td>" +
                "<td>" + data.route.legs[0].maneuvers[i].distance + " Miles</td>" +
                "<td>" + data.route.legs[0].maneuvers[i].narrative + "</td></tr>");
            
            listOfLatAndLong += "," + data.route.legs[0].maneuvers[i].startPoint.lat + ",";
            listOfLatAndLong += data.route.legs[0].maneuvers[i].startPoint.lng;
            
        }
        $("#yourDirections").show();
        
        console.log(listOfLatAndLong);
        
        // Create Chart
        createChart(listOfLatAndLong.substr(1))
        
    }).fail(function (error) {
        $("#yourDirections").hide();
        $("#elevationChart").hide();
    });
}

function createChart(latLongString) {
    let chartURL = "http://open.mapquestapi.com/elevation/v1/chart?key=cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48&unit=f&shapeFormat=raw&width=400&height=300&latLngCollection=" + latLongString;
    
    $("#chartImage").html('<img src="' + chartURL + '" class="rounded mx-auto d-block" alt="Responsive image">');
    
    $("#elevationChart").show();
    
}
