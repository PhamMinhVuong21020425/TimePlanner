interface User {
    id: number;
    name: string;
    age: string;
    email: string;
    image: string;
    address: string;
    phone_number: string | null;
    company: string;
    job: string;
    gender: "Male" | "Female" | null;
}

export const initUser: User = {
    id: 0,
    name: "",
    age: "",
    email: "",
    image: "",
    address: "",
    phone_number: null,
    company: "",
    job: "",
    gender: null,
}

export default User;