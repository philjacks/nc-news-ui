import footballer from "../img/footballer-icon.png";
import chef from "../img/chef-icon.png";
import code from "../img/code-icon.png";

export const generateIcon = (topic) => {
  let icon;

  if (topic === "football") {
    icon = footballer;
  }

  if (topic === "coding") {
    icon = code;
  }

  if (topic === "cooking") {
    icon = chef;
  }

  return icon;
};
