const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".explore__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".job__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".offer__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
});

function filterJobs() {
  // Get the search query
  const query = document.getElementById("searchInput").value.toLowerCase();

  // Get all job items
  const jobs = document.getElementsByClassName("job-item");

  // Loop through job items and hide those that don't match the query
  Array.from(jobs).forEach(job => {
      // Extract job details for filtering
      const jobTitle = job.querySelector("h3").textContent.toLowerCase();
      const jobDetails = job.textContent.toLowerCase();

      // Check if job title or details match the query
      if (jobTitle.includes(query) || jobDetails.includes(query)) {
          job.style.display = ""; // Show job if it matches
      } else {
          job.style.display = "none"; // Hide job if it doesn't match
      }
  });
}

// Check if the user is logged in
function checkLoginStatus() {
  const userName = localStorage.getItem("userName");

  // If the user is logged in, show "Log Out" and hide "Sign Up"
  const authLink = document.getElementById("auth-link");
  const authBtn = document.getElementById("auth-btn");
  
  if (userName) {
    authLink.textContent = "Log Out";
    authLink.setAttribute("href", "#");
    authBtn.addEventListener('click', logout);
  }
}

// Log out the user by removing their data from localStorage
function logout() {
  localStorage.removeItem("userName");
  window.location.href = "index.html"; // Redirect to homepage after logging out
}

// Run the checkLoginStatus function when the page loads
window.onload = checkLoginStatus;