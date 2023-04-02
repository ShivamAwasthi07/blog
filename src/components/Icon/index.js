import blogCover from "../../assets/img/blogcover.jpg";
import dbms from "../../assets/img/dbmsimage.jpg";

export const Icon = ({ name }) => {
  switch (name) {
    case "blogcover":
      return <img src={blogCover} style={{ width: "200%" }} />;
    case "dbms":
      return <img src={dbms} />;
    default:
      return null;
  }
};
