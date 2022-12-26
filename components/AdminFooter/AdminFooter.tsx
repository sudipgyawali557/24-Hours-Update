import React from "react";
import { Box } from "@mui/material";

export default function AdminFooter() {
    return (
        <footer>
            <Box className="p-2 text-center bg-sky-800 text-white">
                <p className="text-sm">
                    © 2022 <span className="font-bold">24 hour update</span> -
                    All Rights Reserved.
                </p>
            </Box>
        </footer>
    );
}
