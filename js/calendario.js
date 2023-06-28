document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendario");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid"],
    locale: "es",
    events: [
      {
        title: "CARPI-DESCUENTOS",
        start: "2023-06-07",
        end: "2023-06-10",
      },
      {
        title: "Curso HTML",
        start: "2023-06-03",
        end: "2023-06-10",
      },
      {
        title: "Curso Javascript",
        start: "2023-06-022",
        end: "2023-07-05",
      },
    ],
  });

  calendar.render();
});
