interface User {
    id: number;
    name: string;
    age: string;
    email: string;
    about: string;
    image: string;
    address: string;
    phone_number: string;
    country: string;
    company: string;
    job: string;
    university: string;
    gender: "Male" | "Female" | null;
}

export const initUser: User = {
    id: 0,
    name: "",
    age: "",
    email: "",
    about: "",
    image: "",
    address: "",
    phone_number: "",
    country: "",
    company: "",
    job: "",
    university: "",
    gender: null,
}

export default User;