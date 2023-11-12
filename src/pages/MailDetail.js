import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { ContextProvider } from "../contexts/EmailContext";

const MailDetail = () => {
  const { mailId } = useParams();
  const { state } = useContext(ContextProvider);

  console.log(mailId);

  return (
    <div>
      {state.mails
        .filter((mail) => mail.mId === mailId)
        .map((mail) => {
          const { content, mId, subject } = mail;
          return (
            <div key={mId} className="individual-mail">
              <div className="subject-star">
                <h3>Subject: {subject}</h3>
                {/* <button onClick={() => handleStarClick(mail)}> */}
                {/* {isStarred ? "Unstar" : "Star"} */}
                {/* </button> */}
              </div>
              <p>{content}</p>
              <div>
                <NavLink to="/" className="nav-link">
                  Go Back
                </NavLink>
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

export default MailDetail;
