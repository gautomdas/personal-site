window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }

    switch (event.code) {
      case "KeyL":
        window.open("https://www.linkedin.com/in/das-gautom/");
        break;
      case "KeyG":
        window.open("https://github.com/gautomdas");
        break;
      case "KeyD":
        window.open("https://devpost.com/gautom");
        break;
      case "KeyH":
        window.open("./gautom_das_resume.pdf");
        break;
      case "KeyJ":
        window.scrollBy(0, 100);
        break;
      case "KeyK":
        window.scrollBy(0, -100);
        break;
    }
  },
  true
);
