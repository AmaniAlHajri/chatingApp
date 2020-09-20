import React from 'react';
import MessageList from '../MessageList';
import {useLocation} from "react-router-dom";

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Char(props) {
    let query = useQuery();
    const name = query.get("name")
    const id = query.get("id")
    return (
      <div className="grid w-screen h-screen bg-gray-200">
          <div className="relative overflow-y-scroll scrolling-touch bg-white row-start-1">
              <MessageList receiverID={id} receiverName={name}/>
          </div>
      </div>
    );
}
