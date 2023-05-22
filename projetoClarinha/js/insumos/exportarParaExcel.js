var header = ['Insumo', 'Quantidade do Insumo', 'Quantidade da Embalagem', 'Valor Embalagem', 'Valor por Insumo']; // Cabeçalho dos dados

function exportToExcel(data) {
  data.unshift(header); // Adicionar o cabeçalho no início do array

  var worksheet = XLSX.utils.aoa_to_sheet(data);
  var workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Dados");

  var filename = "dados.xlsx";
  XLSX.writeFile(workbook, filename);

  //data.shift(); // Remover o cabeçalho após a exportação
}




// function exportToExcel(data) {

//   console.log("Os valores do excel serão: ");
//   console.log(data);
//   const titulos = ['Nome Produto', 'Quantidade Insumo', 'Quantidade Embalagem', 'Valor Embalagem', 'Valor por Insumo', 'Valor do produto','Lucro', 'Valor de Venda'];

//   data.unshift(titulos);

//   var workbook;
//   var worksheet;
//   var file = "tst.xlsx";

//   // Verificar se o arquivo Excel já existe
//   try {
//     workbook = XLSX.readFile(file);
//     worksheet = workbook.Sheets['Dados'];
//     var sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//     var lastRowIndex = sheetData.length - 1;
//     var headerRow = sheetData[0];
//     for (var i = 1; i < data.length; i++) {
//       var row = data[i];
//       if (row.length == headerRow.length) {
//         sheetData.push(row);
//         lastRowIndex++;
//       }
//     }
//     worksheet = XLSX.utils.sheet_add_json(worksheet, sheetData.slice(1), { skipHeader: true, origin: -1 });
//   } catch (e) {
//     // Se o arquivo não existir, criar um novo livro de trabalho
//     workbook = XLSX.utils.book_new();

//     // Adicionar uma nova planilha ao livro de trabalho
//     worksheet = XLSX.utils.aoa_to_sheet(data);
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Dados');
//   }

//   // Salvar o arquivo Excel
//   XLSX.writeFile(workbook, file);
// }
