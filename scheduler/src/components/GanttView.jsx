import { GanttComponent, ColumnsDirective, ColumnDirective, Inject, Selection } from '@syncfusion/ej2-react-gantt';

const GanttView = ({ count }) => {
  const generateGanttData = () => {
    return Array.from({ length: count }, (_, i) => ({
      TaskID: i + 1,
      TaskName: `Task ${i + 1}`,
      StartDate: new Date(2025, 4, 1 + (i % 30)),
      Duration: 5,
      Progress: Math.floor(Math.random() * 100),
    }));
  };

  return (
    <GanttComponent
      dataSource={generateGanttData()}
      taskFields={{
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
      }}
      rowHeight={50} // Increase row height for better visibility of colors
      height="100vh"
    >
      <ColumnsDirective>
        <ColumnDirective field='TaskID' headerText='ID' width='80' />
        <ColumnDirective field='TaskName' headerText='Name' width='200' />
        <ColumnDirective field='StartDate' headerText='Start' />
        <ColumnDirective field='Duration' headerText='Duration' />
        <ColumnDirective field='Progress' headerText='Progress' />
      </ColumnsDirective>
      <Inject services={[Selection]} />
    </GanttComponent>
  );
};

export default GanttView;
