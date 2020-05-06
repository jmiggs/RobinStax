class Addindextoassetscolumn < ActiveRecord::Migration[5.2]
  def change
  change_column_null :transactions, :assets_id, false
  change_column_null :transactions, :users_id, false
  end
end
