/* https://api.github.com/users/RamonMaximiliano */

function gitHubProfile() {
    fetch("https://api.github.com/users/RamonMaximiliano")
        .then(function setProfile(result) {
            return result.json()
        })

        .then(function (json) {
            document.getElementById("profilepic").setAttribute("src", json.avatar_url)
            document.getElementById("profileName").innerHTML = json.name
        })


        .catch(function () {
            window.alert("No internet connection or GitHub is down!")
        })
}

window.onload = gitHubProfile()

function showDropDown() {
    document.getElementById("themes").style.display = "block";
}

function hideDropDown() {
    document.getElementById("themes").style.display = "none";
}

/* THEME CHANGE */
let color_theme = document.querySelectorAll(".color-theme")
let root = document.querySelector(":root");

color_theme.forEach(function test(item) {
    item.addEventListener("click", function display(itemclicked) {
        let current_color = itemclicked.target.id

        if (current_color == 'Black') {
            root.style.setProperty("--black", "black");
            root.style.setProperty("--back-original", "rgb(31, 31, 31)")
            root.style.setProperty("--card-shadow", "rgb(18, 18, 201)")
            root.style.setProperty("--card-back", "rgb(119, 119, 119)")
            root.style.setProperty("--card-text", "rgb(31, 31, 31)")

        } else if (current_color == 'Blue') {
            root.style.setProperty("--black", "rgb(0, 0, 100)");
            root.style.setProperty("--back-original", "rgb(133, 170, 250)")
            root.style.setProperty("--card-shadow", "rgb(107, 161, 231)")
            root.style.setProperty("--card-back", "rgb(93, 144, 255)")
            root.style.setProperty("--card-text", "rgb(2, 2, 172)")
        }
        else if (current_color == 'White') {
            root.style.setProperty("--black", "rgb(83, 83, 83)");
            root.style.setProperty("--back-original", "white")
            root.style.setProperty("--card-shadow", "black")
            root.style.setProperty("--card-back", "rgb(156, 156, 156)")
            root.style.setProperty("--card-text", "rgb(90, 90, 90)")
        }
        else if (current_color == 'Red') {
            root.style.setProperty("--black", "rgb(75, 0, 0)");
            root.style.setProperty("--back-original", "rgb(233, 106, 106)")
            root.style.setProperty("--card-shadow", "rgb(233, 106, 106)")
            root.style.setProperty("--card-back", "rgb(143, 25, 25)")
            root.style.setProperty("--card-text", "rgb(163, 59, 59)")
        }
        else if (current_color == 'Green') {
            root.style.setProperty("--black", "rgb(2, 65, 2)");
            root.style.setProperty("--back-original", "rgb(149, 231, 149)")
            root.style.setProperty("--card-shadow", "rgb(107, 161, 231)")
            root.style.setProperty("--card-back", "rgb(149, 231, 149)")
            root.style.setProperty("--card-text", "rgb(1, 51, 1)")
        }
        else if (current_color == 'Purple') {
            root.style.setProperty("--black", "rgb(70, 1, 70)");
            root.style.setProperty("--back-original", "rgb(240, 140, 240)")
            root.style.setProperty("--card-shadow", "rgb(240, 140, 240)")
            root.style.setProperty("--card-back", "rgb(187, 68, 187)")
            root.style.setProperty("--card-text", "rgb(37, 1, 37)")
        }
    })
})

/* THEME CHANGE */
