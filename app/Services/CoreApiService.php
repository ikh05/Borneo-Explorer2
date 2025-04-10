<?php 
// app/Services/CoreApiService.php
namespace App\Services;

use Illuminate\Support\Facades\Http;

abstract class CoreApiService {
    protected $baseUrl;
    
    protected function coreGet($endpoint, $params = []) {
        $response = Http::get($this->baseUrl.$endpoint, $params);
        
        if ($response->successful()) {
            return collect($response->json());
        }

        throw new \Exception("API Error: " . $response->status());
    }
}

?>