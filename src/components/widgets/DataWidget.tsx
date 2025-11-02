import React from 'react';
import styles from "../../styles/widget__styles/DataWidget.module.css";

import type {DataWidgetProps} from "../../types/widget.types"

const DataWidget: React.FC<DataWidgetProps> = (
    {
    title,
    mainValue,
    secondaryText,
    footerText,
    iconSrc}) => {
    return (
        <article className={styles.widget}>
            <div className={styles.widgetHeader}>
                <img src={iconSrc} alt={`${title} icon`} />
                <p>{title}</p>
            </div>
            <div className={styles.widgetMain}>
                <h3 className={secondaryText ? styles.widgetTextSmall : styles.widgetTextBig}>{mainValue}</h3> 
                {secondaryText && <p>{secondaryText}</p>}
            </div>
            <p className={styles.widgetFooter}>{footerText}</p>
        </article>
    )
}


export default DataWidget