import { useState } from "react";
import { useSelector } from "react-redux";
import { SlideSearchWrapper } from "./SlideSearch.styled";
import moment from "moment";

const SlideSearch = ({ onClose }) => {
  const { theme } = useSelector((state) => state.user.userInfo);
  const { userMessages } = useSelector((state) => state.messages);
  const [query, setQuery] = useState("");

  const TimeRender = ({ message }) => {
    const today = new Date();
    const chatDate = new Date(message.createdAt);
    const difference = today.getTime() - chatDate.getTime();
    const differenceInDays = Math.ceil(difference / (1000 * 3600 * 24));

    if (differenceInDays <= 86400) {
      return <span>Today</span>;
    } else if (differenceInDays >= 86400) {
      return <span>Yesterday</span>;
    } else if (differenceInDays >= 172800 && differenceInDays <= 604800) {
      return <span>{moment(message.createdAt).format("dddd")}</span>;
    } else {
      return <span>{moment(message.createdAt).format("L")}</span>;
    }
  };

  return (
    <SlideSearchWrapper theme={theme}>
      <div className="header">
        <div className="closeBtn" onClick={onClose} />
        <p title="contact information">Contact information</p>
      </div>
      <div className="navigation">
        <div className="searcBtn" />
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className="body">
        {!query ? (
          <h4>Search for messages with user.</h4>
        ) : (
          userMessages
            .filter((message) => message?.text?.toLowerCase().includes(query))
            .map((message) => {
              let text = message?.text;
              if (text.length > 50) {
                text = text.substring(0, 50) + "...";
              }
              const indexOfSearchedWord = text?.toLowerCase().indexOf(query);
              if (indexOfSearchedWord !== -1) {
                text =
                  text.substring(0, indexOfSearchedWord) +
                  "<span style='color: #00a884; font-weight: bolder; font-size: 15px'>" +
                  text.substring(
                    indexOfSearchedWord,
                    indexOfSearchedWord + query.length
                  ) +
                  "</span>" +
                  text.substring(indexOfSearchedWord + query.length);
              }
              return (
                <div key={message._id} className="message-content">
                  <div className="section">
                    <TimeRender message={message} />
                    <p dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                </div>
              );
            })
        )}
      </div>
    </SlideSearchWrapper>
  );
};

export default SlideSearch;
