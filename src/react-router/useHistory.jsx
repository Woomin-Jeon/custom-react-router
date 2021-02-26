import { useContext } from 'react';

import HistoryContext from './context/HistoryContext';

const useHistory = () => {
  const { history } = useContext(HistoryContext);

  return history;
}

export default useHistory;
