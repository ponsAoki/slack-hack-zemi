import XLSX from "xlsx";

export const changeJsonToExcel = (json: any[]) => {
  const adaptedToArrayInCellJson = json.map((row) =>
    Object.fromEntries(
      Object.entries(row).map(([k, v]) => [
        k,
        Array.isArray(v)
          ? v
              .map((obj) =>
                Object.entries(obj).map(
                  ([chilK, chilV]) => `{${chilK}: ${chilV}}`
                )
              )
              .join(",")
          : v,
      ])
    )
  );
  let option = {
    header: ["ヘッダ１", "ヘッダ２"],
  };
  let exportBook = XLSX.utils.book_new();
  let exportSheet = XLSX.utils.json_to_sheet(adaptedToArrayInCellJson, option);
  XLSX.utils.book_append_sheet(exportBook, exportSheet, "sheetName");
  XLSX.writeFile(exportBook, "messages.xlsx");
  return exportBook;
};
