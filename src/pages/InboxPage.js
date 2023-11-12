import { useContext, useState } from "react";

import "./Pages.css";
import { ContextProvider } from "../contexts/EmailContext";
import { NavLink } from "react-router-dom";

const InboxPage = () => {
  const {
    state,
    handleStarClick,
    handleReadClick,
    handleDeleteClick,
    handleSpamClick,
  } = useContext(ContextProvider);

  const [filters, setFilters] = useState({
    isUnreadChecked: false,
    isStarredChecked: false,
  });

  const checkTypeFilteredArr = (arr) => {
    if (filters.isUnreadChecked && filters.isStarredChecked) {
      return arr.filter((mail) => mail.unread && mail.isStarred);
    } else if (filters.isUnreadChecked) {
      return arr.filter((mail) => mail.unread);
    } else if (filters.isStarredChecked) {
      return arr.filter((mail) => mail.isStarred);
    } else {
      return arr;
    }
  };

  const typeFilteredArr = checkTypeFilteredArr(state.mails);

  const handleCheckboxClick = (e) => {
    if (e.target.value === "unread") {
      setFilters((prev) => ({
        ...prev,
        isUnreadChecked: !prev.isUnreadChecked,
      }));
    } else if (e.target.value === "starred") {
      setFilters((prev) => ({
        ...prev,
        isStarredChecked: !prev.isStarredChecked,
      }));
    }
  };

  const unreadMailsArr = state.mails.filter((mail) => mail.unread);

  return (
    <div>
      <div className="filters-box">
        <span>Filters </span>
        <div className="input-checkbox">
          <div>
            <input
              type="checkbox"
              id="unread"
              value="unread"
              onChange={handleCheckboxClick}
            />
            <label htmlFor="unread">Show unread mails</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="starred"
              value="starred"
              onChange={handleCheckboxClick}
            />
            <label htmlFor="starred">Show starred mails</label>
          </div>
        </div>
      </div>
      <h3>Unread: {unreadMailsArr.length}</h3>
      {typeFilteredArr.map((mail) => {
        const { content, isStarred, mId, subject, unread } = mail;
        return (
          <div
            key={mId}
            className={`individual-mail ${unread ? "blue" : "white"}`}
          >
            <div className="subject-star">
              <h3>Subject: {subject}</h3>
              <button
                onClick={() => handleStarClick(mail)}
                className="star-btn"
              >
                {isStarred ? (
                  <img
                    style={{ cursor: "pointer" }}
                    width="20px"
                    src="https://www.svgrepo.com/show/13695/star.svg"
                    alt="img"
                  />
                ) : (
                  <img
                    style={{ cursor: "pointer" }}
                    width="20px"
                    src="https://www.svgrepo.com/show/172818/star-outline.svg"
                    alt="img"
                  />
                )}
              </button>
            </div>
            <p>{content}</p>
            <div className="operations">
              <NavLink to={`/inbox/${mId}`} className="nav-link">
                View Details
              </NavLink>
              <div className="delete-read-spam-buttons">
                <button
                  onClick={() => handleDeleteClick(mail)}
                  className="delete-btn"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleReadClick(mail)}
                  className="read-btn"
                >
                  {unread ? "Mark as Read" : "Mark as Unread"}
                </button>
                <button
                  onClick={() => handleSpamClick(mail)}
                  disabled={mail.spam}
                  className="spam-btn"
                >
                  {mail.spam ? "Reported Spam" : "Report Spam"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InboxPage;
