
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        backgroundColor: '#ffffff9f',
        title:{
            text: "Rick and Morty"
        },
        axisX: {
            title:"Episodios",
            valueFormatString: "#"
        },
        axisY:{
            title: "Rating",
            valueFormatString: "#"
        },
        data: [{
            type: "scatter",
            toolTipContent: "<span style=\"color:#4F81BC \"><b>{Cap}</b></span><br/><b> Año:</b> ({Año})<br/><b> Rating:</b></span> {y}",
            name: "Season1",
            showInLegend: true,
            dataPoints: [
                { x: 1, y: 8.0, Cap: "Pilot", Año: 2013 },
                { x: 2, y: 8.7, Cap: "Lawnmower Dog", Año: 2013 },
                { x: 3, y: 8.4, Cap: "Anatomy Park", Año: 2013 },
                { x: 4, y: 8.7, Cap: "M.Night Shaym-Aliens!", Año: 2014 },
                { x: 5, y: 9.0, Cap: "Meesseeks and Destroy", Año: 2014 },
                { x: 6, y: 9.1, Cap: "Rick Potion", Año: "2014" },
                { x: 7, y: 8.0, Cap: "Raising Gazorpazorp", Año: 2014 },
                { x: 8, y: 8.8, Cap: "Rixty Minutes", Año: 2014 },
                { x: 9, y: 8.5, Cap: "Something Ricked This Way Comes", Año: 2014 },
                { x: 10, y: 9.4, Cap: "Close Rick-counters of the Rick Kind", Año: 2014 },
                { x: 11, y: 8.5, Cap: "Ricksy Business", Año: 2014 }
            ]
        },
        {
            type: "scatter",
            name: "Season2",
            showInLegend: true, 
            toolTipContent: "<span style=\"color:#C0504E \"><b>{Cap}</b></span><br/><b> Año:</b> ({Año})<br/><b> Rating:</b></span> {y} ",
            dataPoints: [
                { x: 12, y: 8.9, Cap: "A Rickle in Time", Año: 2015 },
                { x: 13, y: 8.9, Cap: "Mortynight Run", Año: 2015 },
                { x: 14, y: 8.6, Cap: "Auto Erotic Assimilation", Año: 2015 },
                { x: 15, y: 9.6, Cap: "Total Rickall", Año: 2015 },
                { x: 16, y: 8.3, Cap: "Get Schwifty", Año: 2015 },
                { x: 17, y: 9.3, Cap: "The Ricks Must Be Crazy", Año: 2015 },
                { x: 18, y: 8.5, Cap: "Big Trouble in Little Sanchez", Año: 2015 },
                { x: 19, y: 7.7, Cap: "Interdimensional Cable 2: Tempting Fate", Año: 2015 },
                { x: 20, y: 8.6, Cap: "Look Who's Purging Now", Año: 2015 },
                { x: 21, y: 9.4, Cap: "The Wedding Squanchers", Año: 2015 }
            ]
        },
        {
            type: "scatter",
            name: "Season3",
            showInLegend: true, 
            toolTipContent: "<span style=\"color:#02AC66 \"><b>{Cap}</b></span><br/><b> Año:</b> ({Año})<br/><b> Rating:</b></span> {y} ",
            dataPoints: [
                { x: 22, y: 9.6, Cap: "The Rickshank Rickdemption", Año: 2017 },
                { x: 23, y: 8.2, Cap: "Rickmancing the Stone", Año: 2017 },
                { x: 24, y: 9.3, Cap: "Pickle Rick", Año: 2017 },
                { x: 25, y: 8.2, Cap: "Vindicators 3:The Return of Worldender", Año: 2017 },
                { x: 26, y: 8.5, Cap: "The Whirly Dirly Conspiracy", Año: 2017 },
                { x: 27, y: 8.9, Cap: "Rest and Ricklaxation", Año: 2017 },
                { x: 28, y: 9.8, Cap: "The Ricklantis Mixup", Año: 2017 },
                { x: 29, y: 8.9, Cap: "Morty's Mind Blowers", Año: 2017 },
                { x: 30, y: 8.0, Cap: "The ABC's of Beth", Año: 2017 },
                { x: 31, y: 8.2, Cap: "The Rickchurian Mortydate", Año: 2017 }
            ]
        },
        {
            type: "scatter",
            name: "Season4",
            showInLegend: true, 
            toolTipContent: "<span style=\"color:#5DC1B9 \"><b>{Cap}</b></span><br/><b> Año:</b> ({Año})<br/><b> Rating:</b></span> {y} ",
            dataPoints: [
                { x: 32, y: 9.0, Cap: "Edge of Tomorty: Rick Die Rickpeat", Año: 2019 },
                { x: 33, y: 8.3, Cap: "The Old Man and the Seat", Año: 2019 },
                { x: 34, y: 8.4, Cap: "One Crew over the Crewcoo's Morty", Año: 2019 },
                { x: 35, y: 7.4, Cap: "Claw and Hoarder: Special Ricktim's Morty", Año: 2019 },
                { x: 36, y: 8.9, Cap: "Rattlestar Ricklactica", Año: 2019 },
                { x: 37, y: 8.1, Cap: "Never Ricking Morty", Año: 2020 },
                { x: 38, y: 8.1, Cap: "Promortyus", Año: 2020 },
                { x: 39, y: 9.5, Cap: "The Vat of Acid Episode", Año: 2020 },
                { x: 40, y: 7.8, Cap: "Childrick of Mort", Año: 2020 },
                { x: 41, y: 9.2, Cap: "Star Mort Rickturn of the Jerri", Año: 2020 }
            ]
        },
        {
            type: "scatter",
            name: "Season5",
            showInLegend: true, 
            toolTipContent: "<span style=\"color:#C0504E \"><b>{Cap}</b></span><br/><b> Año:</b> ({Año}) <br/><b> Rating:</b></span> {y} ",
            dataPoints: [
                { x: 42, y: 9.1, Cap: "Mort Dinner Rick Andre", Año: 2021 },
                { x: 43, y: 8.8, Cap: "Mortyplicity", Año: 2021 },
                { x: 44, y: 7.8, Cap: "A Rickconvenient Mort", Año: 2021 },
                { x: 45, y: 5.6, Cap: "Rickdependence Spray", Año: 2021 },
                { x: 46, y: 7.0, Cap: "Amortycan Grickfitti", Año: 2021 },
                { x: 47, y: 7.2, Cap: "Rick & Morty's Thanksploitation Spectacular", Año: 2021 },
                { x: 48, y: 6.4, Cap: "Gotron Jerrysis Rickvangelion", Año: 2021 },
                { x: 49, y: 8.4, Cap: "Rickternal", Año: 2021 },
                { x: 50, y: 8.5, Cap: "Forgetting Sarick Mortshall", Año: 2021 },
                { x: 51, y: 9.5, Cap: "Rickmurai Jack", Año: 2021 }
            ]
        }]
    });
    chart.render();
};
