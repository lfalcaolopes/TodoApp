import { z } from "zod";

export const todoTaskSchema = z.object({
  id: z.number(),
  name: z.string().max(40),
  categoryId: z.number(),
  isComplete: z.boolean(),
  dueDate: z.string(),
});


export const categorySchema = z.object({
  id: z.number(),
  name: z.string().max(20),
  color: z.string().max(7).regex(new RegExp("^#(?:[0-9a-fA-F]{3}){1,2}$"))
});

export const todoTaskListSchema = z.array(todoTaskSchema);
export const categoryListSchema = z.array(categorySchema);

export type todoTaskProps = z.infer<typeof todoTaskSchema>
export type categoryProps = z.infer<typeof categorySchema>
export type todoTaskListProps = z.infer<typeof todoTaskListSchema>
export type categoryListProps = z.infer<typeof categoryListSchema>
