<?php 
class final_rest
{



/**
 * @api  /api/v1/setLookup/
 * @apiName setLookup
 * @apiDescription Add remote temperature measurement
 *
 * @apiParam {string} location
 * @apiParam {String} sensor
 * @apiParam {double} value
 *
 * @apiSuccess {Integer} status
 * @apiSuccess {string} message
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *              "status":0,
 *              "message": ""
 *     }
 *
 * @apiError Invalid data types
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 OK
 *     {
 *              "status":1,
 *              "message":"Error Message"
 *     }
 *
 */
	public static function setLookup ($tolocation, $resultObject, $numManeuvers, $fromlocation)

	{
		{
			try {
				EXEC_SQL("insert into lookup (TOlocation, resultObject, numManeuvers, dateandtime, FROMlocation) values (?,?,?,CURRENT_TIMESTAMP, ?)",$tolocation, $resultObject, $numManeuvers, $fromlocation);
				$retData["status"]=0;
				$retData["message"]="The insert of the query was accepted into the database.";
			}
			catch  (Exception $e) {
				$retData["status"]=1;
				$retData["message"]=$e->getMessage();
			}
		}

		return json_encode ($retData);
	}
	public static function getLookup ($date)

	{
		{
			try {
				$retData["result"] = GET_SQL("select * from lookup where dateandtime like ? order by dateandtime", $date . "%");
				$retData["status"] = 0;
				$retData["message"] = "selection of all values from date: '$date' was accepted";
			}
			catch  (Exception $e) {
				$retData["status"]=1;
				$retData["message"]=$e->getMessage();
			}
		}

		return json_encode ($retData);
	}
}

