import React from 'react';
import { Search as SearchIcon } from 'react-feather';
import styled from 'styled-components';
import { Input } from 'happyui/Input';
// import { Button } from 'happyui/Button';

const SearchContainer = styled.div`
  max-width: 500px;
`;

interface SearchProp {
  onTextInput(val: string): void;
}
function Search({ onTextInput }: SearchProp) {
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    onTextInput(value);
  }
  return (
    <SearchContainer>
      <Input name="search" placeholder="Search posts" icon={<SearchIcon />} onChange={handleInputChange} />
      {/* <Button>Search</Button> */}
    </SearchContainer>
  );
}

export default Search;
