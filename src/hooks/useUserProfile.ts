import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserProfileMutation } from "../store/slices/apiSlices";
import { setUser } from "../store/slices/authSlice";
import { RootState } from "../store";

export const useUserProfile = () => {
  const dispatch = useDispatch();
  const [getUserProfile, { isLoading, isError }] = useGetUserProfileMutation();
  const userProfile = useSelector((state: RootState) => state.auth.userData);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserProfile().unwrap();
        console.log(response);
        dispatch(setUser(response));
        console.log("Fetched user profile")
      } catch (err) {
        console.log(err);
      }
    };
    if (!userProfile) fetchUserData();
  }, [dispatch, getUserProfile, userProfile]);

  return { userProfile, isError, isLoading };
};
