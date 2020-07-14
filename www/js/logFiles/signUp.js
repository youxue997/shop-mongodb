function submitUserData() {
  const data = {};
  data.name = $("#name").val();
  data.password = $("#cpwd").val();
  data.email = $("#email").val();
  console.log(data);

  $.ajax({
    url: "/user/register",
    data: data,
    method: "POST",
    dataType: "JSON",
    success: function (res) {
      console.log('aaa');
      location.replace("/views/loginPage.html");
    },
    error: function (err) {
      console.log("Got error " + err);
    },
  });
}
//  password show n hide functionality
function showHidePwd() {
  const currentType = $(".pwd").attr("type");
  if (currentType == "password") {
    $(".pwd").attr("type", "text");
  } else {
    $(".pwd").attr("type", "password");
  }
}
