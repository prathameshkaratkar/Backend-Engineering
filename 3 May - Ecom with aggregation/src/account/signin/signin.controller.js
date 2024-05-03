import jwt from "jsonwebtoken";
export const profile = {
  id: "007",
  email: "xdankitjain@gmail.com",
  password: "123456",
  name: "Ankit Jain",
  city: "Morena",
  state: "Madhya Pradesh"
};

export const signinUser = (req, res) => {
  const { email, password } = req.body;

  if (email !== profile.email || password !== profile.password) {
    return res
      .status(401)
      .send({ data: {}, meta: { message: "Your credentials are invalid" } });
  }

  const userToken = jwt.sign({ id: profile.id }, "RahulPancholi");

  // Issue a Token
  return res.status(200).send({
    data: {
      token: userToken
    },
    meta: { message: "You're logged in" }
  });
};