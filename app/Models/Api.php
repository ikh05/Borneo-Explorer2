<?php

namespace App\Models;

use App\Services\ApiVillageService;
use App\Services\ApiDistrictService;
use PhpParser\Node\Expr\Cast\Array_;
use App\Services\ApiCityDistrictSevice;
use Illuminate\Database\Eloquent\Model;

class Api extends Model{

    public static $kabupatenKalsel = [
        "Kota Baru",
        "Tanah Bumbu",
        "Tanah Laut",
        "Kota Banjarmasin",
        "Kota Banjar Baru",
        "Banjar",
        "Barito Kuala",
        "Tapin",
        "Hulu Sungai Selatan",
        "Hulu Sungai Tengah",
        "Hulu Sungai Utara",
        "Tabalong",
        "Balangan",
    ];

    public static function getCityDistrict(){
        $result = new ApiCityDistrictSevice;
        return $result->get();
    }
    public static function getDistrict(){
        $result = new ApiDistrictService;
        return $result->get();
    }
    public static function getVillage(){
        $result = new ApiVillageService;
        return $result->get();
    }
    public static function combine($kumpulan_data){
        $result = [];
        foreach ($kumpulan_data as $data) {
            foreach ($data as $key => $value) {
                if (isset($result[$key])) {
                    // Gabungkan jika key sudah ada
                    $result[$key] = array_merge($result[$key], $value);
                } else {
                    // Tambahkan jika key belum ada
                    $result[$key] = $value;
                }
            }
        }
        return collect($result);
    }
    public static function sort($data, $ref){
        $result = [];
        foreach ($ref as $key) {
            if (isset($data[$key])) {
                $result[$key] = $data[$key];
            }
        }
        return collect($result);
    }

    public static function combine_sort($kumpulan_data, $ref){
        return self::sort(self::combine($kumpulan_data), $ref);
    }

    
}
