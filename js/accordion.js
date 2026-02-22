// Select all FAQ items
const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  // Get the clickable question and its corresponding answer
  const question = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");

  // Add click event to each question
  question.addEventListener("click", () => {
    // Check if the clicked item is already open
    const open = item.classList.contains("active");

    // Close all FAQ items
    faqItems.forEach((i) => {
      i.classList.remove("active"); // remove active state
      i.querySelector(".faq__answer").style.maxHeight = null; // reset height for animation
    });

    // If the clicked item was NOT open, open it
    if (!open) {
      item.classList.add("active");

      // Set the max-height dynamically based on its content
      // This allows smooth expand animation regardless of content length
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
