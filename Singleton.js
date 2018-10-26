//单例模式,实现一个类只有一个实例.在生成了一个实例之后,其它都是指向该实例的引用
var Single=(function(){
  var instance;
  function init(){
    let _privateVar="Nebulas";
    let _privateMethod=Math.random();
    return {
      publicVar:"nebulas",
      publicMethod:function(){
        return _privateMethod;
      }  
    }
  }
  return {
    getInstance:function(){
      if(!instance){
          instance=init();
      }
      return instance;
    }
  }
})();
console.log(Single.getInstance().publicMethod());