import classes from "./InfoBarForLogin.module.css";

const InfoBarContent = [
  {
    step: 0,
    header: "Welcome",
    text: "Please click button below to start form"
  },
  {
    step: 1,
    header: "Step 1/4",
    text: "Select what you want to donate:"
  },
  {
    step: 2,
    header: "Step 2/4",
    text: "Select how many bags will you use:"
  },
  {
    step: 3,
    header: "Step 3/4",
    text: "Select organization you want to help:"
  },
  {
    step: 4,
    header: "Step 4/4",
    text: "Type address, date and hour for collecting items:"
  },
  {
    step: 5,
    header: "Sum up",
    text: "Check if data you provided is in order:"
  },
  {
    step: 6,
    header: "Thanks",
    text: "Thank you for your donation"
  }
];

const InfoBar = ({step}) => {
  const filteredInfoBar = InfoBarContent.filter(item => item.step === step);
  return (
    <section className={classes.Wrapper} id="InfoBar">
      {filteredInfoBar.map(element => {
        return (
          <div key={element.step} className={classes.Element}>
            <h1 className={classes.Step}>{element.header}</h1>
            <p className={classes.Heading}>{element.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default InfoBar;
