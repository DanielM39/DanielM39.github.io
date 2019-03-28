var i = 0;
function loadComments()
{
    var commentDisplay = document.getElementById("comments");
    var db = firebase.firestore();
    db.collection("comments").get().then((querySnapshot) => {
        console.log("Data Recieved");
        querySnapshot.forEach((doc) => {
            var temp = ("<div><span>" + doc.data().name + ": " + doc.data().comment + "</span><br>" + doc.data().time + "</div>") + commentDisplay.innerHTML;
            commentDisplay.innerHTML = temp;
            i++;
        });
    }).then(function() {
        console.log("Comments successfully loaded!");
    })
    .catch(function(error) {
        console.error("Error loading comments: ", error);
    });
}

function postComment()
{
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var db = firebase.firestore();
    var commentToPost = {
        "name": name,
        "comment": comment,
        "time": Date()
    };
    db.collection("comments").doc("comment"+(i++)).set(commentToPost).then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}