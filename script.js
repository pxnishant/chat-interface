messages = {
    user: [],
    bot:  []
}

window.onload = () => {

    initialize()

}

const sendMessage = (sender, message) => {

    const div = document.querySelector('.' + sender) 
    const messageDIV = document.createElement('div')
    messageDIV.innerText = message
    messageDIV.classList.add('message')
    div.appendChild(messageDIV)

}

const getResponse = () => {


}


const initialize = () => {

    const button = document.getElementById('send-button')
    button.addEventListener('click', () => {
        console.log("check")
        const input = document.getElementById('chat-input')
        sendMessage('user', input.value)
        input.value = ''

    })

    const ip = document.getElementById('chat-input')

        ip.addEventListener('keydown', (e) => {
            if (e.key == 'Enter') {
                console.log("check")
                const input = document.getElementById('chat-input')
                sendMessage('user', input.value)
                input.value = ''

            }

        })

}
