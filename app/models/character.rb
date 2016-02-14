class Character < ActiveRecord::Base
  validates_presence_of :name

  has_many :skills

  def hello
    puts "hello world"
  end
end