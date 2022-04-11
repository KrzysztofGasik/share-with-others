const transformStep1Array = dataToTransform => {
    const transformFirst = Object.entries(dataToTransform.step1)
      .filter(el => el[1])
      .map(x => {
        let value;
        if (x[0] === "other-things") {
          value = `${x[0].replace("-", " ")} - ${x[1]}`;
        } else {
          value = x[0].replace("-", " ");
        }
        return value;
      });
    const transformSecond = transformFirst.map((item, index) =>
      index !== transformFirst.length - 1 ? `${item}, ` : item
    );
    return transformSecond;
  };

  const transformStep4Array = (dataToTransform, className) => {
    const transformFirst = Object.entries(dataToTransform.step4);
    const transformSecond = transformFirst.map(item => {
      const key = item[0];
      const value = item[1];
      const addressField = key.charAt(0).toUpperCase() + key.slice(1);
      return (
        <div key={key}>
          <span>
            <span className={className}>{addressField}: </span>
            {value}
          </span>
          <br />
        </div>
      );
    });
    return transformSecond;
  };


  const helperFunctions = {
      transformStep1: transformStep1Array,
      transformStep4: transformStep4Array
  }

  export default helperFunctions;