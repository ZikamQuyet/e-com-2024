import React from 'react';

interface IPropsLayout {
    children: React.ReactNode;
}

const Layout = (props: IPropsLayout) => {
    const { children } = props;
    return (
        <main>
            <div>{children}</div>
        </main>
    );
};

export default Layout;
