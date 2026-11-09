type DetailsType = {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
};

type EmailResponseType = {
  name: string;
  message: string;
  type: "Error" | "Success" | "Info" | "Warning";
};
