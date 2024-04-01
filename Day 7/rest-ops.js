const profile = {
    uName: "Rohit",
    company: "PayPal",
    address: {
      area: "Ayodhya Bypass",
      pincode: 411023,
      block: "CD"
    },
    hobbies: ["music", "travel", "writing"],
    isMarried: true,
    horoscope: "Aries",
    badHabits: null
  };
  
  // Old way
  //delete profile.name;
  //delete profile.address;
  //delete profile.isMarried;
  
  // New way
  const { uName, address, hobbies, ...bakiJohnKaData } = profile;
  
  console.log("Rest Data: ", bakiJohnKaData);
  
  const addNums = (...params) => {
    console.log("Params: ", params);
  };
  
  const addNumsV2 = (a, b, ...params) => {
    console.log("Params: ", a, b, params);
  };
  
  addNums(1, 3);
  addNums(1, 3, 4);
  addNums(1, 3, 4, 6);
  addNums(1, 3, 4, 6, 9, 8, 7);
  
