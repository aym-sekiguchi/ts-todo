"use client";

import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

/**
 * todo card component
 *
 */

import { Button } from "~/app/_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/app/_components/ui/card";
import { type Todo } from "~/app/_library/src/dummy-data";
import { cn } from "~/app/_library/utils";
import { useRouter } from "next/navigation";

export function TodoCard(props: { classList?: string; data: Todo }) {
  const { classList, data } = props;
  const router = useRouter();

  /* === status === */
  const [currentDate, setCurrentDate] = useState(new Date());

  /* === effect === */
  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  /* === function === */
  const handleClickEdit = (slug: string) => {
    // TODO 編集処理
    router.push(`/todo/edit/${slug}`);
  };
  const handleClickDelete = () => {
    // TODO 削除処理
  };

  /* === return === */
  return (
    <Card className={cn("space-y-4 px-4 py-5", classList)}>
      <CardHeader className="space-y-4 p-0">
        <CardTitle>{data.title}</CardTitle>
        <CardDescription className="text-base">
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent
        className={cn(
          "p-0",
          new Date(data.dueDate.replace(".", "-")) < currentDate
            ? "text-destructive"
            : "text-primary",
        )}
      >
        {data.dueDate}
      </CardContent>
      <CardFooter className="flex gap-2 p-0">
        <Button
          variant="link"
          onClick={() => handleClickEdit(data.slug)}
          className="size-8 border border-border bg-white p-0"
        >
          <EditIcon />
        </Button>
        <Button
          variant="link"
          onClick={handleClickDelete}
          className="size-8 border border-border bg-white p-0"
        >
          <DeleteForeverIcon className="text-destructive" />
        </Button>
      </CardFooter>
    </Card>
  );
}
