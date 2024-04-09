import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#5A238D" />
            <stop offset="100%" stopColor="#AA1192" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
        size={120}
        thickness={1.5}
      />
    </React.Fragment>
  );
}

export default GradientCircularProgress;
