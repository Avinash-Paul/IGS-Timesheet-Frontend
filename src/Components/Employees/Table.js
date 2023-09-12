import WithSidebar from '../../WithSidebar';import React, { useState, useRef } from 'react';

import './Table.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';



const initialRows = [
  { id: 1, day: '', duration: '', jobDescription: '', selectedDate: '', dayType: '' },
  { id: 2, day: '', duration: '', jobDescription: '', selectedDate: '', dayType: '' },
  { id: 3, day: '', duration: '', jobDescription: '', selectedDate: '', dayType: '' },
  { id: 4, day: '', duration: '', jobDescription: '', selectedDate: '', dayType: '' },
  { id: 5, day: '', duration: '', jobDescription: '', selectedDate: '', dayType: '' },
];



function Table() {
  const [rows, setRows] = useState(initialRows);

  const datePickersRefs = useRef(rows.map(() => React.createRef())); // Create refs for date pickers

  const handleDateChange = (date, id) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, selectedDate: date } : row
    );
    setRows(updatedRows);
  };

  const handleIconClick = (id) => {
    // Programmatically open the date picker when the icon is clicked
    datePickersRefs.current[id].current.setOpen(true);
  };
  const handleChange = (value, id, field) => {
    // Handle changes for text fields (Duration, Job Description, etc.)
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };
  
  const [isSubmitMode, setIsSubmitMode] = useState(false);


  const handleSubmitClick = () => {
    setIsSubmitMode(!isSubmitMode);
  };

  const handleSaveClick = () => {
    // Handle save click
  };




  const dayTypeOptions = [
    'Select',
    'Working',
    'Sickleave',
    'Personal leave',
    'Holiday',
    'Project holiday',
  ];

  return (
    <WithSidebar>
      <div className="container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Duration</th>
              <th>Job Description</th>
              <th>Day Type</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                <td>
                <div style={{ position: 'relative' }}>
                  <FontAwesomeIcon
                    icon={faCalendarDay}
                    style={{
                      position: 'absolute',
                      right: '19px',
                      marginTop:'12px',
                      transform: 'translateY(-50%)',
                      cursor: 'pointer',
                      color:'black'
                    }}
                    onClick={() => handleIconClick(row.id)} // Open the date picker
                  />
                </div>
                <DatePicker
                  selected={row.selectedDate}
                  onChange={(date) => handleDateChange(date, row.id)}
                  dateFormat="MM/dd/yyyy"
                  ref={datePickersRefs.current[row.id]} // Attach the ref to the date picker
                />
              </td>

                <td>
                  <input type="text" value={row.duration} />
                </td>
                <td>
                  <input type="text" value={row.jobDescription} />
                </td>
                <td>
                  <select
                    value={row.dayType}
                    onChange={(e) => handleChange(e.target.value, row.id, 'dayType')}
                  >
                    {dayTypeOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
      <div className="custom-button">
        <button onClick={handleSubmitClick} className="secondary">
          Submit
        </button>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </WithSidebar>
  );
}

export default Table;
