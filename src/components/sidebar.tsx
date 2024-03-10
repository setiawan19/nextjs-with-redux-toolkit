"use client";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../redux/store";
import { updateFoodState } from "@/redux/features/foodstuff";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const items = useAppSelector((state) => state.foodstuff.value);
  const foodMaterials = items.filter(item => item.used === false);

  return (
    <div className="w-full p-2 min-h-40">
      <div>List Bahan :</div>
      <div>
        {foodMaterials.map((item) => {
          return (
            <div className="my-2">
              <button
                type="button"
                onClick={()=> {
                    dispatch(updateFoodState({
                        uid: item.uid,
                        used: true,
                        isEdit: false
                    }))
                }}
                className="btn btn-primary p-2 bg-sky-500 w-full"
              >
                {item.name}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
