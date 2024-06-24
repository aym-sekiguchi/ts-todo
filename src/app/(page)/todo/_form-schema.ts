"use client";

import { z } from "zod";

export const formSchema = z.object({
  //eslint-disable-next-line
  status: z.enum(["untouched", "ongoing", "done"]),
  title: z.string().min(2, { message: "2文字以上で入力してください" }),
  description: z.string().min(8, { message: "8文字以上で入力してください" }),
  dueDate: z
    .date({ message: "日付を入力してください" })
    .refine((value) => new Date() > value, {
      message: "今日以降の日付を入力してください",
    }),
});
