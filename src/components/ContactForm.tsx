"use client";

import RoundedMagneticButton from "./Magnetic/RoundedMagneticButton";
import { CircularProgress } from "@mui/material";
import SendEmail from "functions/SendEmail";
import { ToastHook } from "utils/Zustand";
import TextField from "./TextField";
import TextArea from "./TextArea";
import {
  useState,
  FormEvent,
  ChangeEvent,
  useCallback,
  KeyboardEvent,
  FocusEvent,
} from "react";

type ChangeEventType =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

type KeyboardEventType =
  | KeyboardEvent<HTMLInputElement>
  | KeyboardEvent<HTMLTextAreaElement>;

type FocusEventType =
  | FocusEvent<HTMLInputElement>
  | FocusEvent<HTMLTextAreaElement>;

const ChangeOpacity = 0.4;
const InitialOpacity = 1;
const InitialValue = "";

const emailExpression =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function objectToFormData(obj: Object) {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return formData;
}

export default function ContactForm({ device }: DeviceType) {
  const [Details, setDetails] = useState({
    name: InitialValue,
    email: InitialValue,
    company: InitialValue,
    service: InitialValue,
    description: InitialValue,
  });

  const [DetailsError, setDetailsError] = useState({
    name: false,
    email: false,
    service: false,
  });

  const [DisabledSubmit, setDisabledSubmit] = useState(false);

  const [isKeyUp, setIsKeyUp] = useState(false);

  const { setToastValue } = ToastHook();

  const { isMobile, isDesktop } = device;

  const validName = Details.name.length > 2;
  const validService = Details.service.length > 2;
  const validEmail =
    Details.email.length > 2 &&
    Details.email.toLowerCase().match(emailExpression);

  const getElement = (id: string) => {
    if (typeof window !== "undefined") return document.getElementById(id);
    else return null;
  };

  const EnterKey = (e: KeyboardEventType) => e.key === "Enter";
  const BackspaceKey = (e: KeyboardEventType, name: string) =>
    e.key === "Backspace" && name.length < 1;

  const NameField = getElement("contact-textfield-name");
  const EmailField = getElement("contact-textfield-email");
  const ServiceField = getElement("contact-textfield-service");
  const CompanyField = getElement("contact-textfield-company");
  const DescriptionField = getElement("contact-textfield-description");

  const handleDetails = (e: ChangeEventType) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
    setDetailsError((prev) => {
      if (value.length > 2) return { ...prev, [name]: false };
      else return { ...prev };
    });
  };

  const handleNameKeyUp = (e: KeyboardEventType) => {
    if (EnterKey(e)) {
      setIsKeyUp((prev) => {
        if (!prev) return true;
        else return prev;
      });
      if (validName) EmailField?.focus();
      else {
        setDetailsError((prev) => {
          return { ...prev, name: true };
        });
      }
    }
  };
  const handleEmailKeyUp = (e: KeyboardEventType) => {
    if (EnterKey(e)) {
      setIsKeyUp((prev) => {
        if (!prev) return true;
        else return prev;
      });
      if (validEmail) CompanyField?.focus();
      else {
        setDetailsError((prev) => {
          return { ...prev, email: true };
        });
      }
    }
    if (BackspaceKey(e, Details.email)) NameField?.focus();
  };
  const handleCompanyKeyUp = (e: KeyboardEventType) => {
    if (EnterKey(e)) {
      setIsKeyUp((prev) => {
        if (!prev) return true;
        else return prev;
      });
      ServiceField?.focus();
    }
    if (BackspaceKey(e, Details.company)) EmailField?.focus();
  };
  const handleServiceKeyUp = (e: KeyboardEventType) => {
    if (EnterKey(e)) {
      setIsKeyUp((prev) => {
        if (!prev) return true;
        else return prev;
      });
      if (validService) DescriptionField?.focus();
      else {
        setDetailsError((prev) => {
          return { ...prev, service: true };
        });
      }
    }
    if (BackspaceKey(e, Details.service)) CompanyField?.focus();
  };
  const handleDescriptionKeyUp = (e: KeyboardEventType) => {
    if (EnterKey(e)) {
      setIsKeyUp((prev) => {
        if (prev) return false;
        else return prev;
      });
    }
    if (BackspaceKey(e, Details.description)) ServiceField?.focus();
  };

  const handleOnFocus = (e: FocusEventType) => {
    setIsKeyUp((prev) => {
      if (!prev) return true;
      else return prev;
    });
  };
  const handleOnBlur = (e: FocusEventType) => {
    setIsKeyUp((prev) => {
      if (prev) return false;
      else return prev;
    });
  };

  const handleLabelOpacity = (name: string) => {
    return name.length > 0 ? ChangeOpacity : InitialOpacity;
  };

  const handleError = () => {
    if (!validName) {
      setDetailsError((prev) => {
        return { ...prev, name: true };
      });
    }
    if (!validEmail) {
      setDetailsError((prev) => {
        return { ...prev, email: true };
      });
    }
    if (!validService) {
      setDetailsError((prev) => {
        return { ...prev, service: true };
      });
    }
  };

  const handleFocus = () => {
    if (isMobile) {
      if (!validName) {
        NameField?.focus();
      } else if (!validEmail) {
        EmailField?.focus();
      } else if (!validService) {
        ServiceField?.focus();
      }
    }
  };

  const handleEmail = useCallback(async (data: FormData) => {
    const response = await SendEmail(data);
    if (response) {
      console.log(response);
      const data = JSON.parse(response) as EmailResponseType;
      setToastValue({
        Show: true,
        Title: data.name,
        Description: data.message,
        Type: data.type,
      });
      setDetails({
        name: InitialValue,
        email: InitialValue,
        company: InitialValue,
        service: InitialValue,
        description: InitialValue,
      });
      setDisabledSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, company, service, description } = Details;

    if (!isKeyUp) {
      if (!validName || !validEmail || !validService) {
        handleError();
        handleFocus();
        if (isDesktop) {
          window.scrollTo({
            top: 760,
            behavior: "smooth",
          });
        }
      } else if (validEmail && validEmail && validService) {
        setDisabledSubmit(true);
        handleEmail(
          objectToFormData({
            name: name,
            email: email,
            company: company,
            service: service,
            description: description,
          }),
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="mt-[5em] flex h-px w-full bg-black/20 md:mt-[16em]" />
      <TextField
        index="01"
        name="name"
        type="text"
        label="What's your name?"
        id="contact-textfield-name"
        placeholder="Sumeet Kumar Paul *"
        errorLabel="Please enter a valid name"
        value={Details.name}
        onChange={handleDetails}
        onkeyUp={handleNameKeyUp}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        error={DetailsError.name}
        labelOpacity={handleLabelOpacity(Details.name)}
      />
      <span className="flex h-px w-full bg-black/20" />
      <TextField
        index="02"
        name="email"
        type="text"
        label="What's your email?"
        id="contact-textfield-email"
        placeholder="sumitpaul.work@gmail.com *"
        errorLabel="Please enter a valid email address"
        value={Details.email}
        onChange={handleDetails}
        onkeyUp={handleEmailKeyUp}
        error={DetailsError.email}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        labelOpacity={handleLabelOpacity(Details.email)}
      />
      <span className="flex h-px w-full bg-black/20" />
      <TextField
        index="03"
        type="text"
        name="company"
        id="contact-textfield-company"
        placeholder="Emotion Corporation"
        label="What's the name of your organization?"
        value={Details.company}
        onChange={handleDetails}
        onkeyUp={handleCompanyKeyUp}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        labelOpacity={handleLabelOpacity(Details.company)}
      />
      <span className="flex h-px w-full bg-black/20" />
      <TextField
        index="04"
        type="text"
        name="service"
        id="contact-textfield-service"
        placeholder="Web Development, ... *"
        errorLabel="Please enter a valid service"
        label="What services are you looking for?"
        value={Details.service}
        onChange={handleDetails}
        onkeyUp={handleServiceKeyUp}
        error={DetailsError.service}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        labelOpacity={handleLabelOpacity(Details.service)}
      />
      <span className="flex h-px w-full bg-black/20" />
      <TextArea
        index="05"
        name="description"
        label="Your message"
        id="contact-textfield-description"
        placeholder="Hello Sumeet, can you help me with ..."
        onChange={handleDetails}
        value={Details.description}
        onkeyUp={handleDescriptionKeyUp}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        labelOpacity={handleLabelOpacity(Details.description)}
      />
      <span className="mt-[6.5em] flex h-px w-full bg-black/20" />
      <div className="relative -mt-[calc(clamp(9em,12vw,11em)*0.5)] flex w-full justify-end pr-[clamp(2em,5vw,10em)]">
        {DisabledSubmit && (
          <div className="absolute z-[2] flex h-[145px] w-[145px] items-center justify-center rounded-full bg-hover-blue sm:h-[clamp(9em,12vw,11em)] sm:w-[clamp(9em,12vw,11em)]">
            <CircularProgress className="max-h-7 max-w-7 text-white sm:max-h-8 sm:max-w-8" />
          </div>
        )}
        <RoundedMagneticButton
          type="submit"
          name="submit_button"
          device={device}
          onClick={() => {}}
          className="h-[12em] w-[12em] bg-button-blue text-xs text-white xs:text-[13px] sm:h-[clamp(9em,12vw,11em)] sm:w-[clamp(9em,12vw,11em)] sm:text-base"
        >
          <span>Send it!</span>
        </RoundedMagneticButton>
      </div>
    </form>
  );
}
