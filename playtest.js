if (document.readyState === 'loading')
{
    document.addEventListener('DOMContentLoaded', ready)
} else
{
    ready()
};


function ready()
{

    // let sqr01 = document.getElementById("cell01").value;
    // let sqr02 = document.getElementById("cell02").value;

    let tcell01 = document.getElementById('tcell01').textContent;
    let tcell02 = document.getElementById('tcell02').textContent;
    let tcell03 = document.getElementById('tcell03').textContent;
    let tcell04 = document.getElementById('tcell04').textContent;
    let tcell05 = document.getElementById('tcell05').textContent;
    let tcell06 = document.getElementById('tcell06').textContent;
    let tcell07 = document.getElementById('tcell07').textContent;
    let tcell08 = document.getElementById('tcell08').textContent;

    // let sqr03 = document.getElementById("cell03").value;
    // let sqr04 = document.getElementById("cell04").value;

    // let sqr05 = document.getElementById("cell05").value;
    // let sqr06 = document.getElementById("cell06").value;

    // let sqr07 = document.getElementById("cell07").value;
    // let sqr08 = document.getElementById("cell08").value;




    let row01 = document.getElementById("board-row01");
    let row02 = document.getElementById("board-row02");
    //let r01Cols = row01.getElementsByClassName("pieces-list");
    let r01Cols = row01.querySelectorAll(".pieces-list");
    let r02Cols = row02.querySelectorAll(".pieces-list");

    let relSqr;
    for (let i = 0; i < r01Cols.length; i++)
    {
        let list = r01Cols[i];

        


        list.querySelector(".waller").addEventListener("click", (e) =>
        {
            relSqr = "R";
            if (list == r01Cols[0])
            {
                document.getElementById('tcell01').textContent = relSqr;
            } else if (list == r01Cols[1])
            {
                document.getElementById('tcell03').textContent = relSqr;
            } else if (list == r01Cols[2])
            {
                document.getElementById('tcell05').textContent = relSqr;
            } else if (list == r01Cols[3])
            {
                document.getElementById('tcell07').textContent = relSqr;
            } 
        });
        list.querySelector(".staller").addEventListener("click", (e) =>
        {
            relSqr = "P";
            if (list == r01Cols[0])
            {
                document.getElementById('tcell01').textContent = relSqr;
            } else if (list == r01Cols[1])
            {
                document.getElementById('tcell03').textContent = relSqr;
            } else if (list == r01Cols[2])
            {
                document.getElementById('tcell05').textContent = relSqr;
            } else if (list == r01Cols[3])
            {
                document.getElementById('tcell07').textContent = relSqr;
            } 
        });
        list.querySelector(".scissors").addEventListener("click", (e) =>
        {
            // 3 to S
            relSqr = "S";
            if (list == r01Cols[0])
            {
                document.getElementById('tcell01').textContent = relSqr;
            } else if (list == r01Cols[1])
            {
                document.getElementById('tcell03').textContent = relSqr;
            } else if (list == r01Cols[2])
            {
                document.getElementById('tcell05').textContent = relSqr;
            } else if (list == r01Cols[3])
            {
                document.getElementById('tcell07').textContent = relSqr;
            } 
        });
    };











    r02Cols.forEach(element =>
    {
        
        let relSqr2;
        
        element.querySelector(".waller").addEventListener("click", (e) =>
        {
            relSqr2 = "R";

            if (element === r02Cols[0])
            {
                tcell02 = document.getElementById('tcell02').textContent = relSqr2;
            } else if (element === r02Cols[1])
            {
                document.getElementById('tcell04').textContent = relSqr2;
            } else if (element === r02Cols[2])
            {
                document.getElementById('tcell06').textContent = relSqr2;
            } else if (element === r02Cols[3])
            {
                document.getElementById('tcell08').textContent = relSqr2;
            } 
            
        });
        element.querySelector(".staller").addEventListener("click", (e) =>
        {
            relSqr2 = "P";

            if (element === r02Cols[0])
            {
                tcell02 = document.getElementById('tcell02').textContent = relSqr2;
            } else if (element === r02Cols[1])
            {
                document.getElementById('tcell04').textContent = relSqr2;
            } else if (element === r02Cols[2])
            {
                document.getElementById('tcell06').textContent = relSqr2;
            } else if (element === r02Cols[3])
            {
                document.getElementById('tcell08').textContent = relSqr2;
            } 
        });
        element.querySelector(".scissors").addEventListener("click", (e) =>
        {
            // 3 to S
            relSqr2 = "S";

            if (element === r02Cols[0])
            {
                tcell02 = document.getElementById('tcell02').textContent = relSqr2;
            } else if (element === r02Cols[1])
            {
                document.getElementById('tcell04').textContent = relSqr2;
            } else if (element === r02Cols[2])
            {
                document.getElementById('tcell06').textContent = relSqr2;
            } else if (element === r02Cols[3])
            {
                document.getElementById('tcell08').textContent = relSqr2;
            } 
        });
    });


    let playBtn = document.getElementById("zPlayBtn");
    playBtn.addEventListener("click", results);

    let resultBlocks = document.querySelectorAll('.result-block');
    //console.log(resultBlocks)

    function results(e)
    {
        // var cellA = resultBlock.querySelector('.cell-a').textContent;
        // var cellB = resultBlock.querySelector('.cell-b').textContent;
        //const resultBlocks = document.querySelectorAll('result-block');
        resultBlocks.forEach(element =>
        {
            var cellA = element.querySelector('.cell-a').textContent;
            var cellB = element.querySelector('.cell-b').textContent;

            let playa01 = document.getElementById('playa01').value;
            let playa02 = document.getElementById('playa02').value;

            // if (element == resultBlocks[0])
            // {
                if (cellA == "R" && cellB == "R")
                {
                    element.querySelector('.result-single').value = "DRAW"
                } else if (cellA == "R" && cellB == "P")
                {
                    element.querySelector('.result-single').value = `${playa02} @ cellB Wins`
                } else if (cellA == "R" && cellB == "S")
                {
                    element.querySelector('.result-single').value = `${playa01} @ cellA Wins`
                }
                else if (cellA == "P" && cellB == "R")
                {
                    element.querySelector('.result-single').value = `${playa01} @ cellA Wins`
                }
                else if (cellA == "P" && cellB == "P")
                {
                    element.querySelector('.result-single').value = "DRAW"
                }
                else if (cellA == "P" && cellB == "S")
                {
                    element.querySelector('.result-single').value = `${playa02} @ cellB Wins`
                }
                else if (cellA == "S" && cellB == "R")
                {
                    element.querySelector('.result-single').value = `${playa02} @ cellB Wins`
                }
                else if (cellA == "S" && cellB == "P")
                {
                    element.querySelector('.result-single').value = `${playa01} @ cellA Wins`
                }
                else if (cellA == "S" && cellB == "S")
                {
                    element.querySelector('.result-single').value = "DRAW"
                }
                // else
                // {
                //     alert("complete the cells")
                // }
            // }
    
        })
        
        let aCells = document.getElementsByClassName("cell-a");
        //console.log(aCells);
        for (cell of aCells)
        {
            cell.style.display = "block";
        }
        //aCells.style.display = "block";
        let bCells = document.querySelectorAll(".cell-b");
        //console.log(bCells);
        bCells.forEach(
            (el) =>
            {
                el.style.display = "block";
            }
        )
    
    }
    

    






































































































































 }