// import React, { RefObject } from "react";
// import "../styles/Fab.css";

// interface FABProps {
//   fabLabelRef: RefObject<HTMLLabelElement>;
// }

// const FAB: React.FC<FABProps> = ({ fabLabelRef }) => {
//   return (
//     <div className="fab-wrapper">
//       <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
//       <label ref={fabLabelRef} className="fab" htmlFor="fabCheckbox">
//         <span className="fab-dots fab-dots-1"></span>
//         <span className="fab-dots fab-dots-2"></span>
//         <span className="fab-dots fab-dots-3"></span>
//       </label>
//       <div className="fab-wheel">
//         <a className="fab-action fab-action-1">
//           <i className="fas fa-question"></i>Home
//         </a>
//       </div>
//     </div>
//   );
// };

// export default FAB;

import React, { RefObject, useState } from "react";
import "../styles/Fab.css";

interface FABProps {
  fabLabelRef: RefObject<HTMLLabelElement>;
}

const FAB: React.FC<FABProps> = ({ fabLabelRef }) => {
  const [showChatBox, setShowChatBox] = useState(false);

  const toggleChatBox = () => {
    setShowChatBox(!showChatBox);
  };

  return (
    <div className="fab-wrapper">
      <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
      <label ref={fabLabelRef} className="fab" htmlFor="fabCheckbox" onClick={toggleChatBox}>
        <span className="fab-dots fab-dots-1"></span>
        <span className="fab-dots fab-dots-2"></span>
        <span className="fab-dots fab-dots-3"></span>
      </label>
      {showChatBox && (
        <div className="chat-box">
          {/* Chat box content */}
          <div className="chat-messages">
            {/* Render old chat messages here */}
          </div>
          <input type="text" className="chat-input" placeholder="Type your message..." />
        </div>
      )}
    </div>
  );
};

export default FAB;
