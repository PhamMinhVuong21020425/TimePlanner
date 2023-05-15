// import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import Weather from "./Weather";
import WeekCalendar from "./WeekCalendar";
import { useState, useEffect } from "react";
import axios from "axios";
interface Todo {
    startDate: Date;
    endDate: Date;
    title: string;
    description: string;
}

export default function Calendar() {

    const todo: Todo[] = [
        {
            startDate: new Date("1995-07-31T03:25:00"),
            endDate: new Date("1995-07-31T03:25:00"),
            title: "Brainstorming",
            description: "Utilities for controlling the font size of an element.",
        },
        {
            startDate: new Date("1995-07-31T03:25:00"),
            endDate: new Date("1995-07-31T03:25:00"),
            title: "Brainstorming",
            description: "Utilities for controlling the font size of an element.",
        },
    ];

    return (
        <>
            <div className="p-4 rounded-md items-center mx-auto">
                {/* <Weather /> */}
                <WeekCalendar />
                {/* <ScheduleComponent>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                    <ViewsDirective>
                        <ViewDirective option='Day' />
                        <ViewDirective option='Week' />
                        <ViewDirective option='WorkWeek' />
                        <ViewDirective option='Month' />
                        <ViewDirective option='Agenda' />
                    </ViewsDirective>

                </ScheduleComponent> */}
            </div>
        </>
    );
}
