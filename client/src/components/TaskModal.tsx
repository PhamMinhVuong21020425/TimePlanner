// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import request from "../utils/request";

// type Props = {
//   isVisible: boolean;
// };

// export default function TaskModal({ isVisible }: Props) {
//   const [data, setData] = useState({
//     taskName: "",
//     projectName: "",
//     description: "",
//     startTime: "",
//     priority: "LOW",
//     finishTime: "",
//   });
//   const navigate = useNavigate();

//   if (!isVisible) {
//     return null;
//   }

//   const handleDataChange = (
//     event:
//       | React.ChangeEvent<HTMLInputElement>
//       | React.ChangeEvent<HTMLSelectElement>
//   ) => {
//     let name = event.target.name;
//     let value = event.target.value;
//     setData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSave = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     isVisible = true;
//     const res = await request.post("task", data);
//     console.log(res.data);
//     navigate("/");
//   };

//   const handleCancel = () => {
//     isVisible = false;
//     navigate("/");
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-poppins">
//       <div className="bg-white p-4 rounded-md">
//         <div className="text-xs text-gray-500">
//           <form onSubmit={handleSave} className="w-full max-w-lg">
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-first-name"
//                 >
//                   Name the task
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-100 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                   id="grid-first-name"
//                   type="text"
//                   name="taskName"
//                   onChange={handleDataChange}
//                   value={data.taskName}
//                   placeholder=""
//                 />
//                 <p className="text-red-500 text-xs italic">
//                   Please fill out this field.
//                 </p>
//               </div>
//               <div className="w-full md:w-1/2 px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-last-name"
//                 >
//                   Project name
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-last-name"
//                   type="text"
//                   name="projectName"
//                   onChange={handleDataChange}
//                   value={data.projectName}
//                   placeholder=""
//                 />
//               </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-6">
//               <div className="w-full px-3">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-password"
//                 >
//                   Description
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-password"
//                   type="text"
//                   name="description"
//                   onChange={handleDataChange}
//                   value={data.description}
//                   placeholder=""
//                 />
//                 <p className="text-gray-600 text-xs italic">
//                   Make it as long and as crazy as you'd like
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-wrap -mx-3 mb-2">
//               <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-city"
//                 >
//                   Start time
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-city"
//                   type="datetime-local"
//                   name="startTime"
//                   onChange={handleDataChange}
//                   value={data.startTime}
//                   placeholder="Albuquerque"
//                 />
//               </div>
//               <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-state"
//                 >
//                   Priority
//                 </label>
//                 <div className="relative">
//                   <select
//                     className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                     id="grid-state"
//                     name="priority"
//                     onChange={handleDataChange}
//                     value={data.priority}
//                   >
//                     <option>LOW</option>
//                     <option>MEDIUM</option>
//                     <option>HIGH</option>
//                   </select>
//                   <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                     <svg
//                       className="fill-current h-4 w-4"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
//                     </svg>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
//                 <label
//                   className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
//                   htmlFor="grid-zip"
//                 >
//                   Finish time
//                 </label>
//                 <input
//                   className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
//                   id="grid-zip"
//                   type="datetime-local"
//                   name="finishTime"
//                   onChange={handleDataChange}
//                   value={data.finishTime}
//                   placeholder="90210"
//                 />
//               </div>
//             </div>
//             <button
//               className="bg-emerald-500 px-2 py-1 rounded-sm text-white text-xs mx-2 my-4 cursor-pointer"
//               type="submit"
//             >
//               Save
//             </button>
//             <button
//               className="bg-red-500 px-2 py-1 rounded-sm text-white text-xs mx-2 cursor-pointer"
//               onClick={handleCancel}
//             >
//               Cancel
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function TaskModal() {
  return (
    <div>Hello World</div>
  )
}