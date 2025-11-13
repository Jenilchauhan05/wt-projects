export default function Price({oldPrice, newPrice}) {
  let oldstyle = {
    textDecoration: "line-through",
    color: "red",
  };
  let newstyle = {
    fontWeight: "bold",
  };
  return (
    <div>
      <span style={oldstyle}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style = {newstyle}>{newPrice}</span>
    </div>
  );
}