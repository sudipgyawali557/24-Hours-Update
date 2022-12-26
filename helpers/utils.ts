import { getCookie } from "cookies-next";
import moment from "moment";

// import dateconvertor from "bs-ad-convertor";

export const getDateValue = (date?: any) => {
  // console.log(date, 'the dta 59')
  if (date) {
    const nepDate = date.split("T")[0].split("-");
    // const nepaliDate = dateconvertor.eng_to_nep(
    //     +nepDate[0],
    //     +nepDate[1],
    //     +nepDate[2]
    // );
    // const { year: yearOf, month: monthOf, date: dayOf } = nepaliDate;
    // const newDate = yearOf + "-" + monthOf + "-" + dayOf;
    // console.log(newDate, 'newdate')
    // return newDate;
  }
};
export const convertToLocaleDateString = (date?: any) => {
  const nepDate = new Date(date).toLocaleDateString().split("/");
  // const nepaliDate = dateconvertor.eng_to_nep(
  //     +nepDate[2],
  //     +nepDate[0],
  //     +nepDate[1]
  // );
  // const { year: yearOf, month: monthOf, date: dayOf } = nepaliDate;
  // const newDate = yearOf + "-" + monthOf + "-" + dayOf;
  // return newDate;
};

export const getCurrentNepaliDate = () => {
  const nepDate = new Date().toISOString().split("T")[0].split("-");
  // const nepaliDate = dateconvertor.eng_to_nep(
  //     Number(nepDate[0]),
  //     Number(nepDate[1]),
  //     Number(nepDate[2])
  // );
  // const { year: yearOf, month: monthOf, date: dayOf } = nepaliDate;
  // const newDate = yearOf + "-" + monthOf + "-" + dayOf;
  // return newDate;
};

let staticKeys = ["id", "createdAt", "updatedAt"];

export function omitKeys(data: any, initial: any, isEdit: boolean) {
  const removeKeys = Object.keys(initial);
  Object.keys(data).forEach((key) => {
    if (!removeKeys.includes(key)) {
      delete data[key];
    }
    if (!isEdit && staticKeys.includes(key)) {
      delete data[key];
    }
  });

  return data;
}
export function omitSelectedKeys(data: any, initial: any) {
  Object.keys(data).forEach((key) => {
    if (initial.includes(key)) {
      delete data[key];
    }
  });
  return data;
}

export function getAccessToken() {
  return getCookie("accessToken");
}
export const isFileEmpty = (data: any, key: any) => {
  if (data[key]) {
    let thumbnailLength = [...data?.[key]].length;
    if (thumbnailLength !== 0) {
      return { isThumbail: true, data };
    } else {
      delete data[key];
    }
  }
  return { isThumbail: false, data };
};
