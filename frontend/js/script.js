//login elements
const login = document.querySelector(".login")
const loginForm = login.querySelector(".login__form")
const loginInput = login.querySelector(".login__input")

//chat elements 59:40
const chat = document.querySelector(".chat")
const chatForm = chat.querySelector(".chat_form")
const chatInput = chat.querySelector(".chat__input")


const colors = [
    "cadetblue",
    "darkgoldenrod",
    "cornflowerblue",
    "darkhaki",
    "hotpink",
    "gold",
    "thistle",
    "snow",
    "skyblue",
    "sandybrown",
    "powderblue",
    "plum",
    "peru",
    "midnightblue",
    "mediumturquoise",
    "mediumslateblue",
    "goldenrod",
    "darkslategray"
]

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
}

const user = {id:"", name:"", color:""}

const handleSubmit = (event) => {
    event.preventDefault()

    user.id = crypto.randomUUID()
    user.name = loginInput.value
    user.color = getRandomColor()

    login.style.display = "none"
    chat.style.display = "flex"

    console.log(user)
}

loginForm.addEventListener("submit", handleSubmit)  