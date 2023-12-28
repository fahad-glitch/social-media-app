import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref } from 'firebase/database';
import app from '../services/Firebase';

export default function useFetchUIControl(path) {
    const [flag, setFlag] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const db = getDatabase(app);
          const dbRef = ref(db, path);
  
          onValue(dbRef, (snapshot) => {
            const newData = snapshot.val();
            setFlag(newData.tabular);
          });
        } catch (error) {
          console.error('Error fetching data from Firebase:', error);
        }
      };
  
      fetchData();
    }, [path]); // Re-run the effect when the path changes
  
    return flag;
}
