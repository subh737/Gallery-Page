function Time() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
setInterval(Time, 1000);
Time();


let currTheme = 'light';
function ThemeChanger() {
  const linkElement = document.getElementById('themeStylesheet');
  linkElement.setAttribute('href', `${currTheme}-theme.css`);
  switch (currTheme) {
    case 'light':
      currTheme = 'dark';
      break;
    case 'dark':
      currTheme = 'light';
      break;
    default:
      break;
  }
}