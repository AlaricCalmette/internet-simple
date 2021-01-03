import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppWrapper = ({children}) => {
    const [selectedTag, setSelectedTag] = useState(null);

    const sharedState = {
        selectedTag,
        setSelectedTag,
    };

    return (
        <AppContext.Provider value={sharedState}>
            {children}
        </AppContext.Provider>
    );
};

export const UseAppContext = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return useContext(AppContext);
};
