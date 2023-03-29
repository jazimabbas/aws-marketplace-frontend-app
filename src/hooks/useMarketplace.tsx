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
  const [token, setToken] = useState("");
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

  const handleSubmit = async () => {
    if (!_isFormValid()) {
      alert("Please fill all the form fields");
      return;
    }

    await _signupToAWSMarketplace();
  };

  const _isFormValid = (): boolean => {
    const { name, company, email, phone } = form;
    if (!name || !company || !email || !phone) {
      return false;
    }

    return true;
  };

  const _signupToAWSMarketplace = async (): Promise<void> => {
    try {
      const response = await fetch("/api/marketplace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(_getPayload()),
      });
      const data = await response.json();
      
      console.log("data: ", data);
      alert("AWS Marketplace signup Successfull: " + data.message);
    } catch (err: any) {
      alert(err.message);
    }
  };

  const _getPayload = () => {
    return {
      contactPerson: form.name,
      contactEmail: form.email,
      companyName: form.company,
      contactPhone: form.phone,
      regToken: _getParsedToken(),
    };
  };

  const _getParsedToken = (): string => {
    return token.replace(/\s+/g, "+");
  };

  return { form, handleChangeInput, handleSubmit };
}
