 //  social media JavaScript code here
      const socialIcons = document.querySelectorAll(".social-icons a");

      socialIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
          //  actions when a social media icon is clicked
          console.log("Icon clicked:", icon.getAttribute("href"));
        });
      });

      //Back to top button
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      window.onscroll = function () {
        showBackToTopButton();
      };

      function showBackToTopButton() {
        const backToTopButton = document.querySelector(".back-to-top");
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          backToTopButton.style.display = "block";
        } else {
          backToTopButton.style.display = "none";
        }
      }