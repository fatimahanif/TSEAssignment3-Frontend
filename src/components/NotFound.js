const NotFound = () => {
  const sad = `:'(`;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "2% 15%",
        alignItems: "center",
        alignSelf: "center",
      }}
    >
      <img width="35%" src="images/error.png" alt="not found" />
      <p style={{fontSize: 36, fontWeight: "bold" ,paddingTop: "2%"}}>Oops! Looks like you're lost {sad}</p>
    </div>
  );
};

export default NotFound;
