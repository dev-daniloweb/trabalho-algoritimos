<?php

$funcao = $_REQUEST["action"];

if (function_exists($funcao)) {
    call_user_func($funcao);
}

function calc()
{
    $num = $_POST["number"];

    echo "<script>localStorage.setItem(localStorage.length, '$num ^ 3 = " . pow($num, 3) . "');</script>";
    echo "<script>location.href = 'index.html';</script>";
}
