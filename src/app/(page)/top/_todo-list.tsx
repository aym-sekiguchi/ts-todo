/**
 * todo list component
 *
 */

import { type Todo } from "~/app/_library/src/dummy-data";
import { TodoCard } from "./_todo-card";

export function TodoList(props: { data: Todo[]; key: string }) {
  const { data, key } = props;

  /* === return === */
  return (
    // <div className="overflow-y-hidden">
    <ul className="space-y-6 overflow-y-auto px-2">
      {data.map((value, index) => (
        <li key={`${key}-${index}`}>
          <TodoCard data={value} />
        </li>
      ))}
    </ul>
    // </div>
  );
}
