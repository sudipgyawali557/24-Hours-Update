import { useRouter } from "next/router";
import React from "react";

export default function ViewDetail(props: any) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          {props?.items?.includes("https://vmedians") ? (
            <div className="pb-4">
              <img
                className="w-full h-96 object-cover object-center"
                src={"/images/about.jpg"}
              />
            </div>
          ) : (
            props?.items
          )}
        </div>
      </div>
    </>
  );
}
