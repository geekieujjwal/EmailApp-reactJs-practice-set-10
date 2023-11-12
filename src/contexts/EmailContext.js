import { createContext, useReducer, useState } from "react";
import { mails } from "../Data";

export const ContextProvider = createContext();

const constReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_STAR":
      const updatedStarredMails = state.mails.map((mail) =>
        mail.mId === action.payload.mId
          ? { ...mail, isStarred: !mail.isStarred }
          : mail
      );
      // console.log(updatedMails);
      return { ...state, mails: updatedStarredMails };
    case "TOGGLE_READ":
      const updatedReadMails = state.mails.map((mail) =>
        mail.mId === action.payload.mId
          ? { ...mail, unread: !mail.unread }
          : mail
      );
      return { ...state, mails: updatedReadMails };
    case "DELETE":
      const updatedDeleteMails = state.mails.filter(
        (mail) => mail.mId !== action.payload.mail.mId
      );
      return {
        ...state,
        mails: updatedDeleteMails,
        trashArr: [...state.trashArr, ...action.payload.deletedMailsArr],
      };
    case "SPAM":
      const updatedSpamMails = state.mails.map((mail) =>
        mail.mId === action.payload.mail.mId ? { ...mail, spam: true } : mail
      );
      //   console.log(updatedSpamMails);
      return {
        ...state,
        mails: updatedSpamMails,
        spamArr: [...state.spamArr, ...action.payload.spamMailsArr],
      };
    default:
      return state;
  }
};

export const EmailContext = ({ children }) => {
  const handleStarClick = (mail) => {
    dispatch({ type: "TOGGLE_STAR", payload: mail });
  };

  const handleReadClick = (mail) => {
    dispatch({ type: "TOGGLE_READ", payload: mail });
  };

  const handleDeleteClick = (mail) => {
    const deletedMailsArr = state.mails.filter((item) => mail.mId === item.mId);
    dispatch({ type: "DELETE", payload: { mail, deletedMailsArr } });
  };

  const handleSpamClick = (mail) => {
    const spamMailsArr = state.mails.filter((item) => mail.mId === item.mId);
    dispatch({ type: "SPAM", payload: { mail, spamMailsArr } });
  };

  const [state, dispatch] = useReducer(constReducer, {
    mails,
    trashArr: [],
    spamArr: [],
  });
  //   console.log(state.spamArr);

  return (
    <ContextProvider.Provider
      value={{
        state,
        dispatch,
        handleStarClick,
        handleReadClick,
        handleDeleteClick,
        handleSpamClick,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default EmailContext;
