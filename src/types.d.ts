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
