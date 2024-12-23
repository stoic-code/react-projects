function TaskList({ list, setList, toggleItem }) {
  console.log(list);

  return (
    <div>
      {list.map((item) => (
        <>
          <p
            style={{
              textDecoration: `${item.completed ? "line-through" : "none"}`,
            }}
            key={item.id}
          >
            {item.todos}
            <input
              defaultChecked={item.completed ? true : false}
              onClick={() => toggleItem(item)}
              type="checkbox"
            ></input>
          </p>
        </>
      ))}
    </div>
  );
}

export default TaskList;
