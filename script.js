body {
    font-family: sans-serif;
    background-color: #f0f0f0;
}

.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

#chat-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    background-color: #fff;
}

#chat-log {
    height: 300px;
    overflow-y: scroll;
    padding: 10px;
}

#input-area {
    display: flex;
    margin-top: 10px;
}

#user-input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#send-button {
    padding: 5px 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.user-message {
    text-align: right;
    margin-bottom: 5px;
}

.bot-message {
    text-align: left;
    margin-bottom: 5px;
}
