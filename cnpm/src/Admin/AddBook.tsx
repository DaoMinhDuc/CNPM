// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// function AddBook() {
//     const [listProfile, setListProfile] = useState<ProfileType[]>([])
   
//     useEffect(() => {
//       axios.get('https://6469ffaa03bb12ac20975da5.mockapi.io/book')
//         .then(res => setListProfile(res.data))
//         .catch(err => console.log(err));
//     }, [])
  
//     function deleteProfile(id: number) {
//       axios.delete(`https://6469ffaa03bb12ac20975da5.mockapi.io/book/${id}`)
//         .then(() => {
//           setListProfile(listProfile.filter(profile => profile.id !== id));
//         })
//         .catch(err => console.log(err));
//     }
//     const navigate = useNavigate();
    
//     const user = useSelector(state => state?.user);
  
//     useEffect(() => {
//       if (user?.username === '') {
//         navigate('/login')
//       }
//     }, [user?.username])
// return (
//     <div id="List">
//         <span style={{}}>Welcome, {user?.username}</span>
//       <table>
//       <tr>
//         <th>id</th>
//         <th>email</th>
//         <th>username</th>
//         <th>department</th>
//         <th>position</th>
//         <th>date</th>
//         <th>Edit</th>
//         <th>Delete</th>
//       </tr>
//       <tbody>
//       {listProfile.map((item, index) => (
//       <tr key={index}>
//         <td>{item.id}</td>
//         <td>{item.email}</td>
//         <td>{item.username}</td>
//         <td>{item.department}</td>
//         <td>{item.position}</td>
//         <td>{item.date}</td>
        
//         </tr> ))}
      
//       </tbody>
//         </table>
//         </div>
//   )
//       }
// export default AddBook