const Spinner = () => {
  const loader = {
    width: "32px",
    height: "72px",
    display: "inline-block",
    left: "5px",
    position: "relative",
    border: "3px solid #fff",
    boxSizing: "border-box",
    color: "#ff3d00",
    borderRadius: "0 0 4px 4px",
    transform: "perspective(140px) rotateX(-45deg)",
    animation: `animloader 1.2s linear infinite alternate`,
  };

  const containerSpinner = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#fff",
  };

  return (
    <div className="" style={containerSpinner}>
      <span className="" style={loader}></span>
    </div>
  );
};

export default Spinner;
