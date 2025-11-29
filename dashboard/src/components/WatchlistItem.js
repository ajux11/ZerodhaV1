import React from "react";
import { useContext } from "react";
import { useState } from "react";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { Tooltip, Grow } from "@mui/material";
import GeneralContext from "./GeneralContext";
export default function WatchlistItem({ stock }) {
  const [showWatchListAction, setshowWatchListAction] = useState(false);

  function handlemouseEnter(e) {
    setshowWatchListAction(true);
  }

  function handlemouseLeave() {
    setshowWatchListAction(false);
  }
  return (
    <>
      <li onMouseEnter={handlemouseEnter} onMouseLeave={handlemouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down" : "up "}>{stock.name}</p>
          <div className="iteminfo">
            <span className="percent">{stock.percent}</span>
            {stock.isdown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
            <span className="price">{stock.price}</span>
          </div>
        </div>
        {showWatchListAction && <WatchlistActions uid={stock.name} />}
      </li>
    </>
  );
}

const WatchlistActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button>
            <MoreHoriz className="more" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
