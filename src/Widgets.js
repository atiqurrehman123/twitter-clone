import React from "react";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1291733074603106305"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ImranKhanPTI"
          option={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://www.facebook.com/atiqu555/"}
          options={{ text: "#reactjs is awesome ", via: "ImranKhanPTI" }}
        />
      </div>
    </div>
  );
}
export default Widgets;
