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
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
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
        alert("Your message is too long. Keep it under 50 characters.")
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

    if (width == null || height == null || x == null || y == null) {
    break;
  }
    if (width < 1 || width > 1024) {
    alert("Your width must be between 1 and 1024.")
  }
    else if (height < 1 || height > 512) {
    alert("Your height must be between 1 and 512.")
  }
    else if (x < 1 || x > 1024) {
    alert("Your x-coordinate must be between 1 and 1024.")
  }
    else if (y < 1 || y > 512) {
    alert("Your y-coordinate must be between 1 and 512.")
  }
  else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
alert("One of your numbers is not a number.")
  }
  else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
    alert("Your rectangle won't fit on the canvas.")
  }
} while (width < 1 || width > 1024 || height < 1 || height > 512 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || x + width > 512 || y + height > 1024)

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

      if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        alert("One of your sides is not a number.")
      }
      else if (height > 512 || hypotenuse > 1310720 || base > 1024) {
        alert("Your triangle won't fit on the canvas.")
      }
      else if ((height ** 2) + (base ** 2) != (hypotenuse ** 2) || height == 0 || hypotenuse == 0 || base == 0 || side1+side2+side3-hypotenuse-height != base) {
        alert("That's not a valid right triangle.")
      }


    } while (Math.floor(base)*Math.floor(base) + height*height != hypotenuse*hypotenuse || isNaN(side1) || isNaN(side2) || isNaN(side3) || base > 1024 || height > 512 || hypotenuse > 1310720  || base == 0 || height == 0 || hypotenuse == 0)

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
    // write your exercise 5 code here
    const canvas = document.getElementById("student-canvas-5");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    do {
      var radius = prompt("Radius: ")
      if (radius == null) {
        break;
      }
      if (radius < 32) {
        alert("Your radius must be at least 32.")
      }
      if (isNaN(radius)) {
        alert("Your radius is not a number.")
      }
      if (radius > 256) {
        alert("Your smiley face won't fit on the canvas.")
      }
    } while (radius < 32 || radius > 256 || isNaN(radius))

    var faceEyes = radius * 0.15
    var faceMouth = radius * 0.7

    ctx.beginPath();
 ctx.arc(512, 256, radius, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.closePath();
 ctx.beginPath();
 ctx.arc(512, 256, faceMouth, 0, Math.PI);
 ctx.stroke();
 ctx.closePath();
 ctx.beginPath();
 ctx.arc(512 - 0.4 * radius, 256 - 0.4 * radius, faceEyes, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.closePath();
 ctx.beginPath();
 ctx.arc(512 + 0.4 * radius, 256 - 0.4* radius, faceEyes, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
    // write your exercise 6 code here
    const canvas = document.getElementById("student-canvas-6");
  const ctx = canvas.getContext("2d");
  var distance = 0
  var height1 = 0
  var distanceAdjust = 0
  var heightAdjust = 0
  var counter = 5
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var side = (prompt("Side: "))
    if (side == null) {
      break;
    }
    if (side < 1) {
      alert("Your block size must be at least 1.")
    }
    if (side > 100) {
      alert("Your pyramid won't fit on the canvas")
    }
    if (isNaN(side)) {
      alert("Your block size is not a number.")
    }
  } while (isNaN(side) || side > 100 || side < 1)

  for (i = 5; i > 0; i--) {
    counter = i
    while(counter >= 1) {
      ctx.beginPath();
      ctx.rect(10 + Number(distance), (502 - side) - Number(height1), Number(side), Number(side));
      ctx.stroke();
      ctx.closePath();
      distance = Number(distance) + Number(side)
      counter--
    }
    distanceAdjust++
    distance = distanceAdjust * (1/2 * side)
    heightAdjust++
    height1 = heightAdjust * side
  }
};
