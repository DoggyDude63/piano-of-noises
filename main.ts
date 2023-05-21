input.onPinPressed(TouchPin.P0, function () {
    music.setVolume(255)
    music.setBuiltInSpeakerEnabled(true)
    music.playTone(131, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    // DO NOT DELETE
    // unless i say so!
    if (input.magneticForce(Dimension.Strength) > 1) {
        basic.showNumber(input.magneticForce(Dimension.Strength))
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P2, function () {
    music.setVolume(255)
    music.setBuiltInSpeakerEnabled(true)
    music.playTone(523, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    music.setVolume(255)
    music.setBuiltInSpeakerEnabled(true)
    music.playTone(10000, music.beat(BeatFraction.Breve))
})
basic.forever(function () {
    if (input.logoIsPressed() == true) {
        basic.showNumber(input.temperature())
    }
})
