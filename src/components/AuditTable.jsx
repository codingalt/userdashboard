import React from "react";
import "../sass/ResultCard/resultCard.css";

const AuditTable = () => {
  return (
    <div className="table-responsive audit-table">
      <table className="table table-striped table-hover mt-2">
        <thead className="border shadow-xs">
          <tr>
            <th>Data Source Name</th>
            <th>Field Name</th>
            <th>Value</th>
            <th>Activity ID</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Purch Table</td>
            <td>ApprovalStatus</td>
            <td>Approved</td>
            <td>90</td>
            <td>22-02-04 13:36:25.189</td>
          </tr>
          <tr>
            <td>Purch Table</td>
            <td>ApprovalStatus</td>
            <td>Approved</td>
            <td>90</td>
            <td>22-02-04 13:36:25.189</td>
          </tr>
          <tr>
            <td>Purch Table</td>
            <td>ApprovalStatus</td>
            <td>Approved</td>
            <td>90</td>
            <td>22-02-04 13:36:25.189</td>
          </tr>
          <tr>
            <td>Purch Table</td>
            <td>ApprovalStatus</td>
            <td>Approved</td>
            <td>90</td>
            <td>22-02-04 13:36:25.189</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AuditTable;
