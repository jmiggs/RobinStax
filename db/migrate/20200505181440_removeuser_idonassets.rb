class RemoveuserIdonassets < ActiveRecord::Migration[5.2]
  def change
    remove_column :assets, :user_id, :integer
  end
end
