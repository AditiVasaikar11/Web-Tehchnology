<?php

$conn = null;

try {
    $conn = new PDO("mysql:host=localhost;dbname=id14777662_aaditi", "id14777662_aditi", "aadu@12345VA");
} catch(PDOException $e) {
    echo "Connection to data failed: " . $e->getMessage();
}

?>