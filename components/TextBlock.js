import React from "react";
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const TextBlock = ({ blok }) => {
  // console.log("text block", blok);

  let textColor = (val) => {
    switch (blok.color) {
      case "text-white":
        return "textWhite";
        break;
      case "text-black":
        return "textBlack";
        break;
      default:
        return " ";
        break;
    }
  };
  let textAlign = (val) => {
    switch (blok.textAlign) {
      case "text-left":
        return "textLeft";
        break;
      case "text-center":
        return "textCenter";
        break;
      case "text-right":
        return "textRight";
        break;
      default:
        return "textLeft";
        break;
    }
  };
  let paddingLeft = (val) => {
    switch (blok.paddingLeft) {
      case "pl-8":
        return "pL8";
        break;
      case "pl-16":
        return "pL16";
        break;
      case "pl-20":
        return "pL20";
        break;
      case "pl-64":
        return "pL64";
        break;
      default:
        return " ";
        break;
    }
  };
  let padY = (val) => {
    switch (blok.paddingY) {
      case "py-10":
        return "pY10";
        break;
      case "py-16":
        return "pY16";
        break;
      case "py-20":
        return "pY20";
        break;
      case "py-24":
        return "pY24";
        break;
      case "py-40":
        return "pY40";
        break;
      case "py-50":
        return "pY50";
        break;
      case "py-75":
        return "pY75";
        break;
      default:
        return "pY0";
        break;
    }
  };
  let maxWidth = (val) => {
    switch (blok.maxWidth) {
      case "max-w-xs":
        return "maxWXs";
        break;
      case "max-w-sm":
        return "maxWSm";
        break;
      case "max-w-2xl":
        return "maxW2Xl";
        break;
      case "max-w-3xl":
        return "maxW3Xl";
        break;
      case "max-w-4xl":
        return "maxW4Xl";
        break;
      case "max-w-5xl":
        return "maxW5Xl";
        break;
      case "max-w-6xl":
        return "maxW6Xl";
        break;
      case "max-w-7xl":
        return "maxW7Xl";
        break;
      default:
        return "maxWNone";
        break;
    }
  };

  let alignMargin = (val) => {
    switch (blok.alignMargin) {
      case "mx-auto":
        return "mxAuto";
        break;
      case "ml-auto":
        return "mlAuto";
        break;
      case "ml-0":
        return "ml0";
        break;
      default:
        return "mxAuto";
        break;
    }
  };

  const selectedTag = blok.selectHTag || "h2";

  const classes = [blok?.titleFont, "mb-2"];

  return (
    <div
      className={`z-10 relative leading-loose [&>h1]:my-6 [&>h2]:text-4xl [&>h3]:text-2xl [&>h4]:text-xl [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:my-5 text_block ${paddingLeft(
        blok.paddingLeft
      )} ${textAlign(blok.textAlign)} ${maxWidth(blok.maxWidth)} ${textColor(
        blok.color
      )} ${alignMargin(blok.alignMargin)} ${padY(blok.paddingY)} ${
        blok?.width
      } ${blok?.name}`}
      {...storyblokEditable(blok)}
    >
      {blok.titleLabel &&
        React.createElement(
          selectedTag,
          {
            className: classes.join(" "),
            style: {
              color: blok?.color?.color,
            },
          },
          blok.titleLabel
        )}
      {render(blok.content)}
    </div>
  );
};

export default TextBlock;
