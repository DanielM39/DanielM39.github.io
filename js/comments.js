var i = 1;
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
    Number.prototype.pad = function(size) 
    {
        var s = String(this);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    var db = firebase.firestore();
    var commentToPost = {
        "name": name,
        "comment": comment,
        "time": Date()
    };
    db.collection("comments").doc("comment"+(i++).pad(3)).set(commentToPost).then(function() {
        console.log("Document successfully written!");
        location.reload(true);
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}