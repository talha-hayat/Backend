import { useState } from "react";
import ComponentCard from "../../common/ComponentCard.tsx";
import Label from "../Label.tsx";
import Input from "../input/InputField.tsx";
import Select from "../Select.tsx";
import { BoxIcon, EyeCloseIcon, EyeIcon, TimeIcon } from "../../../icons/index.ts";
import DatePicker from "../date-picker.tsx";
import TextArea from "../input/TextArea.tsx";
import Button from "../../ui/button/Button.tsx";
import axios from "axios";

export default function DefaultInputs() {
  // const [showPassword, setShowPassword] = useState(false);
  // const options = [
  //   { value: "marketing", label: "Marketing" },
  //   { value: "template", label: "Template" },
  //   { value: "development", label: "Development" },
  // ];
  // const handleSelectChange = (value: string) => {
  //   console.log("Selected value:", value);
  // };
  // Variables
  const [name,setName] = useState("");
  const [price,setPrice] = useState("");
  const [stock,setStock] = useState("");
  const [description,setDescription] = useState("");

 const handleSubmit = async()=>{
  alert("Free Phalastine")
    try {
      const product = await axios.post("http://localhost:5000/product",{
        name,
        price,
        stock,
        description
      })
      console.log("product created successfully")
    } catch (error) {
      console.log(error);
    }
 }

  return (
    <ComponentCard title="Create Product">
      <div className="space-y-6">

        {/* <div>
          <Label htmlFor="input">Input</Label>
          <Input type="text" id="input" />
        </div> */}

        <div>
          <Label htmlFor="inputTwo">Name</Label>
          <Input onChange={(e)=>setName(e.target.value)} type="text" id="inputTwo" placeholder="Product Name" />
        </div>

        <div>
          <Label htmlFor="inputTwo">price</Label>
          <Input onChange={(e)=>setPrice(e.target.value)} type="text" id="inputTwo" placeholder="Price" />
        </div>

        <div>
          <Label htmlFor="inputTwo">Stock</Label>
          <Input onChange={(e)=>setStock(e.target.value)} type="text" id="inputTwo" placeholder="Product Stock" />
        </div>

        {/* Default TextArea */}
        <div>
          <Label>Description</Label>
          <TextArea
            value={description}
            onChange={(value) => setDescription(value)}
            rows={6}
          />
        </div>

        {/* <div>
          <Label>Select Input</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div> 

        <div>
          <Label>Password Input</Label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
            >
              {showPassword ? (
                <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              ) : (
                <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
              )}
            </button>
          </div>
        </div>

        <div>
          <DatePicker
            id="date-picker"
            label="Date Picker Input"
            placeholder="Select a date"
            onChange={(dates, currentDateString) => {
              // Handle your logic
              console.log({ dates, currentDateString });
            }}
          />
        </div>

        <div>
          <Label htmlFor="tm">Time Picker Input</Label>
          <div className="relative">
            <Input
              type="time"
              id="tm"
              name="tm"
              onChange={(e) => console.log(e.target.value)}
            />
            <span className="absolute text-gray-500 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
              <TimeIcon className="size-6" />
            </span>
          </div>
        </div> */}

        <div>
          <Label htmlFor="tm">Input with Payment</Label>
          <div className="relative">
            <Input
              type="text"
              placeholder="Card number"
              className="pl-[62px]"
            />
            <span className="absolute left-0 top-1/2 flex h-11 w-[46px] -translate-y-1/2 items-center justify-center border-r border-gray-200 dark:border-gray-800">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6.25" cy="10" r="5.625" fill="#E80B26" />
                <circle cx="13.75" cy="10" r="5.625" fill="#F59D31" />
                <path
                  d="M10 14.1924C11.1508 13.1625 11.875 11.6657 11.875 9.99979C11.875 8.33383 11.1508 6.8371 10 5.80713C8.84918 6.8371 8.125 8.33383 8.125 9.99979C8.125 11.6657 8.84918 13.1625 10 14.1924Z"
                  fill="#FC6020"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center gap-5">
            <Button
              size="md"
              variant="primary"
              endIcon={<BoxIcon className="size-5" />}
              onClick={handleSubmit}
            >
              Button Text
            </Button>
        </div>
      </div>
    </ComponentCard>
  );
}
