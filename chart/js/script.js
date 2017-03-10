$(document).ready(function () {

    dateRange();
    
    range();

});

function range() {

	var startR, endR;

    $('.startRange').val(thisDate);
    $('.endRange').val(thisDate);

    $('.startRange').datepicker({
        dateFormat: 'yy-mm-dd',
        maxDate: '0'
    });

    $('.endRange').datepicker({
        dateFormat: 'yy-mm-dd',
        maxDate: '0'
    });

    $('.displayRange').on("click", function() { 

    	$('#total').remove();

    	startR = $('.startRange').val();
    	endR =  $('.endRange').val();

    	startRange = startR;
    	endRange = endR;

    	if ( startRange > endRange) {

    		$('.errorDisplay').remove();
    		$('.fusioncharts-container').remove();
    		$('.total').append('<div class="errorDisplay"> エラー </div>'); //Error
    		$('.errorSign').remove();

    		$('#chart-container').append('<div class="errorSign"> \
    			<i class="fa fa-exclamation-triangle" aria-hidden="true"></i> \
    			<div class="errorDisplaySign"> エラー <div> \
    			</div>');

    		$('#total').remove();
    		$('.startRange').addClass('error');
    		$('.startRange').effect("shake", { times:3 , direction:'up' , distance:1 }, 300);
    		$('.endRange').addClass('error');
    		$('.endRange').effect("shake", { times:3 , direction:'up' , distance:1 }, 300);
    		
    	}

    	else {

    		$('.startRange').removeClass('error');
    		$('.endRange').removeClass('error');
    		$('.errorDisplay').remove();
    		$('.errorSign').remove();

    		getDateRange (startRange, endRange, function(data) {

				emotionStat = JSON.parse(data);

				$.each( emotionStat, function ( index, emotion )  {

				    if ( emotion.emotion == 1 ) {
				        happy ++;
				        totalPeople ++;
				   }

				   else if ( emotion.emotion == 2 ) {
				        sad ++;
				        totalPeople ++;
				   }

				   else if ( emotion.emotion == 3 ) {
				        angry ++;
				        totalPeople ++;
				   }

				   else if ( emotion.emotion == 4 ) {
				        surprised ++;
				        totalPeople ++;
				   }

				   else if ( emotion.emotion == 5 ) {
				        neutral ++;
				        totalPeople ++;
				   }

				});
				happyVar = happy;
				sadVar = sad;
				angryVar = angry;
				surprisedVar = surprised;
				neutralVar = neutral;
				totalPeopleVar = totalPeople;

				happy = 0;
				sad = 0;
				angry = 0;
				surprised = 0;
				neutral = 0;
				totalPeople = 0;

				$('.total').append('<div id="total"> ユーザー数 : <span id="totalSpan">'+totalPeopleVar+'</span></div>'); //People Detected

				dateRangeChart();			
			}); 

    	}	  			
    });
}

function closeModal () {

	$('.fa-times').on("click", function() {
    	$('.dateWrapper').remove();
		$('.dateWrapper').removeClass('disableclick');
		$('.datePickerContainer').removeClass('modal');	
    });
}

function getDateRange(start, end, callback) {

	$('.chartContainer').append('<div class="loading"><img src="css/ring-alt.gif"></div>');
	$('.total').append('<div id="computing"> ローディング <img id="loadingCompute" src="css/ellipsis.gif"></div>');

	$.get( "php/getDateRange.php?start=" +JSON.stringify(start)+ "&end=" +JSON.stringify(end), function( data, textStatus, xhr ) {
		callback(data);
		$('#computing').remove();
		$('.loading').remove();
	});
}














