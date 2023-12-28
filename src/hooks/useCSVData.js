import { useEffect } from 'react';
import Papa from 'papaparse';
// import CSV from '../dataset/price_data.csv';
const useCSVData = (filePath, onComplete, onError) => {
  useEffect(() => {
    const fetchCSVFile = async () => {
      try {
        // Use the relative path to your CSV file
        const response = await fetch(filePath);
        const csvText = await response.text();

        // Parse CSV data using papaparse
        Papa.parse(CSV, {
          complete: (result) => {
            // Result data is available here
            onComplete(result.data);
          },
          header: true, // Set to true if your CSV has a header row
        });
      } catch (error) {
        console.error('Error reading file:', error);
        onError(error);
      }
    };

    fetchCSVFile();
  }, [filePath, onComplete, onError]);
};

export default useCSVData;
