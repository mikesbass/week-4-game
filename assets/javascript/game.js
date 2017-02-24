var crystal = 
    {
      win:0,
      lose:0,
      totalScore:0,
      crystals: [1, 2, 3, 4],

      randomNumber:function(first, second)
          {
          var result = Math.floor(Math.random() * second) + first;
          return result;
          },
          result:0
    };

  //Generate a goal number.
  crystal.totalScore = crystal.randomNumber(19, 100);
  $('.totalScore').html("Your Goal: " + crystal.totalScore);
  console.log(crystal.totalScore);

  function random()
  {
    for(var i = 0; i < crystal.crystals.length; i++)
    {
        crystal.crystals[i] = crystal.randomNumber(1, 12);
    };
  }
  random();


   var result = $(".crystal p");

   //Looping through the crysal from the DOM.
  function crystalRandom()
  {
    for(var i = 0; i < result.length; i++)
      {
        $(result[i]).html(crystal.crystals[i]);
      }
  }
   crystalRandom();

   function reset()
   {
    random()
    crystal.totalScore = crystal.randomNumber(19, 100);
    $('.totalScore').html("Your Goal: " + crystal.totalScore);
    crystal.result = 0;
    $('.result').html("Your Total: " + crystal.result);
    crystalRandom()
   }

      //Add value to total score.
      $(".crystal").on("click", function()
      {
        //Grabbing value form children.
        var value = $(this).children(this).text();
        console.log(value);
        //Converting string into number.
        var number = parseInt(value);
        //Adding to total score.
        crystal.result += number;
        $(".result").html("Your Total: " + crystal.result);

        console.log(crystal.result);

        if(crystal.totalScore === crystal.result)
        {
            crystal.win++;
            $('.win').html("Wins: " + crystal.win);
            reset();
            console.log(crystal.crystals);
            console.log(crystal.totalScore);
            console.log(crystal.result);
        }
        else if(crystal.result > crystal.totalScore)
        {
          crystal.lose++;
            $('.lose').html("Losses: " + crystal.lose);
            reset();
            console.log(crystal.crystals);
            console.log(crystal.totalScore);
            console.log(crystal.result);
        }

    });
