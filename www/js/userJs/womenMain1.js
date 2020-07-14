$(document).ready(function () {
  sh();
});
function sh() {
  $.ajax({
    url: "/she/cloths/details",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      if(res.success){
        sheDa(res.wears);
      }else{
        console.log(res.msg);
      }

    },
    error: function (err) {
      console.log("error");
    },
  });
}
function sheDa(she) {
  for (var v = 0; v < she.length; v++) {
    sda(she[v]);
  }
}
function sda(hu) {
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${hu.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li>").addClass("add-cart-icon");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", hu.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".women-user").append(ulTag);
}
