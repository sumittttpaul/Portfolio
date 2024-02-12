type DetailsType = {
  name: string;
  email: string;
  company: string;
  service: string;
  description: string;
};

type DeviceType = {
  device: {
    isMobile?: boolean;
    isDesktop?: boolean;
  };
};

type DivAttributesType = {
  children: React.ReactElement;
  className?: string;
};

type ButtonAttributesType = {
  children: React.ReactElement;
  className?: string;
  onClick: () => void;
  type?: "submit" | "reset" | "button";
};

type SubmitAttributesType = {
  children: React.ReactElement;
  className?: string;
};

type LinkAttributesType = {
  children: React.ReactElement;
  className?: string;
  href: string;
};

type SearchParamsType = {
  searchParams?: {
    // [key: string]: string | string[] | undefined;
    viewport?: string;
  };
};

type EmailResponseType = {
  name: string;
  message: string;
  type: "Error" | "Success" | "Info" | "Warning";
};

type ToastSettingType = {
  Show: boolean;
  Title: string;
  Description: string;
  Type: "Error" | "Success" | "Info" | "Warning" | "";
};

interface ToastProps {
  SlideDirection: "left" | "right" | "up" | "down";
  Vertical: "top" | "bottom";
  Horizontal: "left" | "center" | "right";
  HideDuration: number;
  Toast: {
    Open: boolean;
    onClose: (value: boolean) => void;
    MessageTitle: string;
    MessageDescription: string;
    Type: "Error" | "Success" | "Info" | "Warning" | "";
  };
}

type WorkImagesType = "clothing" | "portfolio" | "emotion" | "authentication";
