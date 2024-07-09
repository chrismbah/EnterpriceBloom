export interface UserProfileData {
  fullName?: string;
  dateOfBirth?: Date;
  phoneNumber?: string;
  businessName?: string;
  interests?: string[];
}

export interface CompleteProfileRequest {
  userId: string;
  profileData: UserProfileData;
}
export interface CompleteProfileResponse {
  message: string;
}
export interface Interest {
  _id: string;
  interest: string;
  __v: 0;
}

export interface GetInterestsResponse {
  response: Interest[];
}
