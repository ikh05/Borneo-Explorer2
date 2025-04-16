window.TanahLaut = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
        let text = `<p class="mb-0">Ekowisata mangrove di Desa Pagatan Besar merupakan destinasi wisata yang menawarkan keunikan berupa hutan mangrove, pantai, budaya lokal, serta wisata susur. Lokasinya berada di Jalan Gang Balai, RT 10, Desa Pagatan Besar, Kecamatan Takisung, Kabupaten Tanah Laut, Kalimantan Selatan. Tempat ini menjadi salah satu destinasi wisata edukatif pertama di Tanah Laut yang berfokus pada pelestarian dan pembelajaran tentang ekosistem hutan mangrove. Pengelolaannya dilakukan oleh Kelompok Sadar Wisata (Pokdarwis) Desa Pagatan Besar, dan ekowisata ini telah beroperasi sejak tahun 2019. Berikut adalah data jumlah pengunjung pendidikan dan penelitian wisata hutan mangrove: </p>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Kategori</th>
                    <th scope="col">Jumlah Pengunjung</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>SD</td>
                    <td>10</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>SMA</td>
                    <td>21</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Mahasiswa S1</td>
                    <td>33</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Mahasiswa S2</td>
                    <td>1</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Dosen dan Staff</td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
        <p class="mb-0">Tentukan rata-rata jumlah pengunjung untuk kategori __kategori__!</p>`;
        let sound = `Ekowisata mangrove di Desa Pagatan Besar merupakan destinasi wisata yang menawarkan keunikan berupa hutan mangrove, pantai, budaya lokal, serta wisata susur. Lokasinya berada di Jalan Gang Balai, RT 10, Desa Pagatan Besar, Kecamatan Takisung, Kabupaten Tanah Laut, Kalimantan Selatan. Tempat ini menjadi salah satu destinasi wisata edukatif pertama di Tanah Laut yang berfokus pada pelestarian dan pembelajaran tentang ekosistem hutan mangrove. Pengelolaannya dilakukan oleh Kelompok Sadar Wisata (Pokdarwis) Desa Pagatan Besar, dan ekowisata ini telah beroperasi sejak tahun 2019. Berikut adalah data jumlah pengunjung pendidikan dan penelitian wisata hutan mangrove. >Tentukan rata-rata jumlah pengunjung untuk kategori __kategori__!`;
        const data = {
            SD: 10,
            SMA: 21,
            Mahasiswa_S1: 33,
            Mahasiswa_S2: 1,
            Dosen_dan_Staff: 10
        }
        console.log('statistika belum_random');
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let randomEntries = '';
        console.log(typeof (TanahLaut.random_statistika));
        
        do {
            console.log('statistika iterasi_random');
            randomEntries = Object.entries(data)
            .shuffleArray()
            .slice(0, 3)
            .sort((a, b) => a[0] - b[0]);
            console.log('statistika sudah_di random');
        } while (TanahLaut.random_statistika.array_in_array(randomEntries));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        TanahLaut.random_statistika.lastPush(randomEntries);
        let kunjungan = randomEntries.map(e => e[1])
        let kategori = randomEntries.map(e => e[0])


        window.setting.jawaban = (kunjungan.mean());
        window.setting.soal_sound = sound.replace('__kategori__', kategori.joinName())
        return text.replace('__kategori__', kategori.joinName());
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = '';
        let a = 0;
        let x = 0;

        do {
            a = Soal.randomInterval(6,9);
            x = Soal.randomInterval(20000, 22000, 1000);
        } while (TanahLaut.random_persamaan_linear.array_in_array([a, x]));
        TanahLaut.random_persamaan_linear.lastPush([a, x]);

        // jawaban
        window.setting.jawaban = 'Rp\\('+(200000 - a*x).toLocaleString('id-ID')+'\\),-';
        return text
            .replace('__a__', a)
            .replace('__x__', x.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = 'Luas panen jagung di Kabupaten Tanah Laut pada tahun 2022 adalah 20.014 hektar. Diasumsikan bahwa setiap tahun, luas panen bertambah secara teratur sebesar __b__ hektar karena peningkatan produktivitas. Tentukan luas panen jagung pada tahun __t__.'
        // a=400.000-600.000 (kelipatan 20.000)
        // r=2-3 
        // n=4-6 
        // Jawaban: U_n=ar^(n-1)  

        // random
        let t = 0;
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            t = Soal.randomInterval(2025, 2030);
            n = t - 2022;
            b = Soal.randomInterval(400, 600, 100);
            console.log('selesai random, akan di cek');
            
        } while (TanahLaut.random_barisan_dan_deret.array_in_array([t, n, b]));
        TanahLaut.random_barisan_dan_deret.lastPush([t, n, b]);
        
        // jawaban
        window.setting.jawaban = 20014 + (n-1)*b;
        window.setting.soal_sound = '';
        console.log('jawaban di dapatkan');
        return text
            .replace('__t__', t)
            .replace('__b__', b)
            .replace('__n__', n);
    }
}