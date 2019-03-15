

  function runjs() {
      console.log("JS")
    $(document).ready(function() {
      $(".bt").click(function() {
        $(this).toggleClass("active");
      });
    });
  }



