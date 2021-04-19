import { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppWrapper = ({children}) => {
    const [selectedTag, setSelectedTag] = useState(null);

    const theme = {
        yellow: '#FDFFB6',
        blue: '#9BF6FF',
        pink: '#FFADAD',
        green: '#CAFFBF',
        gray: '#ADB5BD',
        black: '#212529',
        white: '#FFFFFC',
    };

    const sharedState = {
        selectedTag,
        setSelectedTag,
        theme,
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
