// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  const arrNamaPegawai = [];
  for (i = 0; i < arrPegawai.length; i++ )
  {
    arrNamaPegawai.push(dataYangAkanDilooping[i].namaDepan + " "+ dataYangAkanDilooping[i].namaBelakang);
  }

  let hasilLooping = arrNamaPegawai;
  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */
  indexArrayPria = 0;
  arrayJenisKelaminPria = [];
  while(indexArrayPria < dataYangAkanDilooping.length)
  {
      if(dataYangAkanDilooping[indexArrayPria].jenisKelamin === "M" )
      {
         arrayJenisKelaminPria.push(indexArrayPria);
      } 
      
      indexArrayPria++;
  }

  //dataYangAkanDilooping.filter(value => value.jenisKelamin === "M").length (tidak dipakai)
  let jumlahPria = arrayJenisKelaminPria.length;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  indexArrayWanita = 0;
  arrayJenisKelaminWanita = [];
  while(indexArrayWanita < dataYangAkanDilooping.length)
  {
      if(dataYangAkanDilooping[indexArrayWanita].jenisKelamin === "F" )
      {
         arrayJenisKelaminWanita.push(indexArrayWanita);
      } 
      
      indexArrayWanita++;
  }

  let jumlahWanita = arrayJenisKelaminWanita.length;

  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
  let pesan;
  if (jumlahPria > jumlahWanita){
    pesan = "Jumlah Pria lebih banyak dari Wanita";
  } else if(jumlahWanita > jumlahPria) {
    pesan = "Jumlah Wanita lebih banyak dari Pria";
  } else if(jumlahPria === jumlahWanita){
     pesan = "Jumlah Pria dan Wanita berimbang";
  }

  let komentar = pesan;

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);
  console.log(hasil.komentar);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
