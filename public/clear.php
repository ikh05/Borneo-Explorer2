<?php

use Illuminate\Contracts\Console\Kernel;

require __DIR__.'/../vendor/autoload.php';
$app = require_once __DIR__.'/../bootstrap/app.php';

$kernel = $app->make(Kernel::class);

$commands = ['config:clear', 'cache:clear', 'config:cache', 'optimize:clear'];

echo "<pre>";
foreach ($commands as $command) {
    echo "Running: $command\n";
    try {
        $kernel->call($command);
        echo $kernel->output() . "\n";
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage() . "\n";
    }
}
echo "</pre>";
