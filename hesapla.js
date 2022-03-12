const pi = Math.PI;
const arguments = process.argv.slice(2);

function alanHesapla(rNumber) {
  console.log(
    `Yarıçapı (${rNumber}) olan dairenin alanı: ${pi * rNumber * rNumber}`
  );
}

alanHesapla(arguments[0] * 1);
