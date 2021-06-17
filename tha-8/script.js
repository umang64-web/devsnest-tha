
 board="<tr>";
for(let i=0; i<20; i++)
{
    board += "<td></td>";
}
board += "</tr>";
 board_copy = board;
for(let i = 0; i < 19; i++) {
    board += board_copy;
}
tab = document.querySelector("table");
tab.innerHTML = board;

cells = document.querySelectorAll('td');
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.style.backgroundColor == "red" || cell.style.backgroundColor == "") {
      cell.style.border = "none";
      cell.style.backgroundColor = "white";
    } else {
      cell.style.border = "1px solid brown";
      cell.style.backgroundColor = "red";
    }
  });
});