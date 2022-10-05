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

    



    function placeWall(e) {
      let clickedWall = $(e.target);
        let squareInPlay = clickedWall.parent();
        let staller = squareInPlay.find(".staller");
        let stealler = squareInPlay.find(".stealler");
        staller.hide();
        stealler.hide();
        clickedWall.off("click");
        clickedWall.css("cursor", "unset");

        clickedWall.css("opacity", "1");
        clickedWall.addClass("wallKeepers");

        valOfWalls++
        wallsCounter.val(valOfWalls);
        console.log("hith");
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
      let stealler = squareInPlay.find(".stealler");
      staller.hide();
      stealler.hide();
      clickedWall.off("click");
        clickedWall.css("cursor", "unset");
        
        clickedWall.css("opacity", "1");
        clickedWall.addClass("stallKeepers")

      valOfStalls++;
      stallsCounter.val(valOfStalls);
      if (valOfStalls >= 12) {
        $(".staller").off("click");
          $(".staller").css("cursor", "unset");
          $(".staller").hide();
          //clickedWall.show();
          $(".stallKeepers").show();
      }
    }


    $(".stealler").on("click", placestealler);
    let steallerCounter = $("#steallerCounter");
    let valOfstealler = 0;

    function placestealler(e) {
      let clickedWall = $(e.target);
      let squareInPlay = clickedWall.parent();
      let staller = squareInPlay.find(".waller");
      let stealler = squareInPlay.find(".staller");
      staller.hide();
      stealler.hide();
      clickedWall.off("click");
      clickedWall.css("cursor", "unset");

        clickedWall.css("opacity", "1");

      valOfstealler++;
      steallerCounter.val(valOfstealler);
      if (valOfstealler >= 12) {
        $(".stealler").off("click");
        $(".stealler").css("cursor", "unset");
        //$(".stealler").hide();
      }
    }


    
});



