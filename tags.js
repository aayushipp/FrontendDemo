$(function () { // DOM ready


    $("#li_srvice_req li").on("click", function () {

        $("#tags").empty();
        $("#tags").append("<span id='tag1'>" + $(this).text() + "</span>");
        $("#div_srvc_request").hide();
        if ($(this).text() == "Furniture Repair") {
            $("#div_furni").show();
        } else if ($(this).text() == "Plumbing House") {
            $("#div_plumb").show();
        } else if ($(this).text() == "Electrical Issue") {
            $("#div_electric").show();
        } else if ($(this).text() == "Internet Issue") {
            $("#div_internet").show();
        } else if ($(this).text() == "DTH/Cable Issue") {
            $("#div_dth").show();
        } else if ($(this).text() == "Cooking Gas Issue") {
            $("#div_gas").show();
        } else if ($(this).text() == "Water Issue") {
            $("#div_water").show();
        } else if ($(this).text() == "House Keys") {
            $("#div_house").show();
        } else if ($(this).text() == "Electronic Aplliance Service") {
            $("#div_app").show();
        }


    });


    $("#li_furni_req li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_furni").hide();
        $("#div_prior").show();
    });


    $("#li_plumb li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_plumb").hide();
        $("#div_prior").show();
    });


    $("#li_electric li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_electric").hide();
        $("#div_prior").show();
    });



    $("#li_internet li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_internet").hide();
        $("#div_prior").show();
    });


    $("#li_dth li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_dth").hide();
        $("#div_prior").show();
    });


    $("#li_gas li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_gas").hide();
        $("#div_prior").show();
    });


    $("#li_water li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_water").hide();
        $("#div_prior").show();
    });


    $("#li_house li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_house").hide();
        $("#div_prior").show();
    });


    $("#li_app li").on("click", function () {
        $("#tags").append("<span id='tag2'>" + $(this).text() + "</span>");
        $("#div_app").hide();
        $("#div_prior").show();
    });


    $("#li_prior li").on("click", function () {
        $("#tags").append("<span id='tag3'>" + $(this).text() + "</span>");
        $("#div_prior").hide();
        $("#div_comment").show();
        //show comment textbox
    });


    $('#tags').on('click', 'span', function () {
        //$(this).text() 
        if (confirm("Are you sure to remove " + "?")) {

            if ($(this).attr('id') == "tag1") {

                $("#tags").empty();
                $("#div_srvc_request").show();
                $("#div_furni").hide();
                $("#div_plumb").hide();
                $("#div_electric").hide();
                $("#div_internet").hide();
                $("#div_dth").hide();
                $("#div_gas").hide();
                $("#div_water").hide();
                $("#div_house").hide();
                $("#div_app").hide();
                $("#div_prior").hide();
                $("#div_comment").hide();
                $('#submit_final').prop('disabled', true);
                $('#submit_final').css('background-color', 'lightgray');
                $("#tags").append("Enter Service Request...");

            } else if ($(this).attr('id') == "tag2") {


                var sapner = $("#tag1");

                $("#div_srvc_request").hide();
                $("#div_furni").hide();
                $("#div_plumb").hide();
                $("#div_electric").hide();
                $("#div_internet").hide();
                $("#div_dth").hide();
                $("#div_gas").hide();
                $("#div_water").hide();
                $("#div_house").hide();
                $("#div_app").hide();
                $("#div_prior").hide();
                $("#div_comment").hide();

                if (sapner.text() == "Furniture Repair") {
                    $("#div_furni").show();
                } else if (sapner.text() == "Plumbing House") {
                    $("#div_plumb").show();
                } else if (sapner.text() == "Electrical Issue") {
                    $("#div_electric").show();
                } else if (sapner.text() == "Internet Issue") {
                    $("#div_internet").show();
                } else if (sapner.text() == "DTH/Cable Issue") {
                    $("#div_dth").show();
                } else if (sapner.text() == "Cooking Gas Issue") {
                    $("#div_gas").show();
                } else if (sapner.text() == "Water Issue") {
                    $("#div_water").show();
                } else if (sapner.text() == "House Keys") {
                    $("#div_house").show();
                } else if (sapner.text() == "Electronic Aplliance Service") {
                    $("#div_app").show();
                }

                $(this).remove();
                $("#tag3").remove();
                $("#tag4").remove();
                $('#submit_final').prop('disabled', true);
                $('#submit_final').css('background-color', 'lightgray');

            } else if ($(this).attr('id') == "tag3") {

                $("#div_srvc_request").hide();
                $("#div_furni").hide();
                $("#div_plumb").hide();
                $("#div_electric").hide();
                $("#div_internet").hide();
                $("#div_dth").hide();
                $("#div_gas").hide();
                $("#div_water").hide();
                $("#div_house").hide();
                $("#div_app").hide();
                $("#div_prior").show();
                $("#div_comment").hide();
                $(this).remove();
                $("#tag4").remove();
                $('#submit_final').prop('disabled', true);
                $('#submit_final').css('background-color', 'lightgray');

            } else if ($(this).attr('id') == "tag4") {

                $("#div_srvc_request").hide();
                $("#div_furni").hide();
                $("#div_plumb").hide();
                $("#div_electric").hide();
                $("#div_internet").hide();
                $("#div_dth").hide();
                $("#div_gas").hide();
                $("#div_water").hide();
                $("#div_house").hide();
                $("#div_app").hide();
                $("#div_prior").hide();
                $("#div_comment").show();
                $(this).remove();
                $('#submit_final').prop('disabled', true);
                $('#submit_final').css('background-color', 'lightgray');
            }
        }
    });


});


function submitcomment() {
    if ($("#txt_comment").val() != "") {
        $("#tags").append("<span id='tag4'>" + $("#txt_comment").val() + "</span>");
        $("#div_comment").hide();
        $("#txt_comment").val("")
        $('#submit_final').prop('disabled', false);
        $('#submit_final').css('background-color', 'darkorange');
    } else {
        alert("Please enter a comment!!");
    }
}


function showfinal() {
    var ser_req = $("#tag1").text();
    var ser_req_type = $("#tag2").text();
    var ser_req_pri = $("#tag3").text();
    var ser_req_comm = $("#tag4").text();
    alert('Your Final Input :\n' + 'Request : ' + ser_req + '\nRequest Type : ' + ser_req_type + '\nRequest Priority : ' + ser_req_pri + '\nComments : ' + ser_req_comm);
}