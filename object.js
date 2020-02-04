var cars = [];//array 선언

var car01 = {
    name : "sonata",
    ph : "500ph",
    year : "2020",
    start : function(){
        console.log("engine is starting");
    },
    stop : function(){
        console.log("engine is stopped");
    }
}

var car02 = {
    name : "volvo",
    ph : "600ph",
    year : "2020",
    start : function(){
        console.log("engine is starting");
    },
    stop : function(){
        console.log("engine is stopped");
    }
}

cars[0]=car01;//array요소 대입
cars[1]=car02;//위와 마찬가지

console.log(cars[1].name);

console.log(car01.name);
console.log(car02.ph);
console.log(car01.year);
car01.start()
car02.stop()

console.log(cars);//배열에 들어간 객체 출력