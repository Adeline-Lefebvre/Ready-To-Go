import "./index.css";
import { useState } from "react";

const OnOff = ({ setSwitch2 }) => {
  const [switch1, setSwitch] = useState(false);
  return (
    <div className="onoff">
      <div
        className={switch1 ? "selected" : "unselected"}
        onClick={() => setSwitch(true)}
      >
        ON
      </div>
      <div
        className={switch1 ? "unselected" : "selected"}
        onClick={() => setSwitch(false)}
      >
        OFF
      </div>
    </div>
  );
};

const Buttons = () => {
  const [switch2, setSwitch2] = useState();

  return (
    <div className="buttons">
      <div className="col-1">
        <OnOff setSwitch2={setSwitch2} />
        <OnOff setSwitch2={setSwitch2} />
        <OnOff setSwitch2={setSwitch2} />
      </div>

      <div>
        {switch2 ? (
          <div className="go">Go !</div>
        ) : (
          <div className="noWay">No Way !</div>
        )}
      </div>
    </div>
  );
};

export default Buttons;
