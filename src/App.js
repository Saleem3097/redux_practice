import "./App.css";
import Counter from "./Features/counter/Counter";
import Coin from "./Features/coin/Coin";
import Theme from "./Features/theme/Theme";
import { useDispatch, useSelector } from "react-redux";
import { changeDisplay } from "./app/AppSlice";

const App = () => {
  const displayTheme = useSelector((state) => state.display.display);
  const dispatch = useDispatch();

  return (
    <div className={displayTheme}>
      <button
        className="button"
        onClick={() => {
          const newTheme = displayTheme === "dark" ? "light" : "dark";
          dispatch(changeDisplay(newTheme));
        }}
      >
        Change Theme
      </button>
      <Counter />
      <Coin />
      <Theme />
    </div>
  );
};

export default App;
