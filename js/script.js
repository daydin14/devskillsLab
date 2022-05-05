$("button").click(function () {
  const li = document.createElement("li");
  const inp = document.querySelector("input");
  li.textContent = inp.value;
  document.querySelector("ul").append(li);
  inp.value = "";
});

let skills = document.getElementById("skills");

skills.addEventListener("click", function (evt) {
  evt.target.remove();
});
