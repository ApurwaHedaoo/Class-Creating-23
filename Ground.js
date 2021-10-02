class Ground{
    constructor(x,y,width,height){
        var groundOption = {
           isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,groundOption)
        this.width = width
        this.height=height
        World.add(world,this.body)
        }
        display(){
        var pos = this.body.position;
        rectMode(CENTER)
        fill("green")
        rect(pos.x,pos.y,this.width,this.height)
        }
         
}