function alertwhendownload() {
    let title = document.getElementById("title");
    let textgameforalert = document.getElementById("textgameforalert");
    let alert = document.getElementById("alert");
    alert.style.display = "block";
    setTimeout(() => {
      alert.style.display = "none";
    }, 2000);
    alert.innerHTML = `Downloading...`;
  }
  // search bar
  function search_animal() {
    let input = document.getElementById("searchbar").value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName("game");
  
    for (i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
        x[i].style.display = "none";
      } else {
        x[i].style.cssText = `
            display: flex;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 20px;
      flex: 50%;
            `;
      }
    }
  }
