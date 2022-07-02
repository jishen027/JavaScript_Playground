window.addEventListener("gamepadconnected", (e) => {
  console.log("gamepad connected")
  console.log(e.gamepad)
  window.requestAnimationFrame(update)
})

window.addEventListener("gamepaddisconnected", (e) => {
  console.log("gamepad disconnected")
  console.log(e.gamepad)
})

const gamepadDispaly = document.getElementById("gamepad-display")

function update() {
  const gamepads = navigator.getGamepads();
  console.log(gamepads[0])
  if (gamepads[0]) {
    const gamepadState = {
      id: gamepads[0].id,
      axis: [
        gamepads[0].axes[0].toFixed(2),
        gamepads[0].axes[1].toFixed(2),
        gamepads[0].axes[2].toFixed(2),
        gamepads[0].axes[3].toFixed(2),
      ],
      buttons: [
        { button_0: gamepads[0].buttons[0].pressed },
        { button_1: gamepads[0].buttons[1].pressed },
        { button_2: gamepads[0].buttons[2].pressed },
        { button_3: gamepads[0].buttons[3].pressed },
        { button_4: gamepads[0].buttons[4].pressed },
        { button_5: gamepads[0].buttons[5].pressed },
        { button_6: gamepads[0].buttons[6].value },
        { button_7: gamepads[0].buttons[7].value },
        { button_8: gamepads[0].buttons[8].pressed },
        { button_9: gamepads[0].buttons[9].pressed },
        { button_10: gamepads[0].buttons[10].pressed },
        { button_11: gamepads[0].buttons[11].pressed },
        { button_12: gamepads[0].buttons[12].pressed },
        { button_13: gamepads[0].buttons[13].pressed },
        { button_14: gamepads[0].buttons[14].pressed },
        { button_15: gamepads[0].buttons[15].pressed },
      ]
    }
    gamepadDispaly.textContent = JSON.stringify(gamepadState, null, 2)
  }
  window.requestAnimationFrame(update)
}
