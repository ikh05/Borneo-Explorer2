window.KotaBanjarmasin = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        text =`Sungai yang terletak di kelurahan Benua Anyar, Banjarmasin Timur, adalah Sungai Martapura. Kelurahan Benua Anyar berada di bantaran sungai ini, terkenal sebagai surga kuliner di Banjarmasin. Mulai dari soto banjar, ketupat kandangan, sampai ikan bakar khas lahan basah. Setiap akhir pekan, banyak pengunjung datang untuk mencicipi ku liner sambil menikmati pemandangan sungai. Seorang petugas kelurahan melakukan pencatatan jumlah pengunjung di 7 warung kuliner yang berada di tepi sungai pada hari Minggu. Berikut adalah data jumlah pengunjung di masing-masing warung:
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Warung</th>
                    <th scope="col">Jumlah Pengunjung</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">A</th>
                    <td>__x1__</td>
                </tr>
                <tr>
                    <th scope="row">B</th>
                    <td>__x2__</td>
                </tr>
                <tr>
                    <th scope="row">C</th>
                    <td>__x3__</td>
                </tr>
                <tr>
                    <th scope="row">D</th>
                    <td>__x4__</td>
                </tr>
                <tr>
                    <th scope="row">E</th>
                    <td>__x5__</td>
                </tr>
                <tr>
                    <th scope="row">F</th>
                    <td>__x6__</td>
                </tr>
                <tr>
                    <th scope="row">G</th>
                    <td>__x7__</td>
                </tr>
            </tbody>
        </table>
        Tentukan rata-rata dati data di atas!`;

        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let data = [];
        console.log(typeof (KotaBanjarmasin.random_statistika));
        
        do {
            for (let index = 0; index < 6; index++) {
                data.push(Soal.randomInterval(40, 60));
            }
            data.push(Soal.randomInterval(47, 60));
            data[6] = data[6] - (data.reduce((a,b)=>a+b) % 7);
        } while (KotaBanjarmasin.random_statistika.array_in_array(data));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        KotaBanjarmasin.random_statistika.lastPush(data);

        window.setting.jawaban = data.reduce((a,b)=>a+b)/data.length;
        data.map((e,i) => {
            text = text.replace('__x'+(i+1)+'__', e);
        })
        return text;
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = `<p class="m-0">Setiap pagi, di sepanjang pinggir Sungai Lulut, ramai pedagang menjajakan hasil bumidan buah-buahan khas Banua. Suasana khas Kalimantan Selatan dengan perahu kecil (jukung) dan deretan lapak di atas lanting (rumah apung). Acil Imah adalah salah satu pedagang tetap di sana. Ia menjual dua jenis buah khas Kalimantan Selatan, yaitu rambutan sungai dan kasturi yang ia dapat dari kebun warga di sekitar kawasan lahan basah di Desa Sungai Lulut. </p>
        <ul class="mb-0" style="list-style-type: '- ';">
            <li>Harga 1 ikat rambutan : Rp5.000</li>
            <li>Harga 1 ikat kasturi: Rp10.000</li>
        </ul>
        <p class="m-0"> Pada hari Minggu, Acil Imah berhasil menjual __m__ ikat buah dan mendapatkan total pendapatan sebesar Rp__n__ dari seluruh penjualannya. Berapa ikat rambutan sungai dan berapa ikat kasturi yang berhasil dijual Acil Imah?</p>`
        // Ketentuan Random:
        // m = 25 − 35
        // Misal x adalah banyak ikat rambutan terjual dan y banyak ikat kasturi terjual.
        // x = m − y
        // n = 10000(m − y) + 5000y
        // Jawaban: x dan y
        let m = 0;
        let x = 0;

        do {
            m = Soal.randomInterval(25, 35);
            x = Soal.randomInterval(1, 25);
        } while (KotaBanjarmasin.random_persamaan_linear.array_in_array([m, x]));
        KotaBanjarmasin.random_persamaan_linear.lastPush([m, x]);

        // jawaban
        window.setting.jawaban = x+' dan '+(m-x);
        return text
            .replace('__m__', m)
            .replace('__n__', (10000*x + 5000*(m-x)).toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = "Setiap akhir pekan, pengelola wisata di Taman Siring 0 Km menyewakan kapal kelotok untuk tur menyusuri Sungai Martapura dan melihat pasar terapung. Pada hari pertama libur, ada __a__ kapal kelotok yang beroperasi. Setiap hari libur berikutnya jumlah kapal kelotok bertambah __b__ kapal dari hari libur sebelumnya.Tentukan jumlah kapal kelotok yang beroperasi pada hari libur ke-__n__.";
        // a = 5-10
        // b = 3 - 5
        // n = 6 - 10
        // Jawaban: U_n=ar^(n-1)  

        // random
        let a = 0;
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            a = Soal.randomInterval(5, 10);
            n = Soal.randomInterval(3, 5);
            b = Soal.randomInterval(6, 10);
            console.log('selesai random, akan di cek');
            
        } while (KotaBanjarmasin.random_barisan_dan_deret.array_in_array([a, b, n]));
        console.log('masukkan ke array record');
        KotaBanjarmasin.random_barisan_dan_deret.lastPush([a, b, n]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = (a+b*(n-1));
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a)
            .replace('__b__', b)
            .replace('__n__', n);
    }
}