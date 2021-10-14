function addClicked() {
  var ad = document.getElementById("AddTask");
  var newTask = ad.value;

  if (newTask != "") {
    var item = document.createElement("li");
    item.innerHTML =
      '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
      '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
      newTask;
    document.getElementById("tasks").append(item);
  }
}

function markDone(item)
{
  item.class="TickClicked";
}

function remove(item)
{
  item.remove();
}