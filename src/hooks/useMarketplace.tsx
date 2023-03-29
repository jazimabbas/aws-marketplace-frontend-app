import { useEffect, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
};

const initialFormValue: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
};

export default function useMarketplace() {
  const [_, setToken] = useState("");
  const [form, setForm] = useState<FormState>(initialFormValue);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const tokenParam = searchParams.get("token");

    if (!tokenParam) {
      alert("Marketplace Token not found");
      return;
    }

    setToken(tokenParam);
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setForm((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const handleSubmit = () => {
    if (!_isFormValid()) {
      alert("Please fill all the form fields");
      return;
    }

    alert("submitted");
  };

  const _isFormValid = (): boolean => {
    const { name, company, email, phone } = form;
    if (!name || !company || !email || !phone) {
      return false;
    }

    return true;
  };

  return { form, handleChangeInput, handleSubmit };
}
