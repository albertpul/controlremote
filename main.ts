let arrowLeft = images.arrowImage(ArrowNames.West)
let arrowRight = images.arrowImage(ArrowNames.East)
let arrowNorth = images.arrowImage(ArrowNames.North)
let arrowSouth= images.arrowImage(ArrowNames.South)
let counter = 0
let modulo = 0

input.onButtonPressed(Button.A, function () {
    counter = counter + 1   
    modulo = counter % 4
    switch(modulo) {
        case 0:
            arrowLeft.showImage(0);
            break
        case 1:
            arrowNorth.showImage(0);
            break
        case 2:
            arrowRight.showImage(0);
            break
        case 3:
            arrowSouth.showImage(0);
            break
    } 
 


})

input.onButtonPressed(Button.B, function () {
    radio.sendString(modulo.toString())
})


basic.forever(function () {
	
})
