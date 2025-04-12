<?php

namespace App\Http\Controllers;

use App\Models\Api;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class GameController extends Controller
{

    protected $ref = [
        "Barito Kuala",
        "Tapin",
        "Hulu Sungai Selatan",
        "Hulu Sungai Tengah",
        "Hulu Sungai Utara",
        "Tabalong",
        "Balangan",
        "Kotabaru",
        "Tanah Bumbu",
        "Tanah Laut",
        "Kota Banjarbaru",
        "Banjar",
        "Kota Banjarmasin",
    ];
    protected $kab =  [
        "Kotabaru" => [
            "kecamatan" => "22",
            "ibukota" => "Kotabaru",
            "luas" => 9480,
            "kelurahan/desa" => "202"
        ],
        "Tanah Bumbu" => [
            "kecamatan" => "12",
            "ibukota" => "Batulicin",
            "luas" => 4888,
            "kelurahan/desa" => "149"
        ],
        "Tanah Laut" => [
            "kecamatan" => "11",
            "ibukota" => "Pelaihari",
            "luas" => 3840,
            "kelurahan/desa" => "135"
        ],
        "Kota Banjarbaru" => [
            "kecamatan" => "5",
            "ibukota" => "Banjarbaru",
            "luas" => 305,
            "kelurahan/desa" => "20"
        ],
        "Banjar" => [
            "kecamatan" => "20",
            "ibukota" => "Martapura",
            "luas" => 4588,
            "kelurahan/desa" => "290"
        ],
        "Kota Banjarmasin" => [
            "kecamatan" => "5",
            "ibukota" => "Banjarmasin",
            "luas" => 98,
            "kelurahan/desa" => "52"
        ],
        "Barito Kuala" => [
            "kecamatan" => "17",
            "ibukota" => "Marabahan",
            "luas" => 2430,
            "kelurahan/desa" => "201"
        ],
        "Tapin" => [
            "kecamatan" => "12",
            "ibukota" => "Rantau",
            "luas" => 2156,
            "kelurahan/desa" => "135"
        ],
        "Hulu Sungai Selatan" => [
            "kecamatan" => "11",
            "ibukota" => "Kandangan",
            "luas" => 1691,
            "kelurahan/desa" => "148"
        ],
        "Hulu Sungai Tengah" => [
            "kecamatan" => "11",
            "ibukota" => "Barabai",
            "luas" => 1468,
            "kelurahan/desa" => "169"
        ],
        "Hulu Sungai Utara" => [
            "kecamatan" => "10",
            "ibukota" => "Amuntai",
            "luas" => 940,
            "kelurahan/desa" => "219"
        ],
        "Tabalong" => [
            "kecamatan" => "12",
            "ibukota" => "Tanjung",
            "luas" => 3473,
            "kelurahan/desa" => "131"
        ],
        "Balangan" => [
            "kecamatan" => "8",
            "ibukota" => "Paringin",
            "luas" => 1828,
            "kelurahan/desa" => "156"
        ]
    ];
    protected $data = [];
    function __construct(){
        $this->data = API::sort($this->kab, $this->ref);
    }


    public function start(Request $request){
        $startlokasi = 0;
        foreach ($this->ref as $i => $kab) {
            if(Str::remove(' ',$kab) == $request['lokasi']) $startlokasi = $i;
        }
        if($startlokasi) $this->ref = array_merge(array_slice($this->ref, $startlokasi), array_slice($this->ref, 0, $startlokasi));
        $this->data['kabupaten'] = API::sort($this->kab, $this->ref); 
        
        $this->data['post'] = $request;

        $this->data['class_sosialMedia'] = [
            'instagram' => "fa-brands fa-instagram",
            'github' => "fa-brands fa-github",
        ];
        $this->data['creator'] = [
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
        return view('game', ['data' => $this->data]);
    }

    public function first(){
        $this->data['kabupaten'] = Api::sort($this->kab, $this->ref);
        return view('game', ['data' => $this->data]);
    }

}
