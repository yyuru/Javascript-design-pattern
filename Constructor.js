//构造器模式
function Pet(name,type,age,food){
  this.name=name;
  this.type=type;
  this.age=age;
  this.food=food;  
}
Pet.prototype.eat=function(){
  return `${this.name}吃${this.food}`
}

let rabbit=new Pet('乌云','兔子',1,'草');   
console.log(rabbit.eat());