console.log(document.querySelector("h1"));
const content = document.querySelector(".content");
const button = document.querySelector(".body_btn");
const tittle = document.querySelector(".body_h1");
const contentP = document.querySelector(".body_p");
const colors = ["red", "blue", "white", "yellow"];
let colorIndex = 0;
const blue =
  "Синий — наименование группы цветов. Спектральный синий цвет ощущается человеком под действием электромагнитного излучения с длинами волн в диапазоне 440—485 нм[1][2][3][4][5] (иногда диапазон указывают шире — 420—490 нм). Один из основных цветов в системе КЗС (RGB).";
const red =
  "Кра́сный (родственно ст.‑слав. красьнъ ‘красивый, прекрасный’), также червлёный, червонный, пунцовый, алый, багряный, багровый, рдяный (устар.) — область цветов в длинноволновой части видимого спектра, соответствует минимальным частотам электромагнитного излучения, воспринимаемого человеческим глазом.";
const white =
  "Бе́лый цвет — цвет со спектром электромагнитного излучения равномерной мощности по всем длинам волн в видимой части. Является так называемым ахроматическим цветом, вместе с чёрным и оттенками серого. Ощущение белого цвета возникает от излучений с различными спектрами и при различных факторах.";
const yellow =
  "Жёлтый — цвет, ощущение которого возникает при одновременном возбуждении колбочек L и M-типа. Является дополнительным цветом к синему в RGB или дополнительным к фиолетовому в художественной практике и системе RYB. Однако в древности, из-за несовершенства имевшихся пигментов, его рассматривали как дополнительный к пурпурному. Монохроматический жёлтый цвет лежит в пределах 550−590 нм.";

const colorContent = [red, blue, white, yellow];

tittle.style.color = "green ";

button.addEventListener("click", () => {
  content.style.background = colors[colorIndex];
  contentP.textContent = colorContent[colorIndex];
  tittle.textContent = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  if (colorIndex === 3) {
    content.style.border = "1px black solid";
  } else {
    content.style.border = none;
  }
});
