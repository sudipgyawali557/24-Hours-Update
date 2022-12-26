import React from "react";
import SlidingPane from "../components/utils/slidingPane.utils";

/**Open Category Modal
 *
 * Use to create and edit catgory
 * @params  items object
 * */

interface SlidePaneProps {
  Component: any;
  updateOnEdit: Function;
  updateOnCreate: Function;
  data: any;
  roles?: [];
}
const openSlidePane = (props: SlidePaneProps) => {
  SlidingPane.open({
    component: props.Component,
    props: {
      items: props.data,
      callback: () => {
        SlidingPane.close(null);
      },
      updateOnCreate: props.updateOnCreate,
      updateOnEdit: props.updateOnEdit,
      roles: props.roles,
    },
  });
};

export { openSlidePane };
