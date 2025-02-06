import { getUserData } from '@/utils/functions';

export const populateUserDetails = async (set: any) => {
  set({ userLoading: true });
  const data = await getUserData();
  console.log("data is ", data)
  set({ userData :data, userLoading: false });
};
