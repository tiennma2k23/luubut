const firebaseConfig = {
  apiKey: "AIzaSyDpjyYso4MqIb61ZN_leWgZX5VuO5RWzTs",
  authDomain: "luubut-f8615.firebaseapp.com",
  databaseURL:
    "https://luubut-f8615-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "luubut-f8615",
  storageBucket: "luubut-f8615.appspot.com",
  messagingSenderId: "934152785569",
  appId: "1:934152785569:web:4029640198f152b51aaae0",
  measurementId: "G-HEVWJ6GSBZ",
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database();
function refresh() {
  var content = document.getElementById("content");
  var nameuser = document.getElementById("nameuser");
  content.value = "";
  nameuser.value = "";
  alert("Thanks you !!!");
}
var _post = document.querySelector("._post");
_post.onclick = function () {
  var content = document.getElementById("content");
  var nameuser = document.getElementById("nameuser");

  if (content.value == "" || nameuser.value == "") alert("Error");
  else {
    db.ref("posts/").once("value", function (content_object) {
      var index = parseFloat(content_object.numChildren()) + 1;
      db.ref("posts/" + `content_${index}`)
        .set({
          name: nameuser.value,
          content: content.value,
          index: index,
        })
        .then(refresh());
    });
  }

  //   let main = document.getElementById("main_content");
  //   let newDiv = document.createElement("div");
  //   newDiv.className = "post_container";
  //   let name = nameuser.value;
  //   let poster = content.value;
  //   nameuser.value = "";
  //   content.value = "";
  //   let npost = `
  //       <div class="post_row">
  //         <div class="user_profile">
  //           <img src="socialbook/images/member.png" alt="">
  //           <div>
  //             <p>${name}</p>
  //           </div>
  //         </div>
  //         <a href="#"><i class="fas fa-ellipsis-v"></i></a>
  //       </div>
  //       <p class="post_text">${poster} </p>
  // `;

  //   let newpost = document.createElement("div");
  //   newpost.innerHTML = npost;

  //   newDiv.appendChild(newpost);
  //   main.appendChild(newDiv);
};
