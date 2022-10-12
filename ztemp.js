



let relSqr;
for (let i = 0; i < r01Cols.length; i++)
{
    let list = r01Cols[i];
    if (list == r01Cols[0])
    {
        relSqr = sqr01

    }


    list.querySelector(".waller").addEventListener("click", (e) =>
    {
        sqr01 = 1;
        console.log("waller")
    });
    list.querySelector(".staller").addEventListener("click", (e) =>
    {
        sqr01 = 2;
        console.log("staller")
    });
    list.querySelector(".scissors").addEventListener("click", (e) =>
    {
        sqr01 = 3;
        console.log("scissors")
    });
};

//////////////////////////////////

r02Cols.forEach(element =>
{

    element.querySelector(".waller").addEventListener("click", (e) =>
    {
        sqr01 = 1;
    });
    element.querySelector(".staller").addEventListener("click", (e) =>
    {
        sqr01 = 2;
    });
    element.querySelector(".scissors").addEventListener("click", (e) =>
    {
        sqr01 = 3;
    });
});






if (element == r02Cols[0])
{
    tcell02 = relSqr;
    console.log("111scissors");
} else if (element == r02Cols[1])
{
    tcell04 = relSqr;
    console.log("222scissors");
} else if (element == r02Cols[2])
{
    tcell06 = relSqr;
    console.log("333scissors");
} else if (element == r02Cols[3])
{
    tcell08 = relSqr;
    console.log("444scissors");
} 









 document.getElementById('tcell01').textContent
 document.getElementById('tcell02').textContent
 document.getElementById('tcell03').textContent
 document.getElementById('tcell04').textContent
 document.getElementById('tcell05').textContent
document.getElementById('tcell06').textContent
 document.getElementById('tcell07').textContent
 document.getElementById('tcell08').textContent




if (element === r02Cols[0])
{
    tcell02 = document.getElementById('tcell02').textContent = 3;
    console.log("111scissors");
} else if (element === r02Cols[1])
{
    document.getElementById('tcell04').textContent = 3;
    console.log("222scissors");
} else if (element === r02Cols[2])
{
    document.getElementById('tcell06').textContent = 3;
    console.log("333scissors");
} else if (element === r02Cols[3])
{
    document.getElementById('tcell08').textContent = 3;
    console.log(tcell08);
} 









let playBtn = document.getElementById("zPlayBtn");
playBtn.addEventListener("click", results)

function results(e)
{

    if (sqr01 === 1 && sqr02 === 1)
    {
        console.log("DRAW");
        document.getElementById("whoWon").textContent = "";
    } else if (sqr01 === 1 && sqr02 === 2)
    {
        console.log("sqr02 Wins !!");
        document.getElementById("whoWon").textContent = "sqr02 Wins !!";
    } else if (sqr01 === 1 && sqr02 === 3)
    {
        console.log("sqr01 Wins");
        document.getElementById("whoWon").textContent = "";
    }
    else if (sqr01 === 2 && sqr02 === 1)
    {
        console.log("sqr01 Wins");
        document.getElementById("whoWon").textContent = "";
    }
    else if (sqr01 === 2 && sqr02 === 2)
    {
        console.log("DRAW");
        document.getElementById("whoWon").textContent = "";
    }
    else if (sqr01 === 2 && sqr02 === 3)
    {
        console.log("sqr02 Wins !!");
        document.getElementById("whoWon").textContent = "";
    }
    else if (sqr01 === 3 && sqr02 === 1)
    {
        console.log("sqr02 Wins !!");
        document.getElementById("whoWon").textContent = "";
    }
    else if (sqr01 === 3 && sqr02 === 2)
    {
        console.log("sqr01 Wins");
        document.getElementById("whoWon").textContent = "";
    }
    else if (sqr01 === 3 && sqr02 === 3)
    {
        console.log("DRAW");
        document.getElementById("whoWon").textContent = "";
    }
}






for (let i = 0; i < resultBlocks.length; i++)
{
    var resultBlock = resultBlocks[i];
    var cellA = resultBlock.querySelector('.cell-a').textContent;
    var cellB = resultBlock.querySelector('.cell-b').textContent;
    //console.log(cellB);

}











function results(e)
{
    for (let i = 0; i < resultBlocks.length; i++)
    {
        var resultBlock = resultBlocks[i];
        var cellA = resultBlock.querySelector('.cell-a').textContent;
        var cellB = resultBlock.querySelector('.cell-b').textContent;
        //console.log(cellB);

    }

    console.log("res")
    let resval = resultBlock.querySelector('.result-single').textContent;
    //console.log(resval);

    if (cellA == 1 && cellB == 1)
    {
        document.getElementById("whoWon").textContent = "wiiiiiiiiiii";
        resultBlock.querySelector('.result-single').value = "DRAW"
        console.log(resval);
    } else if (cellA === 1 && cellB === 2)
    {
        resultBlock.querySelector('.result-single').value = "cellB Wins !!"
    } else if (cellA === 1 && cellB === 3)
    {
        resultBlock.querySelector('.result-single').value = "cellA"
    }
    else if (cellA === 2 && cellB === 1)
    {
        resultBlock.querySelector('.result-single').value = "cellA"
    }
    else if (cellA === 2 && cellB === 2)
    {
        resultBlock.querySelector('.result-single').value = "DRAW"
    }
    else if (cellA === 2 && cellB === 3)
    {
        resultBlock.querySelector('.result-single').value = "DRAW"
    }
    else if (cellA === 3 && cellB === 1)
    {
        resultBlock.querySelector('.result-single').value = "DRAW"
    }
    else if (cellA === 3 && cellB === 2)
    {
        resultBlock.querySelector('.result-single').value = "DRAW"
    }
    else if (cellA === 3 && cellB === 3)
    {
        resultBlock.querySelector('.result-single').value = "DRAW"
    }
}