window.addEventListener("gamepadconnected", (e) => {
  console.log(`Gamepad connected at ${e.gamepad.index}: ${e.gamepad.id}`)
  const gp = navigator.getGamepads()[e.gamepad.index]
})

window.addEventListener("gamepaddisconnected", (e) => {
  console.log(`Gamepad disconnected ${e.gamepad.index}: ${e.gamepad.id}`)
})

