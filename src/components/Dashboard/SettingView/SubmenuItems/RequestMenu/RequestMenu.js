import React from "react";
import Header from "../../Header";
import { Wrapper } from "./Request.styled";
import { HiDocumentText } from "react-icons/hi";
import { useSelector } from "react-redux";

const RequestMenu = () => {
  const { theme } = useSelector((state) => state.user.userInfo)
  return (
    <Wrapper theme={theme}>
      <Header />
      <div className="iconWrapper">
        <HiDocumentText className="icon" />
        <p>
          Create a report with your ichat account information and settings that
          you can access or redirect to another app. This report does not
          include your messages. <span>More information</span>
        </p>
      </div>
      <div className="selection">
        <HiDocumentText className="icon" />
        <span>Request Report</span>
      </div>
      <div className="infoWrapper">
        <p>
          Your report will be ready in about 3 days. You will be given a few
          weeks to download the report once it is ready.
        </p>
        <p>
          If you make changes to your account, such as changing your number or
          deleting your account, your request will be cancelled.
        </p>
      </div>
    </Wrapper>
  );
};

export default RequestMenu;
