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
    });



    // overall win
    
    $("#zPlayBtn").on("click", overallWin);


    


})

async function overallWin()
{
    
    let reults = await $(".result-single");
   // console.log(reults);
    let mrarr = []

    for (const result of reults)
    {
        let zvalue = await result.value;
        mrarr.push(zvalue);
    }
    console.log(mrarr);
    let thyindex = mrarr.includes("Player 2");
    console.log(thyindex);

    let player1Count = 0;
    let player2Count = 0;
    let playa01 = document.getElementById('playa01').value;
    let playa02 = $("#playa02").val();
    console.log(playa01)
    console.log(playa02)

    mrarr.forEach((el) =>
    {

        if (el === "Player 1")
        {
            player1Count++
        } else if (playa01 !== "" && playa01 === el)
        {
            player1Count++
        }
        else if (el === "Player 2")
        {
            player2Count++
        }
        else if (playa02 !== "" && playa02 === el)
        {
            player2Count++
        }

       // el == "Player 1" || `${playa01}` ? player1Count++ : false;
        //(el == playa02 || "Player 2") ? player2Count++ : false;
    });
    console.log(player1Count)
    console.log(player2Count)
    

    player1Count > player2Count ? $("#overallWinner").text(`${playa01}` || "Player 1") : false;
    // if (player1Count > player2Count)
    // {
    //     let vale = `${playa01}` || "Player 1";

    //     $("#overallWinner").text(vale)
    // }
    
    player2Count > player1Count ? $("#overallWinner").text(`${playa02}` || "Player 2") : false;
    player2Count == player1Count ? $("#overallWinner").text("Draw") : false;
    // if (player2Count > player1Count)
    // {
    //     let vale = `${playa02}` || "Player 2";

    //     $("#overallWinner").text(vale)
    // }
    



}

// resoarray.map((item, index) =>
// {
//     let newarr = [];
//     // console.log(newarr)
//     let newval = item.value;

//     newarr.push(newval)

//     // newarr = [newval];
//     // console.log(newarr)
//     //return newarr
// })