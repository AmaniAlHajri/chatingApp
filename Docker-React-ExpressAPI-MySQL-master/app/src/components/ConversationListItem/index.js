import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';
import {Link} from "react-router-dom";

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })

    const { photo,id, name, text } = props.data;
    const msg = "/msg?id="+id+"&name="+name
    return (
      <Link className="conversation-list-item" to={msg} style={{ textDecoration: 'none' }}>
        <img className="conversation-photo" src={photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{name}</h1>
          <p className="conversation-snippet">{text}</p>
        </div>
      </Link>
    );
}
