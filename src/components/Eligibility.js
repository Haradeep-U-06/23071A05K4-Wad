import React, { useState } from 'react';

const Eligibility = () => {
  const [cgpa, setCgpa] = useState('');
  const [backlogs, setBacklogs] = useState('');
  const [attendance, setAttendance] = useState('');
  const [result, setResult] = useState('');

  const checkEligibility = (e) => {
    e.preventDefault();
    
    const cgpaNum = parseFloat(cgpa);
    const backlogNum = parseInt(backlogs);
    const attendanceNum = parseFloat(attendance);

    if (isNaN(cgpaNum) || isNaN(backlogNum) || isNaN(attendanceNum)) {
      setResult("Please enter valid numeric values.");
      return;
    }

    if (cgpaNum >= 7.0 && backlogNum === 0 && attendanceNum >= 75) {
      setResult("✅ You are eligible for placements.");
    } else {
      setResult("❌ You are not eligible for placements.");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Placement Eligibility Checker</h2>
      <form onSubmit={checkEligibility}>
        <div className="mb-3">
          <label className="form-label">CGPA</label>
          <input type="number" step="0.01" className="form-control" value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Backlogs</label>
          <input type="number" className="form-control" value={backlogs} onChange={(e) => setBacklogs(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Attendance (%)</label>
          <input type="number" className="form-control" value={attendance} onChange={(e) => setAttendance(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Check Eligibility</button>
      </form>
      {result && <div className="alert alert-info mt-3">{result}</div>}
    </div>
  );
};

export default Eligibility;
