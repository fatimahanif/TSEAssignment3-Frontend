const About = () => {
  const happy = `:)`;
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
      <img width="35%" src="images/developer.png" alt="under development" />
      <p style={{ fontSize: 36, fontWeight: "bold", paddingTop: "2%" }}>
        This page is still under development! {happy}
      </p>
    </div>
  );
};

export default About;
