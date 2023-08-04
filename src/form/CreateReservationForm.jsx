import React from "react";
import { FormControl, FormLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Select, MenuItem } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


function CreateReservationForm() {
  const [corporateData, setCorporateData] = useState(null);

  useEffect(() => {
    
  });

  const list = ["Oliver Hansen", "Van Henry", "April Tucker"];

  return (
    <React.Fragment>
      <div className="w-[80%] h-fit border border-slate-300 bg-white  rounded-lg">
        <div className="w-full h-fit p-2 flex items-center justify-evenly">
          <div className="w-[35%] h-fit flex flex-col justify-start">
            <span className="text-xs">Company Name</span>
            <FormControl className="w-full">
              <Select className="h-[2.5rem]">
                {list.map((ele) => (
                  <MenuItem key={ele}>{ele}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="w-[35%] h-fit flex flex-col justify-start">
            <span className="text-xs">Branch Name</span>
            <FormControl className="w-full">
              <Select className="h-[2.5rem]">
                {list.map((ele) => (
                  <MenuItem key={ele}>{ele}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="w-full h-fit p-2 flex items-center justify-evenly">
          <div className="w-[35%] h-fit flex flex-col justify-start">
            <span className="text-xs">Date</span>
            {/* <DatePicker
              renderInput={(params) => <TextField {...params} />}
              label="Date"
              value={null} // Set the selected date value here using state if needed
            /> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker slotProps={{ textField: { size: 'small' } }}/>
            </LocalizationProvider>
          </div>
          <div className="w-[35%] h-fit flex flex-col justify-start">
            <span className="text-xs">Reporting Time</span>
            {/* <TimePicker
              renderInput={(params) => <TextField {...params} />}
              label="Time"
              value={null} // Set the selected time value here using state if needed
            /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateReservationForm;
