class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :number, null: false
      t.text :body, null: false
      t.timestamps null: false
    end
  end
end
