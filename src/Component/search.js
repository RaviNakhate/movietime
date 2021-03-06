import React from "react";
import Card from "./card";
import "./assets/css/search.css";
import { Global } from "../ContexReducer/contex";
import { useContext } from "react";
import Paginations from "./paginations";

export default function Search(props) {
  const obj = useContext(Global);

  return (
    <>
      {/* it is filter section*/}
      <div
        className="row mt-3 mx-3 
          
        }  justify-content-start text-white"
      >
        {props.filterfun ? (
          <>
            <div className="row w-100 mb-2 justify-content-center mx-auto filtertoggle">
              <button
                className="btn w-100 btn-sm row text-white text-left"
                onClick={() => {
                  obj.dispatcher({ type: "filtertoggle" });
                }}
              >
                <div className="float-left ml-3">Filter </div>
                <i className="fa fa-filter text-white float-right m-1"></i>
              </button>
            </div>

            <div
              className={`row filterlist ${
                obj.state.filtertoggle ? "d-none" : ""
              } h-25 mx-auto`}
            >
              {obj.state.filter.map((val, ind) => {
                const booleanCheck = props.arr.includes(val.id);

                return (
                  <div key={ind}>
                    <div
                      className={`filtertxt ${
                        booleanCheck ? "filteractive" : ""
                      }`}
                      onClick={() => {
                        props.filterfun(val.id, ind, val.lang);
                      }}
                    >
                      {val.name}
                    </div>
                  </div>
                );
              })}
              <div>
                <div
                  className=" row align-items-center p-1 ml-1 "
                  onClick={() => {
                    props.filterfun("clear");
                  }}
                >
                  <div className="filtertxtclosetitle  p-2 px-3 m-1">
                    Clear All
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
      <div className="searchtank my-4 ">
        {!props.obj.length ? (
          <div className="norecordfound h2">No Record Found</div>
        ) : (
          <>
            {props.obj.map((val, ind) => {
              return (
                <div key={ind}>
                  {/*The Multi Search Content All types of Data*/}
                  {val.media_type === "person" ? (
                    <div></div>
                  ) : (
                    <Card
                      media_type={
                        props.media_type ? props.media_type : val.media_type
                      }
                      val={val}
                    />
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
      <Paginations
        page={props.page}
        totalpage={props.totalpage}
        pagination={props.pagination}
      />
    </>
  );
}
