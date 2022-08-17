const Parrafo = ({ name, tamaño }) => {
  const style = {
    fontFamily: "Edu VIC WA NT Beginner, cursive",
    fontfamily: "Inter",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: tamaño,
    lineHeight: "24px",
    textAlign: "center",
    margin: "1rem",
  };
  return <p style={style}>{name}</p>;
};

export default Parrafo;
