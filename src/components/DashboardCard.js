import styles from "../styles/components/DashboardCard.module.css";

const DashboardCard = (props) => {

    return (

        <div className={styles.dashboard_card}>

            {props.children}

        </div>

    );
    
}
 
export default DashboardCard;