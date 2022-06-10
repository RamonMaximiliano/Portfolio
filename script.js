/* https://api.github.com/users/RamonMaximiliano */


function gitHubProfile(){
    fetch("https://api.github.com/users/RamonMaximiliano")
    .then(function setProfile(result){
        return result.json()
    })

    .then(function(json){
        console.log(json)
        console.log(json.avatar_url)

        document.getElementById("profilepic").setAttribute("src",json.avatar_url)
        document.getElementById("profileName").innerHTML = json.name
    })


    .catch(function(){
        window.alert("No internet connection or GitHub is down!")
    })
}



window.onload = gitHubProfile()
