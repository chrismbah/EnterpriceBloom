import { FC } from "react";
import message from "../../assets/svg/new_message.svg";

type PasswordResetModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PasswordResetModal: FC<PasswordResetModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="bg-black/60 fixed top-0 left-0 h-screen w-full flex items-center justify-center z-50 ">
      <div className="modal-content px-[36px] py-[52px] bg-white w-[600px] h-[480px] rounded-[16px] flex items-center justify-between flex-col ">
        <div className="flex flex-col items-center text-center ">
          <img
            src={message}
            alt="New Message"
            className="w-[180px] h-[180px] mb-3 "
          />
          <h2 className="text-xl font-semibold text-black mb-[4px] ">
            Recovery Mail Sent
          </h2>
          <p className="text-sm">
            A password recovery link has been sent to your mail. <br /> Click on
            the link to recover mail
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full place-content-center font-bold bg-primary-500 text-white rounded-[8px] h-[52px] p-[8px] text-center "
        >
          Open Mail
        </button>
      </div>
    </div>
  );
};

export default PasswordResetModal;
