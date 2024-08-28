cards = [
  {
    id: "1",
    img_url: "./assets/image/ARIELwb.png",
    description:
      "An ethereal reimagining of Princess Ariel, this artwork reveals her darker side with subtle creature-like features and gold jewelry, reflecting a haunting obsession with human treasures.",
  },
  {
    id: "3",
    img_url: "./assets/image/girlwb.jpg",
    description:
      "A contemplative digital portrait capturing the quiet strength and introspection of a young girl with braided hair.",
  },
  {
    id: "7",
    img_url:
      "https://assets-prd.ignimgs.com/2022/02/18/house-of-the-dragon-button-02-1645217002655.jpg",
    description: "House of the dragon season-4",
  },
  {
    id: "7",
    img_url:
      "https://assets-prd.ignimgs.com/2022/02/18/house-of-the-dragon-button-02-1645217002655.jpg",
    description: "House of the dragon season-4",
  },
  {
    id: "4",
    img_url:
      "https://images.ctfassets.net/nwksj2ft7iku/4ipCYMuMkJE6F5WV0s2ryc/f48f4caea5d16f0a5362db73e9a10b4a/240513_GOTC_TargaryenSigil_768x480.png",
    description: "House of the dragon season-5",
  },
  {
    id: "5",
    img_url:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/10/house-of-the-dragon-poster.jpg",
    description: "House of the dragon season-2",
  },
];

cards2 = [
  {
    id: "10",
    img_url: "./assets/image/KIRIwb.jpg",
    description:
      "A digital painting of an older Kiri from 'Avatar: The Way of Water,' capturing her ethereal connection with Eywa.",
  },
  {
    id: "9",
    img_url: "./assets/image/fishIwb.jpg",
    description: "Fish painting with oil pastels",
  },
  {
    id: "11",
    img_url:
      "https://assets-prd.ignimgs.com/2022/02/18/house-of-the-dragon-button-02-1645217002655.jpg",
    description: "House of the dragon season-4",
  },
  {
    id: "12",
    img_url:
      "https://images.ctfassets.net/nwksj2ft7iku/4ipCYMuMkJE6F5WV0s2ryc/f48f4caea5d16f0a5362db73e9a10b4a/240513_GOTC_TargaryenSigil_768x480.png",
    description: "House of the dragon season-5",
  },
  {
    id: "13",
    img_url:
      "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/10/house-of-the-dragon-poster.jpg",
    description: "House of the dragon season-2",
  },
  {
    id: "14",
    img_url:
      "https://www.thenews.com.pk/assets/uploads/updates/2023-11-02/1125179_843973_HBO_updates.jpg",
    description:
      "House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3 House of the dragon season-3",
  },
  {
    id: "15",
    img_url:
      "https://assets-prd.ignimgs.com/2022/02/18/house-of-the-dragon-button-02-1645217002655.jpg",
    description: "House of the dragon season-4",
  },
];

createCardView = (card) => {
  if (card.id < 8) {
    const cardView = document.createElement("div");
    cardView.className = "image";
    cardView.id = card.id;
    cardView.innerHTML = `
      <img src="${card.img_url}" alt="${card.description}" />
      `;
    return cardView;
  } else {
    const cardView = document.createElement("div");
    cardView.className = "image-2";
    cardView.id = card.id;
    cardView.innerHTML = `
      <img src="${card.img_url}" alt="${card.description}" />
      `;
    return cardView;
  }
};

window.onload = () => {
  const cardContainer = document.querySelector(".image-container");
  const cardContainer2 = document.querySelector(".image-container-2");

  cards.forEach((card) => {
    cardContainer.appendChild(createCardView(card));
  });

  cards2.forEach((card2) => {
    cardContainer2.appendChild(createCardView(card2));
  });

  addClickEvent();
  addClickEventToCards2();

  setAnimation();
};

//https://www.youtube.com/watch?v=QghhoJBdw7A

addClickEvent = () => {
  let images = document.querySelectorAll(".image");
  console.log(images);

  images.forEach((image) => {
    image.onclick = () => {
      console.log(image.id);
      selectImageCard(image.id);
    };
  });
};

addClickEventToCards2 = () => {
  let images = document.querySelectorAll(".image-2");
  console.log(images);

  images.forEach((image) => {
    image.onclick = () => {
      console.log(image.id);
      selectImageCard(image.id);
    };
  });
};

selectImageCard = (id) => {
  if (id < 8) {
    cards.forEach((card) => {
      if (card.id === id) {
        showPopup(card);
      }
    });
  } else {
    cards2.forEach((card) => {
      if (card.id === id) {
        showPopup(card);
      }
    });
  }
};

showPopup = (card) => {
  console.log(card);
  const popup = document.querySelector(".popup");

  popup.innerHTML = `
      <div class="popup-bg"></div>
      <span>&times;</span>
      <div class="popup-img">
        <img id="zoom-img" src="${card.img_url}"  />
      </div>
      <h3 id="no-scrollbar">${card.description}</h3>
  
      <div id="scale-default">
        Click here to turn back to default scale
      </div>
    `;

  popup.style.display = "flex";

  // popup scroll zoom-in-out
  const turnBackDefScale = document.getElementById("scale-default");
  const popupImg = document.getElementById("zoom-img");
  let scale = 1;

  popupImg.addEventListener("wheel", function (event) {
    event.preventDefault();
    console.log(event);

    if (event.deltaY < 0) {
      // Scroll up
      scale += 0.1;

      if (scale > 1.4) {
        turnBackDefScale.style.display = "block";
      }
    } else {
      if (scale < 1.5) {
        turnBackDefScale.style.display = "none";
      }
      // Scroll down
      scale -= 0.1;
      if (scale < 1) {
        scale = 1; // Prevent scaling below the original size
      }
    }
    popupImg.style.transform = `scale(${scale})`;
  });
  // !!!popup scroll zoom-in-out

  // popup zoom-in-out default scale

  // !!!popup zoom-in-out default scale
  turnBackDefScale.addEventListener("click", () => {
    scale = 1;
    popupImg.style.transform = `scale(${scale})`;
    turnBackDefScale.style.display = "none";
  });

  // popup kapatma fonksiyonları
  document.querySelector(".popup span").onclick = () => {
    document.querySelector(".popup").style.display = "none";
  };

  document.querySelector(".popup-bg").onclick = () => {
    document.querySelector(".popup").style.display = "none";
  };
  // !!! popup kapatma fonksiyonları
};

// Animation
function setAnimation() {
  const firstColumn = document.querySelectorAll(".image-container .image");
  const secondColumn = document.querySelectorAll(".image-container-2 .image-2");

  function handleScroll() {
    firstColumn.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        el.classList.remove("hidden-from-left");
      } else if (rect.bottom <= 10 || rect.top >= window.innerHeight - 10) {
        el.classList.add("hidden-from-left");
      }
    });

    secondColumn.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        el.classList.remove("hidden-from-right");
      } else if (rect.bottom <= 10 || rect.top >= window.innerHeight - 10) {
        el.classList.add("hidden-from-right");
      }
    });
  }

  // İlk yüklemede ve scroll olayında tetiklenecek
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  // Sayfa ilk yüklendiğinde bir kere kontrol et
  handleScroll();
}
// !!!Animation

/*sticky navbar
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}
  */
