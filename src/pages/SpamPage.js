import React, { useContext } from "react";
import { ContextProvider } from "../contexts/EmailContext";
import { NavLink } from "react-router-dom";

const SpamPage = () => {
  const { state } = useContext(ContextProvider);
  return (
    <div>
      {state.spamArr.length === 0 && (
        // <h1 className="heading-spamPage">
        //   There is no mail reported as spam...
        // </h1>
        <img
          className="img-spamPage"
          src="https://www.shutterstock.com/shutterstock/photos/2189070713/display_1500/stock-vector-empty-states-illustration-concept-on-white-background-2189070713.jpg"
          alt="image"
        />
      )}
      {state.spamArr.map((mail) => {
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
              {/* <NavLink>View Details</NavLink> */}
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

export default SpamPage;
