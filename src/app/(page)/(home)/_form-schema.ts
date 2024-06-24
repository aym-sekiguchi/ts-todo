"use client";

import { z } from "zod";

export const formSchema = z.object({
  email: z
    .string({ message: "メールアドレスを入力してください" })
    .email({ message: "正しいメールアドレスを入力してください" }),
  password: z
    .string({ message: "パスワードを入力してください" })
    .min(8, { message: "8文字以上で入力してください" }),
});
