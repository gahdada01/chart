var today = $('#today');
var month = $('#month');
var year = $('#year');
var date = $('#date');

var happy = 0, happyVar = 0, surprised = 0, sad = 0, sadVar = 0, surprisedVar = 0, angry = 0, angryVar = 0, neutral = 0, neutralVar = 0, totalPeople = 0, totalPeopleVar = 0;

var m = ["Januray", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var j = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

var now = new Date();
var nowMonth = now.getMonth() + 1;
var nowDate = now.getDate();
var nowYear = now.getFullYear();

if(nowMonth < 10 &&  nowMonth > 0) {
    var newNowMonth = "0" + nowMonth;
} else {
    var newNowMonth = nowMonth;
}

if(nowDate < 10 && nowDate > 0) {
    var newNowDate = "0" + nowDate;
} else {
    var newNowDate = nowDate;
}

var NowDate = m[nowMonth - 1] + " " + newNowDate + ", " + now.getFullYear();

var thisDate = now.getFullYear() + "-" + newNowMonth + "-" + newNowDate;

var thisnow , thisnowMonth, thisnowDate;

var dateSelect , dateSelectVar, startRange = thisDate, endRange = thisDate;



function dateRangeChart() {

    var jSnow = new Date(startRange);
    var jSnowMonth = jSnow.getMonth() + 1;
    var jSnowDate = jSnow.getDate();

    var jEnow = new Date(endRange);
    var jEnowMonth = jEnow.getMonth() + 1;
    var jEnowDate = jEnow.getDate();

    if(jSnowMonth < 10 &&  jSnowMonth > 0) {
        var jSnewNowMonth = "0" + jSnowMonth;
    } else {
        var jSnewNowMonth = jSnowMonth;
    }

    if(jSnowDate < 10 && jSnowDate > 0) {
        var jSnewNowDate = "0" + jSnowDate;
    } else {
        var jSnewNowDate = jSnowDate;
    }

    var sThisNowDate = jSnow.getFullYear() + "/" + jSnewNowMonth + "/" + jSnewNowDate;

    
    if(jEnowMonth < 10 &&  jEnowMonth > 0) {
        var jEnewNowMonth = "0" + jEnowMonth;
    } else {
        var jEnewNowMonth = jEnowMonth;
    }

    if(jEnowDate < 10 && jEnowDate > 0) {
        var jEnewNowDate = "0" + jEnowDate;
    } else {
        var jEnewNowDate = jEnowDate;
    }

    var eThisNowDate = jEnow.getFullYear() + "/" + jEnewNowMonth + "/" + jEnewNowDate;

    if (startRange == endRange) {

        $("#chart-container").insertFusionCharts({
            type: "column2d",
            width: "70%",
            height: "100%",
            dataFormat: "json",
            dataSource: {
                "chart": {
                    "subCaption": ""+sThisNowDate,
                    "exportEnabled" :"1",
                    "numberPrefix": "",
                    "theme": "fint",
                    "outCnvBaseFontSize": "12",
                    "rotateValues": "0",
                    "valueFontColor": "#9faaaf",
                    "baseFont": "Montserrat",
                    "labelFont": "Arial",
                    "labelFontColor": "#9faaaf",
                    "captionFontSize": "16",
                    "yAxisNameFontSize": "15",
                    "rotateYAxisName": "0",
                    "xAxisNameFontSize": "15",
                    "baseFontColor": "#7b8082"

                },

                "data": [{
                    "label": "喜び", //HAPPY
                        "value": ""+happyVar+""
                }, {
                    "label": "悲しみ",  //SAD
                        "value": ""+sadVar+""
                }, {
                    "label": "怒り", //ANGRY
                        "value": ""+angryVar+""
                }, {
                    "label": "驚き", //SURPRISED
                        "value": ""+surprisedVar+""
                }, {
                    "label": "平常", //NEUTRAL
                        "value": ""+neutralVar+""
                }]
            }

        });

    }
    
    else {

        $("#chart-container").insertFusionCharts({
            type: "column2d",
            width: "70%",
            height: "100%",
            dataFormat: "json",
            dataSource: {
                "chart": {
                    "subCaption": ""+sThisNowDate+" ~ " +eThisNowDate,
                    "exportEnabled" :"1",
                    "numberPrefix": "",
                    "theme": "fint",
                    "outCnvBaseFontSize": "12",
                    "rotateValues": "0",
                    "valueFontColor": "#9faaaf",
                    "baseFont": "Montserrat",
                    "labelFont": "Arial",
                    "labelFontColor": "#9faaaf",
                    "captionFontSize": "16",
                    "yAxisNameFontSize": "15",
                    "rotateYAxisName": "0",
                    "xAxisNameFontSize": "15",
                    "baseFontColor": "#7b8082"

                },

                "data": [{
                    "label": "喜び", //HAPPY
                        "value": ""+happyVar+""
                }, {
                    "label": "悲しみ",  //SAD
                        "value": ""+sadVar+""
                }, {
                    "label": "怒り", //ANGRY
                        "value": ""+angryVar+""
                }, {
                    "label": "驚き", //SURPRISED
                        "value": ""+surprisedVar+""
                }, {
                    "label": "平常", //NEUTRAL
                        "value": ""+neutralVar+""
                }]
            }

        });

    }

}

function dateRange () {

    getDateRange ( startRange, endRange, function(data) {

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

        $('.total').append('<div id="total"> ユーザー数 : <span id="totalSpan">'+totalPeopleVar+'</span></div>');

        dateRangeChart();           
        });             
}









