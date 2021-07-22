import "./index.css";
import { useState } from "react";

const OnOff = (props) => {
  return (
    <div className="onoff">
      <div
        className={props.state ? "selected" : "unselected"}
        onClick={() => props.switchbutton(true)}
      >
        ON
      </div>
      <div
        className={props.state ? "unselected" : "selected"}
        onClick={() => props.switchbutton(false)}
      >
        OFF
      </div>
    </div>
  );
};

const Buttons = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="buttons">
      <div className="col-1">
        <OnOff switchbutton={setSwitch1} state={switch1} />
        <OnOff switchbutton={setSwitch2} state={switch2} />
        <OnOff switchbutton={setSwitch3} state={switch3} />
      </div>

      <div>
        {switch1 && switch2 && switch3 ? (
          <div className="go">Go !</div>
        ) : (
          <div className="noWay">No Way !</div>
        )}
      </div>
    </div>
  );
};

export default Buttons;
