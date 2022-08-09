import React from "react";
import * as bs from "react-icons/bs";
import "../sass/ResultCard/resultCard.css";

const StepsTable = () => {
  return (
    <div className="table-responsive steps-table">
      <table className="table table-striped table-hover mt-2">
        <thead className="border shadow-xs">
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Company</th>
            <th>From</th>
            <th>Time</th>
            <th>Duration</th>
            <th>Client Time(ms)</th>
            <th>Server Time(ms) </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Got to menu \Main menu\project management and ac...</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Click Project\New\Project</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Set ‘ProjektMichal’ in Project Name field (not mandatory)</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Set TM in Project Group field (not mandatory)</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Select control New...</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <i class="bi bi-box-arrow-up-right"></i>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>Select control New...</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <i class="bi bi-box-arrow-up-right"></i>
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>Select control New...</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Select control New...</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>Select control New...</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>Select control New...</td>
            <td>DomDev</td>
            <td>Projects</td>
            <td>8:41:12</td>
            <td>5:21s</td>
            <td>0</td>
            <td>0</td>
            <td>
              <input type="checkbox" checked />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StepsTable;
