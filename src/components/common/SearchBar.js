import { Space, Input } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';

const { Search } = Input;

const SearchBar = () => {
  // set on search to api data
  const [onSearch, setonSearch] = useState(null);
  // loading state
  const [loading, setLoading] = useState(null);

  return (
    // need to center the search bar and add family promise logo?
    <nav class="search">
      <Space direction="horizontal">
        <Search
          placeholder="Search Cases"
          enterButton="Search"
          size="large"
          // set to load only when button is pushed
          onSearch={onSearch}
          // loading
        />
      </Space>
    </nav>
  );
};

export default SearchBar;
