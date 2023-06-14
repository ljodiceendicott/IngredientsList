import React, { Component } from "react";
import SearchBar from "../SearchBar";
import "./SearchPage.css";

export class SearchPage extends Component {
  static displayName = SearchPage.name;

  render() {
    return (
      <>
        <div id="search-area">
          <h3>Search for Component</h3>
          <SearchBar />{" "}
        </div>
      </>
    );
  }
}
