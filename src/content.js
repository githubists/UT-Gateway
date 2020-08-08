chrome.runtime.onMessage.addListener((message) => {
  if (location.hostname == "gateway2.itc.u-tokyo.ac.jp") {
    fetch("https://gateway2.itc.u-tokyo.ac.jp/dana-na/auth/logout.cgi");

    var former_path = location.pathname.split(",")[0];
    var origin = location.pathname.split(",")[1].split("=")[1];
    var latter_path = location.pathname.split(",")[2].substr(4);
    var search = location.search;

    location.href = "https://" + origin + former_path + latter_path + search;
  } else {
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
  }
});
