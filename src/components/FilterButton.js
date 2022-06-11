import styles from "../styles/components/FilterButton.module.css";
import iconFilter from "../assets/icon-filter.svg";

const FilterButton = () => {

    return (

        <button className={styles.filter_button}>

            <img
                src={iconFilter}
                alt="ícone de filtro"
            />
            
            <span>Filtrar</span>

        </button>

    );

}

export default FilterButton;