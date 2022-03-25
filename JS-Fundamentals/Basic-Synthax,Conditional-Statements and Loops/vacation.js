function vacation(peopleCount, groupType, dayOfWeek) {
  let studentsFridayPrice = 8.45;
  let businessFridayPrice = 10.9;
  let regularFridayPrice = 15;
  let studentsSaturdayPrice = 9.8;
  let businessSaturdayPrice = 15.6;
  let regularSaturdayPrice = 20;
  let studentsSundayPrice = 10.46;
  let businessSundayPrice = 16;
  let regularSundayPrice = 22.5;

  let studentsDiscountPercentage = 15;
  let businessDiscountPeople = 10;
  let regularDiscountPercentage = 5;

  let totalPrice = 0;

  if (groupType === "Business" && peopleCount >= 100) {
    peopleCount -= businessDiscountPeople;
  }

  if (groupType === "Students" && dayOfWeek === "Friday") {
    totalPrice += peopleCount * studentsFridayPrice;
  } else if (groupType === "Students" && dayOfWeek === "Saturday") {
    totalPrice += peopleCount * studentsSaturdayPrice;
  } else if (groupType === "Students" && dayOfWeek === "Sunday") {
    totalPrice += peopleCount * studentsSundayPrice;
  } else if (groupType === "Business" && dayOfWeek === "Friday") {
    totalPrice += peopleCount * businessFridayPrice;
  } else if (groupType === "Business" && dayOfWeek === "Saturday") {
    totalPrice += peopleCount * businessSaturdayPrice;
  } else if (groupType === "Business" && dayOfWeek === "Sunday") {
    totalPrice += peopleCount * businessSundayPrice;
  } else if (groupType === "Regular" && dayOfWeek === "Friday") {
    totalPrice += peopleCount * regularFridayPrice;
  } else if (groupType === "Regular" && dayOfWeek === "Saturday") {
    totalPrice += peopleCount * regularSaturdayPrice;
  } else if (groupType === "Regular" && dayOfWeek === "Sunday") {
    totalPrice += peopleCount * regularSundayPrice;
  }

  if (groupType === "Students" && peopleCount >= 30) {
    totalPrice -= (studentsDiscountPercentage / 100) * totalPrice;
  } else if (
    groupType === "Regular" &&
    peopleCount >= 10 &&
    peopleCount <= 20
  ) {
    totalPrice -= (regularDiscountPercentage / 100) * totalPrice;
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
