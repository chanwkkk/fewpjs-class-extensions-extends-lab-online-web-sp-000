// Your code here
class Polygon{
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    this.sides.reduce((a,b)=>a+b)
  }
}
