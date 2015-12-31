class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string  :name, null: false, default: ""
      t.integer :xp

      t.timestamps
    end
  end
end
