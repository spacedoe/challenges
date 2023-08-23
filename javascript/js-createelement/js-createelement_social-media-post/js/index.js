console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const card = document.createElement("article");
card.classList.add("post");
document.body.append(card);

const postContent = document.createElement("p");
postContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
postContent.classList.add("post__content");
card.append(postContent);

const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
card.append(postFooter);

const postUsername = document.createElement("span");
postUsername.textContent = "@username";
postUsername.classList.add("post__username");
postFooter.append(postUsername);

const postButton = document.createElement("button");
postButton.textContent = "♥ Like"
postButton.classList.add("post__button")
postFooter.append(postButton)

postButton.addEventListener("click", handleLikeButtonClick)