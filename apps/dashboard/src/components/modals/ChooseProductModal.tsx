import CustomDivider from "@/components/divider/CustomDivider";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomInput from "@/components/inputs/CustomInput";
import { useState } from "react";
import FileUploadInput from "@/components/inputs/FileUploadInput";
import PrimaryButton from "../buttons/PrimaryButton";
import { velocityPaymentsAPIClient } from "@/lib/client";

type Props = {};

const ChooseProductModal = (props: Props) => {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState();
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loadiong, setLoading] = useState(false);

  const createProductHandler = async () => {
    try {
      setLoading(true);
      // male request
      const { data } = await velocityPaymentsAPIClient.post("/product", {
        name,
        price,
        description,
        quantity,
        image: "",
      });
      console.log(data);
      setLoading(true);
    } catch (error) {
      setLoading(false);
      console.log("error creatting ptodu t", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex bg-zinc-950 text-sm font-medium p-1.5 rounded-lg dark:bg-white text-white dark:text-zinc-950">
          Choose product
        </div>
      </DialogTrigger>
      <DialogContent className="bg-primary dark:bg-zinc-700 max-w-xl main-border">
        <DialogHeader>
          <DialogTitle className="heading-text font-semibold">
            Add new product
          </DialogTitle>
          <DialogDescription className="main-text text-sm font-medium">
            Provide a few details to save this product for later use.
          </DialogDescription>
        </DialogHeader>
        <CustomDivider />
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex flex-col space-y-8">
            <CustomInput
              heading="Name"
              value={name}
              setValue={setName}
              placeholder="Shoes, sunglasses, etc"
            />
            <CustomInput
              heading="Description"
              textarea
              optional
              value={description}
              setValue={setDescription}
              placeholder=""
            />
            <CustomInput
              heading="Price"
              value={price}
              setValue={setPrice}
              placeholder="0.00"
            />
          </div>
          <div className="col-span-1">
            <FileUploadInput
              value={picture}
              setValue={setPicture}
              heading="Picture"
              optional
            />
          </div>
        </div>
        <CustomDivider />
        <DialogFooter>
          <PrimaryButton
            text="Create product"
            loading={loadiong}
            onClick={createProductHandler}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ChooseProductModal;
