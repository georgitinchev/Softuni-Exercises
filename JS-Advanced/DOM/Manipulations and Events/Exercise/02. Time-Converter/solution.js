function attachEventsListeners() {
  const htmlData = {
    buttons: Array.from(document.querySelectorAll("input[type='button']")),
    fields: Array.from(document.querySelectorAll("input[type='text']")),
  };
  // we create object that holds the html data in key value pairs
  // first key contains buttons
  // second key contains fields

  const fillObj = (seconds, minutes, hours, days) => ({
    seconds,
    minutes,
    hours,
    days,
  }); // arrow function that creates object from inputs
  const types = {
    seconds: (v) => fillObj(v, v / 60, v / 3600, v / 86400),
    minutes: (v) => fillObj(v * 60, v, v / 60, v / 1440),
    hours: (v) => fillObj(v * 3600, v * 60, v, v / 24),
    days: (v) => fillObj(v * 86400, v * 1440, v * 24, v),
  }; // create object with different types of data

  htmlData.buttons.forEach((x) =>
    x.addEventListener("click", () => {
      const [typeOfUnits, value] = [
        x.previousElementSibling.id, // so we can specify the type of the unit
        x.previousElementSibling.value,
      ];
      const data = types[typeOfUnits](value);

      htmlData.fields.map((y) => (y.value = data[y.id]));
    })
  );
}
