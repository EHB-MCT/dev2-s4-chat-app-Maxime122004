"use strict";

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages();
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
            .then(function (response) {
                return response.json();
            }).then(function (messages) {
                console.log(messages);

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