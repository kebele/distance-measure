/* 
THANKS TO 

Radu Mariescu-Istodor

https://www.youtube.com/watch?v=0hxNFuo5Ncc

*/
function main() {
  //   console.log("I'm here!");
  window.addEventListener("deviceorientation", onOrientationChange);
  // cameraya ulaşalım,
  navigator.mediaDevices
    // .getUserMedia({ video: true })
    //arka kamerayı kullansın
    .getUserMedia({
      video: {
        facingMode: "environment",
      },
    })
    .then(function (signal) {
      const video = document.getElementById("myVideo");
      video.srcObject = signal;
      video.play();
    })
    .catch(function (err) {
      alert(err);
    });
}

function onOrientationChange(event) {
  //   console.log(event);
  // buradan bize alfa, beta, gamma verir, bize beta lazım, bunu console da more tools daki sensorsden yapabiliriz,
  //   console.log(event.beta);
  // tam dik durduğunda 90 bize doğru eğince açı artar arkaya doğru ytırınca düşer, mesela düz masada dururken telefon beta 0 dır, açıyı alalım,
  let angle = event.beta - 90;
  // - değerleri almayalım
  if (angle < 0) {
    angle = 0;
  }
  //   const distToTree = 20;
  /* mesala agaca uzaklığımız 20 m diyelim, agacın yüksekliği inib vulunğumuz noktadan ağacın tepesine oradan da yere üçgen çizdiğimizde karşı kenar agacın yüksekliği zemin yani agaca uzaklığımız üçgenin alt kenarı, hipotenus ile yaptığı açının tanjantı formulundan ağacın yüksekliğini yani kaşı kenarı bulabiliriz, tan(angle) = height karşı kenar yani / agaca uzaklık distToTree
  bu formul radiant verir bunu pi/180 ile dereceye çevirelim
   */
  //   const height = Math.tan(angle) * distToTree;
  // mesafeyi slider ile alalım
  const distToTree = document.getElementById("mySlider").value;
  document.getElementById("myLabel").innerHTML =
    "distance to tree: " + distToTree + " meters";
  const height = Math.tan((angle * Math.PI) / 180) * distToTree;
  // ekrana yazdıralım
  document.getElementById("heightInfo").innerHTML =
    height.toFixed(1) + " m (" + angle.toFixed(1) + "&deg;)";
  console.log(angle);
}
