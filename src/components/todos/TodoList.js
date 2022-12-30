import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  AddTodo,
  AllTodos,
  DeleteTodo,
  EditCompletedTodo,
  EditPendingTodo,
} from "../../redux/actions/TodoActions";
const TodoList = () => {
  const data = useSelector((state) => state.TodoReducers.todos);
  const [title, setTitle] = useState("");
  const [inputToggle, setInputtoggle] = useState(false);
  const [liItem, setLiItem] = useState("");
  const [inputToggle2, setInputtoggle2] = useState(false);
  const [list, setList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(AllTodos());
  }, [dispatch]);

  // document.body.addEventListener("click", (e) => {
  //   console.log(e.target);
  //   if (e.target.getAttribute("id") !== "tet") {
  //     console.log(note);
  //   }
  // });

  return (
    <div>
      <div
        id="tet"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {inputToggle === false && inputToggle2 === false ? (
          <>
            <input
              className="inputtext"
              id="tet"
              placeholder="Add a Task..."
              type="text"
              value={title}
              onClick={(e) => {
                setInputtoggle2(true);
                
              }}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="checks" id="tet" style={{ position: "relative" }}>
              <div
                style={{
                  background: "gray",
                  color: "white",
                  padding: "2px",
                  position: "absolute",
                  top: "-14px",
                  right: "-7px",
                  display: "none",
                  fontSize: "12px",
                  whiteSpace: "nowrap",
                  borderRadius: "2px",
                }}
              >
                New Task
              </div>
              <i
                class="fa-regular fa-square-check"
                id="tet"
                onClick={(e) => {
                  setInputtoggle(false);
                  setInputtoggle2(true);
                }}
                onMouseOver={(e) => {
                  e.target.previousElementSibling.style.display = "block";
                }}
                onMouseLeave={(e) => {
                  e.target.previousElementSibling.style.display = "none";
                }}
              ></i>
            </div>
          </>
        ) : (
          <>
            {inputToggle === true && <></>}
            {inputToggle2 === true && (
              <>
                <div className="secondinput" style={{ marginLeft: "-39px" }}>
                  <div>
                    <input
                      className="inputtext2"
                      id="tet"
                      placeholder="Add a Title..."
                      type="text"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <div style={{ padding: "10px" }}>
                      {list.map((lis, indi) => (
                        <div
                          style={{
                            padding: "4px",
                            margin: "3px",
                            display: "flex",
                            justifyContent: "space-between",
                            width: "40%",
                            border: "1px solid #f1f3f4",
                          }}
                        >
                          <div>{lis.name}</div>
                          <div>
                            {" "}
                            <i
                              class="fa-solid fa-trash"
                              onClick={(e) => {
                                setList(
                                  list.filter((l, i) => {
                                    return i !== indi;
                                  })
                                );
                              }}
                            ></i>
                          </div>
                        </div>
                      ))}
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Add lists"
                        value={liItem}
                        onChange={(e) => {
                          setLiItem(e.target.value);
                        }}
                        style={{
                          padding: "5px",
                          border: "none",
                          outline: "0",
                          borderBottom: "1px solid #d3d3d3",
                        }}
                      />
                      <i
                        class="fa-solid fa-plus"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          setList((prev) => [
                            ...prev,
                            {"name":e.target.previousElementSibling.value,id:Date.now().toString()},
                          ]);
                          setLiItem("");
                          
                        }}
                      ></i>
                      <span
                        style={{
                          color: "rgba(0,0,0,.87)",
                          float: "right",
                          background: "#f1f3f4",
                          padding: "5px",
                          cursor: "pointer",
                          borderRadius: "5px",
                        }}
                        onClick={(e) => {
                          setInputtoggle2(false);
                          setList([])
                          setTitle("")
                        }}
                      >
                        Close
                      </span>
                      {title !== "" && list.length > 0 ? (
                        <span
                          style={{
                            color: "rgba(0,0,0,.87)",
                            float: "right",
                            background: "#f1f3f4",
                            padding: "5px",
                            cursor: "pointer",
                            borderRadius: "5px",
                            marginRight: "20px",
                          }}
                          onClick={(e) => {
                            dispatch(AddTodo(title,list))
                            setInputtoggle2(false);
                            setList([])
                          setTitle("")
                          }}
                        >
                          Add
                        </span>
                      ) : (
                        <span style={{ position: "relative" }}>
                          <div
                            style={{
                              background: "red",
                              color: "white",
                              padding: "2px",
                              position: "absolute",
                              bottom: "-35px",
                              right: "-250px",
                              display: "none",
                              fontSize: "12px",
                              whiteSpace: "nowrap",
                              borderRadius: "2px",
                            }}
                          >
                            Please fill tittle and list
                          </div>
                          <span
                            style={{
                              color: "rgba(0,0,0,.87)",
                              float: "right",
                              background: "#f1f3f4",
                              padding: "5px",
                              cursor: "not-allowed",
                              borderRadius: "5px",
                              marginRight: "20px",
                            }}
                            onMouseOver={(e) => {
                              e.target.previousElementSibling.style.display =
                                "block";
                            }}
                            onMouseLeave={(e) => {
                              e.target.previousElementSibling.style.display =
                                "none";
                            }}
                          >
                            Add
                          </span>
                        </span>
                      )}
                    </div>
                  </div>
                  {/* <div>
                   <input
                      className="inputtext2"
                      id="tet"
                      placeholder="Add a Title..."
                      type="text"
                      
                      value={title}
                      onClick={(e) => {
                        setInputtoggle2(false);
                        setInputtoggle(false);
                      }}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                   </div> */}
                </div>
              </>
            )}
          </>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {data.map((d, index) => (
          <>
            <div
              className="indiTask"
              onMouseOver={(e) => {
                document.getElementById(index).style.display = "block";
              }}
              onMouseLeave={(e) => {
                document.getElementById(index).style.display = "none";
              }}
            >
              <div
                style={{
                  paddingBottom: "5px",
                  borderBottom: "1px solid #dcdedf",
                }}
              >
                <div
                  style={{
                    transform: "translate(-12px,-20px)",
                    display: "none",
                    position: "absolute",
                  }}
                  id={index}
                >
                  <i
                    class="fa-solid fa-trash"
                    onClick={(e) => {
                      dispatch(DeleteTodo(d.id));
                    }}
                  ></i>
                </div>
                <div>
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>
                    {d.title}
                  </span>
                </div>
              </div>
              <div>
                <div>
                  {d.pendinglist.map((l, li) => (
                    <div
                      style={{
                        display: "flex",
                        gap: "2px",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          onClick={(e) => {
                            dispatch(EditPendingTodo(d, d.id, l.id));
                          }}
                        />
                      </div>
                      <div>
                        <span style={{ fontSize: "14px" }}>{l.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {d.completedlist.length > 0 && (
                  <div>
                    <i
                      class="fa-solid fa-chevron-down"
                      style={{
                        cursor: "pointer",
                        fontSize: "14px",
                        color: "#5F6368",
                      }}
                      onClick={(e) => {
                        if (
                          !e.target.nextElementSibling.nextElementSibling.classList.contains(
                            "dis"
                          )
                        ) {
                          e.target.nextElementSibling.nextElementSibling.style.display =
                            "block";
                          e.target.nextElementSibling.nextElementSibling.classList.add(
                            "dis"
                          );
                        } else {
                          e.target.nextElementSibling.nextElementSibling.style.display =
                            "none";
                          e.target.nextElementSibling.nextElementSibling.classList.remove(
                            "dis"
                          );
                        }
                      }}
                    ></i>
                    <span
                      style={{
                        color: "#5F6368",
                        fontSize: "15px",
                        fontWeight: "600",
                        margin: "10px",
                      }}
                    >
                      {d.completedlist.length} Completed tasks
                    </span>
                    <div style={{ display: "none" }}>
                      {d.completedlist.map((l, li) => (
                        <div
                          style={{
                            display: "flex",
                            gap: "2px",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              checked
                              onClick={(e) => {
                                dispatch(EditCompletedTodo(d, d.id, l.id));
                              }}
                            />
                          </div>
                          <div>
                            <span
                              style={{
                                fontSize: "14px",
                                textDecoration: "line-through",
                              }}
                            >
                              {l.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
