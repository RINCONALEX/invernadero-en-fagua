basic.forever(function () {
    basic.showNumber(input.temperature())
    while (input.temperature() > 30) {
        basic.showString("ALTA TEMPERATURA ALERTA")
    }
    while (input.temperature() < 8) {
        basic.showString("BAJA TEMPERATURA ALERTA")
    }
})
basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    while (pins.analogReadPin(AnalogPin.P0) > 600) {
        basic.showIcon(IconNames.Sad)
    }
    while (pins.analogReadPin(AnalogPin.P0) < 200) {
        basic.showIcon(IconNames.Skull)
    }
})
