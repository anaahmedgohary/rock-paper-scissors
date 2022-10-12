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



});