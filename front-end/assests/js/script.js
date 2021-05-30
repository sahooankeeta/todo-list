document.querySelector(".update-btn").addEventListener("click", function (e) {
  if (e.target.parentNode.parentNode.parentNode.parentNode.className == "item")
    document.querySelector(".update-box").classList.remove("hide");
  var id = e.target.parentNode.parentNode.parentNode.parentNode.id;
  document.querySelector(".update-box").action = document
    .querySelector(".update-box")
    .action.replace(":id", id);
  console.log(document.querySelector(".update-box").action);
  var task = document.getElementById(id).querySelector(".item__task").innerHTML;
  var category = document
    .getElementById(id)
    .querySelector(".item__type").innerHTML;
  var deadline = document
    .getElementById(id)
    .querySelector(".item__deadline").innerHTML;
  console.log(task);
  console.log(category);
  console.log(deadline);
  document.querySelector(".update-box").querySelector("#task").value = task;
  document.querySelector(".update-box").querySelector("#category").value =
    category;
  document.querySelector(".update-box").querySelector("#deadline").value =
    deadline;
});
document
  .querySelector(".update-box")
  .button.addEventListener("click", function () {
    document.querySelector(".update-box").classList.add("hide");
  });
// document.querySelector(".update-btn").addEventListener("click", function () {
//   var id = document.querySelector(".update-btn").id;
//   console.log(id);
//   var task = document
//     .getElementById(`item-${id}`)
//     .querySelector(".item__task").innerHTML;
//   var category = document
//     .getElementById(id)
//     .querySelector(".item__type").innerHTML;
//   var deadline = document
//     .getElementById(id)
//     .querySelector(".item__deadline").innerHTML;
//   console.log(task);
//   console.log(category);
//   console.log(deadline);
//   document.querySelector(".update-box").querySelector("#task").value = task;
//   document.querySelector(".update-box").querySelector("#category").value =
//     category;
//   document.querySelector(".update-box").querySelector("#deadline").value =
//     deadline;
// });
