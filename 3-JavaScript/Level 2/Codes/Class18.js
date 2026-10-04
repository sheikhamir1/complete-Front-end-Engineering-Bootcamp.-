// let student = {
//   name: "rohan",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
// };
// console.log(student);

// let json = JSON.stringify(student);
// console.log(json);
// console.log(typeof json);

// console.log(JSON.stringify(1));
// console.log(JSON.stringify(typeof 1));
// console.log(JSON.stringify("true"));
// console.log(JSON.stringify(typeof "true"));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify(typeof true));
// console.log(JSON.stringify(typeof [1, 2, 3]));

// i dont accept
// let user = {
//   sayGi() {
//     console.log("hello");
//   },
//   [Symbol("id")]: 123,
//   something: undefined,
// };
// console.log(JSON.stringify(user));

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"],
//   },
// };

// console.log(JSON.stringify(meetup));

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: "Conference",
//   participants: [{ name: "rohan" }, { name: "alisha" }],
//   place: room,
// };

// room.occupiedBy = meetup;
// // console.log(room);

// // console.log(
// //   JSON.stringify(meetup, ["title", "participants", "place", "name", "number"]),
// // );

// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key == "occupiedBy" ? undefined : value;
//   }),
// );

// space parameter of JSON Method

// let user = {
//   name: "rohan",
//   age: 25,
//   roles: {
//     isAdmid: false,
//     isEditor: true,
//   },
// };

// console.log(JSON.stringify(user, null, 1));

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   },
// };

// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room,
// };

// console.log(JSON.stringify(room));
// console.log(JSON.stringify(meetup));

// JSON.pasre
// let num = "[0,1,2,3,4]";
// num = JSON.parse(num);
// console.log(num);

// let userData =
//   '{ "name": "Rohan", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// let user = JSON.parse(userData);
// console.log(user.isAdmin);

// common JSON mistakes
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str);
// console.log(meetup.date);

// alert(meetup.date.getDate()); // Error!

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// // let x = JSON.parse(str);
// // console.log(x.date);

// let meetup = JSON.parse(str, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });
// console.log(meetup);

// console.log(meetup.date.getDate()); // now works!
