<?php

require __DIR__.'/../vendor/autoload.php';

$app = require_once __DIR__.'/../bootstrap/app.php';

use Illuminate\Contracts\Console\Kernel;

$kernel = $app->make(Kernel::class);

echo "<pre>";

echo "Clearing config...\n";
$kernel->call('config:clear');
echo $kernel->output();

echo "Clearing cache...\n";
$kernel->call('cache:clear');
echo $kernel->output();

echo "Caching config...\n";
$kernel->call('config:cache');
echo $kernel->output();

echo "</pre>";
