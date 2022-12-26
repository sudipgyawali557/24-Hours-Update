class SlidingPane {
  _currentGlobalLoader = null; //reference variable
  static _currentGlobalLoader: any;

  /**
   * getting reference of bottom wrapper component
   */
  static register(ref: any) {
    this._currentGlobalLoader = ref;
  }

  static open({ ...args }) {
    if (this._currentGlobalLoader) {
      this._currentGlobalLoader.open({ ...args });
    }
  }

  static updateProps({ ...props }: any, index: any) {
    if (this._currentGlobalLoader) {
      this._currentGlobalLoader.updateProps({ ...props }, index);
    }
  }

  static close(index: any) {
    if (this._currentGlobalLoader) {
      this._currentGlobalLoader.close(index);
    }
  }
}

export default SlidingPane;
