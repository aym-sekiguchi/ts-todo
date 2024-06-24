"use client";

import { useState } from "react";
import { type Status } from "~/app/_library";
import { status, statusLabel } from "~/app/_library/src/_status";
import { cn } from "~/app/_library/utils";
import { TodoList } from "./_todo-list";
import { dummyData } from "~/app/_library/src/dummy-data";

/**
 * mobile component
 *
 */

export function Mobile() {
  /* === status === */
  const [activeStatus, setActiveStatus] = useState<Status>("untouched");

  // TODO データ取得

  /* === return === */
  return (
    <div className="flex h-full flex-col gap-8 md:hidden">
      {/* tab */}
      <div className="flex border-b border-border">
        {status.map((item, index) => (
          <button
            key={`mobile-status-${index}`}
            className={cn(
              "-ml-px w-[5em] rounded-t-lg border-x border-t border-border py-1",
              activeStatus === item
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-primary",
            )}
            disabled={activeStatus === item}
            onClick={() => setActiveStatus(item)}
          >
            {statusLabel[index]}
          </button>
        ))}
      </div>

      {/* list */}
      <TodoList
        data={dummyData.filter((item) => item.status === activeStatus)}
        key={`mobile-${activeStatus}`}
      />
    </div>
  );
}
