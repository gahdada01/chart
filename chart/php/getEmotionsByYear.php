<?php
	
	include "connectDb.php";

	
	$year = $_GET['year'];

	$now = date("Y-m-d");
	
	$sql = "SELECT * FROM count WHERE YEAR(timestamp) = $year;"; // ok search YEAR

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