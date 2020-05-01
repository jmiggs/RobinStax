class CreateInfos < ActiveRecord::Migration[5.2]
  def change
    create_table :infos do |t|
      
      t.timestamps
    end
  end
end
