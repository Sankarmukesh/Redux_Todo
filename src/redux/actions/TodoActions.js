import axios from "axios";
import jwtDecode from "jwt-decode";
import { Backend_url } from "../../Config";
export const AllTodos = () => async (dispatch) => {
  await axios.get(`${Backend_url}/todo`).then((res) => {
    const currentusertodo = [];
    res.data.map((m) => {
      if (localStorage.getItem("user")) {
        if (jwtDecode(localStorage.getItem("user")).email === m.email) {
          currentusertodo.push(m);
        }
      }
    });

    dispatch({ type: "ALL", payload: currentusertodo });
  });
};

export const AllDeletedTodos = () => async (dispatch) => {};

export const AddTodo = (taskT,list) => async (dispatch) => {
    const newid = Date.now().toString();
    

    
    await axios.post(`${Backend_url}/todo`,{
        id:newid,
        email:jwtDecode(localStorage.getItem('user')).email,
        title:taskT,
        pendinglist:list,
        completedlist:[],
        deleted:false

    }).then(res=>{
        dispatch(AllTodos())
    })
};

export const DeleteTodo = (id) => async (dispatch) => {
  await axios.delete(`${Backend_url}/todo/${id}`).then((res) => {
    dispatch({ type: "DELETE", payload: id });
  });
};

export const EditCompletedTodo = (data, mid, sid) => async (dispatch) => {
  //   console.log(data);
  const newid = Date.now().toString();
  //   console.log(newid);
  data.completedlist.map((c, i) => {
    if (c.id === sid) {
      data.pendinglist.push({
        ...data.completedlist[i],
        id: newid,
        completed: false,
      });
      data.completedlist.splice(i, 1);
    }
  });

  await axios.put(`${Backend_url}/todo/${mid}`, data).then((res) => {
    // console.log(res.data)
    //  dispatch({type:"EDITCOMPLETED",payload:res.data})
    dispatch(AllTodos());
  });
};

export const EditPendingTodo = (data, mid, sid) => async (dispatch) => {
  // console.log(data);
  const newid = Date.now().toString();
  // console.log(newid);
  data.pendinglist.map((c, i) => {
    if (c.id === sid) {
      data.completedlist.push({
        ...data.pendinglist[i],
        id: newid,
        completed: true,
      });
      data.pendinglist.splice(i, 1);
    }
  });

  await axios.put(`${Backend_url}/todo/${mid}`, data).then((res) => {
    dispatch(AllTodos());
    //    dispatch({type:"EDITCOMPLETED"})
  });
};



