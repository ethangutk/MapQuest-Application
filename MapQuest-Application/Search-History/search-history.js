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
})


// GET FROM DATABASE
// 

function getHistory() {
    let day = ("0" + $("#dateDay").val()).substr($("#dateDay").val().length - 1);
    
    
    // Update to new URL
    let requestURL = "http://gutkneet.aws.csi.miamioh.edu/final.php?method=getLookup&date=" + 
        $("#dateYear").val() + "-" + 
        $("#dateMonth").val() + "-" + day;

    // Call local database
    a=$.ajax({
        url: requestURL,
        method: "GET"
    }).done(function(data) {
        let loopIteration = data.result.length;
        if (loopIteration > $("#maxLines").val()) {
            loopIteration = $("#maxLines").val();
        }
        
        console.log(JSON.stringify(data));
        $("#historyBody").html("");
        
        for (i = 0; i < loopIteration; i++) {
        $("#historyBody").append("<tr><td class='align-middle'>" + data.result[i].dateandtime + "</td>" +
            "<td class='align-middle'>" + data.result[i].FROMlocation + "</td>" +
            "<td class='align-middle'>" + data.result[i].TOlocation + "</td>" +
            "<td class='align-middle'>" + data.result[i].numManeuvers + "</td>" +
            "<td class='align-middle'>" + "More Info" + "</td></tr>");
        }
        
        $("#historyResults").show();
        
        
    }).fail(function (error) {
        $("#historyResults").hide()
        console.log("Failed");
    });
}

function getDetails(jsonObject) {
    
}
