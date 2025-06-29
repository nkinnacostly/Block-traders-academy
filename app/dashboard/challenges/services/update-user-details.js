import useApiRequest from "@/hooks/useCustonApiQuery";

export function UpdateUserDetails() {
  const { useMutationRequest } = useApiRequest(); // Destructure the custom hook

  const { mutateAsync, isPending } = useMutationRequest();
  const updateUserDetails = async () => {
    try {
      await mutateAsync(
        {
          method: "POST",
          url: "/update-user-challenge",
        },
        {
          onSuccess: (data) => {
            console.log(data);
            //    toast.success(data.message);
            //    storage.localStorage.set("user", data.user);
            //    storage.localStorage.set("__session", data.data?.token);
            //    router.push("/login");
          },
          onError: (error) => {
            //    toast.error(error.message);
            console.log(error, "This is my data error");
          },
        }
      );
    } catch (error) {
      // console.error("Error adding data:", error.message);
      // console.log(error.error);
    }
  };
  return { updateUserDetails, isPending };
}
