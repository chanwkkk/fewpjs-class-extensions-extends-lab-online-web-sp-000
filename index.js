// Your code here
class Polygon{
  constructor(sides){
    this.sides = sides
  }

  get countSides(){
    return this.sides.length
  }

  get perimeter(){
    return this.sides.reduce((a,b)=>a+b)
  }
}

class Triangle extends Polygon{

  isValid(){
    let sides = this.sides
    return sides[0]+sides[1]>sides[2] && sides[1]+sides[2]>sides[0] && sides[0]+sides[2]>sides[1]? true : false
  }
}
