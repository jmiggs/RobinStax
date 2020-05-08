class DropInfosTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :infos
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
