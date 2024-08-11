import { CiSun, CiTempHigh } from "react-icons/ci";
import { LuSun } from "react-icons/lu";
import { RxDividerVertical } from "react-icons/rx";
import { WiHumidity, WiStrongWind, WiSunset } from "react-icons/wi";


const WeatherInfo = ({weather}) => {
const {name, main, wind, sys} = weather.data
console.log(weather)
    return (
        <div>
             <h3 className="text-center mt-8 text-5xl font-bold">{name}</h3>
            <div className="flex justify-center gap-20 items-center mt-24">
                <div><LuSun /></div>
                <div>
                      <p className="text-5xl">{main?.temp}</p>
                </div>
                <div>
                     <div className="flex justify-center items-center">
                         <div><CiTempHigh /></div>
                         <div><p>real felt {main?.feels_like}</p></div>
                    </div>
                    <div className="flex justify-center items-center">
                          <div><WiHumidity /></div>
                          <div><p>humidity {main?.humidity}</p></div>
                    </div>
                    <div className="flex justify-center items-center">
                         <div><WiStrongWind /></div>
                         <div><p>wind {wind?.speed}</p></div>
                    </div>
               </div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-8">
                <div className="flex justify-center items-center">
                    <div><CiSun /></div>
                    <div>Rise:{sys?.sunrise}</div>
                    <div><RxDividerVertical /></div>
                </div>
                <div className="flex justify-center items-center">
                    <div><WiSunset /></div>
                    <div>Set:{sys?.sunset}</div>
                    <div><RxDividerVertical /></div>
                </div>
                <div className="flex justify-center items-center">
                    <div><CiSun /></div>
                    <div>High:{main?.temp_max}</div>
                    <div><RxDividerVertical /></div>
                </div>
                <div className="flex justify-center items-center">
                    <div><CiSun /></div>
                    <div>Low:{main?.temp_min}</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherInfo;