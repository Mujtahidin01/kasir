function getHargaBuah(buah)
{
    var hargaBuah;
    if (buah == 'Pisang')
    {
        hargaBuah = 12000;
    }
    else if (buah == 'Anggur')
    {
        hargaBuah = 35000;
    }
    else if (buah == 'Mangga')
    {
        hargaBuah = 17000;
    }
    else if (buah == 'Manggis')
    {
        hargaBuah = 20000;
    }
    else if (buah == 'Durian')
    {
        hargaBuah = 50000;
    }			
    return hargaBuah;
}

function total(buah, kilo, diskon)
{
    var hargaBuah = getHargaBuah(buah);
    document.getElementById('total').innerHTML = ("Jenis Buah : " + buah + "<br>");
    document.getElementById('total').innerHTML += ("Harga Buah/kg : Rp. " + hargaBuah + "<br>");
    document.getElementById('total').innerHTML += ("Jumlah kg : " + kilo + "kg<br>");
    document.getElementById('total').innerHTML += ("Diskon : " + diskon + "%<br>");
    document.getElementById('total').innerHTML += ("Diskon Anda dapatkan : Rp. " + (diskon/100) * (hargaBuah * kilo) + "<br>");
    document.getElementById('total').innerHTML += ("<br>Harga Awal : Rp. " + (hargaBuah * kilo) + "<br>");
    document.getElementById('total').innerHTML += ("Yang di Bayar : Rp. " + ((hargaBuah * kilo) - (diskon/100) * (hargaBuah * kilo)) );
}

function proses()
{
    var buah = document.getElementById('buah').value;
    var kilo = document.getElementById('kilo').value;
    var diskon = document.getElementById('diskon').value;

    total(buah, kilo, diskon);
}