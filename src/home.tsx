// import { useState } from "react";
// import React from "react";
import { Link } from "react-router-dom";

// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import {
//   Button,
//   FormControl,
//   FormHelperText,
//   Grid,
//   Typography,
// } from "@mui/material";
// import { SelectChangeEvent } from "@mui/material/Select";

import mainLogo from "./assets/logo.png";
import mainGif from "./assets/Iframe → image.gif";
import secondImg from "./assets/211.png";
import thirdImg from "./assets/Untitled design 1.png";
import forthImg from "./assets/31.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./home.css";

// import "./App.css";

function Home() {
  // const [count, setCount] = useState(0);
  // const [age, setAge] = React.useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <>
      <div className="header">
        <img src={mainLogo} alt="main logo" />
      </div>
      <div className="main-top">
        <img src={mainGif} alt="main gif" />
        <div className="main-top-over">
          <div className="main-top-text">
            <h2>
              Empowering outcomes for governance, behavioral, and other
              nonfinancial risks
            </h2>
            <p>
              Effortlessly access actionable information from leaders and
              experts
            </p>
          </div>
          <div className="main-top-bottom">
            <h3>Start your conversation below:</h3>
            <div className="main-chat">
              <div className="user-chat chat-line">
                <div className="chat-msg">What is finance?</div>
              </div>
              <div className="bot-chat chat-line">
                <div className="chat-msg">
                  Finance is the dfsklfjsl;kdfjlskjf;ls
                  jflksjldkfjslkfja;lsdajlkf alkjfjakl;fjlksadj f;lksajdf;lka
                  sjdlfka
                </div>
              </div>
              <div className="user-chat chat-line">
                <div className="chat-msg">What is finance?</div>
              </div>
              <div className="bot-chat chat-line">
                <div className="chat-msg">
                  Finance is the dfsklfjsl;kdfjlskjf;ls
                  jflksjldkfjslkfja;lsdajlkf alkjfjakl;fjlksadj f;lksajdf;lka
                  sjdlfka
                </div>
              </div>
              <div className="user-chat chat-line">
                <div className="chat-msg">What is finance?</div>
              </div>
              <div className="bot-chat chat-line">
                <div className="chat-msg">
                  Finance is the dfsklfjsl;kdfjlskjf;ls
                  jflksjldkfjslkfja;lsdajlkf alkjfjakl;fjlksadj f;lksajdf;lka
                  sjdlfka
                </div>
              </div>
            </div>
            <div className="main-chat-bottom">
              <div>
                <input className="prompt-input"></input>
              </div>
              <button className="send-button">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_54_16)">
                    <path
                      d="M15.9593 0.476362C7.32827 0.476362 0.331421 7.47322 0.331421 16.1043C0.331421 24.7353 7.32827 31.7322 15.9593 31.7322C24.5904 31.7322 31.5872 24.7353 31.5872 16.1043C31.5872 7.47322 24.5904 0.476363 15.9593 0.476362Z"
                      fill="url(#paint0_linear_54_16)"
                    />
                    <path
                      d="M17.4571 23.9576C17.3098 23.9576 17.089 23.884 16.9418 23.8104C16.5738 23.5895 16.4266 23.2951 16.2057 22.7063L14.2919 17.7743L9.35993 15.8605C8.77106 15.6396 8.47659 15.4924 8.25579 15.1243C8.10859 14.8299 8.10859 14.3883 8.25579 14.0938C8.47659 13.7257 8.77106 13.5785 9.35993 13.3577L21.8001 8.49938C22.3154 8.27858 22.6099 8.20498 23.0515 8.27858C23.3459 8.49938 23.6404 8.79385 23.714 9.08825C23.8612 9.45633 23.714 9.8244 23.4931 10.3397L18.7085 22.7799C18.4877 23.3687 18.3404 23.6632 17.9724 23.884C17.8251 23.9576 17.6043 23.9576 17.4571 23.9576ZM15.764 17.4063L17.4571 21.8229L21.3584 11.7383L15.764 17.4063ZM10.3169 14.6827L14.7335 16.3758L20.4015 10.7077L10.3169 14.6827Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_54_16"
                      x1="0.331421"
                      y1="16.1043"
                      x2="31.5872"
                      y2="16.1043"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.12" stop-color="#14ABB2" />
                      <stop offset="0.905" stop-color="#2E598C" />
                    </linearGradient>
                    <clipPath id="clip0_54_16">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <div>
              <Link to="/chat">
                <button className="gradient-button button-active">
                  <span>Start Your Conversation</span>
                </button>
              </Link>
            </div>
            {/* <Grid>
              <Typography sx={{ fontFamily: "ForzaMedium" }}>
                Add up to 10 docs
              </Typography>
              <FormControl size="small">
                <Link to="/chat">
                  <Button
                    sx={{
                      marginTop: "20px",
                      borderRadius: "18px",
                      width: "320px",
                      color: "white",
                      backgroundImage:
                        "linear-gradient(to right, #14ABB2, #2E598C)",
                    }}
                  >
                    Start your conversation
                  </Button>
                </Link>
              </FormControl>
            </Grid> */}
          </div>
        </div>
      </div>
      <div className="main-second">
        <div>
          <p>Starling Insights presents</p>
          <h3>The next step in analyzing complex financial documents</h3>
          <div>
            <h4>
              Take a peek under the hood and stream insights directly from the
              algorithm
            </h4>
            <br />
            <h5 className="">
              Starling Insights does more than give you the answer. It helps you
              understand how that answer was generated in the first place.
            </h5>
          </div>
          <img src={thirdImg} alt="third image" />
        </div>
        <img src={secondImg} alt="second image" />
      </div>
      <div className="main-three">
        <div className="main-three-left">
          <img src={forthImg} />
          <div>
            <h3>
              Extract meaningful insight from inquiries across multiple
              documents
            </h3>
            <p>
              With the ability to simultaneously examine multiple documents,
              Starling Insights provides comprehensive insights, enabling deep
              comparisons and contrasts.
            </p>
          </div>
        </div>
        <div className="main-three-right">
          <h3>
            Dive deeper into your response by viewing citations at the paragraph
            level
          </h3>
          <p>
            Navigate through dense financial information with precision. Our
            tool guides you to paragraph-level citations across multiple
            documents, enabling an unmatched level of clarity and comprehension.
          </p>
        </div>
      </div>
      <div className="footer">
        <div>
          <h3>Interested?</h3>
          <h4>
            Get in touch to discuss enterprise use cases or provide feedback
          </h4>
          {/* <FormControl size="small" sx={{ paddingY: "15px" }}>
            <Button
              sx={{
                borderRadius: "18px",
                width: "140px",
                fontWeight: "unset",
                color: "white",
                backgroundImage: "linear-gradient(to right, #14ABB2, #2E598C)",
              }}
            >
              Get in touch
            </Button>
          </FormControl> */}
          <button className="gradient-button button-active">
            <span>Get in touch</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
