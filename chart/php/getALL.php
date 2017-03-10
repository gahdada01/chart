<?php

	include "connectDb.php";


	$sql = "SELECT * FROM count;";
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