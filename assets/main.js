function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Tuyul Gondrong',
                'Macan Oren',
                'Sapi Irfan Hakim',
                'Hantu Jeruk Peras',
                'Naga Barongsai',
                'Kunti Kemasan Saset',
                'Kuncing Oren',
                'Kambing Salto',
                'Hantu Kayang',
                'Kutil Bapak',
                'Pocong Two Step'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});