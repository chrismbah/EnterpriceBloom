export interface UserData {
  userId: string;
  fullName: string;
  country: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: Date; 
  businessName: string;
  interests: string[]; // or array of Interest type if applicable
  followers: string[]; // or array of Follower type if applicable
  following: string[]; // or array of Following type if applicable
}

export interface UserProfile {
  _id: string;
  country: string;
  email: string;
  interest: string[];
  followers: string[];
  following: string[];
  createdAt: string;
  businessName: string;
  dateOfBirth: string; 
  fullName: string;
  phoneNumber: string;
}
