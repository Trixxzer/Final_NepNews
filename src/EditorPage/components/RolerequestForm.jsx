import React, { useState } from "react";
import "./RolerequestForm.css";

const RoleRequestForm = ({ userId }) => {
  const [requestedRole, setRequestedRole] = useState("editor");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("token");
    const currentRole = JSON.parse(localStorage.getItem("user"))?.role;

    try {
      const response = await fetch(
        "https://collabbackend-z0kd.onrender.com/admin_panel/role-change-requests/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({
            user: userId,
            current_role: currentRole, 
            requested_role: requestedRole,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to request role change.");
      }
      const result = await response.json();
      console.log("Role change request response:", result);
      setMessage("Role change request submitted!");
    } catch (err) {
      setMessage("Error submitting request.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="role-request-form">
      <h3>Request Role Change</h3>
      <form onSubmit={handleRequest}>
        <select
          value={requestedRole}
          onChange={(e) => setRequestedRole(e.target.value)}
          className="role-select"
        >
          <option value="editor">Editor</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button type="submit" className="request-btn" disabled={loading}>
          {loading ? "Submitting..." : "Request"}
        </button>
      </form>
      {message && <p className="request-message">{message}</p>}
    </div>
  );
};

export default RoleRequestForm;
