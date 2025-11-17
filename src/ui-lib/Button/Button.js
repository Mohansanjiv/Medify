import React from "react";
import { styled } from "@mui/material/styles";
import clsx from "clsx";

const StyledButton = styled("button")(({ theme, padding }) => ({
    padding: padding || "10px 22px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 600,
    transition: "0.25s ease",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",

    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
    },

    "&:disabled": {
        backgroundColor: theme.palette.grey[400],
        color: "#fff",
        cursor: "not-allowed",
    },
}));

export default function Button({
    label,
    padding,
    className,
    sx = {},
    style = {},
    ...props
}) {
    return (
        <StyledButton
            className={clsx(className)}
            padding={padding}
            style={style}
            sx={sx}
            {...props}
        >
            {label}
        </StyledButton>
    );
}
