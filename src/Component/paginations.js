import { Pagination } from "@mui/material";
import React from "react";

export default function Paginations(props) {
  return (
    <>
      <div className="row justify-content-center lead mx-3 my-3">
        <div className="pagination ">
          <Pagination
            count={
              props.totalpage > 500
                ? props.totalpage - (props.totalpage - 500)
                : props.totalpage
            }
            hideNextButton={true}
            hidePrevButton={true}
            shape="rounded"
            color="success"
            page={props.page}
            onChange={(e) => {
              props.changePage(parseInt(e.target.textContent));
            }}
          />
        </div>
      </div>
    </>
  );
}
