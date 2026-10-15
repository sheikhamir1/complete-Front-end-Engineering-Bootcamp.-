// let activeUser = {
//   userName: "Rohan",
//   session: "Active",
// };
// console.log(activeUser);

// activeUser = null;

// --------------------------------------
// let heavyData = {
//   data: new Array(10000).fill("heavy String"),
// };

// // console.log(heavyData.data);

// let weakpointer = new WeakRef(heavyData);

// heavyData = null;
// // console.log(weakpointer);

// -------------------------------------------

// let heavyData = {
//   result: "1 GB of Data",
// };
// let weakPointer = new WeakRef(heavyData);
// heavyData = null;

// // console.log(weakPointer);

// function accessData() {
//   let dataObj = weakPointer.deref();
//   if (dataObj !== undefined) {
//     console.log(`Cache hit! Data is still in Memory: ${dataObj.result}`);
//   } else {
//     console.log(`Cache Miss! The GC Destory it. we must fetch iy Again `);
//   }
// }
// accessData();

// -----------------------------------------
// const imageCache = new Map();

// function getImage(url) {
//   const cacheRef = imageCache.get(url);
//   //   console.log(cacheRef);

//   if (cacheRef && cacheRef.deref()) {
//     console.log(`Returning ${url} From RAM!`);
//     return cacheRef.deref();
//   }
//   console.log(`Downloading ${url}  from server...`);
//   const newImageData = { url: url, pixels: "..." };

//   imageCache.set(url, new WeakRef(newImageData));

//   return newImageData;
// }

// const image1 = getImage("cat.jpg");
// console.log(image1);

// const image2 = getImage("DOG.jpg");
// console.log(image2);

// const image3 = getImage("hen.jpg");
// console.log(image3);

// const image4 = getImage("cat.jpg");
// console.log(image4);

// ----------------------------------------------

let dataCache = new Map();
const cleanUp = new FinalizationRegistry((deadString) => {
  console.log(`GC Event: Cleaning up zombie key:${deadString}`);
  dataCache.delete(deadString);
});

function getSmartData(dataID) {
  const cacheRef = dataCache.get(dataID);

  if (cacheRef && cacheRef.deref()) {
    console.log(`Returning ${dataID} From RAM!`);

    return cacheRef.deref();
  }
  console.log(`Downloading ${dataID}  from server...`);
  const freshData = { id: dataID, payload: "Massive Data Array" };

  dataCache.set(dataID, new WeakRef(freshData));
  cleanUp.register(freshData, dataID);

  return freshData;
}

const image1 = getSmartData("user_123");
console.log(image1);

const image2 = getSmartData("DOG.jpg");
console.log(image2);

const image3 = getSmartData("hen.jpg");
console.log(image3);

const image4 = getSmartData("user_123");
console.log(image4);
