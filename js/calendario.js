document.addEventListener('DOMContentLoaded',function(){
    var calendarEl= document.getElementById('calendario');

    var calendar= new FullCaledar.Calendar(calendarEl,{
        plugins:['dayGrid'],
        locale: 'es',
        events: [
            {
                title: 'Jvascript',
                start:'2023-06-15',
                end:'2023-0-25'

            },
            {
                title: 'html',
                start:'2023-06-02'
            }
        ]
    });
    calendar.render();
});