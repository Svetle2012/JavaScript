function main() {
  var user = new User("John", "Doe");
  user.populateGallery();

  var gallery = user.getGallery();

  var rootElement = document.getElementById("root");

  var body = document.getElementsByTagName("body")[0];
  var popupDiv = document.createElement("div");
  popupDiv.id = "popup";
  popupDiv.style.display = "none";
  popupDiv.style.height = "200px";

  var closeDiv = document.createElement("div");
  closeDiv.id = "close";
  closeDiv.innerHTML = "X";
  closeDiv.addEventListener("click", () => {
    var popupDiv = document.getElementById("popup");
    popupDiv.style.display = "none";
    popupDiv.children[1].src = "";
    popupDiv.className = "";
  });

  var image = document.createElement("img");

  var previousDiv = document.createElement("div");
  previousDiv.innerHTML = "Previous";
  previousDiv.addEventListener("click", event => {
    var popupDiv = document.getElementById("popup");
    var previousImageIndex = parseInt(popupDiv.className) - 1;

    if (previousImageIndex === -1) {
      previousImageIndex = gallery.length - 1;
    }
    var imageToShow = gallery[previousImageIndex].getSrc();
    popupDiv.children[1].src = imageToShow;
    popupDiv.className = previousImageIndex;
  });

  var nextDiv = document.createElement("div");
  nextDiv.innerHTML = "Next";
  nextDiv.addEventListener("click", () => {
    var popupDiv = document.getElementById("popup");
    var nextImageIndex = parseInt(popupDiv.className) + 1;

    if (nextImageIndex === gallery.length) {
      nextImageIndex = 0;
    }
    var imageToShow = gallery[nextImageIndex].getSrc();
    popupDiv.children[1].src = imageToShow;
    popupDiv.className = nextImageIndex;
  });

  popupDiv.appendChild(closeDiv);
  popupDiv.appendChild(image);
  popupDiv.appendChild(previousDiv);
  popupDiv.appendChild(nextDiv);
  body.appendChild(popupDiv);

  for (var i = 0; i < gallery.length; i++) {
    var image = document.createElement("img");
    image.style.width = "150px";
    image.style.heigth = "150px";
    image.src = gallery[i].getSrc();
    image.className = i;
    rootElement.appendChild(image);

    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    rootElement.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", event => {
      var imageToRemove = event.target.previousSibling;
      gallery.splice(imageToRemove.className, 1);
      console.log(gallery);
      rootElement.removeChild(imageToRemove);
      rootElement.removeChild(event.target);
    });

    image.addEventListener("click", event => {
      var imageSrc = event.target.src;
      var popupDiv = document.getElementById("popup");
      popupDiv.children[1].src = imageSrc;
      popupDiv.style.display = "block";
      popupDiv.className = event.target.className;
    });
  }
}

main();

// DA SE PRIKAZAT SITE SLIKI SO CIKLUS
//Na klik na nekoja od slikite, da se prikaze slikata zgolemena
// i da se pojavat X, >, < znaci
// pri klik na X da se zatvori golemata slika
// pri klik na > se pokazuva slednata slika vo listata zgolemena
// pri klik na < se pokazuva prethodnata slika vo listata zgolemena
// pod sekoja slika ima delete kopce, pri klik se brise taa slika od listata
