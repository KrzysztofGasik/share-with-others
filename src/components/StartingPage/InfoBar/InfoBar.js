import classes from "./InfoBar.module.css";

const InfoBarContent = [
  {
    number: 10,
    title: "Plastic bags",
    info: "Since now 10 plastic bags where donate to most needy persons"
  },
  {
    number: 5,
    title: "Supported organizations",
    info: "Till now 5 organizations trusted us"
  },
  {
    number: 7,
    title: "Organized a fundraiser",
    info: "7 succesfull fundraiser were successully organized"
  }
];

const InfoBar = () => {
  return (
    <section className={classes.Wrapper} id="InfoBar">
      {InfoBarContent.map(val => {
        return (
          <div className={classes.Element} key={val.title}>
            <span className={classes.Number}>{val.number}</span>
            <span className={classes.Title}>{val.title}</span>
            <p className={classes.Info}>{val.info}</p>
          </div>
        );
      })}
    </section>
  );
};

export default InfoBar;
