// import { useState, useEffect } from "react";
// import { Button } from "semantic-ui-react"
// import axios from "axios"


// const DeleteTask = () => {
//     const [tasks, setTasks] = useState([])

//     useEffect(() => {
//         axios
//       .get("http://localhost:5000/task/")
//       .then((response) => {
//         setTasks(response.data);
//         // console.log(tasks);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//     })

//     const deleteTask = (id) => {
//         axios.delete("http://localhost:5000/" + id).then((response) => {
//             console.log(tasks, response);
//         });
    
//         setTask(
//         tasks.filter((el) => el._id !== id),
//         );
//       }


//     return (<Button onClick={() => {
//         deleteTask(tasks.id);
//       }}>X</Button>)
// }

// export default DeleteTask