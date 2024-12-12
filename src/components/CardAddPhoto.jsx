import React from "react";

//Cart para agregar fotografias

const CardAddPhoto = () => {
  return (
    <div className=" w-full flex justify-center items-center bg-red-50">
      <div className=" min-w-[300px] max-w-full h-[80px] bg-gray-200 rounded-[8px] flex items-center justify-between gap-[5px]">
        <div className="w-full flex justify-center items-center">
            <span className="text-gray-400 text-[16px]">
                Agregar comentario  
            </span>
        </div>
        <div className="flex items-center justify-center ml-6 mr-6">
            <span className="material-symbols-outlined text-[48px] text-gray-400 ">
                add_a_photo
            </span>
        </div>
      </div>
    </div>
  );
}
export default CardAddPhoto;