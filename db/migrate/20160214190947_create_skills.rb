class CreateSkills < ActiveRecord::Migration
  def change
    create_table :skills do |t|
      t.string  :name,        null: false, default: '' 
      t.integer :points,      null: false, default: 0
      t.string  :extra_text,               default: ''

      t.boolean :untrained,       default: false
      t.boolean :is_class_skill,  default: false

      t.belongs_to :character 

      t.timestamps
    end
  end
end
