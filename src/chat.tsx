import { Link } from "react-router-dom";

import mainLogo from "./assets/logo.png";
import "./chat.css";

function Chat() {
  return (
    <>
      <div className="chat-header">
        <img src={mainLogo} alt="main logo" />
      </div>
      <div className="main-div">
        <div className="main-div-top">
          <div className="main-div-top-left">
            <Link to="/">
              <button className="gradient-button">
                <span>
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.276 5.33339H2.552L6.08067 1.80473L5.138 0.862061L0 6.00006L5.138 11.1381L6.08067 10.1954L2.552 6.66673H12.276V5.33339Z"
                      fill="url(#paint0_linear_4_73)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4_73"
                        x1="0"
                        y1="6.00006"
                        x2="12.276"
                        y2="6.00006"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.17" stop-color="#14ABB2" />
                        <stop offset="0.8" stop-color="#2E598C" />
                      </linearGradient>
                    </defs>
                  </svg>
                  {"  "}&nbsp; Back to Document Selection
                </span>
              </button>
            </Link>
          </div>
          <div className="main-div-top-right">
            <div className="flex">
              <button className="gradient-button button-active">
                <span>Document 1</span>
              </button>
              <button className="gradient-button">
                <span>Document 2</span>
              </button>
            </div>
            <div className="flex">
              <button className="gradient-button">
                <span>1/15</span>
              </button>
              <button className="gradient-button">
                <span>100%</span>
              </button>
            </div>
          </div>
        </div>
        <div className="main-body">
          <div className="main-body-left">
            <div className="main-body-left-chat">
              <p>
                Ask Starling Insights questions about the documents you've
                selected, such as:
              </p>
              <div>
                <button className="gradient-button fixed-width-gradient-button">
                  <span>Which company had the highest revenue?</span>
                </button>
                <button className="gradient-button fixed-width-gradient-button">
                  <span>What are the biggest discussed risks?</span>
                </button>
                <button className="gradient-button fixed-width-gradient-button">
                  <span>What are their main business focus areas?</span>
                </button>
              </div>
            </div>
            <div className="main-body-left-bottom">
              <div></div>
              <button className="uparrow-button">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_4_92)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.5 12C1.5 14.7848 2.60625 17.4555 4.57538 19.4246C6.54451 21.3938 9.21523 22.5 12 22.5C14.7848 22.5 17.4555 21.3938 19.4246 19.4246C21.3938 17.4555 22.5 14.7848 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5C9.21523 1.5 6.54451 2.60625 4.57538 4.57538C2.60625 6.54451 1.5 9.21523 1.5 12ZM24 12C24 15.1826 22.7357 18.2348 20.4853 20.4853C18.2348 22.7357 15.1826 24 12 24C8.8174 24 5.76516 22.7357 3.51472 20.4853C1.26428 18.2348 0 15.1826 0 12C0 8.8174 1.26428 5.76516 3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12ZM12.75 17.25C12.75 17.4489 12.671 17.6397 12.5303 17.7803C12.3897 17.921 12.1989 18 12 18C11.8011 18 11.6103 17.921 11.4697 17.7803C11.329 17.6397 11.25 17.4489 11.25 17.25V8.5605L8.031 11.781C7.89017 11.9218 7.69916 12.0009 7.5 12.0009C7.30084 12.0009 7.10983 11.9218 6.969 11.781C6.82817 11.6402 6.74905 11.4492 6.74905 11.25C6.74905 11.0508 6.82817 10.8598 6.969 10.719L11.469 6.219C11.5387 6.14916 11.6214 6.09374 11.7125 6.05593C11.8037 6.01812 11.9013 5.99866 12 5.99866C12.0987 5.99866 12.1963 6.01812 12.2874 6.05593C12.3786 6.09374 12.4613 6.14916 12.531 6.219L17.031 10.719C17.1718 10.8598 17.2509 11.0508 17.2509 11.25C17.2509 11.4492 17.1718 11.6402 17.031 11.781C16.8902 11.9218 16.6992 12.0009 16.5 12.0009C16.3008 12.0009 16.1098 11.9218 15.969 11.781L12.75 8.5605V17.25Z"
                      fill="url(#paint0_linear_4_92)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_4_92"
                      x1="0"
                      y1="12"
                      x2="24"
                      y2="12"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.17" stop-color="#14ABB2" />
                      <stop offset="0.8" stop-color="#2E598C" />
                    </linearGradient>
                    <clipPath id="clip0_4_92">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
          <div className="main-body-right"></div>
        </div>
      </div>
    </>
  );
}

export default Chat;
