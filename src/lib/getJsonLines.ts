"use strict";

import * as fs from "fs";
import * as readline from "readline";

type JsonObj = {
  group: string;
  name: string;
  phone: string;
  address: string;
};

export const getJsonLines = (path: string) => {
  const rs = fs.createReadStream(path);
  const rl = readline.createInterface({ input: rs });
  const res: JsonObj[] = [];

  rl.on("line", (line: string) => {
    res.push(JSON.parse(line));
  });
  rl.on("close", () => {
    console.log(res);
  });
  return res;
};

