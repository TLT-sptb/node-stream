O metodo pipeline() nos permite canalizar fluxos entre si (um para o outro),
formando um fluxo.
Passamos os seguintes argumentos para o pipeline():
° Source: Um fluxo de origens que permita ler os dados (file.txt);
° tranforms: Qualquer tipo de números de streams de transformação para processar dados (incluindo 0), (Dados da file.txt);
° destination: Um fluxo de destino para gravar os dados processados;
° callback: a função para ser chamada quando o pipeline estiver pronta.


Passamos o método pipeline() nossa série de fluxos, na ordem em que eles precisam ser executados,
seguido por uma função de retorno de chamada que é executada quando o pipeline é concluído.
O método pipeline() encaminha elegantemente erros que ocorrem nos fluxos em
ao retorno de chamada. Este é um dos benefícios de usar o método pipeline() sobre
o método pipe().
O método pipeline() também limpa quaisquer streams não terminados chamando
stream.destroy().
