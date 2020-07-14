$(document).ready(function () {
  kid();
});
function kid() {
  $.ajax({
    url: "/child/cloths/details",
    method: "GET",
    dataType: "JSON",
    success: function (res) {
      if(res.success){
        kidData(res.wears);
      }else{
        console.log(res.msg);
      }

    },
    error: function (err) {
      console.log("error");
    },
  });
}
function kidData(huff) {
  for (var v = 0; v < huff.length; v++) {
    kdata(huff[v]);
  }
}
function kdata(qwa) {
  // console.log(ugh);
  var ulTag = $("<ul></ul>").addClass("iteams");
  var li1 = $("<li></li>").text(`Price : $ ${qwa.price}`);
  var li2 = $("<li></li>");
  var li3 = $("<li></li").addClass("add-to-cart");
  li3.text("+ Add To");
  var i = $("<i></i>").addClass("fas fa-cart-plus add-cart-icon");
  li3.append(i);
  var imgTag = $("<img>").attr("src", qwa.image);
  li2.append(imgTag);
  ulTag.append(li2, li1, li3);
  $(".kids-product-block").append(ulTag);
}
