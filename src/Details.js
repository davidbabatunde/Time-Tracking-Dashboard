import dataset from "./data.json";
import work from "../images/icon-work.svg";
import play from "../images/icon-play.svg";
import study from "../images/icon-study.svg";
import exercise from "../images/icon-exercise.svg";
import social from "../images/icon-social.svg";
import selfcare from "../images/icon-self-care.svg";
import dataset from "./data.json";

const bgImages = {
  0: work,
  1: play,
  2: study,
  3: exercise,
  4: social,
  5: selfcare,
};

const colors = {
  0: "hsl(15, 100%, 70%)",
  1: "hsl(195, 74%, 62%)",
  2: "hsl(348, 100%, 68%)",
  3: "hsl(145, 58%, 55%)",
  4: "hsl(264, 64%, 52%)",
  5: "hsl(43, 84%, 65%)",
};

const Details = (props) =>
  dataset.map((set, index) => {
    return (
      <div
        className="w-[320px] h-[180px] block xl:w-[250px] xl:h[250px]
       "
      >
        <div
          className="w-full h-[30%] rounded-t-2xl flex justify-end px-3"
          style={{ backgroundColor: `${colors[index]}` }}
        >
          <img src={bgImages[index]} />
        </div>

        <div className="relative bottom-4 flex flex-col justify-around gap-1 w-full h-[70%] rounded-2xl p-6 bg-mine xl:py-4 xl:h-[100%]">
          <div className="flex flex-row justify-between items-center xl:py-4">
            <h2 className="font-bold text-white">{set.title}</h2>
            <button className="text-gray-400 hover:text-white">
              <img src={require("../images/icon-ellipsis.svg")} alt="More" />
            </button>
          </div>
          <div className="flex flex-row justify-between items-center xl:flex-col xl:items-start">
            <h3 className="text-3xl text-gray-100 xl:text-4xl xl:py-2 xl:flex xl:flex-col xl:justify-start">
              {set.timeframes[props.timeFrame].current}hrs
            </h3>
            <p className="text-gray-400 text-right">
              {props.timeFrame === "daily"
                ? "Yesterday"
                : props.timeFrame === "weekly"
                ? "Last Week"
                : "Last Month"}{" "}
              - {set.timeframes[props.timeFrame].previous}hrs
            </p>
          </div>
        </div>
      </div>
    );
  });

export default Details;
