window.BaritoKuala = {
    random_statistika: ['', '', '', '', ''],
    statistika: ()=>{ //20^5 = 3.200.000
        let text = 'Di Desa Cahaya Baru, Kecamatan Jejangkit, Kabupaten Barito Kuala (Batola) terdapat pertanian budidaya padi apung yaitu teknik inovatif yang menggunakan rakit berupa styrofoam atau bambu dan pot berisi tanah sebagai media tanam. Teknik ini sangat cocokuntuk lahan yang selalu tergenang. Budidaya Padi Apung memiliki berbagai keunggulan, seperti kemampuan menyesuaikan diri dengan perubahan ketinggian air, produktivitas yang relatif tinggi, serta toleransi terhadap hama dan penyakit. Seorang petanipadi apung di Jejangkit mencatat hasil panennya selama 5 musim tanam sebagai berikut(dalam ton per hektar): __daftar_data__. Hitunglahrata-rata hasil panen padi apung petani tersebut!';
        // x1, x2, x3, x4, x5 = 6, 0 − 8, 0 (kelipatan 0,1)
        // Jawaban:  ̄x = sigma(xn)/n
        
        // random ambil 3 buah data dan urutkan data dan menjaga agar tidak ada yang berulang
        let data = [];
        
        do {
            data = Soal.randomArray(6, 8, 5);
        } while (BaritoKuala.random_statistika.array_in_array(data));
        
        // simpan ke daftar 5 terakhir
        BaritoKuala.random_statistika.lastPush(data);
        
        window.setting.soal_sound = '';
        window.setting.jawaban = (data.mean()).toLocaleString('id-ID')+' ton';
        return text.replace('__daftar_data__', data.joinName(0, ';'));
    },

    // persamaan_linear
    random_persamaan_linear: ['', '', '', '', ''],
    persamaan_linear: ()=>{ 
        let text = 'Di Desa Tamban, Kabupaten Barito Kuala, terdapat layanan penyeberangan feri yang menghubungkan desa tersebut dengan Kota Banjarmasin. Pak Yusuf bersama istrinya menggunakan jasa penyeberangan feri tersebut untuk menyeberangi Sungai Barito dengan total biaya sebesar Rp__x__. Diketahui bahwa tarif untuk kendaraan yang dibawa Pak Yusuf adalah sebesar Rp__y__, berapakah tarif penyeberangan untuk setiap orang?';

        let x = 0;
        let y = 0;

        do {
            x = Soal.randomInterval(10000, 15000, 1000);
            y = Soal.randomInterval(5000, 7000, 1000);
        } while (BaritoKuala.random_persamaan_linear.array_in_array([x, y]));
        BaritoKuala.random_persamaan_linear.lastPush([x, y]);

        // jawaban
        window.setting.soal_sound = '';
        window.setting.jawaban = 'Rp\\('+((x-y)/2).toLocaleString('id-ID')+'\\)';
        return text
            .replace('__y__', y.toLocaleString('id-ID'))
            .replace('__x__', x.toLocaleString('id-ID'));
    },

    // barisan dan deret
    random_barisan_dan_deret:['', '', '', '', ''],
    barisan_dan_deret: function() { //3*3*5 = 45
        let text = "Di kawasan Sungai Barito, tepatnya di Kecamatan Anjir Muara, Kabupaten Barito Kuala, terdapat sebuah pulau kecil yang dijadikan sebagai objek wisata alam bernama Pulau Curiak. Jika ingin menikmati keanekaragaman flora dan fauna, Pulau Curiak merupakan destinasi yang tepat. Pulau ini dikelilingi oleh pohon mangrove rambai dan menjadi habitat berbagai jenis fauna, seperti bekantan dan satwa liar khas lahan basah lainnya.Pulau Curiak juga menjadi rumah bagi beragam jenis burung, mulai dari burung kuntul, dara laut, hingga elang brontok—salah satu burung yang dilindungi. Pengunjung didorong untuk berpartisipasi dalam kegiatan penanaman pohon mangrove rambai di kawasan tersebut. Setiap pohon rambai dikenakan biaya sebesar Rp__b__,00. Jika satu rombongan terdiri atas __n__ orang, berapakah total biaya penanaman pohon mangrove rambai yang dikeluarkan oleh rombongan tersebut?";

        // random
        let n = 0;
        let b = 0;
        console.log('mulai random');
        
        do {
            b = Soal.randomInterval(50000, 70000, 10000);
            n = Soal.randomInterval(6,10);
            console.log('selesai random, akan di cek');    
        } while (BaritoKuala.random_barisan_dan_deret.array_in_array([b, n]));
        console.log('masukkan ke array record');
        BaritoKuala.random_barisan_dan_deret.lastPush([b, n]);
        console.log('sudah di masukkan');
        
        // jawaban
        window.setting.jawaban = 'Rp\\('+(b*n).toLocaleString('id-ID')+'\\),-';
        window.setting.soal_sound = '';
        console.log('jawaban di dapatkan');
        return text
            .replace('__b__', b.toLocaleString('id-ID'))
            .replace('__n__', n);
    }
}