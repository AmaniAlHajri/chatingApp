import React from 'react';
import './ConversationSearch.css';

export default function ConversationSearch() {
    return (
      <div className="p-2 flex flex-col">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Contact Name"
        />
      </div>
    );
}
