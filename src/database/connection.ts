import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'postgres://postgres:16072001@localhost:5432/food-delivery',
    { logging: false }
)

export default sequelize