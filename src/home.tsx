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
            {/* <Grid
              container
              item
              xs={4}
              sm={8}
              md={12}
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: "center",
                width: "70%",
                margin: "0px auto",
              }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <FormControl fullWidth size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    displayEmpty
                    onChange={handleChange}
                    sx={{
                      marginX: "auto",
                      borderRadius: "18px",
                      width: "250px",

                      borderImage:
                        "linear-gradient(to right, #14ABB2, #2E598C)",
                      color: "black",
                      "&:hover": {
                        backgroundImage:
                          "linear-gradient(to right, #14ABB2, #2E598C)",

                        color: "white",
                      },
                      "&.Mui-focused": {
                        backgroundImage:
                          "linear-gradient(to right, #14ABB2, #2E598C)",

                        color: "white",
                      },
                    }}
                  >
                    <MenuItem value={""}>Search by topic</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <FormControl fullWidth size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    displayEmpty
                    onChange={handleChange}
                    sx={{
                      marginX: "auto",
                      borderRadius: "18px",
                      width: "250px",

                      borderImage:
                        "linear-gradient(to right, #14ABB2, #2E598C)",
                      color: "black",
                      "&:hover": {
                        backgroundImage:
                          "linear-gradient(to right, #14ABB2, #2E598C)",

                        color: "white",
                      },
                      "&.Mui-focused": {
                        backgroundImage:
                          "linear-gradient(to right, #14ABB2, #2E598C)",

                        color: "white",
                      },
                    }}
                  >
                    <MenuItem value={""}>Search by expert</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <FormControl fullWidth size="small">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    displayEmpty
                    onChange={handleChange}
                    sx={{
                      marginX: "auto",
                      borderRadius: "18px",
                      width: "250px",

                      borderImage:
                        "linear-gradient(to right, #14ABB2, #2E598C)",
                      color: "black",
                      "&:hover": {
                        backgroundImage:
                          "linear-gradient(to right, #14ABB2, #2E598C)",

                        color: "white",
                      },
                      "&.Mui-focused": {
                        backgroundImage:
                          "linear-gradient(to right, #14ABB2, #2E598C)",

                        color: "white",
                      },
                    }}
                  >
                    <MenuItem value={""}>Search by date range</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid>
              <FormControl size="small">
                <Button
                  sx={{
                    borderRadius: "18px",
                    width: "120px",
                    fontWeight: "unset",
                    color: "white",
                    backgroundImage:
                      "linear-gradient(to right, #14ABB2, #2E598C)",
                  }}
                >
                  Add
                </Button>
                <FormHelperText sx={{ textAlign: "center" }}>
                  Shift + Enter to <br />
                  add to list
                </FormHelperText>
              </FormControl>
            </Grid> */}
            <div>
              {/* <h3>
                Optionally use the document selector above to combine new data
                with Starling AI for instant analysis
              </h3> */}
            </div>
            {/* <Grid
              sx={{
                margin: "20px 40px",
                height: "250px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#14ABB2",
              }}
            >
              <Typography
                variant="h3"
                sx={{ width: "70%", fontFamily: "ForzaMedium" }}
              >
                Optionally use the document selector above to combine new data
                with Starling AI for instant analysis
              </Typography>
            </Grid> */}
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
