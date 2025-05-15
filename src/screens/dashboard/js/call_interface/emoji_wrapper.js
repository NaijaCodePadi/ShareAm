import { emojiObj } from "../../../../variables/emoji.js";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Emoji Categories";
  container.appendChild(heading);

  emojiObj.forEach((category) => {
    const categoryDiv = document.createElement("div");

    const categoryTitle = document.createElement("h2");
    categoryTitle.textContent = category.title;
    categoryDiv.appendChild(categoryTitle);

    const emojiContainer = document.createElement("div");
    category.emojis.forEach((emoji) => {
      const span = document.createElement("span");
      span.textContent = emoji || "⬜";
      span.style.fontSize = "1.5rem";
      span.style.margin = "5px";
      emojiContainer.appendChild(span);
    });

    categoryDiv.appendChild(emojiContainer);
    container.appendChild(categoryDiv);
  });

  document.body.appendChild(container);
});
