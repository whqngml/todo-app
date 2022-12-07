const Todo = function (Sequelize, DataTypes) {
  const model = Sequelize.define(
    "todo",
    {
      // id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // title VARCHAR(100) NOT NULL,
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      // done tinyint(1) NOT NULL DEFAULT 0
      done: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      tableName: "todo", // 실제 DB의 테이블 이름
      freezeTablename: true, // 테이블 이름 고정
      timestamps: false, // 데이터가 추가/수정되는 시간을 자동으로 컬럼 만들어서 기록
    }
  );

  return model;
};

module.exports = Todo;
