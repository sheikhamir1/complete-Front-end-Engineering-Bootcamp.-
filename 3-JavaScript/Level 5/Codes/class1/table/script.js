// Get the table
let myTable = document.getElementById("data-table");

// ---------------------------------------
// 1. Get ALL rows
// ---------------------------------------

let allRows = myTable.rows;

console.log(allRows);

console.log("Total Rows:", allRows.length);
//
// 1 Header row
// 3 Body rows

// ---------------------------------------
// 2. Get tbody
// ---------------------------------------

let body = myTable.tBodies[0];

console.log(body);

// ---------------------------------------
// 3. Get first row inside tbody
// ---------------------------------------

let firstRow = body.rows[0];

console.log(firstRow);

// ---------------------------------------
// 4. Get second cell of first row
// ---------------------------------------

let specificCell = firstRow.cells[1];

console.log(specificCell);

// This is:
// <td>Rohan</td>

// ---------------------------------------
// 5. Change background
// ---------------------------------------

specificCell.style.backgroundColor = "red";
specificCell.style.color = "white";

// ---------------------------------------
// 6. Print indexes
// ---------------------------------------

console.log("Row Index :", firstRow.rowIndex);

console.log("Cell Index :", specificCell.cellIndex);

// ---------------------------------------
// 7. Button Click
// ---------------------------------------

document.getElementById("btn").onclick = function () {
  let body = myTable.tBodies[0];

  let cell = body.rows[0].cells[1];

  cell.style.background = "green";
  cell.style.color = "white";

  alert(
    "Row Index = " + body.rows[0].rowIndex + "\nCell Index = " + cell.cellIndex,
  );
};
