import React from 'react';
import ConversationList from '../ConversationList';

export default function ContactList(props) {
    return (
      <div className="grid w-screen h-screen bg-gray-200">
          <div className="relative overflow-y-scroll scrolling-touch bg-white row-start-1">
              <ConversationList />
          </div>
      </div>
    );
}
