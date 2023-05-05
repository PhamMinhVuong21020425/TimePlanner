type Props = {
  isVisible: boolean;
};

export default function Modal({ isVisible }: Props) {
  if (!isVisible) {
    return null;
  }

  const handleSave = () => {
    isVisible = true;
  };

  const handleCancel = () => {
    isVisible = false;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center font-poppins">
      <div className="bg-white w-[50%] p-4 rounded-md">
        <p className="text-xs text-gray-600">Log in</p>
        <button
          className="bg-emerald-500 px-2 py-1 rounded-sm text-white text-xs mx-2 my-4"
          onClick={() => handleSave}
        >
          Save
        </button>
        <button
          className="bg-red-500 px-2 py-1 rounded-sm text-white text-xs mx-2"
          onClick={() => handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
