// let savedEls = [];

$("#add").click(function () {
  $("#skills").append(`<li><button>Remove</button> ${$("#input").val()}</li>`);
  // savedEls.push($("#input").val());
  // console.log(savedEls);
  $("#input").val("");
});

$("#skills").on("click", "button", function () {
  $(this)
    .closest("li")
    .fadeOut(1000, function () {
      $(this).remove();
    });
});

$("#clearAll").click(function () {
  $("#skills").fadeOut(1000, function () {
    $(this).empty().fadeIn();
  });
});
