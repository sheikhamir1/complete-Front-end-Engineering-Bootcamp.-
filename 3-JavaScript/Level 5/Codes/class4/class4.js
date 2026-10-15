// 1. Outer vs. Inner Sizes (offset vs. client)
// const box = document.getElementById("myBox");
// const output = document.getElementById("output");

// // Calculate Outer (CSS Width 200 + Padding 40 + Border 20 = 260)
// const outWidth = box.offsetWidth;
// const outHeight = box.offsetHeight;

// // Calculate Inner (CSS Width 200 + Padding 40 - Scrollbar Width [usually 15-17px])
// const inWidth = box.clientWidth;
// const inHeight = box.clientHeight;

// output.innerHTML = `
//       <strong>Outer (offset):</strong> ${outWidth}px width, ${outHeight}px height<br>
//       <strong>Inner (client):</strong> ${inWidth}px width, ${inHeight}px height<br>
//       <strong>Top Border (clientTop):</strong> ${box.clientTop}px
//     `;

// -----------------------------------------------
// 2. Scrolled Sizes (scroll)
// 3. Window Sizes & Page Scrolling
// 4. Coordinates Systems: Window vs. Document
