class AddAgeToCharacters < ActiveRecord::Migration
  def change
    add_column :characters, :age, :integer
  end
end
