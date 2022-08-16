import { render } from "react-dom";
import { useState } from "react";
import CardW from "./CardW";
import CardM from "./CardM";
import CardD from "./CardD";
import Stuffs from "./data.json";
import Header from "./Header";

const Nawa = () => {
  const [timeFrame, setTimeFrame] = useState("daily");
  const props = {
    timeFrame: timeFrame,
    setTimeFrame: setTimeFrame,
  };
  return (
    <>
      <div className="bg-gray-900 h-[100vh] w-[100vw] sm:flex justify-center items-center">
        <div
          className="flex flex-col gap-3 w-2/2 items-center
        bg-gray-900 max-w-lg mx-auto sm:h-[400px] sm:grid sm:grid-cols-4
        sm:max-w-5xl"
        >
          <Header {...props} />

          {timeFrame === "monthly" ? (
            <>
              <CardM bleh={Stuffs[0]} />
              <CardM bleh={Stuffs[1]} />
              <CardM bleh={Stuffs[2]} />
              <div className="none sm:block"></div>
              <CardM bleh={Stuffs[3]} />
              <CardM bleh={Stuffs[4]} />
              <CardM bleh={Stuffs[5]} />
            </>
          ) : timeFrame === "weekly" ? (
            <>
              <CardW bleh={Stuffs[0]} />
              <CardW bleh={Stuffs[1]} />
              <CardW bleh={Stuffs[2]} />
              <div className="none sm:block"></div>
              <CardW bleh={Stuffs[3]} />
              <CardW bleh={Stuffs[4]} />
              <CardW bleh={Stuffs[5]} />
            </>
          ) : (
            <>
              <CardD bleh={Stuffs[0]} />
              <CardD bleh={Stuffs[1]} />
              <CardD bleh={Stuffs[2]} />
              <div className="none sm:block"></div>
              <CardD bleh={Stuffs[3]} />
              <CardD bleh={Stuffs[4]} />
              <CardD bleh={Stuffs[5]} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

render(<Nawa />, document.getElementById("root"));
