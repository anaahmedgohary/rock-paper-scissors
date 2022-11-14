$(document).ready(function ()
{
    //$(".modal").hide();
    $("#about-rock").hide();
    $("#about-paper").hide();
    $("#about-scissors").hide();

    $(".modal").on("click", hiding);
    $(document).keyup(function (e) { 
        if (e.key === "Escape")
        {
            $(".modal").hide();
        }
    });

    function hiding(e)
    {
        $(".modal").hide();
    
    };
    $("#rock").on("click", (e) =>
    {
        $("#about-rock").show();
    });

    $("#paper").on("click", (e) =>
    {
        $("#about-paper").show();
    })


    //$("#scissors").on("click", showing);
    $("#scissors").on("click", (e) =>
    {
        $("#about-scissors").show();
    });
    /* function keyPress (e) {
    if(e.key === "Escape") {
        // write your logic here.
    }
} */



























});

