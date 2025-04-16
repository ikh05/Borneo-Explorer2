<?php

namespace App\Http\Controllers;

use App\Models\Api;
use App\Models\Game;
use App\Models\Soal;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use PhpParser\Node\Stmt\Block;

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
        // jalan pintas
        $this->data['pintas'] = [
            'Hulu Sungai Tengah' => 'Balangan',
            'Hulu Sungai Selatan' => 'Hulu Sungai Utara',
        ];
        // generate keyGame
        $key = '';
        
        $this->data['newKey'] = $key;
    }

    protected function generateKeyGame($length = 6, $blocks = 2 ,String $text = 'BORNEO'){
        $result = '';
        if($text !== '') {
            $result = $text.'-';
            $blocks -= 1;
        }
        do {
            // Misal key-nya 8 karakter acak (bisa diubah sesuai selera)
            $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            $code = [];
            $generateBlock = function () use ($characters, $length) {
                return collect(range(1, $length))
                    ->map(fn () => $characters[random_int(0, strlen($characters) - 1)])
                    ->implode('');
            };
            for ($i=$blocks; $i > 0 ; $i--) {
                $code []= $generateBlock();
            }
            $key = $result . implode('-', $code);
        } while (Game::where('key', $key)->exists());

        return $key;
    }

    public function start(Request $request){

        $validated = $request->validate([]);

        // Simpan ke database
        $game = Game::create([
            'key' => $this->generateKeyGame(),
        ]);
        $this->data['game'] = $game;

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

    public function host($key){

        $game = Game::where('key', $key)->first();

        if (!$game) {
            abort(404, 'Permainan tidak ditemukan.');
        }

        // Tampilkan halaman permainan dengan data game
        return view('host', ['data' => $game]);
    }

    function simpanSoal(Request $request){
        $soal = Soal::create($request->only([
            'lokasi',
            'materi',
            'soal_text',
            'soal_sound',
            'game_id',
            'jawaban'
        ]));
        return response()->json([
            'status' => 'success',
            'message' => 'Soal berhasil disimpan',
            'data' => $soal,
        ]);
    }
    function ambilSoalTerakhir(Request $request){
        $game = Game::where('key', $request->input('key'))->first();
    
        $last = $game->soals->last();
        if(!$last) return response()->json([
            'status' => 'success',
            'message' => 'Tidak ada soal!'
        ]);
        if ($last->created_at == $request->input('created_at')) {
            return response()->json([
                'status' => 'success',
                'message' => 'Tidak ada soal terbaru',
            ]);
        } else {
            return response()->json([
                'banyakSoal' => $game->soals->count(),
                'status' => 'success',
                'message' => 'Terdapat soal terbaru',
                'soal' => $last,
            ]);
        }
    }    
}
