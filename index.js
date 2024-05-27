function copyIP() {
  // Copy the text inside the text field
  navigator.clipboard.writeText("Coming Soon")
    .then(() => {
      alert('Copied the IP of the Obsidius Network server to your clipboard.');
    })
}

function scrollToSection(sectionId) {
  let targetSection = document.getElementById(sectionId);

  if (targetSection) {
      window.scrollTo({
          top: (targetSection.offsetTop - (window.innerHeight - targetSection.offsetHeight) / 2),
          behavior: 'smooth'
      });
  }
}
