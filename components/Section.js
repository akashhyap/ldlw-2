import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import React from "react";

const Section = ({ blok }) => {
  // console.log("Section", blok);
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

  const addedClasses = {
    backgroundColor: blok?.background_color?.color,
    marginTop: blok?.marginTop,
    marginBottom: blok?.marginBottom,
    paddingTop: blok?.paddingTop,
    paddingBottom: blok?.paddingBottom,
    paddingLeft: blok?.paddingLeft,
  };

  return (
    <div
      className="relative w-full"
      style={addedClasses}
      {...storyblokEditable(blok)}
    >
      <div
        className={`section_block ${maxWidth(blok?.maxWidth)} ${
          blok?.grid ? "grid gap-10 " + grid(blok?.grid) : ""
        } ${alignItems(blok?.itemAlign)}`}
      >
        {blok?.body?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default Section;
