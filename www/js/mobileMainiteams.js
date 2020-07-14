$(document).ready(function () {
  mobile();
});
function mobile() {
  $.ajax({
    url: "/mob/shop/data",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      if(res.success){
        mobData(res.wears);
      }else{
        console.log(res.msg);
      }

    },
    error: function (err) {
      console.log("error");
    },
  });
}
function mobData(mobb) {
  for (var v = 0; v < mobb.length; v++) {
    mData(mobb[v]);
  }
}
function mData(num) {
  // console.log(ugh);
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${num.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-cart-icon");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", num.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".mobiles-product-block").append(ulTag);
}
