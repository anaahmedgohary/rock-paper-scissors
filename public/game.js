$(document).ready(function ()
{
    // let wallElements = $(".waller");
    // for (let i = 0; i < wallElements.length; i++) {
    //     let ckicked = wallElements[i];
    //     ckicked.on("click", placeWall);
    // }
    $(".waller").on("click", placeWall);
    let wallsCounter = $("#wallsCounter");
    let valOfWalls = 0

  // var sqr01 = document.getElementById("identifier01").value;



    function placeWall(e) {
      let clickedWall = $(e.target);
        let squareInPlay = clickedWall.parent();
        let staller = squareInPlay.find(".staller");
        let scissors = squareInPlay.find(".scissors");
        staller.hide();
        scissors.hide();
        clickedWall.off("click");
        clickedWall.css("cursor", "unset");

        clickedWall.css("opacity", "1");
        clickedWall.addClass("wallKeepers");

        valOfWalls++
      wallsCounter.val(valOfWalls);

      //sqr01 = 1;
      
        if (valOfWalls >= 12)
        {
            $(".waller").off("click");
            $(".waller").css("cursor", "unset");
            $(".waller").hide();
            $(".wallKeepers").show();
            //clickedWall.css("opacity", "1");
        }
    }



    $(".staller").on("click", placeStaller);
    let stallsCounter = $("#stallsCounter");
    let valOfStalls = 0;

    function placeStaller(e) {
      let clickedWall = $(e.target);
      let squareInPlay = clickedWall.parent();
      let staller = squareInPlay.find(".waller");
      let scissors = squareInPlay.find(".scissors");
      staller.hide();
      scissors.hide();
      clickedWall.off("click");
        clickedWall.css("cursor", "unset");
        
        clickedWall.css("opacity", "1");
        clickedWall.addClass("stallKeepers")

      valOfStalls++;
      stallsCounter.val(valOfStalls);

      //sqr01 = 2;

      if (valOfStalls >= 12) {
        $(".staller").off("click");
          $(".staller").css("cursor", "unset");
          $(".staller").hide();
          //clickedWall.show();
          $(".stallKeepers").show();
      }
    }


    $(".scissors").on("click", placescissors);
    let scissorsCounter = $("#scissorsCounter");
    let valOfscissors = 0;

    function placescissors(e) {
      let clickedWall = $(e.target);
      let squareInPlay = clickedWall.parent();
      let staller = squareInPlay.find(".waller");
      let scissors = squareInPlay.find(".staller");
      staller.hide();
      scissors.hide();
      clickedWall.off("click");
      clickedWall.css("cursor", "unset");

        clickedWall.css("opacity", "1");

      valOfscissors++;
      scissorsCounter.val(valOfscissors);

      //$("#identifier01").val(3);
      //sqr01 = 3;

      if (valOfscissors >= 12) {
        $(".scissors").off("click");
        $(".scissors").css("cursor", "unset");
        //$(".scissors").hide();
      }
    }


  





  


















  
    
});



