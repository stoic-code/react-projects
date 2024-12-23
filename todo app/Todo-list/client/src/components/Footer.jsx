import axios from "axios";
// const url = "http:localhost:8000/api/todos";

function Footer({ list, setList }) {
  function deleteItem() {
    console.log(list);
    axios
      .delete(`http://localhost:8000/api/todos/completed`)
      .then((res) => alert("deleted"));
    //   async function deleteme() {
    //     try {
    //       await fetch("http://localhost:8000/api/todos/completed", {
    //         method: "DELETE",
    //       });
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }

    axios.get("http:localhost:8000/api/todos").then((res) => setList(res.data));
  }
  return (
    <div>
      <button onClick={() => deleteItem()}>Delete Completed Task</button>
    </div>
  );
}

export default Footer;
