import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

import { colors } from "../assets/common";
import { Form, Input } from "../styles/components/SearchBarStyled";

function SearchBar() {
  const navigateTo = useNavigate();

  const [searchQuery, setSearchQuery] = useState(``);

  const handleSearch = (e) => {
    e.preventDefault();
    navigateTo(`/search-result/${searchQuery}`);
    setSearchQuery(``);
  };

  return (
    <Form onSubmit={(e) => handleSearch(e)} autoComplete="off">
      <Input
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        type="search"
        placeholder="Search for songs"
        id="search-field"
        autoComplete="off"
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
