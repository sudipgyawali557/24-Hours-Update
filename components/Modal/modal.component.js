import { Clear } from "@styled-icons/material";
import React from "react";
import Modal from "react-modal";
import ModalUtil from "../../components/utils/modal.utils";

const ModalSheet = React.forwardRef((propsValue, ref) => {
  const {
    component: RenderInner,
    height = null,
    props,
    closable = true,
    onClose = () => {},
    closeModal = () => {},
    backdrop = true,
    whiteIcon = false,
    // whiteHeader = true,
    containerStyle: contStyle,
    wrapperStyle: wrapStyle,
    isVisible,
    fullScreen = false,
    modalOffset,
    closeIcon = true,
    modalSize = "md",
  } = propsValue;

  const getContainerMaxWidth = () => {
    if (modalSize === "xs") {
      return 550;
    } else if (modalSize === "sm") {
      return 500;
    } else if (modalSize === "md") {
      return 750;
    } else if (modalSize === "lg") {
      return "90%";
    } else {
      return "auto";
    }
  };

  const containerStyle = {
    content: {
      // display: "flex",
      position: "relative",
      left: "unset",
      right: "unset",
      top: 6,
      // bottom: "unset",
      height: "auto",
      border: "none",
      background: "white",
      padding: "20px 20px 0px",
      width: "100%",
      maxHeight: "85vh",
      maxWidth: getContainerMaxWidth(),
      ...modalOffset,
      ...contStyle,
    },
    overlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 100,
      background: "rgb(0,0,0,.4)",
    },
  };

  const onModalClose = (isClose) => {
    if (!closable) return null;
    if (isClose) {
      closeModal();
      onClose();
      ModalUtil.close();
    }
  };

  return (
    <Modal
      isOpen={isVisible || false}
      ariaHideApp={false}
      onRequestClose={onModalClose}
      shouldCloseOnOverlayClick={backdrop}
      shouldCloseOnEsc={backdrop}
      style={containerStyle}
    >
      <div
        className="modal"
        style={{
          ...wrapStyle,
          position: "relative !important",
          overflow: "hidden",
          padding: "1rem 0",
        }}
      >
        {closeIcon ? (
          // <Clear
          //     onClick={onModalClose}
          //     // fontSize="small"
          //     style={{
          //         position: "absolute",
          //         top: 0,
          //         color: "#000",
          //         right: 0,
          //         fontSize: "1rem",
          //         // zIndex: 200,
          //     }}
          // />
          // <i
          //     onClick={onModalClose}
          //     className="bx bx-window-close text-2xl absolute top-3 right-5"
          // ></i>
          <i
            onClick={onModalClose}
            className="bx bx-window-close bx-tada text-2xl absolute top-2 right-5 text-black cursor-pointer"
          ></i>
        ) : null}
        {RenderInner && <RenderInner {...props} onModalClose={onModalClose} />}
      </div>
      {/* {closeIcon ? (
                // <Clear
                //     onClick={onModalClose}
                //     fontSize="small"
                //     style={{
                //         position: "absolute",
                //         top: 38,
                //         color: "#000",
                //         right: 18,
                //         zIndex: 200,
                //     }}
                // />
                <div className="mx-0 my-4 flex justify-end">
                    <button
                        onClick={onModalClose}
                        className="bg-sky-700 text-white px-4 py-1"
                    >
                        Close
                    </button>
                </div>
            ) : null} */}
    </Modal>
  );
});
ModalSheet.displayName = "ModalSheet";
export default ModalSheet;
