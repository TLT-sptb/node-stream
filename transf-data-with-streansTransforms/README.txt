NodeJS Streams

° O JS não foi criado para processar grandes cargas de dados em memória de uma só vez
  (caso tentássemos a aplicação falharia).
° Sendo assim surgem o NodeJS Streams fazendo com que possamos processar arquivos sobe demanda, 
  independente do tamanho do arquivo, ele converte os dados em Buffer (usado para lidar com dados binários brutos, buffer representa uma parte de memoria alocado em nosso computador).
° Dividindo esses buffers temos o Chunk, que são pequenas partes de dados
° Usamos o Readable Stream para que possa fornecer esses dados
  (Banco de Dados, Requisição Web, Arquivo), que podemos chamar primeira etapa.
° A partir disso temos o Transform Stream, responsável por mapear, 
  converter e ‘filtrar’ esses chunks (após isso ele passa para a próxima etapa).
° Após as 2 etapas temos as Writetable Streams responsável pelo final do processo, 
  ela pode fazer o download, printar na tela, ela quem será responsável pela saída dos processos.
° Todos esses processos juntos são chamados de Pipeline.
