import React, { Component } from "react";
import SlidingPane, { SlidingPaneProps } from "./slidingPane.component";

export interface SlidingPaneOpenParams extends SlidingPaneProps {
  component?: React.FC<any>; // React FC as component
  ref?: any; // @todo specify ref object
  id?: number;
}

export default class SlidingPaneWrapper extends Component<
  {},
  { panes: SlidingPaneOpenParams[] }
> {
  state: any = {
    panes: [], // Array maintained for opening multiple modals at the same time
  };

  totalIndex: number = 0;

  open = ({ ...args }: SlidingPaneOpenParams) => {
    const sheet = { ...args };

    let { panes } = this.state;

    // isVisible controls the visibility of bottomsheet
    this.totalIndex++;

    // if (sheet.fullScreen) {
    //     sheet.containerStyle = { borderTopLeftRadius: 0, borderTopRightRadius: 0 }
    //     sheet.height = Height;
    //     sheet.whiteHeader = false;
    // }
    (sheet as any).isVisible = true;
    (sheet as any).id = this.totalIndex;

    // ref controls the bottomsheet behaviour, like closing the sheet our update the modal
    if (!sheet.ref) {
      sheet.ref = React.createRef();
    }
    document.body.style.overflow = "visible";
    document.body.className = "hide_scroll";

    panes.push({ ...sheet });
    this.setState({ panes });
  };

  close = (index: number = this.state.panes.length - 1) => {
    let { panes } = this.state;

    setTimeout(() => {
      panes.splice(index, 1);
      this.setState({ panes });
    }, 200);
    if (index === 0) {
      document.body.style.overflow = "visible";
    }
    // in order to retain close effect
    if (panes[index]) {
      panes[index].isVisible = false;
      this.setState({ panes });
    }
  };

  updateProps = (
    { ...props }: { [key: string]: any },
    index: number = this.state.panes.length - 1
  ) => {
    const { panes } = this.state;

    const paneRef = panes[index]?.ref;
    if (paneRef) {
      paneRef.current?.updateProps(props);
    }
  };

  render() {
    const { panes } = this.state;

    return (
      <div>
        {panes.map((pane: any, index: number) => (
          <SlidingPane
            key={pane.id + "" + index}
            closeModal={this.close}
            {...pane}
          />
        ))}
      </div>
    );
  }
}
