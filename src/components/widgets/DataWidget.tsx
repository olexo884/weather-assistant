import React from 'react';
import styles from "../../styles/widget__styles/DataWidget.module.css";

import type { DataWidgetProps } from "../../types/widget.types"

const DataWidget: React.FC<DataWidgetProps> = (
    {
        title,
        mainValue,
        secondaryText,
        iconSrc,
        signUnits }) => {
    return (
        <article className={styles.widget}>
            <div className={styles.widgetHeader}>
                <img src={iconSrc} alt={`${title} icon`} />
                <p>{title}</p>
            </div>
            <div className={styles.widgetMain}>
                <h3 className={secondaryText ? styles.widgetTextSmall : styles.widgetTextBig}>{mainValue}{signUnits}</h3>
                {secondaryText && <p>{secondaryText}</p>}
            </div>
            <p className={styles.widgetFooter}>{`expected in next hours`}</p>
        </article>
    )
}


export default DataWidget