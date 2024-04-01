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
  
  // Old
  const userName = profile.uName || "NA";
  const userCompany = profile.company || "NA";
  const userAddress = profile.address || "NA";
  
  // New - Destruturing - with fallback value
  const { uName, company, cityCode = "NA", address } = profile;
  const { block } = address;
  console.log({ uName, company, cityCode, block });