import { title } from "/styles/jss/nextjs-material-kit.js";

const productStyle = {
  section: {
    padding: "40px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    color: "black",
    textDecoration: "none",
  },
  description: {
    color: "#000000",
    fontWeight: "700"
  },
  navLink: {
    color: "black",
    position: "relative",
    fontWeight: "800",
    fontSize: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    margin: "0px",
    display: "inline-flex",
    "&:hover,&:focus": {
      color: "black",
      background: "rgba(6, 4, 4, 0.2)",
    },
    "&:visited": {
      color: "black",
    }
  },
};

export default productStyle;
