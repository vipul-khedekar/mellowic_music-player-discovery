import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

import { Form, Input } from "../styles/components/SearchBarStyled";
import { colors } from "../assets/common";

function SearchBar() {
  const navigateTo = useNavigate();
  const [searchQuery, setSearchQuery] = useState(``);

  function handleSearch(e) {
    e.preventDefault();
    navigateTo(`/search-result/${searchQuery}`);
    setSearchQuery(``);
  }

  return (
    <Form onSubmit={(e) => handleSearch(e)} autoComplete="off">
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        type="search"
        placeholder="Search for songs"
        autoComplete="off"
        id="search-field"
        name="search-field"
      />

      <IoSearchSharp
        style={{
          color: colors.orangish,
          fontSize: "1.5rem",
          position: "absolute",
          left: "0.75rem",
          bottom: "0.75rem",
        }}
      />
    </Form>
  );
}

export default SearchBar;