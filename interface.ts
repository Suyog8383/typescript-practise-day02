interface User0 {
  readonly _id: number; //readonly can't update
  email: String;
  userId: number;
  number?: number; //optional
  startTrail(): String;
}

const dataLog3: User0 = {
  email: "suyog@gmai.com",
  userId: 123,
  startTrail: () => {
    return "hello";
  },
  _id: 25,
};

// dataLog._id = 12;
dataLog3.email = "suyog@in.in";
