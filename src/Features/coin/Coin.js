import { useSelector } from "react-redux";
const Coin = () => {
  const count = useSelector((state) => state.counter.count);
  const themeTextColor = useSelector((state) => state.theme.color);
  return (
    <div className="value" style={{ color: themeTextColor }}>
      Coin : {count}
    </div>
  );
};

export default Coin;
