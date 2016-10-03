$(function() {
    $.getJSON("topspots.json", function(data) {

        $(data.topspots).each(function(i, topspot) {
        	var myrow = '<tr><td>' + topspot.name + '</td><td>' +
                topspot.description + '</td> <td><a href=http://www.google.com/maps?q=' + topspot.location[0] +
                ',' + topspot.location[1] +'><button type="button" class="btn btn-primary">Click to open in Google Maps</button></a></td></tr>';
            $('#mytopspot').append(myrow);
        })

    });

});

