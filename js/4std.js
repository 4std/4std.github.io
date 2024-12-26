$("#content").load("page1.html", function () {});
$("#header").load("header.html", function () {
  alert("Loading the header file has been finished.");
});
$("#footer").load("footer.html", function () {});
alert("aaaaaaaaaaa finished.");