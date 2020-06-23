var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true, delay: 100
    
});

typewriter.typeString('junior at uc berkeley (go bears!)')
    .pauseFor(800)
    .deleteAll()
    .typeString('anime fanatic (currently watching: Haikyuu)')
    .pauseFor(800)
    .deleteAll()
    .typeString('boba/coffee addict')
    .pauseFor(800)
    .deleteAll()
    .typeString('dog person & corgi lover')
    .pauseFor(800)
    .deleteAll()
    .typeString('bay area native')
    .pauseFor(800)
    .deleteAll()
    .typeString('r&b and lo-fi music enthusiast')
    .pauseFor(800)
    .deleteAll()
    .start();
    

