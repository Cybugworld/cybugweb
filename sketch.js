console.log("sketch")

function preload() {
  bag1 = loadModel('obj/acqua/1.obj');
  bag2 = loadModel('obj/acqua/crisa.obj');
  bag3 = loadModel('obj/acqua/3.obj');
  
  bag4 = loadModel('obj/fuoco/4.obj');
  bag5 = loadModel('obj/fuoco/5.obj');
  bag6 = loadModel('obj/fuoco/6.obj');

  bag7 = loadModel('obj/erba/7.obj');
  bag8 = loadModel('obj/erba/8.obj');
  bag9 = loadModel('obj/erba/9.obj');


listbug = [bag1,bag2,bag3,bag4,bag5,bag6,bag7,bag8,bag9]
}


function setup() {

}



// ACQUA //

var bagbox3d1 = function(p, url) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {

  
    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[0]);
  };
};

var bagbox3d2 = function(p) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {

  
    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[1]);
  };
};

var bagbox3d3 = function(p) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {


    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[2]);
  };
};



/////////////FUOCO//////



var bagbox3d4 = function(p) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {

  
    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[3]);
  };
};

var bagbox3d5 = function(p) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {

  
    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[4]);
  };
};

var bagbox3d6 = function(p) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {

  
    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[5]);
  };
};

var bagbox3d7 = function(p) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {

  
    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[6]);
  };
};

var bagbox3d8 = function(p) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {

  
    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[7]);
  };
};

var bagbox3d9 = function(p) { // p could be any variable name


  p.setup = function() {
    p.createCanvas(330, 400, WEBGL);
  };


  p.draw = function() {

  
    p.ambientLight(160, 160, 160);
    p.pointLight(220, 220, 220, 800, 100, 400);
    p.background(0);
    
    p.translate(0, -80, -100)
    p.rotateX(3.14159);

    //p.rotateX(mouseY * 0.001);
    p.rotateY(mouseX * 0.004);
    p.scale(100)
    p.fill(200);
    p.noStroke();

    p.model(listbug[8]);
  };
};











// ACQUA //
var myp1 = new p5(bagbox3d1, 'canvas1');
var myp2 = new p5(bagbox3d2, 'canvas2');
var myp3 = new p5(bagbox3d3, 'canvas3');

var myp4 = new p5(bagbox3d4, 'canvas4');
var myp5 = new p5(bagbox3d5, 'canvas5');
var myp6 = new p5(bagbox3d6, 'canvas6');

var myp7 = new p5(bagbox3d7, 'canvas7');
var myp8 = new p5(bagbox3d8, 'canvas8');
var myp9 = new p5(bagbox3d9, 'canvas9');







