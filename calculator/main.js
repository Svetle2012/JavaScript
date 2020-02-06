$(document).ready(function () {

    rootDiv = $("#root");
    rootDiv.css({
        width: "100%",
        height: "100vh"
    });

    $(rootDiv).append("<div id='calculator'></div>");

    var calculator = $("#calculator");
    calculator.css({
        width: "300px",
        height: "400px",
        border: "1px solid black",
        margin: "10px auto"
    });
    calculator.append("<div id='display'></div");
    var display = $("#display");
    display.css({
        width: "80%",
        height: "40px",
        margin: "10px auto",
        border: "1px solid black",
        lineHeight: "40px",
        fontSize: "25px",
        padding: "5px",
        boxSizing: "border-box"
    })

   for (var i = 0; i < 10; i++) {
         calculator.append("<div class='nums'>" + i + "</div>")
    }

    var nums = $(".nums");
    nums.css({
        width: "32.33%",
        float: "left",
        border: "1px solid black",
        height: "40px",
        lineHeight: "40px",
        textAlign: "center",
        margin: "10px auto"
    });

    calculator.append("<div class='symbol'>+</div> <div class='symbol'>-</div>")
    var symbols = $(".symbol");
    symbols.css({
        width: "30%",
        height: "40px",
        border: "3px solid black",
        float: "left",
        lineHeight: "40px",
        textAlign: "center",
        margin: "10px 0"
    });

    calculator.append("<div class='equals'>=</div>")
    var equals = $(".equals");
    equals.css({
        width: "30%",
        height: "40px",
        border: "3px solid black",
        float: "left",
        lineHeight: "40px",
        textAlign: "center"
    });

    calculator.append("<div id='clear'>C</div>");
    var c = $("#clear");
    c.css({
        width: "30%",
        height: "40px",
        border: "3px solid black",
        float: "left",
        lineHeight: "40px",
        textAlign: "center"
    });

    symbols.on("click", (event) => {
        display.html(display.html() + event.target.innerHTML);
        symbols.hide();
    });

    $(nums).on("click", (event) => {
        display.html(display.html() + event.target.innerHTML);
    });

    c.on("click", () => {
        display.html("");
    });

    equals.on("click", () => {
        if (display.html().includes("+")) {
            var firstNumber = parseInt(display.html().substring(0, display.html().indexOf("+")));
            var secondNumber = parseInt(display.html().substring(display.html().indexOf("+") + 1));
            var result = (firstNumber + secondNumber);
            symbols.show();
            display.html(result);
        } else if (display.html().includes("-")) {
            var firstNumber = parseInt(display.html().substring(0, display.html().indexOf("-")));
            var secondNumber = parseInt(display.html().substring(display.html().indexOf("-") + 1));
            var result = (firstNumber - secondNumber);
            symbols.show();
            display.html(result);
        } else {
            display.html();
            symbols.show();
        }
    });

});