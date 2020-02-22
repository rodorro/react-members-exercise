import React from 'react';

const createDefaultContext = () => ({
  organization: 'no organization',
  onUpdateOrganization: value => {
    console.warn(
      'if you are reading this, likely you forgot to add the provider on top of your app'
    );
  },
});

export const SessionContext = React.createContext(createDefaultContext());

export const SessionProvider = props => {
  const { children } = props;
  const [organization, setOrganization] = React.useState('Lemoncode');

  return (
    <SessionContext.Provider value={{ organization, onUpdateOrganization: setOrganization }}>
      {children}
    </SessionContext.Provider>
  );
};
