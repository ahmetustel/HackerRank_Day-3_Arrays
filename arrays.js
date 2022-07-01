// HAZIR DURUMDA VERİLEN diziler arasından en büyük ikinci değeri bulan fonksiyon
function getSecondLargest_secilen() {
  //name'i "secilen" radio buttonların değeri alınır
  let radio_value = document.getElementsByName("secilen");

  // alınan değerlerden "checked" yani seçili olan değeri bulur veDİZİYE ÇEVİRİR
  for (const key in radio_value) {
    if (radio_value[key].checked) {
      var dizi = radio_value[key].value.split(",");
    }
  }

  // Dizi içindeki en büyük değer maxValue değişkenine atanır
  let maxValue = findMax(dizi);

  // En büyük değerin indexi bulunur
  let indexMax;
  for (const key in dizi) {
    if (dizi[key] == maxValue) {
      indexMax = key;
    }
  }

  // En büyük değerin diziden çıkarılması
  dizi.splice(indexMax, 1);

  // Yeni en büyük değerin bulunması ve sonucun DÖNDÜRÜLMESİ
  let newMaxValue = findMax(dizi);
  document.getElementById("demo").innerHTML = newMaxValue;
}

// MANUEL girilen değerler içinden en büyük ikinci değeri bulan fonksiyon
function getSecondLargest_manuel() {
  //Girilen sayıların dizi içine alınması
  let dizi2 = document.getElementById("girdi").value.split(",");

  // Girilen sayıların ekrana yazılması
  document.getElementById("demo2").innerHTML = dizi2;

  // Dizi içindeki en büyük değer bulunur ve diziden ÇIKARILIR
  let maxValue2 = findMax(dizi2);
  for (var i = 0; i < dizi2.length; i++) {
    if (dizi2[i] == maxValue2) {
      dizi2.splice(i, 1);
      i = 0;
    }
  }

  // Yeni en büyük değerin bulunması, SONUCUN ve yeni dizinin döndürülmesi
  let newMaxValue2 = findMax(dizi2);
  document.getElementById("demo3").innerHTML = newMaxValue2;
  document.getElementById("demo4").innerHTML = dizi2;
}

// Herhangi bir dizi içindeki en büyük değeri bulan fonksiyon
function findMax(arr) {
  return Math.max.apply(null, arr);
}
