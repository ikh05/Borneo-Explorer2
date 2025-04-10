Soal.BaritoKuala = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //20^5 = 3.200.000
        let text = 'Di Desa Cahaya Baru, Kecamatan Jejangkit, Kabupaten Barito Kuala (Batola) terdapat pertanian budidaya padi apung yaitu teknik inovatif yang menggunakan rakit berupa sty-rofoam atau bambu dan pot berisi tanah sebagai media tanam. Teknik ini sangat cocokuntuk lahan yang selalu tergenang. Budidaya Padi Apung memiliki berbagai keunggu-lan, seperti kemampuan menyesuaikan diri dengan perubahan ketinggian air, produk-tivitas yang relatif tinggi, serta toleransi terhadap hama dan penyakit. Seorang petanipadi apung di Jejangkit mencatat hasil panennya selama 5 musim tanam sebagai berikut(dalam ton per hektar): __x_1__; __x_2__; __x_3__; __x_4__; dan __x_5__. Hitunglahrata-rata hasil panen padi apung petani tersebut!';
        // x1, x2, x3, x4, x5 = 6, 0 − 8, 0 (kelipatan 0,1)
        // Jawaban:  ̄x = sigma(xn)/n

        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let x_1 = 0;
        let x_2 = 0;
        let x_3 = 0;
        let x_4 = 0;
        let x_5 = 0;
        
        do {
            x_1 = Soal.randomInterval(6, 8, 0.1);
            x_2 = Soal.randomInterval(6, 8, 0.1);
            x_3 = Soal.randomInterval(6, 8, 0.1);
            x_4 = Soal.randomInterval(6, 8, 0.1);
            x_5 = Soal.randomInterval(6, 8, 0.1);
        } while (BaritoKuala.random_statistika.array_in_array([x_1, x_2, x_3, x_4, x_5]));
        console.log('statistika selesai_random');

        // simpan ke daftar 5 terakhir
        BaritoKuala.random_statistika.lastPush([x_1, x_2, x_3, x_4, x_5]);

        window.setting.jawaban = ((x_1 + x_2 + x_3 + x_4 + x_5)/5).toLocaleString('id-ID')+' ton';
        return text
            .replace('__x_1__', x_1.toFixed(1).replace(".", ","))
            .replace('__x_2__', x_2.toFixed(1).replace(".", ","))
            .replace('__x_3__', x_3.toFixed(1).replace(".", ","))
            .replace('__x_4__', x_4.toFixed(1).replace(".", ","))
            .replace('__x_5__', x_5.toFixed(1).replace(".", ","));
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ 
        let text = 'Di Desa Tamban Kabupaten Barito Kuala terdapat penyeberangan feri yang menghubungkan Kabupaten Desa Tamban kabupaten Barito Kuala ke Banjarmasin. Pak Yusuf bersama istri menyebrang sungai barito menggunakan jasa penyeberangan feri dari Tamban ke Banjarmasin dengan membayar Rp__x__. Jika tarif untuk kendaraan pak Yusuf adalah Rp__y__, maka berapakah tarif penyebrangan untuk setiap orang?';

        let x = 0;
        let y = 0;

        do {
            x = Soal.randomInterval(10000, 15000, 1000);
            y = Soal.randomInterval(5000, 7000, 1000);
        } while (BaritoKuala.random_persamaan_linear.array_in_array([x, y]));
        BaritoKuala.random_persamaan_linear.lastPush([x, y]);

        // jawaban
        window.setting.jawaban = 'Rp\\('+((x-y)/2).toLocaleString('id-ID')+'\\)';
        return text
            .replace('__y__', y.toLocaleString('id-ID'))
            .replace('__x__', x.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() { //3*3*5 = 45
        let text = "Di kawasan Sungai Barito tepatnya di kecamatan Anjir Muara, Kabupaten Barito Kuala terdapat sebuah kecil yang digunakan sebagai wisata alam bernama Pulau Curiak. Jika ingin mellihat surga aneka flora dan fauna, destinasi pulau curiak ini lah yang tepat.Dengan di kelilingi oleh pohon mangrove rambai dan mengamati aneka fauna seperti Bekantan dan jenis satwa liar lainnya khas lahan basah. Pulau Curiak juga memiliki berbagai jenis burung mulai dari jenis burung kuntul, Dara laut, hingga Elang Bron-tok (salah satu burung yang dilindungi). Pengunjung juga didorong untuk melakukan penanaman pohon mangrove rambai di daerah tersebut. Untuk setiap pohon rambai dikenakan harga Rp__b__,00. Jika dalam satu rombongan berisi __n__ orang dan untuk penanaman pertama diberi potongan harga menjadi hanya Rp__a__,00. Untuk penanaman selanjutnya berlaku harga normal, maka berapakan biaya penanaman pohon mangrove rambai yang dikeluarkan dalam satu rombongan tersebut?";
        // a = 30.000 − 45.000 (kelipatan 5.000)
        // b = 50.000 − 70.000 (kelipatan 10.000)
        // n = 6 − 10
        // Jawaban: Un = a + (n − 1)b";

        // random
        let a = 0;
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            a = Soal.randomInterval(30000, 45000, 5000);
            b = Soal.randomInterval(50000, 70000, 10000);
            n = Soal.randomInterval(6,10);
            console.log('selesai random, akan di cek');
            
        } while (BaritoKuala.random_barisan_dan_deret.array_in_array([a, b, n]));
        console.log('masukkan ke array record');
        BaritoKuala.random_barisan_dan_deret.lastPush([a, b, n]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = 'Rp\\('+(a+b*(n-1)).toLocaleString('id-ID')+'\\),-';
        console.log('jawaban di dapatkan');
        return text
            .replace('__a__', a.toLocaleString('id-ID'))
            .replace('__b__', b.toLocaleString('id-ID'))
            .replace('__n__', n);
    }
}