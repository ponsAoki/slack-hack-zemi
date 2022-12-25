import fs from "fs";

export const createJsonFile = (pathName: string, data: []) => {
  const pathIsExisted = duplicateCheck(pathName);
  if (!pathIsExisted) return;
  const toJson = JSON.stringify(data);
  fs.writeFile(pathName, toJson, (err) => {
    if (err) throw err;
  });
};

const duplicateCheck = (pathName: string) => {
  try {
    fs.statSync(pathName);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
