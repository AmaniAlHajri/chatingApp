import React, {useState, useEffect} from 'react';
import ConversationSearch from '../ConversationSearch';
import ConversationListItem from '../ConversationListItem';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import axios from 'axios';

export default function ConversationList(props) {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    getConversations()
  },[])

 const DEFAULT_ID = 1;
 const getConversations = () => {
     var params = new URLSearchParams();
     params.append("senderID", DEFAULT_ID);
     var request = {
         params: params
     };
    axios.get('http://localhost:3001/users', request).then(response => {
        let newConversations = response.data.map(result => {
                return {
                    id: result.id,
                    photo: `${result.photo}`,
                    name: `${result.first_name} ${result.last_name}`,
                    text: 'Say something..'
                };
        });
        setConversations([...conversations, ...newConversations])
    });
  }

    return (
      <div className="flex flex-col">
        <Toolbar
          title="Contacts List"
          leftItems={[
            <ToolbarButton key="cog" icon="ion-ios-cog" />
          ]}
          rightItems={[
            <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
          ]}
        />
        <ConversationSearch/>
        {
          conversations.map(conversation =>
            <ConversationListItem
              data={conversation}
            />
          )
        }
      </div>
    );
}
