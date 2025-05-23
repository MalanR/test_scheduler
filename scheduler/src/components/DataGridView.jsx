import { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';

const DataGridView = ({ count }) => {
  const [columnCount, setColumnCount] = useState(4); // Default 4 columns

  const generateGridData = () => {
    return Array.from({ length: count }, (_, i) => {
      const row = {
        Id: i + 1,
        Name: `Customer ${i + 1}`,
        Email: `customer${i + 1}@example.com`,
        Country: ['South Africa', 'USA', 'Germany', 'India'][i % 4]
      };
      // Dynamically add extra columns with data
      for (let j = 5; j <= columnCount; j++) {
        row[`Column${j}`] = `Data ${i + 1}-${j}`;
      }
      return row;
    });
  };

  const data = generateGridData(); 

  const columns = [
    { field: 'Id', headerText: 'ID', width: 80, textAlign: 'Right' },
    { field: 'Name', headerText: 'Name', width: 200 },
    { field: 'Email', headerText: 'Email', width: 250 },
    { field: 'Country', headerText: 'Country', width: 150 },
    ...Array.from({ length: columnCount - 4 }, (_, i) => ({
      field: `Column${i + 5}`,
      headerText: `Column ${i + 5}`,
      width: 150
    }))
  ];

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label>
          Columns:
          <input
            type="number"
            min="4"
            value={columnCount}
            onChange={(e) => setColumnCount(parseInt(e.target.value))}
            style={{ marginLeft: '0.5rem', width: '100px' }}
          />
        </label>
      </div>

      <GridComponent
        dataSource={data}
        allowPaging={true}
        pageSettings={{ pageSize: 50 }}
        height="600px"
      >
        <ColumnsDirective>
          {columns.map((col, index) => (
            <ColumnDirective key={index} field={col.field} headerText={col.headerText} width={col.width} textAlign={col.textAlign} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
};

export default DataGridView;
