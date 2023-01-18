import React, { useState } from "react";

const Search = () => {
    const [usernameSearch, setUsernameSearch] = useState("");

    const handleSearch = () => {
        
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    return (
        <div className="search">
            <div className="searchForm">
                <input
                    type="text"
                    placeholder="Find a user"
                    onKeyDown={handleKey}
                    onChange={(e) => {setUsernameSearch(e.target.value)}}
                    value={usernameSearch}
                />
            </div>
        </div>
    );
}

export default Search;