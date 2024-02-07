"use client";

import RoundedMagneticButton from "./Magnetic/RoundedMagneticButton";
import { FormEvent, useCallback, useState } from "react";
import TextField from "./TextField";
import TextArea from "./TextArea";
import { ToastHook } from "utils/Zustand";
import SendEmail from "functions/SendEmail";

type ChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

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

  const { setToastValue } = ToastHook();

  const { isMobile, isDesktop } = device;

  const validName = Details.name.length > 2;
  const validService = Details.service.length > 2;
  const validEmail =
    Details.email.length > 2 &&
    Details.email.toLowerCase().match(emailExpression);

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
      const NameField = document.getElementById("contact-textfield-name");
      const EmailField = document.getElementById("contact-textfield-email");
      const ServiceField = document.getElementById("contact-textfield-service");
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
      setDisabledSubmit(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, company, service, description } = Details;

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="mt-[5em] flex h-px w-full bg-black/20 md:mt-[16em]" />
      <TextField
        id="contact-textfield-name"
        index="01"
        name="name"
        type="text"
        label="What's your name?"
        placeholder="Sumeet Kumar Paul *"
        errorLabel="Please enter a valid name"
        value={Details.name}
        onChange={handleDetails}
        error={DetailsError.name}
        labelOpacity={handleLabelOpacity(Details.name)}
      />
      <span className="flex h-px w-full bg-black/20" />
      <TextField
        id="contact-textfield-email"
        index="02"
        name="email"
        type="text"
        label="What's your email?"
        placeholder="sumitpaul.work@gmail.com *"
        errorLabel="Please enter a valid email address"
        value={Details.email}
        onChange={handleDetails}
        error={DetailsError.email}
        labelOpacity={handleLabelOpacity(Details.email)}
      />
      <span className="flex h-px w-full bg-black/20" />
      <TextField
        index="03"
        type="text"
        name="company"
        placeholder="Emotion Corporation"
        label="What's the name of your organization?"
        value={Details.company}
        onChange={handleDetails}
        labelOpacity={handleLabelOpacity(Details.company)}
      />
      <span className="flex h-px w-full bg-black/20" />
      <TextField
        id="contact-textfield-service"
        index="04"
        type="text"
        name="service"
        placeholder="Web Development, ... *"
        errorLabel="Please enter a valid service"
        label="What services are you looking for?"
        value={Details.service}
        onChange={handleDetails}
        error={DetailsError.service}
        labelOpacity={handleLabelOpacity(Details.service)}
      />
      <span className="flex h-px w-full bg-black/20" />
      <TextArea
        index="05"
        name="description"
        label="Your message"
        placeholder="Hello Sumeet, can you help me with ..."
        onChange={handleDetails}
        value={Details.description}
        labelOpacity={handleLabelOpacity(Details.description)}
      />
      <span className="mt-[6.5em] flex h-px w-full bg-black/20" />
      <div className="relative -mt-[calc(clamp(9em,12vw,11em)*0.5)] flex w-full justify-end pr-[clamp(2em,5vw,10em)]">
        {DisabledSubmit && (
          <div className="absolute z-[1] h-full w-full bg-white/20" />
        )}
        <RoundedMagneticButton
          type="submit"
          device={device}
          onClick={() => {}}
          className="h-[clamp(9em,12vw,11em)] w-[clamp(9em,12vw,11em)] bg-button-blue"
        >
          <span className="z-[1]">Send it!</span>
        </RoundedMagneticButton>
      </div>
    </form>
  );
}
