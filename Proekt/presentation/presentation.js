function Presentation() {
  this.business = new BusinessLayer();

  this.displayhtml = () => {
    var body = $("body")
    var leftMenu = $("<div>").attr("class", "left-menu");
    body.append(leftMenu)
    var mainText = $("<h1>").text("Exploring  World").attr("class", "main-text");
    leftMenu.append(mainText);
    
    
   
    var rightMenu = $("<div>").attr("class", "right-menu");
    var mainQuote = $("<h2>").text("Travel…the best way to be lost and found at the same time.").attr("class", "quote");
    var pQuote = $("<h2>").text("Where to next?").attr("class", "quote");
    var input = $('<input type = "text" placeholder = "Destination...">');
    var centar = $("<div>").attr("class", "centar");

    // body.append(container)
    
    body.append(rightMenu)
    rightMenu.append(mainQuote)
    rightMenu.append(pQuote)
    rightMenu.append(input)
    body.append(centar)
    console.log(input)

    input.on("keyup", async (event) => {

      if ($(event.target).val().length >4) {
        var allInfo = await this.business.resolveTravelData();
        var arr = [];
        console.log(allInfo[0])


        for (var i = 0; i < allInfo[0].names.length; i++) {

          arr.push(allInfo[0].names[i]);
      }

      for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);

          if (arr[i].toLowerCase().includes($(event.target).val())) {
            var nn = $("<p>").html(arr[i]);
            centar.prepend(nn);
            console.log(arr[i]);

            nn.on("click",(event) => {

              console.log($(event.target).text());
            })
          }

        }
      }
      
  
  })
}





}


