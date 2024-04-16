import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin } from "../../services/apiCabins";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin was successfully created!");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      //   reset(); because we don't have an access to a react-hook-form function inside a custom hook
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCabin };
}
