
// import React, { useState } from 'react';
// import './Recipients.css';

// const Recipients = () => {
//   const [recipients, setRecipients] = useState([]);
//   const [form, setForm] = useState({ name: '', bloodGroup: '' });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
//   const handleAddRecipient = () => {
//     setRecipients([...recipients, form]);
//     setForm({ name: '', bloodGroup: '' });
//   };

//   return (
//     <div className="recipients">
//       <h2>Recipient Form</h2>
//       <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
//       <input name="bloodGroup" placeholder="Blood Group" value={form.bloodGroup} onChange={handleChange} />
//       <button onClick={handleAddRecipient}>Add Recipient</button>

//       <h3>Recipient List</h3>
//       <table>
//         <tbody>
//           {recipients.map((recipient, index) => (
//             <tr key={index}>
//               <td>{recipient.name}</td>
//               <td>{recipient.bloodGroup}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Recipients;
import React, { useState } from 'react';
import './Recipients.css';

const Recipients = () => {
  const [recipients, setRecipients] = useState([]);
  const [form, setForm] = useState({ name: '', bloodGroup: '', hospitalName: '', contact: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleAddRecipient = () => {
    setRecipients([...recipients, form]);
    setForm({ name: '', bloodGroup: '', hospitalName: '', contact: '' });
  };

  return (
    <div className="recipients">
      <h2>Recipient Form</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="bloodGroup" placeholder="Blood Group" value={form.bloodGroup} onChange={handleChange} />
      <input name="hospitalName" placeholder="Hospital Name" value={form.hospitalName} onChange={handleChange} />
      <input name="contact" placeholder="Contact" value={form.contact} onChange={handleChange} />
      <button onClick={handleAddRecipient}>Add Recipient</button>

      <h3>Recipient List</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Hospital Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((recipient, index) => (
            <tr key={index}>
              <td>{recipient.name}</td>
              <td>{recipient.bloodGroup}</td>
              <td>{recipient.hospitalName}</td>
              <td>{recipient.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipients;

