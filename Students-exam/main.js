function main() {
  // Your solution starts here...
  
var FirstName = $("<p></p>").text("Fisrt Name:");
    var FirstNameInput = $("<input>").attr('class', 'first-input');
    var LastName = $("<p></p>").text("Last Name:");
    var LastNameInput = $("<input>").attr('class', 'lastname-input');
    var MobileNumber = $("<p></p>").text("Mobile Number:");
    var MobileNumInput = $("<input>").attr('class', 'mobile-input');
    var Index = $("<p></p>").text("Index:");
    var IndexInput = $("<input>").attr('class', 'index-input');
    var submitBtn = $("<button>").text("Submit").attr('class', 'submitbtn').css("display","block");
    var resetBtn = $("<button>").text("Reset").attr('class', 'resetbtn').css("display","block");
    $("body").append(FirstName, FirstNameInput, LastName,
        LastNameInput, MobileNumber, MobileNumInput, Index, IndexInput, submitBtn, resetBtn);


        $('.submit').on('click', () => {
          var pause = $('<br/>')
          var firstName = $('<div>').attr('class', 'name').text($('.firtsName').val());
          var lastName = $('<div>').attr('class', 'name').text($('.lastName').val());
          var MobileNumber = $('<div>').attr('class', 'name').text($('.MobileNumber').val());
          var Index = $('<div>').attr('class', 'name').text($('.index').val());
          holder.append(firstName)
          holder.append(lastName)
          holder.append(MobileNumber)
          holder.append(Index)
          holder.append(pause)
          body.append(holder);
          $('input').val(' ')
        })
        $('.reset').on('click', () => {
          $('input').val(' ');
          $('.results').html(' ')
        })

      
        
  console.log("Svetlana Shopova");
  
  }
main();



