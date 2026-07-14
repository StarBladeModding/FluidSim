class Playground{
  constructor(){
    this.simulation = new Simulation();
  }

  update(){
    this.simulation.update(dt);
  }

  draw(){
    this.simulation.draw()

    DrawUtils.drawLine(Vector2.Zero(), new Vector2(100,100), "#000000", 10);
    DrawUtils.drawPoint(new Vector2(100,100), 20, "#0000FF");
    DrawUtils.strokePoint(new Vector2(100,100), 20, "#FF0000");
    DrawUtils.drawRect(new Vector2(200,200), new Vector2(100,100), "#00FF00");
    DrawUtils.drawText(new Vector2(300,300), 20, "#FFFFFF", "Hello World");
  }

  onMouseMove(x,y){
    console.log("Mouse moved to:" + x + ", " + y)
  }

  onMouseDown(button){
    console.log("Mouse button pressed: "+button)
  }

  onMouseUp(button){
    console.log("Mouse button released: "+button)
  }
}