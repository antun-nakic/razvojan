import _ from "lodash";
import Icon from "./AlBundi.jpg";

function component() {
  const element = document.createElement("div");
  element.classList.add("hello");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " +++++ ");
  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

export default component;
