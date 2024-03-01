import { Fragment } from "react";

const Table = ({ data, config }) => {
  const renderedColumns = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((row) => {
    const renderedCells = config.map((cell) => {
      return (
        <td className="p-3" key={cell.label}>
          {cell.render(row)}
        </td>
      );
    });
    return (
      <tr key={row.name} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead className="border-b-2">
        <tr>{renderedColumns}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
