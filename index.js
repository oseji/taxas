"use strict";

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navbar");
const navList = document.querySelector(".navList");

//CODE

hamburger.addEventListener("click", () => {
  console.log("clicked");
  nav.classList.toggle("closed");
  nav.classList.toggle("opened");
});

//LOGISTIC IMAGE ANIMATION
const logisticsImgContainer = document.getElementById("logisticsImgGrp");
const allLogisticImgs = document.querySelectorAll(".logisticImg");

logisticsImgContainer.addEventListener("mouseover", (e) => {
  console.log(e.target);

  allLogisticImgs.forEach((img) => {
    img.classList.toggle("imgScaleDown");
    img.classList.remove("imgScaleUp");
  });

  if (e.target.classList.contains("logisticImg")) {
    e.target.classList.toggle("imgScaleUp");
    e.target.classList.toggle("imgScaleDown");
  }
});

logisticsImgContainer.addEventListener("mouseout", () => {
  allLogisticImgs.forEach((img) => {
    img.classList.remove("imgScaleDown");
    img.classList.remove("imgScaleUp");
  });
});

//REVIEW CYCLING LOGIC

const review1 = {
  review:
    '"Taxas Global made my shipping experience smooth and hassle-free.They provided regular updates throughout the process and kept me informed about the status of my shipment. I would definitely use their services again."',
  img: "images/profileImg.png",
  owner: "Ifeoma Eze",
};

const review2 = {
  review:
    '"I had a time-sensitive delivery that required careful handling and prompt transportation. Taxas Global exceeded my expectations with their exceptional service. They delivered my goods on time, and the packaging was intact without any damage."',
  img: "images/segun.png",
  owner: "Segun Olajide",
};

const review3 = {
  review:
    '"I was blown away by their exceptional service. From start to finish, their team displayed professionalism, promptness, and attention to detail. They handled my delicate items with utmost care, and the delivery was right on time. I highly recommend their services to anyone in need of reliable logistics solutions."',
  img: "images/dvini.png",
  owner: "Abasiama Ovini",
};

const review4 = {
  review:
    '"Taxas Global truly understands the importance of personalized service. They took the time to understand my specific requirements and provided tailored logistics solutions. Im impressed with their dedication to customer satisfaction and highly recommend their services."',
  img: "images/koja.png",
  owner: "Theodore Kojo",
};
const reviews = [review1, review2, review3, review4];
const reviewText = document.querySelector(".reviewText");
const avatar = document.querySelector(".avatar");
const avatarName = document.querySelector(".avatarName");
console.log(reviews);

let index = 0;
let reviewIntervalId;
const reviewInterval = () => {
  reviewIntervalId = setInterval(() => {
    reviewText.textContent = reviews[index]?.review;
    avatar.src = reviews[index]?.img;
    avatarName.textContent = reviews[index]?.owner;

    index++;
    //console.log(index);

    if (index === 4) {
      //clearInterval(reviewIntervalId);
      index = 0; //instead of ending the review cycling when index=4,let the index=0 again so the cycle can restart
    }
  }, 5000);
};
reviewInterval();

//
//
//scroll animation logic
const allSections = document.querySelectorAll(".section");
console.log(allSections);

const scrollFunction = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    entry.target.classList.remove("sectionHidden");
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(scrollFunction, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("sectionHidden");
});
