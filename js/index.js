"use strict";

const chat = {
    author: "yourName",
    init() {    
        this.fetchMessages();
    },
    sendMessage() {

        const message = {
            author: 'Bart Simspon',
            message: 'Hello'
        };

        fetch('https://dev2chat.onrender.com/message', {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
            .then(function (response) {
                return response.json();
            }).then(function (messages) {
                console.log(messages);

                document.querySelector('#messageContainer').innerHTML ="";
                messages.forEach(function (message) {

                    const htmlString = `   
                        <div class="messageItem">
                        
                            <div class="header">
                                <span class="author">${message.author}</span>
                                <span class="time">${message.created_at}</span>
                            </div>
                            <p>
                                ${message.message}
                            </p>
                        </div>`;
                    document.querySelector('#messageContainer').insertAdjacentHTML('beforeend', htmlString);
                });
            });

    },
    renderMessage(message) {
    }

};

chat.init();

window.setInterval(function (){
    chat.fetchMessages();
}, 5000);