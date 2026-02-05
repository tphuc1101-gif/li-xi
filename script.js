const lixi = document.getElementById("lixi");
const wishText = document.getElementById("wish-text");

const wishes = [
  // --- LỜI CHÚC TRUYỀN THỐNG & Ý NGHĨA ---
  "Chúc mừng năm mới Bính Ngọ 2026! Vạn sự như ý, tỷ sự như mơ, triệu triệu bất ngờ, không chờ cũng đến! 🧧",
  "Mừng xuân 2026: Chúc bạn và gia đình an khang thịnh vượng, vạn sự hanh thông, công thành danh toại! ✨",
  "Chúc bạn năm mới: Đa lộc, đa tài, đa phú quý. Đắc thời, đắc thắng, đắc nhân tâm! 🐲",
  "Năm mới 2026, chúc bạn một chữ nhàn cho thân thảnh thơi, một chữ phú cho đời ấm no, một chữ quý cho người thêm trọng! 🎋",

  // --- LỜI CHÚC HÀI HƯỚC & ĐỘC LẠ ---
  "Năm mới chúc bạn: Đau đầu vì nhà giàu. Mệt mỏi vì học giỏi. Buồn phiền vì nhiều tiền. Ngang trái vì quá xinh gái! 😎",
  "Chúc bạn năm 2026: Tiền vào cửa trước, vàng vào cửa sau, hai cái gặp nhau chui vào két sắt! 💰",
  "Tiền vào như nước sông Đà, tiền ra nhỏ giọt như cà phê phin. Chúc mừng năm mới Ất Tỵ! ☕",
  "Chúc bạn năm mới luôn 'mặn mà' như muối, 'ngọt ngào' như đường và 'rực rỡ' như kim cương! 💎",

  // --- LỜI CHÚC CÔNG DANH & SỰ NGHIỆP ---
  "Chúc năm 2026: Công việc vừa ý, túi tiền nặng ký, mọi sự như ý, miệng cười hi hí! 😁",
  "Năm mới chúc bạn vươn xa như rồng bay, vững chãi như núi cao, gặt hái ngàn thành công rực rỡ! 🚀",
  "Chúc bạn 12 tháng phú quý, 365 ngày phát tài, 8.760 giờ sung túc, 525.600 phút thành công! ⏱️",
  "Thuận buồm xuôi gió, làm đâu thắng đó, chẳng ngại khó khăn, tiền về đầy kho! 🚢",

  // --- LỜI CHÚC SỨC KHỎE & TÌNH DUYÊN ---
  "Chúc bạn có một bầu trời sức khỏe, một biển cả tình thương và một đại dương hạnh phúc! ❤️",
  "Năm mới 2026: Sức khỏe vô biên, kiếm được nhiều tiền, đời sướng như tiên, chẳng lo muộn phiền! 🌟",
  "Chúc bạn năm mới mỗi ngày đều là một nốt nhạc vui trong bản hòa ca hạnh phúc của cuộc đời! 🎶",
  "Mừng xuân Ất Tỵ, chúc bạn tình duyên phơi phới, hạnh phúc gấp bội, sớm tìm được bến đỗ bình yên! 👩‍❤️‍👨",
];

lixi.addEventListener("click", function () {
  if (!this.classList.contains("open")) {
    wishText.innerText = wishes[Math.floor(Math.random() * wishes.length)];

    // Hiệu ứng pháo giấy vàng kim
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ffd700", "#b8860b"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ffd700", "#b8860b"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  this.classList.toggle("open");
});
