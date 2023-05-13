import { useEffect, useState } from "react";
import Task from "../types/Tasks";
import { useNavigate } from "react-router-dom";
import request from "../utils/request";
import moment from "moment";

type Props = {
    id: string,
};

function CurrentTask({ id }: Props) {
    const [data, setData] = useState<Task>({
        task_name: "",
        type: "",
        started_time: "",
        finished_time: "",
        description: "",
        priority: "LOW",
        status: "COMPLETED",
        task_id: id,
        title: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get(`task/${id}`);
                let result = response.data;
                result.started_time = moment(result.started_time).format('YYYY-MM-DD HH:mm:ss');
                result.finished_time = moment(result.finished_time).format('YYYY-MM-DD HH:mm:ss');
                setData(result);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <div>{data.task_name}</div>
            <div>{data.description}</div>
            <div>{data.priority}</div>
            <div>{data.started_time}</div>
            <div>{data.finished_time}</div>
            <div>{data.status}</div>
            <div>{data.type}</div>
        </div>
    );
}

export default CurrentTask;