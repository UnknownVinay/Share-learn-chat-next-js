"use client";

import {
  Input,
  Button,
  Textarea,
  popover,
  PopoverContent,
  PopoverTrigger,
  Popover,
} from "@nextui-org/react";
import { useFormState } from "react-dom";
import * as actions from "@/actions";
import FormButton from "@/components/common/form-button";

interface PostCreateFormProps {
  slug: string;
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, action] = useFormState(
    actions.createPost.bind(null, slug),
    { errors: {} }
  );
  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary" variant="bordered">
          Create a Post
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(", ")}
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Enter a content..."
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(", ")}
            />
            {formState.errors._form ? (
              <div className="bg-red-400 p-2 border border-red-600 rounded text-white ">
                {formState.errors._form.join(". ")}
              </div>
            ) : null}
            <FormButton>Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
