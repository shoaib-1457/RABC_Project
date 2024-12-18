import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditUserModal from "./EditUserModal";

const UserRecord = ({
  name,
  email,
  status,
  role,
  id,
  handleDeleteUser,
  handleEditUser,
}) => {
  const [isEditUserModalOpen, setEditUserModalOpen] = useState(false);

  return (
    <>
      <EditUserModal
        isOpen={isEditUserModalOpen}
        onClose={() => setEditUserModalOpen(false)}
        onSubmit={handleEditUser}
        user={{ name, email, status, role, id }}
      />

      <div className="bg-slate-200 text-gray-800 rounded-md grid grid-cols-4 lg:grid-cols-5 hover:shadow-sm hover:bg-slate-300 transition-all">
        <div className="col-span-1 lg:col-span-1 p-2 flex items-center justify-center">
          <p className="font-semibold ">{name}</p>
        </div>
        <div className=" hidden lg:flex items-center lg:col-span-1 p-2 justify-center font-semibold text-blue-600">
          <p>{email}</p>
        </div>
        <div className=" lg:col-span-1  flex items-center justify-center lg:justify-center">
          <span
            className={`inline-block w-4 h-4 rounded-full mr-2 ${
              status ? "bg-green-500" : "bg-gray-400"
            }`}
          ></span>
          <p className="hidden lg:flex">{status ? "Active" : "Inactive"}</p>
        </div>
        <div className="col-span-1 flex items-center lg:col-span-1 justify-center p-2 font-semibold">
          <p>{role.charAt(0).toUpperCase() + role.slice(1)}</p>
        </div>
        <div className="col-span-1 lg:col-span-1 p-2 flex justify-center">
          <button
            onClick={() => setEditUserModalOpen(true)}
            className="text-xl text-gray-800 p-2 md:hover:text-blue-700 md:hover:bg-white transition-all  rounded-full"
          >
            <MdEdit />
          </button>
          <button
            onClick={() => handleDeleteUser(id)}
            className="text-xl text-gray-800 p-2 md:hover:text-red-500 md:hover:bg-white transition-all rounded-full"
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default UserRecord;
