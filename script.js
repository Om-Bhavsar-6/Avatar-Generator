const categories = {
  addOns: {
    images: ["img/hat1.png", "img/glasses1.png", "img/hat2.png"],
    index: 0,
    element: document.getElementById("addOns"),
    nextBtn: "0nextBtn",
    prevBtn: "0prevBtn",
  },
  tops: {
    images: ["img/top1.png", "img/top2.png", "img/top3.png"],
    index: 0,
    element: document.getElementById("tops"),
    nextBtn: "1nextBtn",
    prevBtn: "1prevBtn",
  },
  bottoms: {
    images: ["img/bottom1.png", "img/bottom2.png", "img/bottom3.png"],
    index: 0,
    element: document.getElementById("bottoms"),
    nextBtn: "2nextBtn",
    prevBtn: "2prevBtn",
  }
};

function updateImage(cat) {
  const category = categories[cat];
  category.element.src = category.images[category.index];
}

// Arrow Button Events
for (const cat in categories) {
  const category = categories[cat];

  document.getElementById(category.nextBtn).addEventListener("click", () => {
    category.index = (category.index + 1) % category.images.length;
    updateImage(cat);
  });

  document.getElementById(category.prevBtn).addEventListener("click", () => {
    category.index = (category.index - 1 + category.images.length) % category.images.length;
    updateImage(cat);
  });

  updateImage(cat); // initialize with first image
}

// Random Button Event
function randomize() {
  for (const cat in categories) {
    const category = categories[cat];
    category.index = Math.floor(Math.random() * category.images.length);
    updateImage(cat);
  }
}

document.getElementById("random-btn").addEventListener("click", randomize);
