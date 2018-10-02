//% weight=70 icon="\u30A2" color=#EC7505 block="赤外線"
namespace infrared {
    //% blockId=on block="ON"
    export function on(): void {
        for (let i = 0; i < 4; i++) {
            pins.analogWritePin(AnalogPin.P0, 512)
            pins.analogSetPeriod(AnalogPin.P0, 26.3)
            control.waitMicros(2000)
            pins.analogWritePin(AnalogPin.P0, 0)
            control.waitMicros(800)
        }
        basic.showString("ON")
    }
    //% blockId=off block="OFF"
    export function off(): void {
        for (let i = 0; i < 4; i++) {
            pins.analogWritePin(AnalogPin.P0, 512)
            pins.analogSetPeriod(AnalogPin.P0, 26.3)
            control.waitMicros(800)
            pins.analogWritePin(AnalogPin.P0, 0)
            control.waitMicros(2000)
        }
        basic.showString("OFF")
    }
}