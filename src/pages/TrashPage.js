import React, { useContext } from "react";
import { ContextProvider } from "../contexts/EmailContext";
import { NavLink } from "react-router-dom";

const TrashPage = () => {
  const { state } = useContext(ContextProvider);
  return (
    <div>
      {state.trashArr.length === 0 && (
        // <h1 className="heading-trashPage">There is no mail in trash...</h1>
        <img
          className="img-trashPage"
          src="https://www.shutterstock.com/shutterstock/photos/2189070713/display_1500/stock-vector-empty-states-illustration-concept-on-white-background-2189070713.jpg"
          alt="image"
        />
      )}
      {state.trashArr.map((mail) => {
        const { content, isStarred, mId, subject, unread } = mail;
        return (
          <div key={mId} className="individual-mail">
            <div className="subject-star">
              <h3>Subject: {subject}</h3>
              {/* <button onClick={() => handleStarClick(mail)}> */}
              {/* {isStarred ? "Unstar" : "Star"} */}
              {/* </button> */}
            </div>
            <p>{content}</p>
            <div className="operations">
              {/* <NavLink to={`/inbox/${mId}`}>View Details</NavLink> */}
              <div>
                {/* <button onClick={() => handleDeleteClick(mail)}>Delete</button> */}
                {/* <button onClick={() => handleReadClick(mail)}>
                  {unread ? "Mark as Read" : "Mark as Unread"}
                </button> */}
                {/* <button>Report Spam</button> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrashPage;
