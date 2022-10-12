if (document.readyState === 'loading')
{
    document.addEventListener('DOMContentLoaded', ready)
} else
{
    ready()
};


function ready()
{
    


    

    // console.log("serious")
    let rock01 = document.getElementById("waller-01");
    let paper01 = document.getElementById("staller-01");
    let scissors01 = document.getElementById("scissors-01");

    var sqr01 = document.getElementById("cell01").value;
    console.log("play.js")
    console.log(sqr01)
    rock01.addEventListener("click", adjustrock)
    function adjustrock(e)
    {
        sqr01 = 1
        console.log(sqr01)
    };

    paper01.addEventListener("click", adjustPaper)
    function adjustPaper(e)
    {
        sqr01 = 2
        console.log(sqr01)
    };

    scissors01.addEventListener("click", adjustscissors)
    function adjustscissors(e)
    {
        sqr01 = 3
        console.log(sqr01)
    };

    let sqr02 = document.getElementById("cell02").value;
    let rock02 = document.getElementById("rock02");
    let paper02 = document.getElementById("paper02");
    let scissors02 = document.getElementById("scissors02");

    rock02.addEventListener("click", adjustrock2)
    function adjustrock2(e)
    {
        sqr02 = 1
        console.log(sqr02)
    };

    paper02.addEventListener("click", adjustPaper2)
    function adjustPaper2(e)
    {
        sqr02 = 2
        console.log(sqr02)
    };

    scissors02.addEventListener("click", adjustscissors2)
    function adjustscissors2(e)
    {
        sqr02 = 3
        //console.log(sqr02)
    };


    

    
















}