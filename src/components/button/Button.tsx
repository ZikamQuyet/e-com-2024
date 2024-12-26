import React from 'react';
import styles from './button.module.scss';
interface IPropsButton {
    children: React.ReactNode;
}
const Button = (props: IPropsButton) => {
    const { children } = props;
    return <button className={styles.btn}>{children}</button>;
};

export default Button;
