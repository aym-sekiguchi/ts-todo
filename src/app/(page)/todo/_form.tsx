"use client";

import { useForm } from "react-hook-form";
import { type z } from "zod";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./_form-schema";
import {
  Form as FormComponent,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/app/_components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/app/_components/ui/select";

import { Button } from "../../_components/ui/button";
import { Input } from "../../_components/ui/input";
import { statusLabel } from "~/app/_library/src/_status";
import { Calendar } from "~/app/_components/ui/calendar";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "~/app/_components/ui/popover";
import { cn } from "~/app/_library/utils";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { ja } from "date-fns/locale/ja";
import { Textarea } from "~/app/_components/ui/textarea";
import { type Todo } from "~/app/_library/src/dummy-data";

export function Form(props: { data?: Todo }) {
  const { data } = props;
  /* === form === */
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: data?.status,
      title: data?.title,
      description: data?.description,
      dueDate: data?.dueDate,
    },
  });

  /* === onSubmit === */
  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO 保存処理
    console.log(values);
  }

  /* === return === */
  return (
    <FormComponent {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* status */}
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ステータス</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={
                    data?.status === "done"
                      ? statusLabel[2]
                      : data?.status === "ongoing"
                        ? statusLabel[1]
                        : statusLabel[0]
                  }
                >
                  <SelectTrigger className="w-[180px] border border-primary !bg-secondary">
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {statusLabel.map((label, index) => (
                      <SelectItem key={`status-${index}`} value={label}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* title */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>タイトル</FormLabel>
              <FormControl>
                <Input
                  className="border border-primary bg-secondary"
                  defaultValue={data?.title}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>詳細</FormLabel>
              <FormControl>
                <Textarea
                  rows={4}
                  className="border border-primary bg-secondary"
                  defaultValue={data?.description}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* due date */}
        <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>期限</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "flex w-[240px] items-center justify-between border border-primary bg-secondary pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground",
                      )}
                    >
                      {field.value ? (
                        format(field.value, "yyyy年MM月dd日", { locale: ja })
                      ) : (
                        <span>期限を選択してください</span>
                      )}
                      <CalendarMonthIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-center pt-8">
          {/* submit button */}
          <Button type="submit" className="px-8 py-2">
            保存して一覧に戻る
          </Button>
        </div>
      </form>
    </FormComponent>
  );
}
