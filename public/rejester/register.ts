
const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = CreateUser.querySelector('.username').value
  const password = CreateUser.querySelector('.password').value
  const email = CreateUser.querySelector('.email').value
  post('/createUser', { username, password,email })
  .then(({ status }) => {
    if (status === 200){
      alert('register success');
      window.location.replace("../content/my_web.html");

  } 
    else alert('register failed')
  })
})
function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}