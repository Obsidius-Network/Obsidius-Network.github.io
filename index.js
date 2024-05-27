function copyIP() {
  // Copy the text inside the text field
  navigator.clipboard.writeText("Coming Soon");

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}