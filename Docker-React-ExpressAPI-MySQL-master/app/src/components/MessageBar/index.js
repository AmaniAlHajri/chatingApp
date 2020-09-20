import React, {useState} from 'react';
import './MessageBar.css';
import '../MessageList/index'
import axios from "axios";

export default function Compose(props) {

    const [message, setMessage] = useState('')
    const receiverID = props.receiverID
    const senderID = props.senderID


    async function sendMessage() {
        axios.post(`http://localhost:3001/msg`, {message, receiverID, senderID})
            .then(resp => {
                console.log(resp.data);
            });
        reloadPage()
    }

    const handleKeypress = event => {
        if (event.keyCode === 13) {
            sendMessage()
        }
    };

    function reloadPage() {
        window.location.reload(false);
    }

    return (
      <div className="compose">
        <input
          type="text"
          name="message2"
          className="compose-input"
          placeholder="Type a message"
          onChange={event => setMessage(event.target.value)}
          onKeyDown={(e) => handleKeypress(e) }
        />
          <button className="btn btn-default btn-sm" alt="back" onClick={sendMessage}>
              <i className="glyphicon glyphicon-send"></i></button>,
          {props.rightItems}
      </div>
    );
}
