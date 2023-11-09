import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

const Grid = ({ blok }) => {
  // console.log("grid", blok);
  let grid = (val) => {
    switch (blok.grid) {
      case "grid-cols-2":
        return "g-cols-2";
        break;
      case "grid-cols-3":
        return "g-cols-3";
        break;
      case "grid-cols-4":
        return "g-cols-4";
        break;
      default:
        return "g-cols-1";
        break;
    }
  };
  let alignItems = (val) => {
    switch (blok.itemAlign) {
      case "item-center":
        return "itemCenter";
        break;
      case "item-end":
        return "itemEnd";
        break;
      default:
        return "itemStart";
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
  let padTop = (val) => {
    switch (blok.paddingTop) {
      case "pt-10":
        return "pT10";
        break;
      case "pt-28":
        return "pT28";
        break;
      case "pt-32":
        return "pT32";
        break;
      default:
        return " ";
        break;
    }
  };
  let padBottom = (val) => {
    switch (blok.paddingBottom) {
      case "pb-16":
        return "pB16";
        break;
      default:
        return " ";
        break;
    }
  };
  return (
    <div
      className={`grid_section w-full ${
        blok.display === "block" ? "block" : "grid gap-2"
      } lg:gap-10 rounded-lg ${blok.reverse ? "grid_reverse" : ""} ${padY(
        blok.paddingY
      )} ${padTop(blok.paddingTop)} ${padBottom(blok.paddingBottom)} ${maxWidth(blok.maxWidth)} ${grid(blok.grid)} ${alignItems(
        blok.itemAlign
      )}`}
      {...storyblokEditable(blok)}
    >
      {blok?.columns?.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
