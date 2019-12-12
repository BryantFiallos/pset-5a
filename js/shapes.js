window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // this is how we're connecting our buttons to our JavaScript functions. let's walk through it.
    //
    // document.getElementById("some-id")   <-- you need to give each button a unique ID
    //                                          and access it in this manner
    //
    // onclick is an event that is fired when you click something (in our case, a button).
    // when we give onclick a value, we're telling JavaScript what to do when we click the button.
    // you should set onclick equal to your function names (i.e., sayHello).
    //
    // there are six event listeners being added for the staff solutions. you'll have an
    // equivalent set of six event listeners for your solutions. the first one is done for you.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
}

/*
 * Exercise 1.
 */

const sayHello = function() {
    // write your exercise 1 code here
    const canvas = document.getElementById('student-canvas-1');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
      var message = prompt("Message: ")
      if (message.length > 50) {
        alert("yor message is too long")
      }
    } while (message.length > 50) {

      ctx.font = "48px sans-serif"
      ctx.strokeText(message, 30, 70, 994)
    }
};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
    // write your exercise 2 code here
    const canvas = document.getElementById('student-canvas-2')
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

var height = 0;
var width = 0;
var x = 0;
var y = 0;

    do {
      var width = Number(prompt("Width: "))
      var height = Number(prompt("Height: "))
      var x = Number(prompt("X: "))
      var y = Number(prompt("Y: "))

    if (width == null || height == null || x == null || y == null)
    break;
    if (width < 1 || width > 1024) {
    alert("Your width must be between 1 and 1024.")
  }
    if (height < 1 || height > 512) {
    alert("Your height must be between 1 and 512.")
  }
    if (x < 1 || x > 1024) {
    alert("Your x-coordinate must be between 1 and 1024.")
  }
    if (y < 1 || y > 512) {
    alert("Your y-coordinate must be between 1 and 512.")
  }
  }
  while (width < 1 || width > 1024 || height < 1 || height > 512 || x < 1 || x > 1024 || y < 1 || y > 512 || Number.isNaN(width) || Number.isNaN(height) || Number.isNaN(x) || Number.isNaN(y) || x + width > 512 || y + height > 1024)

if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.closePath();
  ctx.stroke();
}
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
    // write your exercise 3 code here
    const canvas = document.getElementById("student-canvas-3");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
      var color = (prompt("Color: "))
      if (color == null) {
        break;
      }
      color = String(color)
      var colorInput = color.toUpperCase()
      if (colorInput != "GREEN" && colorInput != "BLACK" && colorInput != "BLUE" && colorInput != "ORANGE" && colorInput != "PURPLE" && colorInput != "RED" && colorInput != "YELLOW") {
        alert(color + " is not a supported color.")
    }
  } while (colorInput != "GREEN" && colorInput != "BLACK" && colorInput != "BLUE" && colorInput != "ORANGE" && colorInput != "PURPLE" && colorInput != "RED" && colorInput != "YELLOW")

  if (color != null) {
    ctx.fillStyle = colorInput;
    ctx.fillRect(10, 10, 100, 50);
  }
};



/*
 * Exercise 4.
 */

const drawTriangle = function() {
    // write your exercise 4 code here
    const canvas = document.getElementById("student-canvas-4");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
      var side1 = prompt("Side 1: ");
      var side2 = prompt("Side 2: ");
      var side3 = prompt("Side 3: ");

      var height = Math.min(side1, side2, side3);
      var hypotenuse = Math.max(side1, side2, side3);
      var base = Math.sqrt((hypotenuse ** 2) - (height ** 2))

      if (height == 0 && hypotenuse == 0 && base == 0) {
        break;
      }
      side1 = Number(side1);
      side2 = Number(side2);
      side3 = Number(side3);

if ((height ** 2) + (base ** 2) != (hypotenuse ** 2) || height == 0 || hypotenuse == 0 || base == 0 || side1+side2+side3-hypotenuse-height != base) {
  alert("That's not a valid right triangle.")
}

      if (Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3)) {
        alert("One of your sides is not a number.")
      }
      if (height > 512 || hypotenuse > 1310720 || base > 1024) {
        alert("Your triangle won't fit on the canvas.")
      }
    } while ((Math.floor(base)*Math.floor(base) + height*height != hypotenuse*hypotenuse) || Number.isNaN(side1) || Number.isNaN(side2) || Number.isNaN(side3) || base > 1024 || height > 512 || hypotenuse > 1144.8664 || base == 0 || height == 0 || hypotenuse == 0)

    if ((base*base + height*height == hypotenuse*hypotenuse) && (base < 1024 && height < 512 && hypotenuse < 1145) && (base != 0 && height != 0 && hypotenuse != 0) && (base != null && height != null && hypotenuse != null)) {
   height = height + 25
   base = base + 25
   ctx.beginPath();
   ctx.moveTo(25, 25);
   ctx.lineTo(25, height);
   ctx.lineTo(base, height)
   ctx.lineTo(25, 25)
   ctx.stroke();
}
}

/*
 * Exercise 5.
 */

const drawFace = function() {
    // write your exercise 4 code here
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 5 code here
};
