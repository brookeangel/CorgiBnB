class AddCorgiColumn < ActiveRecord::Migration
  def change
    add_column :reviews, :corgi_id, :integer, index: true
  end
end
