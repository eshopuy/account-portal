import { NextPage } from "next";
import { InfoCard } from "../../../components/Info-Card/Info-Card";
import { Button, ButtonColor } from "../../../components/Button/Button";
import styles from "./Products.module.scss";
import { Layout } from "../../../components/Layout/Layout";

const Products: NextPage = () => {
  return (
    <Layout>
      <div className={styles.products}>
        <div className={styles.productsTitle}>
          <h3>Productos</h3>
          <Button textSize="sm" color={ButtonColor.Grey} onClick={() => {}}>
            Importar
          </Button>
        </div>
        <InfoCard
          title="En primer lugar: ¿qué vendes?"
          description="Antes de abrir tu tienda, necesitas tener algunos productos."
          imageUrl="/product-page.svg"
          buttons={[
            {
              text: "Buscar productos para vender",
              onClick: () => {},
              color: ButtonColor.Grey,
            },
            {
              text: "Agregar productos",
              onClick: () => {},
              color: ButtonColor.Primary,
            },
          ]}
        />
        <div className={styles.readMore}>
          <p>Leer mas acerca de</p>
          <a href="#">productos</a>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
