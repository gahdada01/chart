<?php
	
	include "connectDb.php";

	
	$start = $_GET['start'];
	$end = $_GET['end'];

	$now = date("Y-m-d");

	$sql = "SELECT * FROM count WHERE DATE(timestamp) BETWEEN $start AND $end;"; //date Range between start date and end date

	$result = $conn->query($sql);
	$getTotalEmotions = [];

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	$emotion = array(
	    		"id" => $row['id'],
	    		"emotion" => $row['emotion_id'],
			  	"date" => $row['timestamp']
			  );
	    	$getTotalEmotions[] = $emotion;
    	}
	    
    }
	echo json_encode($getTotalEmotions);

	$conn->close();
?>