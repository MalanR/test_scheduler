import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { useState } from 'react';

const KanbanView = ({ count }) => {
  const [columnCount, setColumnCount] = useState(4); // Default 4 columns
  const [rowCount, setRowCount] = useState(5); // Default 5 rows

  const generateKanbanData = () => {
    const statuses = Array.from({ length: columnCount }, (_, i) => `Status ${i + 1}`);
    return Array.from({ length: count }, (_, i) => ({
      Id: `T${i + 1}`,
      Title: `Task ${i + 1}`,
      Status: statuses[i % statuses.length],
      Summary: `Details for Task ${i + 1}`,
      Assignee: `User ${i % rowCount + 1}`
    }));
  };

  const data = extend([], generateKanbanData(), null, true);

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Columns:
          <input
            type="number"
            min="1"
            value={columnCount}
            onChange={(e) => setColumnCount(parseInt(e.target.value))}
            style={{ marginLeft: '0.5rem', width: '100px' }}
          />
        </label>
        <label style={{ marginLeft: '1rem' }}>
          Rows (Assignees):
          <input
            type="number"
            min="1"
            value={rowCount}
            onChange={(e) => setRowCount(parseInt(e.target.value))}
            style={{ marginLeft: '0.5rem', width: '100px' }}
          />
        </label>
      </div>

      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={data}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
        swimlaneSettings={{ keyField: 'Assignee' }}
      >
        <ColumnsDirective>
          {Array.from({ length: columnCount }, (_, i) => (
            <ColumnDirective key={i} headerText={`Status ${i + 1}`} keyField={`Status ${i + 1}`} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default KanbanView;
