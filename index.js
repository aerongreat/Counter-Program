
const dropBtn = document.getElementById("dropBtn");
const resetBtn = document.getElementById("resetBtn");
const raiseBtn = document.getElementById("raiseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

// Function to handle the drag start event for
raiseBtn.onclick = function () {
  count++;
  countLabel.innerHTML = count;
}
dropBtn.onclick = function () {
  if(count>0){
    count--;
    countLabel.innerHTML = count;
  }
}
resetBtn.onclick = function () {
  count= 0;
  countLabel.innerHTML = count;
}
