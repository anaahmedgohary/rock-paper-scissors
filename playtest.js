if (document.readyState === 'loading')
{
    document.addEventListener('DOMContentLoaded', ready)
} else
{
    ready()
};


function ready()
{

    let sqr01 = document.getElementById("cell01").value;
    let sqr02 = document.getElementById("cell02").value;

    let tcell01 = document.getElementById('tcell01').textContent;
    let tcell02 = document.getElementById('tcell02').textContent;
    let tcell03 = document.getElementById('tcell03').textContent;
    let tcell04 = document.getElementById('tcell04').textContent;
    let tcell05 = document.getElementById('tcell05').textContent;
    let tcell06 = document.getElementById('tcell06').textContent;
    let tcell07 = document.getElementById('tcell07').textContent;
    let tcell08 = document.getElementById('tcell08').textContent;

    let sqr03 = document.getElementById("cell03").value;
    let sqr04 = document.getElementById("cell04").value;

    let sqr05 = document.getElementById("cell05").value;
    let sqr06 = document.getElementById("cell06").value;

    let sqr07 = document.getElementById("cell07").value;
    let sqr08 = document.getElementById("cell08").value;




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
            console.log("waller");
            console.log(relSqr);
            if (list == r01Cols[0])
            {
                document.getElementById('tcell01').textContent = relSqr;
                console.log("111scissors");
                console.log(sqr01);
            } else if (list == r01Cols[1])
            {
                document.getElementById('tcell03').textContent = relSqr;
                console.log("222scissors");
                console.log(sqr03);
            } else if (list == r01Cols[2])
            {
                document.getElementById('tcell05').textContent = relSqr;
                console.log("333scissors");
                console.log(sqr05);
            } else if (list == r01Cols[3])
            {
                document.getElementById('tcell07').textContent = relSqr;
                console.log("444scissors");
                console.log(sqr07);
            } 
        });
        list.querySelector(".staller").addEventListener("click", (e) =>
        {
            relSqr = 2;
            console.log("staller");
            console.log(relSqr);
            if (list == r01Cols[0])
            {
                document.getElementById('tcell01').textContent = relSqr;
                console.log("111scissors");
                console.log(sqr01);
            } else if (list == r01Cols[1])
            {
                document.getElementById('tcell03').textContent = relSqr;
                console.log("222scissors");
                console.log(sqr03);
            } else if (list == r01Cols[2])
            {
                document.getElementById('tcell05').textContent = relSqr;
                console.log("333scissors");
                console.log(sqr05);
            } else if (list == r01Cols[3])
            {
                document.getElementById('tcell07').textContent = relSqr;
                console.log("444scissors");
                console.log(sqr07);
            } 
        });
        list.querySelector(".scissors").addEventListener("click", (e) =>
        {
            relSqr = 3;
            console.log("scissors");
            console.log(relSqr);
            if (list == r01Cols[0])
            {
                document.getElementById('tcell01').textContent = relSqr;
                console.log("111scissors");
                console.log(sqr01);
            } else if (list == r01Cols[1])
            {
                document.getElementById('tcell03').textContent = relSqr;
                console.log("222scissors");
                console.log(sqr03);
            } else if (list == r01Cols[2])
            {
                document.getElementById('tcell05').textContent = relSqr;
                console.log("333scissors");
                console.log(sqr05);
            } else if (list == r01Cols[3])
            {
                document.getElementById('tcell07').textContent = relSqr;
                console.log("444scissors");
                console.log(sqr07);
            } 
        });
    };











    r02Cols.forEach(element =>
    {
        
        let relSqr2;
        
        element.querySelector(".waller").addEventListener("click", (e) =>
        {
            relSqr2 = 1;
            console.log("waller")

            if (element === r02Cols[0])
            {
                tcell02 = document.getElementById('tcell02').textContent = 1;
                console.log("111scissors");
            } else if (element === r02Cols[1])
            {
                document.getElementById('tcell04').textContent = 1;
                console.log("222scissors");
            } else if (element === r02Cols[2])
            {
                document.getElementById('tcell06').textContent = 1;
                console.log("333scissors");
            } else if (element === r02Cols[3])
            {
                document.getElementById('tcell08').textContent = 1;
                console.log(tcell08);
            } 
            
        });
        element.querySelector(".staller").addEventListener("click", (e) =>
        {
            relSqr2 = 2;
            console.log("staller")

            if (element === r02Cols[0])
            {
                tcell02 = document.getElementById('tcell02').textContent = 2;
                console.log("111scissors");
            } else if (element === r02Cols[1])
            {
                document.getElementById('tcell04').textContent = 2;
                console.log("222scissors");
            } else if (element === r02Cols[2])
            {
                document.getElementById('tcell06').textContent = 2;
                console.log("333scissors");
            } else if (element === r02Cols[3])
            {
                document.getElementById('tcell08').textContent = 2;
                console.log(tcell08);
            } 
        });
        element.querySelector(".scissors").addEventListener("click", (e) =>
        {
            relSqr2 = 3;
            console.log("scissors")

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
        });
    });








    let r01c01 = r01Cols[0];
    // r01c01.querySelector(".waller").addEventListener("click", (e) =>
    // {
    //     sqr01 = 1;
    // });
    // r01c01.querySelector(".staller").addEventListener("click", (e) =>
    // {
    //     sqr01 = 2;
    // });
    // r01c01.querySelector(".scissors").addEventListener("click", (e) =>
    // {
    //     sqr01 = 3;
    // });


    let r01c02 = r01Cols[1];
    let r01c03 = r01Cols[2];
    let r01c04 = r01Cols[3];

    let r02c01 = r02Cols[0];
    let r02c02 = r02Cols[1];
    let r02c03 = r02Cols[2];
    let r02c04 = r02Cols[3];


    //console.log(r01Cols);

    //console.log(r02c03);

    // console.log(r01c01);





















 }