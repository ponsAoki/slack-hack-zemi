import XLSX from "xlsx";
// import json from "./generated/newGenerated.json";

export const changeJsonToExcel = (json: any[]) => {
  let option = {
    header: ["ヘッダ１", "ヘッダ２"],
  };
  let exportBook = XLSX.utils.book_new();
  let exportSheet = XLSX.utils.json_to_sheet(json, option);
  XLSX.utils.book_append_sheet(exportBook, exportSheet, "sheetName");
  XLSX.writeFile(exportBook, "messages.xlsx");
};

// export const createExcelFile = (arrData: any) => {
//   let exportBook = XLSX.utils.book_new();
//   let exportSheet = XLSX.utils.aoa_to_sheet(arrData);
//   XLSX.utils.book_append_sheet(exportBook, exportSheet, "sheetName");
//   XLSX.writeFile(exportBook, "messages2.xlsx");
// };
