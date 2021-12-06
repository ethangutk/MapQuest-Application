// Setup the request URL
// Example of fromDest:  "Clarendon Blvd,Arlington,VA"
// Example of toDest:  "Glebe Rd,Arlington,VA"
const APIKey = "cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48";
var fromDest = "";
var toDest = "";
var URL = "";
var listOfLatAndLong = "";

$(document).ready(function () {
    $("#yourDirections").hide();
    $("#elevationChartandMap").hide();
})


function getDirections() {
    // Update to new URL
    fromDest = $("#startStreet").val() + "," + $("#startCity").val() + "," + $("#startState").val();
    toDest = $("#endStreet").val() + "," + $("#endCity").val() + "," + $("#endState").val();
    URL = "http://www.mapquestapi.com/directions/v2/route?key=" + APIKey + "&from=" + fromDest + "&to=" + toDest;

    // Call the API using AJAX...oooooo fancy :D
    a = $.ajax({
        url: URL,
        method: "GET"
    }).done(function (data) {
        // Clear out old data
        $("#directionsBody").html("");


        // Loop through the JSON object and add
        // the new data to the table using HTML

        // Display total time and distance
        let totalTime = getFormattedTime(data.route.time); // in minutes
        let totalDistance = data.route.distance; // in minutes
        $("#totalDistance").html("");
        $("#totalDistance").html("<b>Total distance:</b>  " + totalDistance + " miles ");
        $("#totalTime").html("");
        $("#totalTime").html("<b>Total time:</b>  " + totalTime);


        // Show Map:
        $("#totalDistance").html("");
        $("#totalDistance").html("<b>Total distance:</b>  " + totalDistance + " miles ");


        // Reset listOfLatLong
        listOfLatAndLong = "";

        for (i = 0; i < Object.keys(data.route.legs[0].maneuvers).length; i++) {
            // Create Variables 
            let distance = data.route.legs[0].maneuvers[i].distance;
            let narrative = data.route.legs[0].maneuvers[i].narrative;
            let time = getFormattedTime(data.route.legs[0].maneuvers[i].time);
            let mapUrl = data.route.legs[0].maneuvers[i].mapUrl;


            // Show the destionation image
            if (i == Object.keys(data.route.legs[0].maneuvers).length - 1) {
                mapUrl = "https://www.mapquestapi.com/staticmap/v5/map?locations=" +
                    data.route.locations[1].displayLatLng.lat + "," + data.route.locations[1].displayLatLng.lng +
                    "&size=225,160&key=cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48";
            }

            mapUrl = "<img src='" + mapUrl + "&type=dark&declutter=true" + "' class='rounded mx-auto d-block border border-primary'>";

            // Append table
            $("#directionsBody").append("<tr><td class='align-middle'><b>" + (i + 1) + "</b></td>" +
                "<td class='align-middle'><img src='" + data.route.legs[0].maneuvers[i].iconUrl + "'></td>" +
                "<td class='align-middle'>" + time + "</td>" +
                "<td class='align-middle'>" + distance + " Miles</td>" +
                "<td class='align-middle'>" + narrative + "</td>" +
                "<td class='align-middle align-center'>" + mapUrl + "</td></tr>");

            listOfLatAndLong += "," + data.route.legs[0].maneuvers[i].startPoint.lat + ",";
            listOfLatAndLong += data.route.legs[0].maneuvers[i].startPoint.lng;

            // Break if the origin and destionation are the same
            if (narrative == "The origin and destination are essentially the same place.") break;
        }
        $("#yourDirections").show();



        // Create Chart
        createChart(listOfLatAndLong.substr(1))



        // Show Map
        let wholeMapImage = "https://www.mapquestapi.com/staticmap/v5/map?start=" +
            data.route.locations[0].displayLatLng.lat + "," + data.route.locations[0].displayLatLng.lng + "&end=" +
            data.route.locations[1].displayLatLng.lat + "," + data.route.locations[1].displayLatLng.lng +
            "&size=400,300&type=dark&key=cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48";
        $("#mapImage").html('<img src="' + wholeMapImage + '" class="rounded mx-auto d-block border border-primary" alt="Responsive image"><br><br>');



        // Display Chart and map Div
        $("#elevationChartandMap").show();

        // Insert into database
        let resultObject = {
            results: []
        };
        let newObject = {};
        for (let i = 0; i < data.route.legs[0].maneuvers.length; i++) {
            newObject = {
                narr: data.route.legs[0].maneuvers[i].narrative,
                dist: data.route.legs[0].maneuvers[i].distance,
                time: getFormattedTime(data.route.legs[0].maneuvers[i].time)
                // mapT: data.route.legs[0].maneuvers[i].mapUrl
            }
            resultObject.results[i] = newObject;
        }

        let databaseLink = "http://gutkneet.aws.csi.miamioh.edu/final.php?method=setLookup&tolocation=" +
            toDest + "&fromlocation=" +
            fromDest + "&resultObject=" +
            JSON.stringify(resultObject) + "&numManeuvers=" +
            data.route.legs[0].maneuvers.length;

        b = $.ajax({
            url: databaseLink,
            method: "GET"
        }).done(function (data) {
            console.log("Inserted into database");
        }).fail(function (error) {
            console.log("failed to insert into database:" + error);
        });


    }).fail(function (error) {
        $("#yourDirections").hide();
        $("#elevationChartandMap").hide();
    });
}

function createChart(latLongString) {
    let chartURL = "http://open.mapquestapi.com/elevation/v1/chart?key=cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48&unit=f&shapeFormat=raw&width=400&height=300&latLngCollection=" + latLongString;

    $("#chartImage").html('<img src="' + chartURL + '" class="rounded mx-auto d-block border border-primary" alt="Responsive image">');

    $("#elevationChartandMap").show();

}

function getFormattedTime(seconds) {
    minutes = (seconds - (seconds % 60)) / 60; // Time in minutes
    if (minutes > 59) {
        return (((minutes - (minutes % 60)) / 60) + " hr " + (minutes % 60) + " min");
    } else {
        return (minutes + " min");
    }
}
