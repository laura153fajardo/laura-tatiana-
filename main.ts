input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
})
basic.showString("laura")
basic.showLeds(`
    # # . # #
    # # # # #
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showString("Rubiela")
