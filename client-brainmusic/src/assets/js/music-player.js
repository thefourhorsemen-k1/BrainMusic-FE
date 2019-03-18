function runjs() {

  console.log("da bat js")
  $(document).ready(function () {
    var btn = $(".button");
    var next = $(".next");
    var li = $("li")
    btn.click(function () {
      btn.toggleClass("paused");
      return false;
    });

    next.click(function () {
      $("span").removeClass("paused");
    })
    li.click(function () {
      $("span").removeClass("paused");
    })

  })

}


