function displayNewMessage(evt) {

    $("#form").empty();
    $("#form").html("Thank you! We will send you more information via email shortly.")

}
$('#form').on('submit', displayNewMessage);