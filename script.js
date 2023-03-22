function Flames() {
  let YN = document.getElementById("your-name").value.toLowerCase().replace(/[^a-z]/g, "");
  let PN = document.getElementById("partner-name").value.toLowerCase().replace(/[^a-z]/g, "");

  let flames = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Soulmate"];

  for (let i = 0; i < YN.length; i++) {
    PN = PN.replace(YN.charAt(i), "");
  }
  for (let i = 0; i < PN.length; i++) {
    YN = YN.replace(PN.charAt(i), "");
  }

  let flamesCount = YN.length + PN.length;
  let result = flames[flamesCount % 6];
  document.getElementById("result").innerHTML = result;
}
