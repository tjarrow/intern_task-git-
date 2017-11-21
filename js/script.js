// canvas initialization

 var canvas = document.getElementById('canvas');
//
// var ctx = canvas.getContext("2d");

var svgForm = document.getElementById('svg-form');

function createSVG(n, v) {
n = document.createElementNS("http://www.w3.org/2000/svg", n);
for (var p in v)
 n.setAttributeNS(null, p.replace(/[A-Z]/g, function(m, p, o, s) {
  return "-" + m.toLowerCase(); }), v[p]);
return n
}

function createSVGform() {

  var svg = createSVG('svg');
  //var formSVG = createSVG(('rect', { x: 88, y: 176, width: 650, height: 370, rx: 2, ry: 2, fill: '#FFFFFF', stroke:'#D6E5F9', strokeWidth:3, strokeDasharray: "0.5%", strokeDashoffset: "10%", strokeLinejoin: "miter", strokeLinecap: "butt"}));
  var formSVG = createSVG('rect');
}

//svgForm = createSVGform();

// screen type buttons
var squareCanvas = document.getElementById('square');
var horizontalCanvas = document.getElementById('horizontal');
var verticalCanvas = document.getElementById('vertical');

//color menu initialization
var colorMenu = document.getElementById("color-menu");

//textareas initialization

var headlineTextarea = document.getElementById("headline-textarea");

var mainTextarea = document.getElementById("main-textarea");

//editing toolbar initialization

let editMenu;

//text adding
var mainTextButton = document.getElementById("main-text-button");

var headlineTextButton = document.getElementById("headline-text-button");

let headlineText,
    mainText;

// created text initialization


// canvas text initialization
var textEditable = document.getElementsByClassName("text-editable");

//var mainTextEditable = document.getElementById("main-text");

//var headlineTextEditable = document.getElementById("headline-text");


svgForm.addEventListener("click", function() {

  colorMenu.style.opacity = "1";

});

var headlineTextClicked = function(event) {

  var headlineTextInit = event.target;

  headlineToolbarAppear(headlineTextInit);

 };

 var mainTextClicked = function(event) {

   var mainTextInit = event.target;

   mainTextToolbarAppear(mainTextInit);

  };

var headlineToolbarAppear = function(headlineTextInit) {

  editMenu = document.getElementById("editing-menu");


  if (editMenu.classList.contains("editing-menu--maintext"))

    editMenu.classList.remove("editing-menu--maintext");

  console.log ("H.text");

  editMenu.classList.add("editing-menu--headline");

//textPositioning();
};

var mainTextToolbarAppear = function (mainTextInit) {

  editMenu = document.getElementById("editing-menu");

  if (editMenu.classList.contains("editing-menu--headline"))

  editMenu.classList.remove("editing-menu--headline");

  console.log("main text");

  editMenu.classList.add("editing-menu--maintext");

  //textPositioning();

}

mainTextButton.addEventListener("click", function() {


    var mainTextEditable = document.createElement("p");

    mainTextEditable.innerHTML = "Main text";

    mainTextEditable.className = "text-editable";

    mainTextEditable.id = "main-text";

    mainTextEditable.addEventListener('click', mainTextClicked, false);

    mainTextarea.appendChild(mainTextEditable);

    mainText = document.getElementById("main-text");

    mainTextButton.setAttribute("disabled", true);

});



headlineTextButton.addEventListener("click", function() {


    var headlineEditable = document.createElement("h3");

    headlineEditable.innerHTML = "Headline";

    headlineEditable.className = "text-editable"

    headlineEditable.id = "headline-text";

    headlineEditable.addEventListener('click', headlineTextClicked, false);

    headlineTextarea.appendChild(headlineEditable);

    headlineText = document.getElementById("headline-text");

    headlineTextButton.setAttribute("disabled", true);

});

//function toolbarEditing() {

//    function toolbarInit () {
//
//    if (textEditable.length) {
//
//     for (var i = 0; i < textEditable.length; i++) {
//
//       textEditable[i].addEventListener("click", textClicked, false);
//
//     }
//
//   }
//
// };

function textPositioning() {


  document.getElementById("align-center").addEventListener("click", function() {


    if (editMenu.classList.contains('editing-menu--headline') && (headlineText.style.textAlign != "center")) {

    headlineText.style.textAlign = "center";


  } else
   if (editMenu.classList.contains('editing-menu--maintext') && (mainText.style.textAlign != "center")) {

    mainText.style.textAlign = "center";

    }
     editMenu.style.marginLeft = "auto"
     editMenu.style.marginRight = "auto";
  });

  document.getElementById("align-left").addEventListener("click", function(){


    if (editMenu.classList.contains('editing-menu--headline') && (headlineText.style.textAlign != "left")) {

    headlineText.style.textAlign = "left";

  } else
   if (editMenu.classList.contains('editing-menu--maintext') && (mainText.style.textAlign != "left")) {

    mainText.style.textAlign = "left";

  }
  editMenu.style.marginLeft = "0";

  });


  document.getElementById("align-right").addEventListener("click", function(){

    if (editMenu.classList.contains('editing-menu--headline') && (headlineText.style.textAlign != "right")) {

    headlineText.style.textAlign = "right";


  } else if (editMenu.classList.contains('editing-menu--maintext') && (mainText.style.textAlign != "right")) {

    mainText.style.textAlign = "right";
  }
  editMenu.style.marginRight = "0";

    });

}

 textPositioning();




//}


function canvasResize (type) {

  var canvas = document.getElementById('canvas');
  var svg = document.getElementById('svg-form');
  var initialWidth = "720px";
  var initialHeight = "510px";

  if (type === 'square') {

			canvas.style.width = initialHeight;
			canvas.style.height = initialHeight;
      svg.style.width = initialHeight;
      svg.style.height = initialHeight;

			}

      if (type === 'horizontal') {

        canvas.style.width = initialWidth;
  			canvas.style.height = initialHeight;
        svg.style.width = initialWidth;
        svg.style.height = initialHeight;

      }

      if (type === 'vertical') {

        canvas.style.width = initialHeight;
  			canvas.style.height = initialWidth;
        svg.style.width = initialHeight;
        svg.style.height = initialWidth;

      }





 }
