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
