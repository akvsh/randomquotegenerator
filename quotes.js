  $(document).ready(function () {
      $("#new-quote").on("click", function () {
          $.ajax({
              url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
              type: 'POST',
              data: {
                  'X-Mashape-Key': '3VLdbhpG6KmshFZuDzT0UWaVxR40p1jNuXIjsn1BWJZHA8hcnC',
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Accept': 'application/json'
              },
              dataType: "json",
              success: function (jsonData) {
                  console.log(jsonData);
                  $("#quote-text").html('<p>"' + jsonData.quote + '"</p>');
                  $(".quote-source").html('<i> -' + jsonData.author + '</i>');
              },
              beforeSend: function (xhr) {
                  xhr.setRequestHeader("X-Mashape-Authorization", "I01Di6UpMLmshSb4O2Y1gjKzPInKp1snSzejsnPFVOaLk74izr");
              }
          });
      });
  });