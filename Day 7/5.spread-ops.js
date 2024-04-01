const profile = {
  uName: "Rohit",
  company: "PayPal",
  isMarried: true,
  horoscope: "Aries",
  badHabits: null
};

const profile2 = {
  uName: "Satyan",
  stateCode: 807,
  isWorking: true
};

const newProfileV1 = {
  ...profile,
  ...profile2,
  company: "Google",
  country: "USA"
};

const newProfile = {
  ...profile2,
  ...profile,
  company: "Google",
  country: "USA"
};
console.log("Final: ", newProfile);
