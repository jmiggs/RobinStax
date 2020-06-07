class AddNametoAssets < ActiveRecord::Migration[5.2]
  def change
    add_column :assets, :name, :string, unique: true
  end
end
