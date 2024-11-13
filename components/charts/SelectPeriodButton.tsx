"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectPeriodButton = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  return (
    <>
      <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
        <SelectTrigger className="w-[130px] focus:ring-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="monthly">
              Monthly
            </SelectItem>
            <SelectItem value="quarterly">
              Quarterly
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectPeriodButton;
