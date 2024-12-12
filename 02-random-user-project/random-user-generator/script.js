function featchUser() {
  showSpinner()
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => {
      const user = data.results[0]
      displayUser(user)
      hideSpinner()
    })
}
