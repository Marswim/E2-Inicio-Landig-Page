const textarea = document.getElementById("text-area");

textarea.addEventListener("click", function () {
  this.rows = this.rows + 7;
});
