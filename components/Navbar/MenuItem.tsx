import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Dropdown from "../Dropdown/Dropdown";

const MenuItem = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref: any = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (
                dropdown &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);
    // const onMouseEnter = () => {
    //     window.innerWidth > 960 && setDropdown(true);
    // };

    // const onMouseLeave = () => {
    //     window.innerWidth > 960 && setDropdown(false);
    // };
    return (
        <li
            className="menu-items nav-item w-full"
            ref={ref}
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{" "}
                        {depthLevel > 0 ? (
                            <span>&raquo;</span>
                        ) : (
                            <span className="arrow" />
                        )}
                    </button>
                    <Dropdown
                        submenus={items.submenu}
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                    />
                </>
            ) : (
                <Link href={items.url}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItem;
