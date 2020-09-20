import React, {useEffect, useState} from 'react';
import Compose from '../MessageBar';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import Message from '../Message';
import moment from 'moment';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import './MessageList.css';

const MY_USER_ID = 1;
export default function MessageList(props) {
  const [messages, setMessages] = useState([])
  const {receiverID, receiverName} = props;
    const history = useHistory()
  useEffect(() => {
    getMessages();
  },[])

  const getMessages = () => {
      var params = new URLSearchParams();
      params.append("senderID", MY_USER_ID);
      params.append("receiverID", receiverID);
      var request = {
          params: params
      };
      axios.get('http://localhost:3001/msg/',request).then(response => {
          let tempMessages = response.data.map(result => {
              return {
                  id: `${result.id}`,
                  author: result.sender_id,
                  message: `${result.message}`,
                  timestamp: result.date
              };
          });
          setMessages([...messages, ...tempMessages])
      });
  }

  const renderMessages = () => {
    let i = 0;
    let messageCount = messages.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = messages[i - 1];
      let current = messages[i];
      let next = messages[i + 1];
      let isMine = current.author === MY_USER_ID;
      let currentMoment = moment(current.timestamp);

      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(currentMoment.diff(previousMoment));
        prevBySameAuthor = previous.author === current.author;

        if (prevBySameAuthor && previousDuration.as('hours') < 1) {
          startsSequence = false;
        }

        if (previousDuration.as('hours') < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.author === current.author;

        if (nextBySameAuthor && nextDuration.as('hours') < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <Message
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  }

    return(
      <div className="message-list">
        <Toolbar
          title={receiverName}
          leftItems={[
              <button className="btn" alt="back" onClick={() => {history.goBack()}}>
                  <i className="fa fa-arrow-circle-left"></i></button>,
          ]}
          rightItems={[
            <ToolbarButton key="info" icon="ion-ios-information-circle-outline" />,
            <ToolbarButton key="video" icon="ion-ios-videocam" />,
            <ToolbarButton key="phone" icon="ion-ios-call"/>
          ]}
        />

        <div className="p-2 pb-16">{renderMessages()}</div>
        <Compose
          receiverID={receiverID}
          senderID={MY_USER_ID}
          rightItems={[
          <ToolbarButton key="emoji" icon="ion-ios-happy" />,
          <ToolbarButton key="photo" icon="ion-ios-camera" />,
          <ToolbarButton key="audio" icon="ion-ios-mic" />
        ]}/>

      </div>
    );
}
