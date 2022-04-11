import classes from "./DonationElement.module.css"

const DonationElement = ({ data }) => {
  const { id, createdDate, createdTime } = data;
  return (
    <div className={classes.Element}>
      <p className={classes.Data}>{id}</p>
      <p className={classes.Data}>{createdDate}</p>
      <p className={classes.Data}>{createdTime}</p>
    </div>
  );
};

export default DonationElement;
