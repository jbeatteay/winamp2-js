import React from "react";
import { connect } from "react-redux";

import { close } from "../actionCreators";

const {remote} = require('electron');
const win = remote.getCurrentWindow();

const Close = ({ closeWinamp }) => <div id="close" onClick={closeWinamp} />;

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  closeWinamp: () => dispatch(win.close()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Close);
