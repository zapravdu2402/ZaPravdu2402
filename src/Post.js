import React from "react";
import PropTypes from "prop-types";
import {
  FacebookEmbed,
  InstagramEmbed,
  TikTokEmbed,
  TwitterEmbed,
  YouTubeEmbed,
} from "react-social-media-embed";
import TelegramEmbed from "react-telegram-embed";
import { getSocialByLink } from "./data/posts";

const Post = ({ url, ...props }) => {
  const variant = getSocialByLink(url);
  return (
    <div className="overflow-hidden" {...props}>
      <div className="post-wrapper">
        {variant === "instagram" && <InstagramEmbed url={url} />}
        {variant === "twitter" && <TwitterEmbed url={url} />}
        {variant === "facebook" && <FacebookEmbed url={url} width="100%" />}
        {variant === "telegram" && <TelegramEmbed src={url} />}
        {variant === "youtube" && <YouTubeEmbed url={url} />}
        {variant === "tiktok" && <TikTokEmbed url={url} />}
      </div>
    </div>
  );
};

Post.propTypes = {
  url: PropTypes.object,
};

export default Post;
