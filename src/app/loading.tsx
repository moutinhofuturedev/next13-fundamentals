const RootLoading = () => {
  return (
    <div className="min-h-screen">
      <div>Loading home...</div>
    </div>
  )
}
export default RootLoading

/* 
O arquivo especial loading.tsx (que deve ser colocado no mesmo diretorio do arquivo de fetch de dados) ajuda a criar uma UI de carregamento podendo estilizar com css ou bibloteca de estilizacão.
Com esta convenção, o loadingpode mostrar um estado de carregamento instantâneo do servidor enquanto o conteúdo de fecth da rota é carregado. 
O novo conteúdo é trocado automaticamente assim que a renderização for concluída.
*/
