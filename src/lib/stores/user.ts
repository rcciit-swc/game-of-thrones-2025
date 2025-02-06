import { create } from 'zustand';
import { populateUserDetails } from '../actions';
import { userActionsType, userStateType } from '../types';
type UserStore = userActionsType & userStateType;


const userState: userStateType = {
  userData: null,
  userLoading: true,
};
export const useUser = create<UserStore>((set) => ({
  ...userState,
  setUserData: () => populateUserDetails(set),
  // Write other reducers with proper actions like above.
}));
