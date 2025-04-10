<?php 

// app/Services/ProductApiService.php
namespace App\Services;

use App\Services\CoreApiService;

class ApiVillageService extends CoreApiService {
    public function __construct() {
        $this->baseUrl = 'https://webapi.bps.go.id/v1/api/interoperabilitas/datasource/simdasi/id/25/tahun/2023/id_tabel/bEVXU252SU9hTjBxWEU3Z2NpS1ZPQT09/wilayah/6300000/key/86cc70a1cbd9f7ea58724f9dfaeedbf3';
    }
    
    public function get() {
        $data = $this->coreGet('');
        $result = [];
        if($data){
            foreach ($data['data'][1]['data'] as $region) {
                $result[$region['label']] = [
                    'kelurahan/desa' => $region['variables']['ptskrpwokd']['value'],
                ];
            }
            return collect($result);
        }
        return [];
    }
}

?>