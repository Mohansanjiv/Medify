import React from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Search = ({
    value = "",
    onChange = () => { },
    onSearch = () => { },
    placeholder = "Search...",
    showClear = true,
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(value);
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            elevation={2}
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 360,
                borderRadius: 2,
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />

            {showClear && value && (
                <IconButton onClick={() => onChange("")} aria-label="clear">
                    <ClearIcon />
                </IconButton>
            )}

            <IconButton type="submit" aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default Search;
