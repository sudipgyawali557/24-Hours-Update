import React from "react";
import ModalSheet from "../components/utils/modal.utils";

/**Open  Modal
 *
 * Use to create and edit
 * @params  items object
 * */

const openModal = (Component: any, items?: Object, additionalProps?: any) => {
  ModalSheet.open({
    component: Component,
    props: {
      items,
      additionalProps,
      callback: () => {
        ModalSheet.close(0);
      },
    },
  });
};

export { openModal };
