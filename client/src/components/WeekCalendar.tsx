import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../App.css"
import "../styles/Calendar.css"

const locales = {
    //"en-US": require("date-fns/locale/en-US"),
    "vi": require("date-fns/locale/vi"),
};
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

interface Event {
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
}

const events: Event[] = [
    {
        title: "Big Meeting",
        allDay: true,
        start: new Date(2023, 4, 11),
        end: new Date(2023, 4, 13),
    },
    {
        title: "Conversation",
        start: new Date(2023, 6, 7),
        end: new Date(2023, 6, 10),
    },
    {
        title: "Playing",
        start: new Date(2023, 6, 20),
        end: new Date(2023, 6, 23),
    },
];

function WeekCalendar() {
    const [newEvent, setNewEvent] = useState<Event>({
        title: "",
        start: new Date(),
        end: new Date(),
    });
    const [allEvents, setAllEvents] = useState<Event[]>(events);

    function handleAddEvent() {
        for (let i = 0; i < allEvents.length; i++) {
            const d1 = new Date(allEvents[i].start);
            const d2 = new Date(newEvent.start);
            const d3 = new Date(allEvents[i].end);
            const d4 = new Date(newEvent.end);

            if (
                (d1 <= d2 && d2 <= d3) ||
                (d1 <= d4 && d4 <= d3)
            ) {
                alert("Clash, collision");
                break;
            }
        }
        setAllEvents([...allEvents, newEvent]);
    }

    return (
        <div className="App">
            {/* <h2>Add New Event</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add Title"
                    style={{ width: "20%", marginRight: "10px" }}
                    value={newEvent.title}
                    onChange={(e) =>
                        setNewEvent({ ...newEvent, title: e.target.value })
                    }
                />
                <DatePicker
                    placeholderText="Start Date"
                    selected={newEvent.start}
                    className="my-datepicker"
                    onChange={(start: Date | null) =>
                        setNewEvent({
                            ...newEvent,
                            start: start ? start : new Date(),
                        })
                    }
                />
                <DatePicker
                    placeholderText="End Date"
                    selected={newEvent.end}
                    className="my-datepicker"
                    onChange={(end: Date | null) =>
                        setNewEvent({
                            ...newEvent,
                            end: end ? end : new Date(),
                        })
                    }
                />
                <button style={{ marginTop: "20px", color: "lime" }} onClick={handleAddEvent}>
                    Add Event
                </button>
            </div> */}
            <Calendar
                localizer={localizer}
                events={allEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500, margin: "50px", color: "gray", backgroundColor: "white", fontFamily: "sans-serif", fontSize: "13px" }}
                className="my-calendar"
            />
        </div>
    );
}

export default WeekCalendar;