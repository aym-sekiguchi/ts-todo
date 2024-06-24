"use client";

import { useState } from "react";
import { type Status } from "~/app/_library";
import { status, statusLabel } from "~/app/_library/src/_status";
import { cn } from "~/app/_library/utils";
import { TodoList } from "./_todo-list";
import { dummyData } from "~/app/_library/src/dummy-data";

/**
 * desktop component
 *
 */

export function Desktop() {
  // TODO データ取得

  /* === return === */
  return (
    <div className="flex h-full space-x-8 max-md:hidden">
      {status.map((value, index) => (
        <section
          key={`desktop-${value}`}
          className="flex w-full flex-col gap-6"
        >
          {/* status */}
          <div className="sticky inset-x-0 top-0 border-b border-border">
            <p className="w-[5em] rounded-t-lg bg-primary py-1 text-center text-primary-foreground">
              {statusLabel[index]}
            </p>
          </div>

          {/* todo list */}
          <TodoList
            data={dummyData.filter((item) => item.status === value)}
            key={`desktop-${value}`}
          />
        </section>
      ))}
    </div>
  );
}
