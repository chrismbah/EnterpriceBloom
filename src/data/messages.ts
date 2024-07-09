import user1 from "../assets/img/feed/user1.png";
import user2 from "../assets/img/feed/user2.png";

export interface User {
  id: number;
  profilePic: string;
  name: string;
  lastMessage: string;
  lastMessageTime: string;
  active: boolean;
}

export interface ChatMessage {
  sender: "me" | string;
  message: string;
  time: string;
}

export const users: User[] = [
  {
    id: 1,
    profilePic: user1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "2:30 PM",
    active: false,
  },
  {
    id: 2,
    profilePic: user2,
    name: "Jane Smith",
    lastMessage: "See you soon!",
    lastMessageTime: "1:15 PM",
    active: true,
  },
  {
    id: 3,
    profilePic: user1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "2:30 PM",
    active: false,
  },
  {
    id: 4,
    profilePic: user2,
    name: "Jane Smith",
    lastMessage: "See you soon!",
    lastMessageTime: "1:15 PM",
    active: true,
  },
  {
    id: 5,
    profilePic: user1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "2:30 PM",
    active: false,
  },
  {
    id: 6,
    profilePic: user2,
    name: "Jane Smith",
    lastMessage: "See you soon!",
    lastMessageTime: "1:15 PM",
    active: true,
  },
  {
    id: 7,
    profilePic: user1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "2:30 PM",
    active: false,
  },
  {
    id: 8,
    profilePic: user2,
    name: "Jane Smith",
    lastMessage: "See you soon!",
    lastMessageTime: "1:15 PM",
    active: true,
  },
  {
    id: 9,
    profilePic: user1,
    name: "John Doe",
    lastMessage: "Hey, how are you?",
    lastMessageTime: "2:30 PM",
    active: false,
  },
];

export const chats: Record<number, ChatMessage[]> = {
  1: [
    { sender: "me", message: "Hello John!", time: "2:00 PM" },
    { sender: "John Doe", message: "Hey, how are you?", time: "2:30 PM" },
  ],
  2: [
    { sender: "me", message: "Hi Jane!", time: "1:00 PM" },
    { sender: "Jane Smith", message: "See you soon!", time: "1:15 PM" },
  ],
  3: [
    { sender: "me", message: "Hello John!", time: "2:00 PM" },
    { sender: "John Doe", message: "Hey, how are you?", time: "2:30 PM" },
  ],
  4: [
    { sender: "me", message: "Hi Jane!", time: "1:00 PM" },
    { sender: "Jane Smith", message: "See you soon!", time: "1:15 PM" },
  ],
  5: [
    { sender: "me", message: "Hello John!", time: "2:00 PM" },
    { sender: "John Doe", message: "Hey, how are you?", time: "2:30 PM" },
  ],
  6: [
    { sender: "me", message: "Hi Jane!", time: "1:00 PM" },
    { sender: "Jane Smith", message: "See you soon!", time: "1:15 PM" },
  ],
  7: [
    { sender: "me", message: "Hello John!", time: "2:00 PM" },
    { sender: "John Doe", message: "Hey, how are you?", time: "2:30 PM" },
  ],
  8: [
    { sender: "me", message: "Hi Jane!", time: "1:00 PM" },
    { sender: "Jane Smith", message: "See you soon!", time: "1:15 PM" },
  ],
  9: [
    { sender: "me", message: "Hello John!", time: "2:00 PM" },
    { sender: "John Doe", message: "Hey, how are you?", time: "2:30 PM" },
  ],
};
