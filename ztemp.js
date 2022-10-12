



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
        console.log("waller")
    });
    element.querySelector(".staller").addEventListener("click", (e) =>
    {
        sqr01 = 2;
        console.log("staller")
    });
    element.querySelector(".scissors").addEventListener("click", (e) =>
    {
        sqr01 = 3;
        console.log("scissors")
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