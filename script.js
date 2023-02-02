function fetchCat(imgElement) {
    imgElement.src =
      "https://thecatapi.com/api/images/get?format=src&type=gif&image_id=" +
      Math.floor(Math.random() * (100 - 80 + 1) + 80);;
  }
  
  function redirect() {
    window.location.href = atob("aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==");
  }
  
  window.onload = function () {
    fetchCat(document.getElementById("cat1"));
    fetchCat(document.getElementById("cat2"));
  };
  