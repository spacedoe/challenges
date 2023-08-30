console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
// handleUserLogin(showWelcomeMessage)

// function showWelcomeMessage(userName) {
//   console.log(`Welcome ${userName}! You are logged in now.`)

// }

handleUserLogin((userName) => {
  console.log(`Welcome ${userName}! You are definitely logged in now.`)
})