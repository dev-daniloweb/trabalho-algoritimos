<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Trabalho de Algoritmos</title>

        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <h2 class="text-center mt-5">
                Trabalho de Algoritmos - JavaScript
            </h2>

            <div class="mt-4">
                <b>1)</b> Escreva um algoritmo que receba dez números do usuário 
                e armazene em um vetor o cubo de cada número. 
                Após isso, o algoritmo deve imprimir todos os 
                valores armazenados.
            </div>

            <div class="row">
                <div id="card" style="border: none" class="card col-3 mt-5">
                    <div class="form-group">
                        <label for="">Digite o <span id="indice">1</span>° número:</label>
                        <input type="text" class="form-control" id="number" placeholder="">
                    </div>
                    <div class="form-group">
                        <butto onclick="submit()" type="button" class="btn btn-block btn-dark">Enviar</button>
                    </div>
                </div>
                <div class="col ml-5 mt-5">
                    <p id="result">
                        <div style="display: none" id="spin" class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </p>
                </div>
            </div>
        </div>
        
        <!-- JS file -->
        <script src="trabalho.js"></script>
    </body>
</html>
