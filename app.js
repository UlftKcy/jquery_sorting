$(document).ready(function () {
  let content = $("#content");
  $.ajax({
    type: "GET",
    url: "app.json",
    dataType: "json",
    success: function (response) {
      response.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      );
      $.each(response, function (i, value) {
        content.append(
          "<div class='row'>" +
            "<div class='col-6 text-center names'>" +
            value.name +
            "</div>" +
            "<div class='col-6 text-center births'>" +
            value.birth +
            "</div>" +
            "</div>"
        );
      });
    },
  });

  $("#sorting_radios input").on("change", function () {
    let sorting_value = $("input[name=sorting]:checked").val();
    if (sorting_value === "name") {
      $.ajax({
        type: "GET",
        url: "app.json",
        dataType: "json",
        success: function (response) {
          response.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
          );
          content.children().remove();
          $.each(response, function (i, value) {
            content.append(
              "<div class='row'>" +
                "<div class='col-6 text-center names'>" +
                value.name +
                "</div>" +
                "<div class='col-6 text-center births'>" +
                value.birth +
                "</div>" +
                "</div>"
            );
          });
        },
      });
    }
    if (sorting_value === "birth") {
      $.ajax({
        type: "GET",
        url: "app.json",
        dataType: "json",
        success: function (response) {
          response.sort((a, b) =>
            a.birth < b.birth ? 1 : b.birth < a.birth ? -1 : 0
          );
          content.children().remove();
          $.each(response, function (i, value) {
            content.append(
              "<div class='row'>" +
                "<div class='col-6 text-center names'>" +
                value.name +
                "</div>" +
                "<div class='col-6 text-center births'>" +
                value.birth +
                "</div>" +
                "</div>"
            );
          });
        },
      });
    }
  });
});
