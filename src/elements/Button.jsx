const Button = ({ name }) => {
  const style = {
    backgroundColor: "rgb(29, 38, 48)",
    color: "white",
    border: "3px solid #fff",
    width: "0.2vw",
    height: "5vh",
    borderRadius: "25px",
    margin: "1rem",

    minWidth: "9rem",
    fontFamily: "Inter",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: "20px",
    lineHeight: "1px",
  };
  return <button style={style}>{name}</button>;
}
{
}

export default Button;
