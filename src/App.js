import { render } from "react-dom";
import { useState } from "react";

import Details from "./Details";
import Header from "./Header";

const Nawa = () => {
  const [timeFrame, setTimeFrame] = useState("daily");
  const props = {
    timeFrame: timeFrame,
    setTimeFrame: setTimeFrame,
  };

  return (
    <div className="bg-gray-900 flex h-full w-[100vw] items-center xl:h-[100vh]">
      <div
        className="flex flex-col gap-2 w-full h-full items-center
        bg-gray-900 mx-auto xl:h-[90%] xl:w-[90%] xl:grid xl:grid-cols-4 xl:gap-1"
      >
        <Header {...props} />
        <div
          className="flex flex-col gap-4
        xl:grid xl:col-span-3 xl:grid-cols-3 xl:gap-x-0 xl:gap-y-[65px]"
        >
          <Details {...props} />
        </div>
      </div>
    </div>
  );
};

render(<Nawa />, document.getElementById("root"));
