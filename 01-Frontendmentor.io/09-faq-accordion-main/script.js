const headers = document.querySelectorAll(".item-header");
const contents = document.querySelectorAll(".item-content");
const btns = document.querySelectorAll(".icon");
headers.forEach((header) => {
  header.addEventListener("click", (e) => {
    const clickedElement = e.target;
    const headerElement = clickedElement.closest(".item-header");
    const correspondingContent = headerElement.nextElementSibling;
    const correspondingBtn = header.getElementsByClassName("icon")[0];

    isOpen = correspondingContent.offsetHeight !== 0;
    console.log(correspondingContent.classList[0]);

    // correspondingContent.classList.toggle("open"); // Add or remove the "open" class

    // if (correspondingContent.style.maxHeight) {
    //   // Collapse
    //   correspondingContent.style.maxHeight = null;
    // } else {
    //   // Expand
    //   correspondingContent.style.maxHeight =
    //     correspondingContent.scrollHeight + "rem";
    //     console.log(correspondingContent.scrollHeight);
    //   // 6 + "rem"; // Set to the full content height
    // }

    // correspondingContent.style.marginTop = "0";
    // correspondingContent.style.maxHeight = "0";
    contents.forEach((content) => {
      content.style.marginTop = "0";
      content.style.maxHeight = "0";
    });

    btns.forEach((btn) => {
      btn.src = "./assets/images/icon-plus.svg";
    });

    if (!isOpen) {
      //   correspondingContent.style.display = "block";
      //   correspondingContent.style.marginTop = "2rem";
      // correspondingContent.style.paddingTop = "2rem";
      correspondingBtn.src = "./assets/images/icon-minus.svg";
      correspondingContent.style.maxHeight = "9.4rem";
    //   correspondingContent.style.transition = "max-height 0.5s ease-in-out";
    }
  });
});
