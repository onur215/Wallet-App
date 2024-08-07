//Selectors 

//Ekle formu

const ekleBtn = document.querySelector("#ekle-btn")
const gelirInput = document.querySelector("#gelir-input")
const ekleFormu = document.querySelector("#ekle-formu")

//Sonuç tablosu

const gelirinzTable = document.getElementById("geliriniz")
const giderinizTable = document.getElementById("gideriniz")
const kalanTable = document.getElementById("kalan")


// Variables

let gelirler = 0
let harcamaListesi = []

//* Harcama Formu

const harcamaFormu = document.getElementById("harcama-formu");
const tarihInput = document.getElementById("tarih");
const miktarInput = document.getElementById("miktar");
const harcamaAlaniInput = document.getElementById("harcama-alani");

//* harcama tablosu
const harcamaBody = document.getElementById("harcama-body");
const temizleBtn = document.getElementById("temizle-btn");

// İlk formu doldurma

harcamaFormu.addEventListener("submit",(e) => {
    e.preventDefault() //reload u engellemek için

    const yeniHarcama = {
        tarih: tarihInput.value,
        miktar: miktarInput.value,
        aciklama: harcamaAlaniInput.value,
        id: new Date().getTime()
    };

    harcamaListesi.push(yeniHarcama)

    
})