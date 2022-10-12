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
            relSqr = 1;
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
            relSqr = 2;
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
            relSqr = 3;
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
            relSqr2 = 1;

            if (element === r02Cols[0])
            {
                tcell02 = document.getElementById('tcell02').textContent = 1;
            } else if (element === r02Cols[1])
            {
                document.getElementById('tcell04').textContent = 1;
            } else if (element === r02Cols[2])
            {
                document.getElementById('tcell06').textContent = 1;
            } else if (element === r02Cols[3])
            {
                document.getElementById('tcell08').textContent = 1;
            } 
            
        });
        element.querySelector(".staller").addEventListener("click", (e) =>
        {
            relSqr2 = 2;

            if (element === r02Cols[0])
            {
                tcell02 = document.getElementById('tcell02').textContent = 2;
            } else if (element === r02Cols[1])
            {
                document.getElementById('tcell04').textContent = 2;
            } else if (element === r02Cols[2])
            {
                document.getElementById('tcell06').textContent = 2;
            } else if (element === r02Cols[3])
            {
                document.getElementById('tcell08').textContent = 2;
            } 
        });
        element.querySelector(".scissors").addEventListener("click", (e) =>
        {
            relSqr2 = 3;

            if (element === r02Cols[0])
            {
                tcell02 = document.getElementById('tcell02').textContent = 3;
            } else if (element === r02Cols[1])
            {
                document.getElementById('tcell04').textContent = 3;
            } else if (element === r02Cols[2])
            {
                document.getElementById('tcell06').textContent = 3;
            } else if (element === r02Cols[3])
            {
                document.getElementById('tcell08').textContent = 3;
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
                if (cellA == 1 && cellB == 1)
                {
                    element.querySelector('.result-single').value = "DRAW"
                } else if (cellA == 1 && cellB == 2)
                {
                    element.querySelector('.result-single').value = `${playa02} @ cellB Wins`
                } else if (cellA == 1 && cellB == 3)
                {
                    element.querySelector('.result-single').value = `${playa01} @ cellA Wins`
                }
                else if (cellA == 2 && cellB == 1)
                {
                    element.querySelector('.result-single').value = `${playa01} @ cellA Wins`
                }
                else if (cellA == 2 && cellB == 2)
                {
                    element.querySelector('.result-single').value = "DRAW"
                }
                else if (cellA == 2 && cellB == 3)
                {
                    element.querySelector('.result-single').value = `${playa02} @ cellB Wins`
                }
                else if (cellA == 3 && cellB == 1)
                {
                    element.querySelector('.result-single').value = `${playa02} @ cellB Wins`
                }
                else if (cellA == 3 && cellB == 2)
                {
                    element.querySelector('.result-single').value = `${playa01} @ cellA Wins`
                }
                else if (cellA == 3 && cellB == 3)
                {
                    element.querySelector('.result-single').value = "DRAW"
                }
                // else
                // {
                //     alert("complete the cells")
                // }
            // }
    
            })
    
    }
    

    






































































































































 }