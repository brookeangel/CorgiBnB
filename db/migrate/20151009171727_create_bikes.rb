class CreateBikes < ActiveRecord::Migration
  def change
    create_table :bikes do |t|
      t.text :description
      t.float :lat, null: false
      t.float :lng, null: false
      t.timestamps null: false
    end
  end
end
