import "./App.css";
import SwitchContainer from "./ToggleComponent";
import BlockContainer from "./BlockContainer";
import React, { useState, useEffect } from "react";
import { useDispatch, connect } from "react-redux";
import {
  requestDataLoad,
  loadDataAction,
  loadDataSuccessAction,
  loadDataErrorAction,
} from "./actions";
import services from "./services";
import axios from "axios";
import DisplayData from "./DisplayApiData";

function App(props) {
  const [toggleData, updateToggleData] = useState({});
  const dispatch = useDispatch();

  const loadInitialData = () => {
    dispatch(loadDataAction());

    services
      .loadData()
      .then((res) => {
        dispatch(loadDataSuccessAction(res));
      })
      .catch((err) => dispatch(loadDataErrorAction(err)));
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  return (
    <div className="App">
      <h1>TechWave Assignment</h1>
      <SwitchContainer
        toggleState={toggleData}
        onToggle={(item, e) => {
          updateToggleData((prevState) => {
            console.log("Check the Item :", item.key, e.target.checked);
            return {
              ...prevState,
              [item.key]: e.target.checked,
            };
          });
        }}
      />
      <BlockContainer toggleData={toggleData} />
      {console.log("Check the props Data : ", props.appData)}
      {props.appData.length > 1 && <DisplayData data={props.appData} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  appData: state.app.data,
});
export default connect(mapStateToProps, null)(App);
