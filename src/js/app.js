$(document).ready(function() {

    $(".__comment-button").click(function(e) {
        if($(".__comment-input").val()!="") {
            var message = $(".__comment-input").val();
            $("<div class='__comment'>" +"<div class='__name'> Лилия Семеновна " + "</div>" + "<div class='__date'>13 октября 2011" + "</div>" + "<div class='__comment-body'>" + message + "</div>" + "</div>").appendTo(".comments");
            $(".__comment-input").val('');

        }
        else{
            alert('Введите сообщение!   ');
        }
        return false;
        e.preventDefault();
    });

    $('.__comment-input').keydown(function(e){
        if ((e.ctrlKey && e.keyCode==13)){
            var message = $(".__comment-input").val();
            $("<div class='__comment'>" +"<div class='__name'> Лилия Семеновна " + "</div>" + "<div class='__date'>13 октября 2011" + "</div>" + "<div class='__comment-body'>" + message + "</div>" + "</div>").appendTo(".comments");
            $(".__comment-input").val('');
        }

    });
});


