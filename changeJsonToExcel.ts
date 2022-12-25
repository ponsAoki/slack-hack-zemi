import XLSX from "xlsx";

export const changeJsonToExcel = (json: any[]) => {
  let option = {
    header: ["ヘッダ１", "ヘッダ２"],
  };
  let exportBook = XLSX.utils.book_new();
  let exportSheet = XLSX.utils.json_to_sheet(json, option);
  XLSX.utils.book_append_sheet(exportBook, exportSheet, "sheetName");
  XLSX.writeFile(exportBook, "messages.xlsx");
};
