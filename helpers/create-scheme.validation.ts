// create a validation scheme

import { capitalize } from "lodash";
import * as Yup from "yup";

export function createSchema(fields: any) {
  let schemaObj = {};
  // fields.forEach((field:any, index:any) => {
  //   if (field.required === false) {
  //     if (field.typecase === "Array") {
  //       return;
  //     }

  //     schemaObj[field.name] =
  //       Yup[field.typecase === "number" ? "number" : "string"]().nullable();
  //   } else {
  //     schemaObj[field.name] = Yup[
  //       field.typecase === "number" ? "number" : "string"
  //     ]()
  //       .nullable()
  //       .required(capitalize(field.name) + " is required")
  //       .typeError(capitalize(field.name) + " should be number");
  //   }
  // });
  return schemaObj;
}
