$(function() {
    $("#datepicker").datepicker();
});

function displaySchedule() {
    var selectedDate = $("#datepicker").val();
    var selectedTime = $("#timepicker").val();

    if (selectedDate && selectedTime) {
        var scheduleInfo = "Lịch Trình cho ngày " + selectedDate + " vào lúc " + selectedTime;
        $("#schedule").text(scheduleInfo);
    } else {
        $("#schedule").text("Vui lòng chọn ngày và thời gian.");
    }
}
