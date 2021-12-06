// Setup the request URL
// Example of fromDest:  "Clarendon Blvd,Arlington,VA"
// Example of toDest:  "Glebe Rd,Arlington,VA"
const APIKey = "cAzBiEf9vHr1SlAlOlnNei9kXnYK3a48";
var fromDest = "";
var toDest = "";
var URL = "";
var listOfLatAndLong = "";

$(document).ready(function() {
    $("#historyResults").hide();
    $("#entryResults").hide();
    $("#noresults").hide();
})


// GET FROM DATABASE
// 

function getHistory() {
    let day = ("0" + $("#dateDay").val()).substr($("#dateDay").val().length - 1);
    
    
    // Update to new URL
    let requestURL = "http://gutkneet.aws.csi.miamioh.edu/final.php?method=getLookup&date=" + 
        $("#dateYear").val() + "-" + 
        $("#dateMonth").val() + "-" + day;
    
    // Hide the divs
    $("#entryResults").hide();
    $("#historyResults").hide();
    $("#noresults").hide();
    
    // Call local database
    a=$.ajax({
        url: requestURL,
        method: "GET"
    }).done(function(data) {
        let loopIteration = data.result.length;
        if (loopIteration > $("#maxLines").val()) {
            loopIteration = $("#maxLines").val();
        }

        $("#historyBody").html("");
        
        for (i = 0; i < loopIteration; i++) {
        $("#historyBody").append("<tr><td class='align-middle'>" + data.result[i].dateandtime + "</td>" +
            "<td class='align-middle'>" + data.result[i].FROMlocation + "</td>" +
            "<td class='align-middle'>" + data.result[i].TOlocation + "</td>" +
            "<td class='align-middle'>" + data.result[i].numManeuvers + "</td>" +
            "<td class='align-middle'><button type='button' class='btn btn-lg btn-primary'" +
            " onclick='getDetails(" + data.result[i].resultObject + ")'>More Info</button></td></tr>");
        }                           // This code above will remove all quotes from a string
        // IF there are any results print them.
        if (loopIteration > 0) {
            $("#historyResults").show();
        } else {
            $("#noresults").show();
        }
        
        
    }).fail(function (error) {
        $("#historyResults").hide()
        console.log("Failed");
    });
}

function getDetails(obj) {
    $("#detailsBody").html("");
    $("#entryResults").hide();

    for (i = 0; i < obj.results.length; i++) {
        let narr = obj.results[i].narr;
        let dist = obj.results[i].dist;
        let time = obj.results[i].time;
        
        $("#detailsBody").append("<tr><td class='align-middle'>" + (i + 1) + "</td>" +
            "<td class='align-middle'>" + narr + "</td>" +
            "<td class='align-middle'>" + dist + " miles </td>" +
            "<td class='align-middle'>" + time + "</td></tr>");
    }
    
    if (obj.results.length > 0) {
        $("#entryResults").show();
    }
}





