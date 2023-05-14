import { FiEdit } from "react-icons/fi";

interface People {
    name: string;
    email: string;
}

export default function AdminPeople() {
    const people: People[] = [
        {
            name: "Zuanki",
            email: "zuanki2@gmail.com"
        },
        {
            name: "Doraemon",
            email: "nguyenquanganh@gmail.com"
        },
        {
            name: "Nobita",
            email: "phamminhvuong@gmail.com"
        }
    ]

    function getRandomColor() {
        const colorList = [
            "red",
            "rose",
            "orange",
            "lime",
            "cyan",
            "sky",
            "emerald",
            "green",
            "yellow",
            "orange",
        ];


        // Get a random number between 0 and the length of the color list
        const randomNumber = Math.floor(Math.random() * colorList.length);

        // Return the color at the random index
        return colorList[randomNumber];
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[70%] border-[1.5px] h-96 p-4 rounded-md font-poppins text-gray-500">
                <div className="font-bold mb-2">User Leaderboard</div>
                <hr />
                {
                    people.map((i) => (
                        <div className="flex justify-between items-center">
                            <div className="flex items-center my-2">
                                <div className={`w-[35px] h-[35px] bg-${getRandomColor()}-400 rounded-full flex items-center justify-center text-white font-bold`}>{i.name[0]}</div>
                                <div className="ml-2">
                                    <div className="font-bold text-sm">{i.name}</div>
                                    <div className="text-xs">{i.email}</div>
                                </div>
                            </div>
                            <button className="text-green-400">
                                <FiEdit />
                            </button>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}