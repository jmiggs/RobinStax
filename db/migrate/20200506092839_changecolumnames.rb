class Changecolumnames < ActiveRecord::Migration[5.2]
  def change
    rename_column :transactions, :users_id, :user_id
    rename_column :transactions, :assets_id, :asset_id
  end
end
