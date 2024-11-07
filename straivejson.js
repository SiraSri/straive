export default function json2html(data) {
  // Check if data is an array
  if (!Array.isArray(data)) {
    throw new Error('Input data must be an array');
  }

  // Extract unique keys (column names) from objects
  const keys = new Set(data.flatMap(obj => Object.keys(obj)));

  // Build table header
  const headerRow = `<tr>${[...keys].map(key => `<th>${key}</th>`).join('')}</tr>`;

  // Build table body rows
  const bodyRows = data.map(obj => {
    const cells = keys.map(key => `<td>${obj[key] || ''}</td>`);
    return `<tr>${cells.join('')}</tr>`;
  });

  // Build complete table
  return `
    <table data-user="naruchan13052003@gmail.com">
      <thead>
        ${headerRow}
      </thead>
      <tbody>
        ${bodyRows.join('')}
      </tbody>
    </table>
  `;
}
