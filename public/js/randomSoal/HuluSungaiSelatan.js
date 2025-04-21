window.HuluSungaiSelatan = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //%!/(3!2!) = 5.4/2 = 10 macam
       let text = `Dari data kunjungan aktivitas Balanting Paring (Bamboo Rafting) selama __n__ minggu didapat data sebagai berikut: __daftar_data__. Tentukan modus dari data tersebut.`;
        let data =[];
        let n = 0
        do {
            n = Soal.randomInterval(7, 9)
            data = Soal.randomArray(100, 300, n, 1, 50);
        } while (HuluSungaiSelatan.random_statistika.array_in_array(data));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        HuluSungaiSelatan.random_statistika.lastPush(data);

        window.setting.jawaban = data.modus().joinName();
        return text
            .replace('__n__', n)
            .replace('__daftar_data__', data.joinName());
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ // 4*3 = 12 macam
        let text = `Seorang petani memiliki dua jenis lahan yaitu lahan untuk budidaya kerbau rawa adalah __v1__ hektare dan lahan untuk menanam sagu adalah __v2__ hektare. Jika jumlah kedua lahan sebesar __b__ hektare, tuliskan bentuk persamaan linear dua variabelnya.`;
        let variabel = ('abcdefghijklmnopqrstuvwxyz').split('');
        let b = 0;
        let v1 = '';
        let v2 = '';
        console.log(variabel);
        do {
            let indexVariabel = Soal.randomInterval(0, 24);
            v1 = variabel[indexVariabel];
            v2 = variabel[indexVariabel+1];
            b = Soal.randomInterval(170, 200)
        } while (HuluSungaiSelatan.random_persamaan_linear.array_in_array([v1, b]));
        HuluSungaiSelatan.random_persamaan_linear.lastPush([v1, b]);

        // jawaban
        window.setting.jawaban = `\\(${v1} + ${v2} = ${b}\\)`;
        return text
            .replace('__b__', b)
            .replace('__v1__', v1)
            .replace('__v2__', v2);
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() {
        let text = `Seorang pengelola wisata mencatat jumlah pengunjung Danau Bangkau setiap bulan selama setahun. Jika jumlah pengunjung pada bulan pertama adalah __a__ orang dan __data__, maka __pertanyaan__?`;

        let data = {
            aritmatika: 'meningkat sebesar __b__ orang setiap bulan',
            geometri: 'setiap bulannya meningkat __r__ kali lipat dari bulan sebelumnya'
        }
        let pertanyaan = {
            barisan_v1: 'barisan apa yang terbentuk dari pola jumlah pengunjung tersebut',
            barisan_v2: 'konsep apa yang bisa digunakan untuk mengetahui jumlah pengunjung pada bulan tertentu',
            deret_v1: 'konsep apa yang bisa digunakan untuk mengetahui jumlah pengunjung selama __n__ bulan',
            deret_v2: 'konsep apa yang bisa digunakan untuk mengetahui jumlah pengunjung selama 1 tahun',
        }

        // ambil 1 data dan 1 pertanyaan

        // random
        let a = Soal.randomInterval(50, 100);
        let n = Soal.randomInterval(3, 12);
        let r = Soal.randomInterval(1, 2, 0.5);
        let b = Soal.randomInterval(10, 30);
        console.log('mulai random');
        
        let randomPertanyaan = '';
        let randomData = '';            
        do {
            randomData = Object.keys(data)[Math.floor(Math.random() * Object.keys(data).length)]
            randomPertanyaan = Object.keys(pertanyaan)[Math.floor(Math.random() * Object.keys(pertanyaan).length)];

        } while (HuluSungaiSelatan.random_barisan_dan_deret.array_in_array([randomPertanyaan, randomData]));
        console.log('masukkan ke array record');
        HuluSungaiSelatan.random_barisan_dan_deret.lastPush([randomPertanyaan, randomData]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = (randomPertanyaan.includes('deret') ? 'Deret ' : 'Barisan ') + randomData;
        console.log('jawaban di dapatkan');
        text = text.replace('__data__', data[randomData])
            .replace('__pertanyaan__', pertanyaan[randomPertanyaan]);
        return text
            .replace('__a__', a)
            .replace('__r__', (r%1 !== 0 ? (r-0.5)+'\\(\\frac{1}{2}\\)' : r))
            .replace('__b__', b)
            .replace('__n__', n);
    },


    
    random_pintas: ['', '', '', '', ''],
    pintas: function(){
        let text =`Berdasarkan data Badan Pusat Statistik Hulu Sungai Selatan tahun 2020, luas hutan rawa di Kabupaten Hulu Sungai Selatan adalah 90.060 hektare. Sebuah proyek konservasi lahan basah di Kecamatan Daha Barat berencana memulihkan hutan rawa yang telah beralih fungsi menjadi lahan pertanian. Biaya pemulihan per hektare adalah Rp15.000.000. Total anggaran yang tersedia untuk proyek ini adalah Rp__a__, namun Rp__b__ dialokasikan untuk biaya administrasi dan survei. Jika x adalah luas lahan hutan rawa (dalam hektare) yang dapat dipulihkan dengan anggaran tersebut, tentukan nilai x.`;
        
        let a = 0;
        let b = 0;
        do {
            a = Soal.randomInterval(3000, 4000, 50);
            b = Soal.randomInterval(500, 1000, 50);
        } while (HuluSungaiSelatan.random_pintas.array_in_array([a, b]));
        console.log('masukkan ke array record');
        HuluSungaiSelatan.random_pintas.lastPush([a, b]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = 'Rp.'+((a-b)/15).toLocaleString('id-ID')+".000.000,-";
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a.toLocaleString('id-ID')+'.000.000')
            .replace('__b__', b.toLocaleString('id-ID')+'.000.000');
    },
}