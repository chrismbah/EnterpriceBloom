import { useState } from "react";
import { ReactSVG } from "react-svg";
import search from "../../../assets/icons/user_profile/message_search.svg";
import emoji from "../../../assets/icons/user_profile/emoji.svg";
import attachment from "../../../assets/icons/user_profile/attachment.svg";
import {
  users as mockUsers,
  chats as initialChats,
  User,
  ChatMessage,
} from "../../../data/messages";
import user from "../../../assets/img/feed/user.png";

const Messages = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [chats, setChats] =
    useState<Record<number, ChatMessage[]>>(initialChats);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "" && selectedUser) {
      const updatedChats = {
        ...chats,
        [selectedUser.id]: [
          ...chats[selectedUser.id],
          {
            sender: "me",
            message: newMessage,
            time: new Date().toLocaleTimeString(),
          },
        ],
      };
      setChats(updatedChats);
      setNewMessage("");
    }
  };

  const filteredUsers = mockUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-white rounded-lg pt-8 px-6 flex gap-4">
      <div className="basis-[40%] flex flex-col gap-6">
        <div className="search_bar relative h-11">
          <input
            type="search"
            className="w-full h-full rounded-lg pr-4 pl-9 border border-[#EEF0F5] bg-[#F4F4F4] 
              focus:outline-none placeholder:text-xs text-xs placeholder:text-[#656565]"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ReactSVG
            src={search}
            beforeInjection={(svg) =>
              svg.setAttribute(
                "class",
                "absolute left-4 top-1/2 transform -translate-y-1/2 w-[14px] h-[14px]"
              )
            }
          />
        </div>
        <div className="flex-1 flex flex-col gap-1 pb-6 overflow-scroll hide-scrollbar">
          {filteredUsers.map((user) => (
            <button
              key={user.id}
              className={`flex justify-between gap-2 py-5 px-4 text-left rounded-t-lg cursor-pointer border-b border-[#EEF0F5]  hover:rounded-lg ${
                selectedUser && selectedUser.id === user.id
                  ? "rounded-lg bg-[#DA281C] text-white hover:bg-[#DA281C]"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => handleUserClick(user)}
            >
              <div className="flex gap-2 ">
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div
                  className={`${
                    selectedUser && selectedUser.id === user.id && "text-white "
                  }`}
                >
                  <div
                    className={`${
                      selectedUser && selectedUser.id === user.id
                        ? "text-white"
                        : "text-[#050304]"
                    } font-bold text-sm`}
                  >
                    {user.name}
                  </div>
                  <div
                    className={`text-xs text-[#36474F] ${
                      selectedUser && selectedUser.id === user.id
                        ? "text-white"
                        : "text-[#36474F]"
                    } font-medium`}
                  >
                    {user.lastMessage}
                  </div>
                </div>
              </div>
              <div
                className={` text-xs ${
                  selectedUser && selectedUser.id === user.id
                    ? "text-white"
                    : "text-[#656565]"
                }`}
              >
                {user.lastMessageTime}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="basis-[60%] flex flex-col border-l px-3 ">
        {selectedUser ? (
          <>
            <div className="flex items-center gap-2 p-2 border-b border-[#F4F4F4] ">
              <img
                src={selectedUser.profilePic}
                alt={selectedUser.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="font-bold">{selectedUser.name}</div>
                <div className="text-xs text-[#656565]">
                  {selectedUser.active
                    ? "Active now"
                    : `Last active at ${selectedUser.lastMessageTime}`}
                </div>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto hide-scrollbar">
              {chats[selectedUser.id].map((chat, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 p-2 ${
                    chat.sender === "me" && "flex-row-reverse"
                  }`}
                >
                  <img
                    src={chat.sender !== "me" ? selectedUser.profilePic : user}
                    alt={selectedUser.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col items-end gap-0.5">
                    <div
                      className={`py-3 px-2.5 rounded-lg max-w-[230px] break-words text-xs font-medium ${
                        chat.sender === "me"
                          ? "bg-[#DA281C] text-white "
                          : "bg-[#F4F4F4] text-[#36474F]"
                      }`}
                    >
                      {chat.message}
                    </div>
                    <span className="text-[#656565] font-medium text-xs ">
                      {chat.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className=" w-full py-4">
              <div className="relative w-full">
                <input
                  type="text"
                  className="w-full flex-1 py-4 px-[18px] rounded-lg  bg-[#F4F4F4]
                  focus:outline-none text-xs placeholder:text-xs placeholder:text-[#656565]  "
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <div className="flex items-center gap-3 absolute right-4 top-1/2 transform -translate-y-1/2">
                  <div className="flex items-center gap-1.5">
                    <ReactSVG
                      src={emoji}
                      beforeInjection={(svg) =>
                        svg.setAttribute("class", "w-[17px] h-[17px]")
                      }
                    />
                    <ReactSVG
                      src={attachment}
                      beforeInjection={(svg) =>
                        svg.setAttribute("class", "w-[17px] h-[17px]")
                      }
                    />
                  </div>

                  <button
                    className="py-2 px-4 bg-[#DA281C] text-white text-xs rounded-md"
                    onClick={handleSendMessage}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500 font-semibold">
            No Chats yet
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
