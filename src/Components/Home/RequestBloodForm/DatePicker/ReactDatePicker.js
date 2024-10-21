// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { format } from 'date-fns';

// const DateTimePicker = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date());

//   const handleChange = (date) => {
//     setSelectedDate(date);
//   };

//   const handleNowClick = () => {
//     setSelectedDate(new Date());
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h2>Pick a Date and Time</h2>
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleChange}
//         showTimeSelect
//         dateFormat="Pp" // Display format with date and time
//         timeFormat="HH:mm"
//         timeIntervals={15} // Interval for time selection
//         timeCaption="Time"
//       />
//       <div style={{ marginTop: '20px' }}>
//         <button onClick={handleNowClick}>Set to Current Time</button>
//       </div>
//       <div style={{ marginTop: '20px' }}>
//         <strong>Selected Date & Time: </strong>
//         {format(selectedDate, 'PPpp')}
//       </div>
//     </div>
//   );
// };

// export default DateTimePicker;
