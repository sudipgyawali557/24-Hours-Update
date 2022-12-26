import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { IconButtonProps } from "@mui/material/IconButton";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useRouter } from "next/router";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const AdminNavbar = (props: any) => {
    const router = useRouter();
    const [opens, setOpens] = React.useState(false);
    const handleClicks = () => {
        setOpens((prev) => !prev);
    };

    const handleClickAways = () => {
        setOpens(false);
    };
    const handleCloses = () => {
        setOpens(false);
    };

    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: "none",
                    height: "66px",
                    display: "flex",
                    justifyContent: "center",
                    padding: { lg: "0 2rem", xs: "0 0.5rem" },
                    zIndex: "30",
                }}
                className="shadow-lg bg-gradient-to-r from-white via-yellow-600 to-yellow-600"
            >
                <Toolbar disableGutters className="flex justify-between">
                    <div className="flex flex-column items-center">
                        <Link href="/admin">
                            <img
                                src="/images/logopng.png"
                                className="lg:h-16 xs:h-10 cursor-pointer"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center">
                        <ClickAwayListener onClickAway={handleClickAways}>
                            <Box sx={{ position: "relative" }}>
                                <IconButton onClick={handleClicks}>
                                    <i className="bx bx-user-circle text-white text-3xl" />
                                </IconButton>
                                {opens ? (
                                    <div
                                        className="bg-white shadow-lg absolute top-14 z-10 w-28 text-black py-2 right-0 px-2 rounded-sm"
                                        onClick={handleCloses}
                                    >
                                        <Link href="/admin">
                                            <div className="flex items-center text-gray-900 font-medium pb-2">
                                                <i className="bx bxs-user-circle text-xl"></i>
                                                <p className="cursor-pointer px-2">
                                                    Profile
                                                </p>
                                            </div>
                                        </Link>
                                        <hr />
                                        <div className="flex items-center text-gray-900 font-medium pt-2">
                                            <i className="bx bx-log-out text-xl"></i>
                                            <Link href="/">
                                                <p className="cursor-pointer px-2">
                                                    Log out
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                ) : null}
                            </Box>
                        </ClickAwayListener>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};
export default AdminNavbar;
