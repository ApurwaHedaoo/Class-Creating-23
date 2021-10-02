class Box{
constructor(x,y,width,height){
var boxOption = {
    restitution:2,
    friction:5,
    density:5,
}
this.body = Bodies.rectangle(x,y,width,height,boxOption)
this.width = width
this.height=height
World.add(world,this.body)
}
display(){
var pos = this.body.position;
rectMode(CENTER)
fill("yellow")
rect(pos.x,pos.y,this.width,this.height)
}


}