chrome.runtime.onMessage.addListener((message) => {
  var index = location.pathname.lastIndexOf("/");
  var former = location.pathname.substr(0, index + 1);
  var latter = location.pathname.substr(index + 1);

  location.href =
    "https://gateway2.itc.u-tokyo.ac.jp" +
    former +
    ",DanaInfo=" +
    location.hostname +
    ",SSL+" +
    latter +
    location.search;
});
