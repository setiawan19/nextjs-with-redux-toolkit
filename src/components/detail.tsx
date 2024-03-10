"use client";

import { ItemTypes } from "@/constants/types";
import {
  CookingStepState,
  addCookingStepState,
} from "@/redux/features/cookingstep";
import {
  updateFoodEditState,
  updateFoodQuantityState,
  updateFoodState,
  updateFoodTypeState,
} from "@/redux/features/foodstuff";
import {
  resetInputStep,
  resetRecipe,
  showEditTitle,
  updateRecipeState,
  updateTempStepState,
  updateTempTitleState,
} from "@/redux/features/recipe";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";

export const Detail = () => {
  const dispatch = useDispatch();
  const title = useAppSelector((state) => state.recipe.value.title);
  const titleTemp = useAppSelector((state) => state.recipe.value.tempTitleStep);
  const isEditTitle = useAppSelector((state) => state.recipe.value.isEditTitle);
  const inputStep = useAppSelector((state) => state.recipe.value.tempInputStep);
  const foodItems = useAppSelector((state) => state.foodstuff.value);
  const cookingSteps = useAppSelector((state) => state.cookingstep.value);
  const foodMaterials = foodItems.filter((item) => item.used === true);

  const handleKeyPressTitle = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    //update cooking steps
    if (event.key === "Enter") {
      const newTitle = titleTemp;
      dispatch(
        updateRecipeState({
          title: newTitle,
          tempTitleStep: "",
          tempInputStep: "",
          isEditTitle: false,
        })
      );
    }
  };
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //update cooking steps
    if (event.key === "Enter") {
      const idSteps =
        cookingSteps && cookingSteps.length > 0 ? cookingSteps.length + 1 : 1;
      dispatch(addCookingStepState({ id: idSteps, desc: inputStep ?? "" }));
      dispatch(resetInputStep());
    }
  };

  const onChangeTitle = (value: string) => {
    dispatch(updateTempTitleState({ tempTitleStep: value }));
  };

  const onChangeStep = (value: string) => {
    dispatch(updateTempStepState({ tempInputStep: value }));
  };

  return (
    <div className="w-full p-4 min-h-40 border-2">
      <div>
        {(!isEditTitle && title === "") || isEditTitle === true ? (
          <input
            className="border-2 mt-2 w-full p-2"
            type="text"
            placeholder="Nama Resep"
            value={titleTemp === '' ? title : titleTemp}
            onChange={(e) => onChangeTitle(e.target.value)}
            onKeyDown={handleKeyPressTitle}
          />
        ) : (
          <div className="flex w-full items-center justify-between">
            <div>{title}</div>
            <button
              onClick={() => dispatch(showEditTitle())}
              className="btn btn-primary p-2 border-2 border-sky-500 mx-2"
              type="button"
            >
              edit title
            </button>
          </div>
        )}
      </div>
      <div className="mt-2">Bahan Yang Digunakan:</div>
      <div className="w-full">
        {foodMaterials.length > 0 ? (
          foodMaterials.map((item) => {
            return (
              <div className="flex my-2">
                {item.isEdit === false ? (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(
                        updateFoodEditState({
                          uid: item.uid,
                          isEdit: true,
                        })
                      );
                    }}
                    className="flex items-center justify-content-center p-2 bg-green-300 w-full"
                  >
                    - {item.quantity} {item.type} {item.name}
                  </button>
                ) : (
                  <div className="flex my-2">
                    <span className="flex items-center justify-content-center p-2 w-full">
                      <input 
                        className="w-[5rem]"
                        min={0}
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => {
                            dispatch(
                                updateFoodQuantityState({
                                    uid: item.uid,
                                    quantity: parseInt(e.target.value)
                                })
                            )
                        }}/>
                      <div className="relative inline-block mx-2">
                        <select
                          value={item.type}
                          onChange={(e) => {
                            dispatch(
                                updateFoodTypeState({
                                uid: item.uid,
                                type: e.target.value,
                              })
                            );
                          }}
                          className="block appearance-none w-[6rem] bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {ItemTypes.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 11.293a1 1 0 011.414 0L10 12.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zM7 7a1 1 0 011-1h4a1 1 0 010 2H8a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>{" "}
                      {item.name}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(
                          updateFoodEditState({
                            uid: item.uid,
                            isEdit: false,
                          })
                        );
                      }}
                      className="btn btn-primary p-2 border-2 border-sky-500 mx-2"
                    >
                      edit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        dispatch(
                          updateFoodState({
                            uid: item.uid,
                            used: false,
                          })
                        );
                      }}
                      className="btn btn-primary p-2 border-2 border-rose-500"
                    >
                      remove
                    </button>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div>-</div>
        )}
      </div>
      <div>Tata Cara:</div>
      {cookingSteps.length > 0 ? (
        cookingSteps.map((item: CookingStepState, index: number) => {
          return (
            <div key={index}>
              {index + 1}. {item.desc}
            </div>
          );
        })
      ) : (
        <div>-</div>
      )}
      <div>
        <input
          className="border-2 mt-2 w-full p-2"
          value={inputStep}
          onChange={(e) => onChangeStep(e.target.value)}
          onKeyDown={handleKeyPress}
          type="text"
          placeholder="tambahkan tata cara..."
        />
      </div>
    </div>
  );
};
