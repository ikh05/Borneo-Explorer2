<?php 

// app/Services/ProductApiService.php
namespace App\Services;

use App\Services\CoreApiService;

class ApiDistrictService extends CoreApiService {
    public function __construct() {
        $this->baseUrl = 'https://webapi.bps.go.id/v1/api/interoperabilitas/datasource/simdasi/id/25/tahun/2023/id_tabel/KzdIWGtmbUNtMysvSXczYW1UWXZVQT09/wilayah/6300000/key/86cc70a1cbd9f7ea58724f9dfaeedbf3';
    }
    
    public function get() {
        $data = $this->coreGet('');
        $result = [];
        if($data){
            foreach ($data['data'][1]['data'] as $region) {
                $result[$region['label']] = [
                    'kecamatan' => $region['variables']['clqdlmgbaj']['value'],
                ];
            }
            return collect($result);
        }
        return [];
    }
}

?>