// if (document.readyState === 'loading')
// {
//     document.addEventListener('DOMContentLoaded', ready)
// } else
// {
//     ready()
// };


// function ready()
// {


$(document).ready(function ()
{
    
    //let hider = this.hide();
    
    $('#hide-row-1').on("click", (e) =>
    {
        $('#board-row01').toggle(1000);
    });

    $('#hide-row-2').on("click", (e) =>
    {
        $('#board-row02').toggle(1000);
    })

    $("#playa01").on("change", (e) =>
    {
        $("#playerOne").text(`${$("#playa01").val()}'s column`);
        $('#hide-row-1').text(`Hide/Show ${$("#playa01").val().toUpperCase()}'s column`);
    })
    
    $("#playa02").on("change", (e) =>
    {
        $("#playerTwo").text(`${$("#playa02").val()}'s column`);
        $('#hide-row-2').text(`Hide/Show ${$("#playa02").val().toUpperCase()}'s column`);
    })
    

});