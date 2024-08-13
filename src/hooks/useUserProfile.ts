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
        const user = await getUserProfile().unwrap();
        console.log(user);
        dispatch(setUser(user));
        console.log("Fetched user profile");
      } catch (err) {
        console.log(err);
      }
    };
    if (!userProfile) fetchUserData();
    console.log(userProfile);
  }, [dispatch, getUserProfile, userProfile]);

  return { userProfile, isError, isLoading };
};
