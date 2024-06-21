"use client"


import React from 'react'
import {useQuery} from "convex/react";
import {api} from "../../../convex/_generated/api";

const TasksComponent = () => {
    const tasks = useQuery(api.tasks.get);
    return (
        <div className='p-10'>
            {/*{tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}*/}
            {tasks?.map((task) => (JSON.stringify(task)))}
        </div>
    );
}
export default TasksComponent
