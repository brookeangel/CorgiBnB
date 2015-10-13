class AddPeopleComforttoBikes < ActiveRecord::Migration
  def change
    add_column :bikes, :people_comfort, :integer
  end
end
