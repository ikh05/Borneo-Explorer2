<?php 

// app/Services/ProductApiService.php
namespace App\Services;

use Illuminate\Support\Str;
use App\Services\CoreApiService;

class ApiCityDistrictSevice extends CoreApiService {
    public function __construct() {
        $this->baseUrl = 'https://webapi.bps.go.id/v1/api/interoperabilitas/datasource/simdasi/id/25/tahun/2023/id_tabel/UFpWMmJZOVZlZTJnc1pXaHhDV1hPQT09/wilayah/6300000/key/86cc70a1cbd9f7ea58724f9dfaeedbf3';
    }
    
    public function get() {
        $data = $this->coreGet('');
        $result = [];
        if($data){
            foreach ($data['data'][1]['data'] as $region) {
                $result[$region['label']] = [
                    'ibukota' => $region['variables']['kynntipynd']['value'],
                    'luas' => (float) Str::remove('.',$region['variables']['xbfn1vtg1a']['value']),
                ];
            }
            return collect($result);
        }
        return [];
    }
}

?>