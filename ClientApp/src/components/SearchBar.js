import React from "react";
import "./SearchBar.css";

const STYLES = ["Search--light", "Search--dark"];

const SIZES = ["Search--menu", "Search--main"];

export const Search = ({ placeholder, searchStyle, searchSize }) => {
  var checkSearchStyle = STYLES.includes(searchStyle) ? searchStyle : STYLES[0];

  var checkSearchSize = SIZES.includes(searchSize) ? searchSize : SIZES[0];

  return (
    <input
      className={"search ${checkSearchStyle} ${checkSearchSize}"}
      placeholder={placeholder}
    />
  );
};
//https://youtu.be/3nLTB_E6XAM
