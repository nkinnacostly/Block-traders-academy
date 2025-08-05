import { toast } from "sonner";

export const handleApiError = (errorResponse: any) => {
  try {
    // Try to parse if it's a string
    let parsed;
    if (typeof errorResponse === "string") {
      parsed = JSON.parse(errorResponse);
    } else if (errorResponse instanceof Error) {
      parsed = JSON.parse(errorResponse.message);
    } else {
      parsed = errorResponse;
    }

    console.log(parsed, "This is my parsed data");

    // Case 1: parsed is a string
    if (typeof parsed === "string") {
      toast.error(parsed);
      return;
    }

    // Case 2: parsed is an object
    if (parsed && typeof parsed === "object") {
      // Check for validation errors structure (like your backend response)
      if ("errors" in parsed && typeof parsed.errors === "object") {
        Object.keys(parsed.errors).forEach((field) => {
          const messages = parsed.errors[field];
          if (Array.isArray(messages)) {
            messages.forEach((message) => {
              toast.error(message);
            });
          } else if (typeof messages === "string") {
            toast.error(messages);
          }
        });
        return;
      }

      // Check if it has an 'error' property
      if ("error" in parsed) {
        const errorData = parsed.error;

        // Handle string error (e.g., { "error": "some error message" })
        if (typeof errorData === "string") {
          toast.error(errorData);
        }
        // Handle object error with nested messages (e.g., { "error": { "closing_time": ["message"] } })
        else if (typeof errorData === "object" && errorData !== null) {
          Object.keys(errorData).forEach((key) => {
            const messages = errorData[key];
            // Handle array of messages
            if (Array.isArray(messages)) {
              messages.forEach((message) => {
                toast.error(message);
              });
            }
            // Handle single string message
            else if (typeof messages === "string") {
              toast.error(messages);
            }
          });
        }
      } else if ("message" in parsed) {
        // Handle direct message property
        toast.error(parsed.message);
      } else {
        // Handle object without 'error' property
        toast.error("An unexpected error occurred. Please try again.");
      }
    } else {
      // Fallback for unexpected formats
      toast.error("An unexpected error occurred. Please try again.");
    }
  } catch (err) {
    console.error("Error handling API response:", err);
    toast.error("An unexpected error occurred. Please try again.");
  }
};
