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

function displayUser(user) {
  if (user.gender === "female") {
    document.body.style.backgroundColor = "rebeccapurple"
  } else {
    document.body.style.backgroundColor = "steelblue"
  }
  // 更新DOM中的用户信息
  const userDisplay = document.querySelector("#user")
  userDisplay.innerHTML = `
        <div class="flex justify-between">
            <div class="flex">
            <img class="w-48 h-48 rounded-full mr-8" src="${user.picture.large}" />
                <div class="space-y-3">
                <p class="text-xl"><span class="font-bold">姓名: </span>${user.name.first} ${user.name.last}</p>
                <p class="text-xl"><span class="font-bold">邮箱: </span>${user.email}</p>
                <p class="text-xl"><span class="font-bold">电话: </span>${user.phone}</p>
                <p class="text-xl"><span class="font-bold">位置: </span>${user.location.city}, ${user.location.country}</p>
                <p class="text-xl"><span class="font-bold">年龄: </span>${user.dob.age}</p>
                </div>
            </div>
        </div>
    `
}

function showSpinner() {
  document.querySelector(".spinner").style.display = "block"
}
function hideSpinner() {
  document.querySelector(".spinner").style.display = "none"
}
