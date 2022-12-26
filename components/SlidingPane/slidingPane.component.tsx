import React from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import SlidingPaneUtil from "../utils/slidingPane.utils";
import CloseIcon from "@mui/icons-material/Close";

export interface SlidingPaneProps {
    component?: React.FC<any>;
    width?: string;
    props?: { [key: string]: unknown };
    closeOnEsc?: boolean;
    isVisible?: boolean;
    closeIcon?: boolean;
    position?: "right" | "left" | "bottom";
}

const SlidingPaneSheet = React.forwardRef(
    (propsValue: SlidingPaneProps, ref) => {
        const {
            component: RenderInner,
            width = "320px",
            props,
            closeOnEsc = true,
            isVisible,
            closeIcon = true,
            position = "right",
        } = propsValue;

        const onModalClose = () => {
            SlidingPaneUtil.close(0);
        };
        const onModalCloses = () => {
            // SlidingPaneUtil.close(0);
        };

        return (
            <SlidingPane
                className="bg-gray-50"
                overlayClassName="overlayClassName"
                isOpen={isVisible}
                onRequestClose={onModalCloses}
                shouldCloseOnEsc={closeOnEsc}
                width={width}
                from={position}
                hideHeader
            >
                <div className="mt-5">
                    {RenderInner && <RenderInner {...props} />}
                </div>
                {closeIcon ? (
                    <CloseIcon
                        className="absolute cursor-pointer top-2 right-5 text-red-900 text-md"
                        onClick={onModalClose}
                    />
                ) : null}
            </SlidingPane>
        );
    }
);
SlidingPaneSheet.displayName = "SlidingPaneSheet";
export default SlidingPaneSheet;
