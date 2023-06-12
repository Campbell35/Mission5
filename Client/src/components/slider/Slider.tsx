import React, { useState } from "react";
import style from "./Slider.module.css";

const MIN = 100;
const MAX = 5000;

const Slider: React.FC = () => {
  const [values, setValues] = useState<[number, number]>([MIN, MAX]);
  console.log("values:", values);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value);
    setValues([MIN, newValue]);
  };

  return (
    <div className={style.SLIDERmainDiv}>
      <div className={style.SLIDERsliderMain}>
        <h3>
          Price <span>Range</span>
        </h3>
        <div className={style.SLIDERslider_value}>$100.00 - $5000.00</div>
        <small>Current Range: ${values[1]}.00</small>

        <input
          type="range"
          className={style.SLIDERtheslider}
          onChange={handleSliderChange}
          value={values[1]}
          min={MIN}
          max={MAX}
        />
      </div>
    </div>
  );
};

export default Slider;
