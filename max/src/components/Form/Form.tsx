import { MenuItem, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";

export default function Form() {
  const re = /^[A-Za-z]+$/;
  const reg = /^\w+([\.-]?\w+)*@\w+([\.-]()?\w+)*(\.\w{2,3})+$/;

  const services = [
    {
      value: "Please Select",
      label: "Please Select",
    },
    {
      value: "CC PRP Active Plus",
      label: "CC PRP Active Plus",
    },
    {
      value: "Oxygen Laser Therapy",
      label: "Oxygen Laser Therapy",
    },
    {
      value: "Dr Regrowth",
      label: "Dr Regrowth",
    },
    {
      value: "Laser Helmet",
      label: "Laser Helmet",
    },
    {
      value: "Laser Cap 2.0",
      label: "Laser Cap 2.0",
    },
    {
      value: "MESO QR678",
      label: "MESO QR678",
    },
    {
      value: "Scalp Detox",
      label: "Scalp Detox",
    },
    {
      value: "Cortico Shot",
      label: "Cortico Shot",
    },
    {
      value: "IGM Hair Transplant",
      label: "IGM Hair Transplant",
    },
    {
      value: "DHI Hair Transplant",
      label: "DHI Hair Transplant",
    },
    {
      value: "Sapphire Hair Transplant",
      label: "Sapphire Hair Transplant",
    },
    {
      value: "Sapphire Mirror+FUE",
      label: "Sapphire Mirror+FUE",
    },
    {
      value: "Advance Sapphire",
      label: "Advance Sapphire",
    },
    {
      value: "Sapphire FUE Beard Transplant",
      label: "Sapphire FUE Beard Transplant",
    },
    {
      value: "Sapphire Mirror+FUE Beard Transplant",
      label: "Sapphire Mirror+FUE Beard Transplant",
    },
    {
      value: "Eyebrow Transplant",
      label: "Eyebrow Transplant",
    },
    {
      value: "Unshaven Technique Eyebrow Transplant",
      label: "Unshaven Technique Eyebrow Transplant",
    },
    {
      value: "Dura",
      label: "Dura",
    },
    {
      value: "French Grip",
      label: "French Grip",
    },
    {
      value: "Satin Lace",
      label: "Satin Lace",
    },
    {
      value: "Celebrityʼs Choice",
      label: "Celebrityʼs Choice",
    },
    {
      value: "Tress Pro",
      label: "Tress Pro",
    },
    {
      value: "Microblading",
      label: "Microblading",
    },
    {
      value: "Scalp Micro Pigmentation",
      label: "Scalp Micro Pigmentation",
    },
    {
      value: "Partial Alopecia SMP",
      label: "Partial Alopecia SMP",
    },
    {
      value: "Total Alopecia SMP",
      label: "Total Alopecia SMP",
    },
    {
      value: "Eyelash Lift & Extension",
      label: "Eyelash Lift & Extension",
    },
    {
      value: "Refilling",
      label: "Refilling",
    },
    {
      value: "Service Max System",
      label: "Service Max System",
    },
    {
      value: "Service Outside System",
      label: "Service Outside System",
    },
    {
      value: "Pacth Work",
      label: "Pacth Work",
    },
    {
      value: "Color",
      label: "Color",
    },
    {
      value: "Head Massage",
      label: "Head Massage",
    },
    {
      value: "Beard Trimming",
      label: "Beard Trimming",
    },
    {
      value: "Mustache & Beard Coloring",
      label: "Mustache & Beard Coloring",
    },
    {
      value: "Female Hair Cut",
      label: "Female Hair Cut",
    },
    {
      value: "Men Hair Cut",
      label: "Men Hair Cut",
    },
    {
      value: "Female Spa",
      label: "Female Spa",
    },
    {
      value: "Hair Straightening",
      label: "Hair Straightening",
    },
  ];

  const Locations = [
    {
      value: "Please Select",
      label: "Please Select",
    },
    {
      value: "Chennai",
      label: "Chennai",
    },
    {
      value: "Coimbatore",
      label: "Coimbatore",
    },
    {
      value: "Bangalore",
      label: "Bangalore",
    },
    {
      value: "Hyderabad",
      label: "Hyderabad",
    },
    {
      value: "Noida",
      label: "Noida",
    },
    {
      value: "Mumbai",
      label: "Mumbai",
    },
  ];

  const [Form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    locations: "",
    services: "",
    message: "",
  });

  const [Error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    locations: "",
    services: "",
    message: "",
  });

  const handleChange = (event: any) => {
    const { value, name, type, checked } = event.target;
    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    checkName();
    checkPhone();
    checkEmail();
    checkLocations();
    checkServices();
    checkMessage();
    setStatus("Sending...");
    if (
      Form.name.trim().length >= 3 &&
      re.test(Form.name) &&
      reg.test(Form.email) &&
      Form.phone.trim().length == 10 &&
      Form.message.trim().length > 2
    ) {
      emailjs.send(
        "service_fxnfiin",
        "template_qvsmp34",
        Form,
        "wkjTu596kGqYtFVQw"
      );
      setStatus("Submit");
      alert("Form Submitted Successfully");
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  };

  const checkName = () => {
    if (Form.name.trim() == "") {
      setError((state) => ({
        ...state,
        name: "Name cannot be empty",
      }));
    } else if (Form.name.trim().length < 3) {
      setError((state) => ({
        ...state,
        name: "Name must be more than 3 chanracters",
      }));
    } else if (re.test(Form.name)) {
      setError((state) => ({
        ...state,
        name: "",
      }));
    } else {
      setError((state) => ({
        ...state,
        name: "Name must only contain alphabets",
      }));
    }
  };
  const checkEmail = () => {
    if (Form.email.trim() == "") {
      setError((state) => ({
        ...state,
        email: "Email cannot be empty",
      }));
    } else if (reg.test(Form.email)) {
      setError((state) => ({
        ...state,
        email: "",
      }));
    } else {
      setError((state) => ({
        ...state,
        email: "please ensure that the email contains @ and . symbols",
      }));
    }
  };
  const checkPhone = () => {
    if (Form.phone.trim() == "") {
      setError((state) => ({
        ...state,
        phone: "Phone No. cannot be empty",
      }));
    } else if (Form.phone.trim().length == 10) {
      setError((state) => ({
        ...state,
        phone: "",
      }));
    } else {
      setError((state) => ({
        ...state,
        phone: "Phone No. must be exactly 10 digits",
      }));
    }
  };
  const checkLocations = () => {
    if (Form.locations == "Please Select") {
      setError((state) => ({
        ...state,
        locations: "Please choose any Location",
      }));
    } else {
      setError((state) => ({
        ...state,
        locations: "",
      }));
    }
  };
  const checkServices = () => {
    if (Form.services == "Please Select") {
      setError((state) => ({
        ...state,
        services: "Please choose any Services",
      }));
    } else {
      setError((state) => ({
        ...state,
        services: "",
      }));
    }
  };
  const checkMessage = () => {
    if (Form.message.trim() == "") {
      setError((state) => ({
        ...state,
        message: "Messsage cannot be empty",
      }));
    } else if (Form.message.trim().length > 2) {
      setError((state) => ({
        ...state,
        message: "",
      }));
    } else {
      setError((state) => ({
        ...state,
        message: "Please enter a message",
      }));
    }
  };

  return (
    <div className="form w-[90vw] sm:w-[60vw] 2xl:w-[50vw] mx-auto">
      <form action="" id="ContactForm" onSubmit={handleSubmit}>
        <TextField
          id="name"
          name="name"
          type="text"
          label="What's your name"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          onBlur={checkName}
          className="mb3vh"
        />
        {!!Error.name && (
          <div>
            <i className="error mt-[-3vh] mb-[3vh]">{Error.name}</i>
          </div>
        )}

        <TextField
          id="phone"
          name="phone"
          type="number"
          label="Tell us your Phone No."
          variant="outlined"
          fullWidth
          onChange={handleChange}
          onBlur={checkPhone}
          className="mb3vh"
        />
        {!!Error.phone && (
          <div>
            <i className="error mt-[-3vh] mb-[3vh]">{Error.phone}</i>
          </div>
        )}

        <TextField
          id="email"
          name="email"
          type="email"
          label="What's your Email"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          onBlur={checkEmail}
          className="mb3vh"
        />
        {!!Error.email && (
          <div>
            <i className="error mt-[-3vh] mb-[3vh]">{Error.email}</i>
          </div>
        )}

        <TextField
          id="locations"
          name="locations"
          select
          label="Locations"
          defaultValue="Please Select"
          fullWidth
          onChange={handleChange}
          onBlur={checkLocations}
          className="mb3vh"
        >
          {Locations.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {!!Error.locations && (
          <div>
            <i className="error mt-[-3vh] mb-[3vh]">{Error.locations}</i>
          </div>
        )}

        <TextField
          id="services"
          name="services"
          select
          label="Services"
          defaultValue="Please Select"
          fullWidth
          onChange={handleChange}
          onBlur={checkServices}
          className="mb3vh"
        >
          {services.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {!!Error.services && (
          <div>
            <i className="error mt-[-3vh] mb-[3vh]">{Error.services}</i>
          </div>
        )}

        <TextField
          id="message"
          name="message"
          label="Message"
          type="text"
          multiline
          fullWidth
          rows={4}
          onChange={handleChange}
          onBlur={checkMessage}
          className="mb3vh"
        />
        {!!Error.message && (
          <div>
            <i className="error mt-[-3vh] mb-[3vh]">{Error.message}</i>
          </div>
        )}

        <Button variant="contained" type="submit">
          {status}
        </Button>
      </form>
    </div>
  );
}
