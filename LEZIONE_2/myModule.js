let sayHello = function(){
    console.log('Un saluto a tutti')
}

let bye = function(){
    console.log('Arrivederci')
}

//esporto le funzioni che voglio utilizzare nel progetto
exports.sayHello = sayHello;
exports.bye = bye;