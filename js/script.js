$("#add").click(function () {
  $("#skills").append(`<li><button>X</button> ${$("#input").val()}</li>`);
});

$("#skills").on("click", "button", function () {
  $(this)
    .closest("li")
    .fadeOut(1000, function () {
      $(this).remove();
    });
});
