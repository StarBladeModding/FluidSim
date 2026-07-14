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