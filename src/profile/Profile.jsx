import React, { useState, useMemo } from 'react';
import './profile.css'; // Styling CSS file

// Mock Initial Data (Future me yeh API se fetch ho sakta hai)
const initialAdmissionData = [
  { id: 1, class: "Pre Nursery", session: "2027-2028", lastDate: "Dec 31, 2026", status: "Ongoing", fee: "₹1,180" },
  { id: 2, class: "Nursery (LKG)", session: "2027-2028", lastDate: "Dec 31, 2026", status: "Ongoing", fee: "₹1,180" },
  { id: 3, class: "UKG", session: "2027-2028", lastDate: "Dec 31, 2026", status: "Ongoing", fee: "₹1,180" },
  { id: 4, class: "Class I", session: "2027-2028", lastDate: "Dec 31, 2026", status: "Ongoing", fee: "₹1,180" },
  { id: 5, class: "Class II", session: "2027-2028", lastDate: "Dec 31, 2026", status: "Ongoing", fee: "₹1,180" },
  { id: 6, class: "Class III", session: "2027-2028", lastDate: "Dec 31, 2026", status: "Ongoing", fee: "₹1,180" },
  { id: 7, class: "Pre Nursery", session: "2026-2027", lastDate: "Dec 31, 2025", status: "Closed", fee: "₹1,000" },
  { id: 8, class: "Nursery (LKG)", session: "2026-2027", lastDate: "Dec 31, 2025", status: "Closed", fee: "₹1,000" },
];

const availableSessions = ["2026-2027", "2027-2028"];

export default function Profile() {
  const [data, setData] = useState(initialAdmissionData);
  const [selectedSession, setSelectedSession] = useState("2027-2028");
  const [showAll, setShowAll] = useState(false);

  const INITIAL_LIMIT = 4; // Rows limit before expanding

  // Filter rows based on selected session
  const filteredData = useMemo(() => {
    return data.filter((item) => item.session === selectedSession);
  }, [data, selectedSession]);

  // Handle visible rows
  const visibleRows = showAll ? filteredData : filteredData.slice(0, INITIAL_LIMIT);

  // Handlers for action buttons
  const handleApply = (item) => {
    alert(`Applying for ${item.class} (${item.session})`);
  };

  const handleEnquire = (item) => {
    alert(`Enquiring for ${item.class} (${item.session})`);
  };

  const handleSessionChange = (e) => {
    setSelectedSession(e.target.value);
    setShowAll(false); // Reset toggle when session changes
  };

  return (
    <div className="admission-card">
      <h2 className="card-title">Fill Admission Form</h2>

      {/* Session Filter */}
      <div className="session-filter">
        <span>For Session:</span>
        {availableSessions.map((session) => (
          <label key={session} className="session-radio-label">
            <input
              type="radio"
              name="sessionSelect"
              value={session}
              checked={selectedSession === session}
              onChange={handleSessionChange}
            />
            {session}
          </label>
        ))}
      </div>

      {/* Dynamic Table */}
      <div className="table-container">
        <table className="admission-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Session</th>
              <th>Application Date</th>
              <th>Status</th>
              <th>Application Fee</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {visibleRows.length > 0 ? (
              visibleRows.map((row) => (
                <tr key={row.id}>
                  <td className="class-name">{row.class}</td>
                  <td>{row.session}</td>
                  <td>
                    <span className="date-label">Last Date</span>
                    <strong>{row.lastDate}</strong>
                  </td>
                  <td>
                    <span className={`status-badge ${row.status.toLowerCase()}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="fee-amount">{row.fee}</td>
                  <td>
                    <div className="action-btn-group">
                      <button
                        className="btn btn-apply"
                        onClick={() => handleApply(row)}
                        disabled={row.status === "Closed"}
                      >
                        Apply
                      </button>
                      <button
                        className="btn btn-enquire"
                        onClick={() => handleEnquire(row)}
                      >
                        Enquire
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "20px" }}>
                  No classes available for this session.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* See All Toggle Button */}
      {filteredData.length > INITIAL_LIMIT && (
        <div className="see-more-container">
          <button className="btn-see-all" onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less ▲" : "See All Classes ▼"}
          </button>
        </div>
      )}
    </div>
  );
}