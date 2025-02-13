export function List() {
    const tasks = [
        {
            id: 1,
            name: "Task 1",
            time: "01:00:00"
        },
        {
            id: 2,
            name: "Task 2",
            time: "00:45:00"
        },
        {
            id: 3,
            name: "Task 3",
            time: "00:30:00"
        }
    ]
    return (
        <aside>
            <h2>
                Tasks
            </h2>
            <ul>
                {tasks.map((task) => (
                    <li key={ task.id }>
                        <h3>
                            { task.name }
                        </h3>
                        <span>
                            { task.time }
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}