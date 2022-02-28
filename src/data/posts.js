/**
 * variants:
 * instagram - any public instagram post (stories are not supported)
 * twitter - any twitter post
 * facebook - any public facebook post
 * telegram - any public telegram channel post
 * linkedin - linkedin post
 * youtube - a youtube video
 * tiktok - a tiktok video
 */

export const getSocialByLink = (url) => {
  if (url.includes("tiktok.com/")) return "tiktok";
  if (url.includes("t.me/")) return "telegram";
  if (url.includes("twitter.com/")) return "twitter";
  if (url.includes("instagram.com/")) return "instagram";
  if (url.includes("facebook.com/")) return "facebook";

  return "";
};

const links = [
  "https://www.tiktok.com/@dad.joker/video/7068199374479789318",
  "https://t.me/russianexta/23705",
  "https://t.me/full_of_hatred/521",
  "https://twitter.com/al_kasatkin/status/1497329436181639171",
  "https://twitter.com/stuffy_den/status/1497264616828776453",
  "https://twitter.com/alexey_minyaylo/status/1497874449894457344",
  "https://twitter.com/fbkinfo/status/1498261245396463619",
  "https://twitter.com/n5mWiEtlPDy46Ba/status/1498268288241049606",
  "https://www.facebook.com/fireofthemind/posts/5464085523619654",
  "https://www.instagram.com/tv/CahVqRTBRWE/",
  "https://www.facebook.com/makarovkv/posts/4987818091262129",
];

export default links;
