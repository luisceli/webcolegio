import React from "react";
import { useParams } from "react-router-dom";
import { staffMembers } from "../../data/StaffData";

const StaffDetail = () => {
  const { id } = useParams();
  const staffMember = staffMembers.find((member) => member.id === id);

  if (!staffMember) return <div>Docente no encontrado.</div>;

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="flex flex-col items-center text-center">
        <div className="w-36 h-36 rounded-full overflow-hidden shadow-lg mb-4">
          <img
            src={staffMember.profileImage}
            alt={staffMember.name}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-[#654321] mb-4">
          {staffMember.name}
        </h2>
        <p className="text-[#D2B48C] font-medium mb-4">{staffMember.role}</p>
        <p className="text-gray-700">{staffMember.bio}</p>{" "}
        <p className="">{staffMember.inf}</p>
      </div>
    </section>
  );
};

export default StaffDetail;
