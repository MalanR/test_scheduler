import { useState } from 'react';
import SchedulerView from './components/SchedulerView';
import GanttView from './components/GanttView';
import KanbanView from './components/KanbanView';
import DataGridView from './components/DataGridView';
import SpreadsheetView from './components/SpreadsheetView';

const App = () => {
  const [view, setView] = useState('Scheduler');
  const [recordCount, setRecordCount] = useState(5000);

  return (
    <div style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Select View:
          <select value={view} onChange={(e) => setView(e.target.value)}>
            <option value="Scheduler">Scheduler</option>
            <option value="Gantt">Gantt</option>
            <option value="Kanban">Kanban</option>
            <option value="DataGrid">Data Grid</option>
            <option value="Spreadsheet">Spreadsheet</option>
          </select>
        </label>
        <label style={{ marginLeft: '1rem' }}>
          Records:
          <input
            type="number"
            min="1"
            value={recordCount}
            onChange={(e) => setRecordCount(parseInt(e.target.value))}
            style={{ marginLeft: '0.5rem', width: '100px' }}
          />
        </label>
      </div>

      {view === 'Scheduler' && <SchedulerView count={recordCount} />}
      {view === 'Gantt' && <GanttView count={recordCount} />}
      {view === 'Kanban' && <KanbanView count={recordCount} />}
      {view === 'DataGrid' && <DataGridView count={recordCount} />}
      {view === 'Spreadsheet' && <SpreadsheetView count={recordCount} />}
    </div>
  );
};

export default App;