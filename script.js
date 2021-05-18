var maincontent = document.getElementById("main");

// console.log(maincontent);
var card = `
<div class="card" style="width: 18rem; display: inline-block; margin: 30px">
<div class="card-body">
  <h5 class="card-title">Song title</h5>
  <h6 class="card-subtitle mb-2 text-muted">By subtitle</h6>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="card-link">Song link</a>
</div>
</div>
`;
var total = 8;
var rows = total / 4;

for (var i = 0; i < 8; i++) {
  maincontent.innerHTML += `${card}`;
}

// $(document).ready(function () {
//   $(".input").focus(function () {
//     $(this).parent().find(".label-txt").addClass("label-active");
//   });

//   $(".input").focusout(function () {
//     if ($(this).val() == "") {
//       $(this).parent().find(".label-txt").removeClass("label-active");
//     }
//   });
// });
