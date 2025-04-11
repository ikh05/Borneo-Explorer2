<?php

namespace App\Http\Controllers;

use App\Models\Api;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class GameController extends Controller
{
    public function start(Request $request){
        $kabupaten = Api::getCityDistrict();
        $kecamatan = Api::getDistrict();
        $kelurahan = Api::getVillage();
        $ref = [
            "Barito Kuala",
            "Tapin",
            "Hulu Sungai Selatan",
            "Hulu Sungai Tengah",
            "Hulu Sungai Utara",
            "Tabalong",
            "Balangan",
            "Kota Baru",
            "Tanah Bumbu",
            "Tanah Laut",
            "Kota Banjar Baru",
            "Banjar",
            "Kota Banjarmasin",
            
        ];
        $startlokasi = 0;
        foreach ($ref as $i => $kab) {
            if(Str::remove(' ',$kab) == $request['lokasi']) $startlokasi = $i;
        }
        if($startlokasi) $ref = array_merge(array_slice($ref, $startlokasi), array_slice($ref, 0, $startlokasi));
        $data = [];
        $data['post'] = $request;
        $data['kabupaten'] = Api::combine_sort([$kecamatan, $kabupaten, $kelurahan],$ref);
        $data['class_sosialMedia'] = [
            'instagram' => "fa-brands fa-instagram",
            'github' => "fa-brands fa-github",
        ];
        $data['creator'] = [
            'Arif Rohman' => [
                'instagram' => 'https://www.instagram.com/arifrohman16/'
            ],
            'Arya Dharmawan Wijaya Kusuma' => [
                'instagram' => 'https://www.instagram.com/k.arya14/'
            ],
            'Asiah' => [
                'instagram' => 'https://www.instagram.com/ash.asiah/'
            ],
            'Irsya Azizah' => [
                'instagram' => 'https://www.instagram.com/irsyaazzh09/'
            ],
            'Muhammad Ikhsan' => [
                'instagram' => 'https://www.instagram.com/m_ikhsann05/',
                'github' => 'https://github.com/ikh05',
            ],
            'Mylida' => [
                'instagram' => 'https://www.instagram.com/myy.lida_/'
            ],
            'Ramadhani' => [
                'instagram' => 'https://www.instagram.com/ruser_rdh/'
            ],
            'Siti Juariah' => [
                'instagram' => 'https://www.instagram.com/sitijuariah29/'
            ]
        ];
        return view('game', ['data' => $data]);
    }

    public function first(){
        $kabupaten = Api::getCityDistrict();
        $kecamatan = Api::getDistrict();
        $kelurahan = Api::getVillage();

        $data = [];
        $data['kabupaten'] = Api::combine_sort([$kecamatan, $kabupaten, $kelurahan], Api::$kabupatenKalsel);
        return view('game', ['data' => $data]);
    }

}
