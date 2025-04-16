window.KotaBanjarbaru = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text = `<p class="mb-0">Danau Seran di Kota Banjarbaru adalah tempat wisata yang populer bagi masyarakat sekitar. Di sana, pengunjung bisa menikmati suasana alam yang asri, melakukan piknik di tepi danau, atau menikmati pemandangan sambil naik perahu. Setiap minggu, jumlah pengunjung yang datang ke Danau Seran bervariasi, dengan lebih banyak pengunjung yang datang pada akhir pekan untuk berlibur. Berikut adalah data jumlah pengunjung yang datang ke Danau Seran selama seminggu:</p>
        <ul class="mb-0">
            <li>Senin: __data1__ pengunjung</li>
            <li>Selasa: __data2__ pengunjung</li>
            <li>Rabu: __data3__ pengunjung</li>
            <li>Kamis: __data4__ pengunjung</li>
            <li>Jumat: __data5__ pengunjung</li>
            <li>Sabtu: __data6__ pengunjung</li>
            <li>Minggu: __data7__ pengunjung</li>
        </ul>
        <p class="mb-0">Hitunglah rata-rata jumlah pengunjung yang datang ke Danau Seran setiap hari selama seminggu!</p>`;

        let soal_sound = `Danau Seran di Kota Banjarbaru adalah tempat wisata yang populer bagi masyarakat sekitar. Di sana, pengunjung bisa menikmati suasana alam yang asri, melakukan piknik di tepi danau, atau menikmati pemandangan sambil naik perahu. Setiap minggu, jumlah pengunjung yang datang ke Danau Seran bervariasi, dengan lebih banyak pengunjung yang datang pada akhir pekan untuk berlibur. Berikut adalah data jumlah pengunjung yang datang ke Danau Seran selama seminggu:, Senin __data1__ pengunjung, Selasa __data2__ pengunjung, Rabu __data3__ pengunjung, Kamis __data4__ pengunjung, Jumat __data5__ pengunjung, Sabtu __data6__ pengunjung, Minggu __data7__ pengunjung. Hitunglah rata-rata jumlah pengunjung yang datang ke Danau Seran setiap hari selama seminggu!`;

        let data1 = [];
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        
        do {
            data1 = Soal.randomArray(40, 80, 5, 5, 5);
            // data2 = Soal.randomArray(100, 300, 2, 5, 5);
            data1.push(Soal.randomInterval(100, 200, 5));
            data1.push(Soal.randomInterval(100, 200, 5));

        } while (KotaBanjarbaru.random_statistika.array_in_array(data1));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        KotaBanjarbaru.random_statistika.lastPush(data1);

        window.setting.jawaban = data1.mean();
        data1.forEach((element, index) => {
            text = text.replace(`__data${index+1}__`, element);
            soal_sound = soal_sound.replace(`__data${index+1}__`, element);
        });
        window.setting.soal_sound = soal_sound;
        return text;
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = `Pada hari Minggu pagi yang cerah, Ibu Galuh memutuskan untuk menghabiskan waktu bersama anak-anaknya dan keponakannya dengan berkunjung ke Kebun Raya Banua. Tempat itu terkenal sebagai salah satu destinasi wisata alam yang menyenangkan, terutama bagi keluarga. Udara yang sejuk, pepohonan rindang, dan berbagai fasilitas yang memadai, kebun raya ini selalu ramai pengunjung. Setiap akhir pekan, ratusan orang datang untuk menikmati keindahan alam dan beristirahat sejenak dari kesibukan kota. Setelah tiba di loket tiket, Ibu Galuh membeli 1 tiket dewasa untuk dirinya sendiri dan __n__ tiket untuk anak-anak. Harga tiket untuk orang dewasa adalah Rp__b__. Setelah membayar, Ibu Galuh menerima struk dengan total pembayaran sebesar Rp__a__. Berdasarkan informasi tersebut, bantu Ibu Galuh untuk mengetahui berapa harga tiket untuk satu anak-anak!`;
        let a = 0;
        let b = 0;
        let n = 0;

        do {
            a = Soal.randomInterval(20000, 25000, 1000);
            b = Soal.randomInterval(7000, 10000, 1000);
            n = Soal.randomInterval(4, 5);
        } while (KotaBanjarbaru.random_persamaan_linear.array_in_array([a, b, n]));
        KotaBanjarbaru.random_persamaan_linear.lastPush([a, b, n]);

        // jawaban
        window.setting.jawaban = 'Rp\\('+((a-b)/n).toLocaleString('id-ID')+'\\),-';
        window.setting.soal_sound = '';
        return text
            .replace('__a__', a.toLocaleString('id-ID'))
            .replace('__n__', n)
            .replace('__b__', b.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = 'Kampung Purun yang berada di Kelurahan Palam, Kecamatan Cempaka, Kalimantan Selatan, dikenal sebagai sentra kerajinan tangan dari bahan purun, seperti tas, topi, dan bakul yang dibuat langsung oleh para pengrajin di teras rumah mereka. Setiap bulan, hasil produksi kerajinan meningkat mengikuti pola barisan aritmetika, di mana pada bulan pertama diproduksi __a__ buah, bulan kedua __U2__ buah, dan bulan ketiga __U3__ buah. Berapakah jumlah produksi kerajinan pada bulan ke-__n__?'

        // random
        let a = 0;
        let n = 0;
        let b = 0;
        
        do {
            a = Soal.randomInterval(20, 40);
            b = Soal.randomInterval(3, 8);
            n = Soal.randomInterval(5, 12);
        } while (KotaBanjarbaru.random_barisan_dan_deret.array_in_array([a, b, n]));
        KotaBanjarbaru.random_barisan_dan_deret.lastPush([a, b, n]);
        
        // jawaban
        window.setting.jawaban = a+b*(n-1);

        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a)
            .replace('__U2__', a+b)
            .replace('__U3__', a+b*2)
            .replace('__n__', n)
    }
};