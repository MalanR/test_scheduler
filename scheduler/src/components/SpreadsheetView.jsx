import {
  SpreadsheetComponent,
  SheetsDirective,
  SheetDirective,
  RangesDirective,
  RangeDirective,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  Formula,
  Ribbon,
  Save,
  Open
} from '@syncfusion/ej2-react-spreadsheet';

import { useRef } from 'react';

const SpreadsheetView = ({ count }) => {
  const spreadsheetRef = useRef(null);

  // Generate sample data
  const generateData = () =>
    Array.from({ length: count }, (_, i) => ({
      ID: i + 1,
      Name: `Item ${i + 1}`,
      Quantity: Math.floor(Math.random() * 100),
      Price: parseFloat((Math.random() * 1000).toFixed(2)),
      Total: `=C${i + 2}*D${i + 2}`, // formula: Quantity * Price
      InStock: i % 2 === 0 ? 'Yes' : 'No'
    }));

  // Button handlers for save/load
  const handleSave = () => {
    spreadsheetRef.current?.save({
      fileName: 'SpreadsheetData.xlsx'
    });
  };

  const handleOpen = (event) => {
    const file = event.target.files[0];
    if (file) {
      spreadsheetRef.current?.open({ file });
    }
  };

  return (
    <div>
      <div className="mb-4 flex gap-4">
        <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded">
          Save as Excel
        </button>
        <label className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer">
          Load Excel
          <input type="file" hidden onChange={handleOpen} />
        </label>
      </div>

      <SpreadsheetComponent ref={spreadsheetRef} height="100vh">
        <SheetsDirective>
          {/* Inventory Sheet */}
          <SheetDirective name="Inventory">
            <RangesDirective>
              <RangeDirective dataSource={generateData()} />
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={80} />
              <ColumnDirective width={150} />
              <ColumnDirective width={100} />
              <ColumnDirective width={100} />
              <ColumnDirective width={120} />
              <ColumnDirective width={100} />
            </ColumnsDirective>
          </SheetDirective>

          {/* Summary Sheet */}
          <SheetDirective name="Summary">
            <RangesDirective>
              <RangeDirective dataSource={[{ Title: 'Use the Inventory sheet to see items and totals.' }]} />
            </RangesDirective>
            <ColumnsDirective>
              <ColumnDirective width={400} />
            </ColumnsDirective>
          </SheetDirective>
        </SheetsDirective>

        <Inject services={[Formula, Ribbon, Save, Open]} />
      </SpreadsheetComponent>
    </div>
  );
};

export default SpreadsheetView;
