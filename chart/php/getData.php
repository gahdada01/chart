<?php

	include "connectDb.php";

	$date = $_GET['date'];

	$sql = "SELECT * FROM count WHERE DATE(timestamp) = $date;";
	$result = $conn->query($sql);
	$emotions = [];

	if ($result->num_rows > 0) {
	    // output data of each row
	    while($row = $result->fetch_assoc()) {
	    	$emotion = array(
	    		"id" => $row['id'],
			  	"emotion" => $row['emotion_id'],
			  	"timestamp" => $row['timestamp']
			  );
	    	$emotions[] = $emotion;
    	}
	    
    }
	echo json_encode($emotions);

	$conn->close();
?>