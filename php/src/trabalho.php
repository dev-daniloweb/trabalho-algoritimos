<?php

$funcao = $_POST["action"];

if (function_exists($funcao)) {
    call_user_func($funcao);
}

function calc()
{
    $num =  explode(',', $_POST['vet']);
    
    for ($i = 0; $i < 10; $i++) { 
        $vetor[$i] = pow($num[$i], 3);
    }

    for ($i = 0; $i < 10; $i++) { 
        echo "<script>localStorage.setItem('vetor[$i]', '$num[$i] ^ 3 = $vetor[$i]');</script>";
    }
    
    echo "<script>location.href = 'index.html';</script>";
}
