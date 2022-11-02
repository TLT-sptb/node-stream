Transform Stream são duplex streams, o que signifca que eles implementam
Writable Streams Interfaces. Os Transform Streams são usados 
para processar (ou transoformar) a entrada e em seguida passa-los como saída.

Para criar um Transform Streams, importamos a classe Transform do core do NodeJS.
O constructor() aceita os seguintes argumentos:

° transform: A função que implementa a lógica de processamento/transformação de dados.
° flush: Se o processo de transformação emitir dados adicionais, o método flush é usado
para 'limpar' os dados. Este argumento é opcional, é a função Transform()
que processa a entrada do fluxo e produz a saída.

Observe que não é necessário que o número de pedaços fornecidos pelo fluxo de entrada seja
igual ao número de saída do fluxo de transformação - alguns pedaços podem ser omitidos
durante a transformação/processamento.
