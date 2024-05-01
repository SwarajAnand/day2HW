import propTypes from "prop-types";

const Data = (props) => {
  //   console.log({ props });
  const { heading, content } = props;
  console.log(heading, content);
  return (
    <div className="contentDiv">
      <h2 className="contentH">{heading}</h2>
      <p className="contentP">{content}</p>
    </div>
  );
};

Data.propTypes = {
  heading: propTypes.string.isRequired,
  content: propTypes.string.isRequired,
};

export default Data;
