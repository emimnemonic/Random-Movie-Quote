   var bgImg = {
       1: {
           imageUrl: "/img/hero-background-img-1.jpg"
       },
       2: {
           imageUrl: "/img/hero-background-img-2.jpg"
       },
       3: {
           imageUrl: "/img/hero-background-img-3.jpg"
       },
       4: {
           imageUrl: "/img/hero-background-img-4.jpg"
       },
       5: {
           imageUrl: "/img/hero-background-img-5.jpg"
       }
   };

   function changeImage() {
       var randomNumber = Math.floor((Math.random() * 5) + 1);
       document.getElementById("bg-img").style.backgroundImage = "url('" + bgImg[randomNumber].imageUrl + "')";
   }

   function generateQuote() {
       var randomQuote = $.ajax({
           url: "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies",
           type: "POST",
           data: {},
           dataType: 'json',
           success: function (data) {
               if (data.category != 'Movies') {
                   generateQuote();
                   return;
               }
               document.getElementById("quote").innerHTML = data.quote;
               document.getElementById("author").innerHTML = data.author;

           },
           error: function (err) {
               alert(err);
           },
           beforeSend: function (xhr) {
               xhr.setRequestHeader("X-Mashape-Authorization", "MYKKK6ShtdmshYDlMsTAPC9pc03sp1TDnIljsnxf1usalg3Gyb");
           }
       });
   }
   var hitButton = document.getElementById("new-quote");
   hitButton.addEventListener("click", changeImage);
   hitButton.addEventListener("click", generateQuote);

   function tweetIt() {
       var newQuote = document.getElementById("quote").textContent;
       var tweetUrl = "http://twitter.com/intent/tweet?text=" +
           '"' +
           encodeURIComponent(newQuote) +
           '"' +
           "&url=" +
           "https://emimnemonic.github.io/Random-Movie-Quote";
       window.open(tweetUrl, "_blank", "width=550,height=420,menubar=no,toolbar=no,top=200,left=350");
   };